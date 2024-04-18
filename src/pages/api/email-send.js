// import { Resend } from 'resend';

import axios from "axios";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async (req, res) => {
//     if (req.method === 'POST' && req.body.message) {
//         const { message } = req.body;
//         try {
//             const { data, error } = await resend.emails.send({
//                 from: 'onboarding@resend.dev',
//                 to: 'malek0x1@gmail.com',
//                 subject: 'Email From my Porfolio',
//                 react: <div>{atob(message)}</div>,
//             });

//             if (error) {
//                 res.status(400).json({ error });
//             }

//             res.status(200).json({ data });
//         } catch (error) {
//             res.status(400).json({ error });
//         }
//     }
//     res.status(400).json({ error: "method not supported" });
// }

const sendEmailBackend = async (msg) => {
    try {
        const response = await axios.post("https://api.resend.com/emails",
            {
                "from": 'onboarding@resend.dev',//fromEmail,
                "to": "malek0x1@gmail.com",
                "subject": 'Email From my Porfolio',
                "html": atob(msg)
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        )
        return response
    }
    catch (err) {
        throw new Error("Error");
    }
}


export default async function handler(req, res) {
    if (req.method === 'POST' && req.body.message) {
        try {
            const { message } = req.body;
            await sendEmailBackend(message)
            return res.status(200).json({ status: "successs" })
        } catch (error) {
            console.error('Error generating token:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
    return res.status(400).json({ error: 'Email is required' });
}