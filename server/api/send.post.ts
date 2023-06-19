import { Resend } from "resend"
import { createClient } from "@supabase/supabase-js"
import { waitlistEmail } from "./email-template"

const resend = new Resend(process.env.RESEND_API_KEY)

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    let supabase

    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_KEY

    // verify that the email is available
    if (body.email === undefined) {
        setResponseStatus(event, 400)
        return { error: "Email not found" }
    }

    // verify that the supabase credentials are available
    if (supabaseUrl && supabaseKey) {
        supabase = createClient(supabaseUrl, supabaseKey)
    } else {
        setResponseStatus(event, 400)
        return { error: "Supabase credentials not found" }
    }

    const { data: exists, error: ExistsError } = await supabase.from("private_beta").select("*").eq("email", body.email)

    if (ExistsError) {
        setResponseStatus(event, 400)
        return { error: ExistsError }
    } else if (exists.length > 0) {
        setResponseStatus(event, 200)
        return { error: "Email already exists" }
    }

    try {
        // send the email
        const data = await resend.emails.send({
            from: "beta@stunpark.com",
            to: body.email,
            subject: "Welcome to StunPark: The Smarter Way to Park!",
            html: waitlistEmail,
        })

        // insert the email into the database
        const { error } = await supabase.from("private_beta").insert({ email: body.email, receive_updates: body.receive_updates ?? false })

        // if there was an error inserting the email into the database, return the error
        if (error) {
            setResponseStatus(event, 400)
            return { error }
        }
        return data
    } catch (error) {
        // if there was an error sending the email, return the error
        setResponseStatus(event, 400)
        return { error }
    }
})
