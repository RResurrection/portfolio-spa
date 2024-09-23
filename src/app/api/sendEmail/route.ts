import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { email } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: `${process.env.EMAIL_USER}`,
      pass: `${process.env.EMAIL_PASS}`,
    },
  });

  const mailOptions = {
    from: "frontendya@gmail.com",
    to: email,
    subject: "Thank you for subscribing!",
    text: "You have successfully subscribed.",
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response("Email sent successfully", { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response("Failed to send email", { status: 500 });
  }
}
