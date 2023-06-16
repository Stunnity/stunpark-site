import { Resend } from "resend"
import { createClient } from "@supabase/supabase-js"

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

    try {
        // send the email
        const data = await resend.emails.send({
            from: "liberintwari@gmail.com",
            to: body.email,
            subject: "Welcome to StunPark - Revolutionizing Your Parking Experience!",
            html: `
            Dear stunner,

            Welcome to StunPark! We're thrilled that you have joined our waitlist and are eager to introduce you to a whole new level of stress-free parking. With our powerful mobile app, you can effortlessly book parking spaces, receive real-time notifications on availability, enjoy seamless payments with our StunCard feature, and easily navigate to your desired parking location. Get ready to say goodbye to the frustrations of finding parking and embrace a smoother, more convenient parking experience. We'll keep you updated on our progress and provide exclusive access to early releases and exciting features. Thank you for joining the StunPark community!

            Best regards,

            Daniel Dukundane,
            CEO,
            StunPark Team
            `,
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
