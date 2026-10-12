import { validateConsultation, sendConsultationEmail } from '../lib/consultationEmail.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  try {
    const { error, data } = validateConsultation(req.body);

    if (error) {
      return res.status(400).json({ error });
    }

    await sendConsultationEmail(data);

    res.json({ success: true, message: 'Consultation request sent successfully.' });
  } catch (err) {
    console.error('Email send error:', err);
    res.status(500).json({ error: 'Failed to send consultation request. Please try again later.' });
  }
}