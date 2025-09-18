import nodemailer from "nodemailer";

export const sendContactEmail = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    console.log("Sending email...");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    console.log("Transporter created");

    // HTML email template
   const htmlTemplate = `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9f9f9; padding: 20px;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      
      <!-- Header -->
      <div style="background-color: #1a73e8; color: #ffffff; padding: 20px; text-align: center;">
        <h2 style="margin: 0; font-size: 24px;">New Contact Form Submission</h2>
      </div>
      
      <!-- Body -->
      <div style="padding: 20px; color: #333333;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f4f4f4; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
          ${message}
        </div>
        <p>If you want to reply, contact the user directly via their email address above.</p>
      </div>

      <!-- Footer -->
      <div style="background: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #777;">
        This is an automated email from your website contact form.
      </div>
    </div>
  </div>
`;


    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email, // You can also change this to your personal email to receive all messages
      subject: "New Contact Form Submission",
      html: htmlTemplate, // <-- Use HTML template here
    });

    console.log("Email sent");
    res.json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ error: err.message });
  }
};
