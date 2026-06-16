import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Nodemailer transporter – configure via .env
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: Number(process.env.SMTP_PORT) || 465,
  secure: process.env.SMTP_SECURE !== 'false',
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
  },
});

app.post('/api/consultation', async (req, res) => {
  try {
    const { fullName, email, phone, services } = req.body;

    // Validate required fields
    if (!fullName || !email || !services || services.length === 0) {
      return res.status(400).json({ error: 'Full name, email, and at least one service are required.' });
    }

    const recipientEmail = process.env.RECIPIENT_EMAIL || email;

    const mailOptions = {
      from: `"Nigel Henaku Portfolio" <${process.env.SMTP_USER || 'noreply@nigelhenaku.com'}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New Consultation Request from ${fullName}`,
      html: `
        <div style="font-family: 'Inter', sans-serif; max-width: 560px; margin: 0 auto; background: #0b1326; color: #dae2fd; border: 1px solid #2d3449; border-radius: 8px; overflow: hidden;">
          <div style="background: linear-gradient(90deg, #0067ff, #00D1FF); height: 6px;"></div>
          <div style="padding: 32px;">
            <h2 style="color: #ffffff; font-size: 20px; margin: 0 0 8px;">New Consultation Request</h2>
            <p style="color: #c2c6d8; font-size: 13px; margin: 0 0 24px;">A visitor has submitted a consultation request via your portfolio.</p>

            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 10px 0; color: #8c90a1; border-bottom: 1px solid #222a3d; width: 120px;">Full Name</td>
                <td style="padding: 10px 0; color: #ffffff; border-bottom: 1px solid #222a3d;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #8c90a1; border-bottom: 1px solid #222a3d;">Email</td>
                <td style="padding: 10px 0; color: #ffffff; border-bottom: 1px solid #222a3d;"><a href="mailto:${email}" style="color: #00D1FF;">${email}</a></td>
              </tr>
              ${phone ? `<tr>
                <td style="padding: 10px 0; color: #8c90a1; border-bottom: 1px solid #222a3d;">Phone</td>
                <td style="padding: 10px 0; color: #ffffff; border-bottom: 1px solid #222a3d;">${phone}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 10px 0; color: #8c90a1; border-bottom: 1px solid #222a3d;">Services</td>
                <td style="padding: 10px 0; color: #ffffff; border-bottom: 1px solid #222a3d;">${services.join(', ')}</td>
              </tr>
            </table>

            <p style="color: #c2c6d8; font-size: 12px; margin-top: 24px; padding-top: 16px; border-top: 1px solid #222a3d;">
              Sent via <strong style="color: #ffffff;">nigelhenaku.com</strong> — Secure Consultation Scheduler
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: 'Consultation request sent successfully.' });
  } catch (err) {
    console.error('Email send error:', err);
    res.status(500).json({ error: 'Failed to send consultation request. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Consultation API server running on http://localhost:${PORT}`);
});