const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
})

exports.handler = async (event, context) => {
  console.log(`Event body: ${event.body}`)

  let requestParams = JSON.parse(event.body)
  let email = requestParams.email

  const info = await transporter.sendMail({
    from: "Gatsby contact form test <gatsby_contact@example.com>",
    to: `testing@example.com`,
    subject: "New Contact form submission from Gatsby",
    html: `<p>Email from: ${email}</p>`
  }) 

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Success sending email" })
  }
}
