import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    try {
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

        return data
    } catch (error) {
        return { error }
    }
})
