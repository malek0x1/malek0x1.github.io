import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
    if (req.method === 'POST' && req.body.message) {
        const { message } = req.body;
        try {
            const { data, error } = await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: 'malek0x1@gmail.com',
                subject: 'Email From my Porfolio',
                react: <div>{atob(message)}</div>,
            });

            if (error) {
                res.status(400).json({ error });
            }

            res.status(200).json({ data });
        } catch (error) {
            res.status(400).json({ error });
        }
    }
    res.status(400).json({ error: "method not supported" });
}