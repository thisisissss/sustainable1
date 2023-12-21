import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, phone, pageIdentifier } = req.body;

    // Initialize Nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Transport configuration (e.g., SMTP server details)
      // This could be Gmail, SendGrid, etc., depending on your preference
    });

    // Construct the email content
    const text = `New Inquiry from ${name} (Phone: ${phone}, Page: ${pageIdentifier})`;

    try {
      // Send an email
      await transporter.sendMail({
        from: 'somyown@proton.mea', // Your email address
        to: 'somyown@yahoo.com', // Where you want to receive the inquiries
        subject: 'New Customer Inquiry',
        text: text,
      });

      res.status(200).json({ message: 'Inquiry submitted successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
