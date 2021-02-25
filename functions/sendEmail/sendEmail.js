const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "celine.effertz60@ethereal.email",
    pass: "AwtNww3NzCujp8UX9V"
  }
})

exports.handler = async (event, context) => {
  console.log(`Event body: ${event.body}`)

  let requestParams = JSON.parse(event.body)
  let email = requestParams.email

  const info = await transporter.sendMail({
    from: "Gatsby contact form <gatsby_contact@example.com>",
    to: `testing@example.com`,
    subject: "New Contact form submission",
    html: `<p>Email from: ${email}</p>`
  }) 

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Success sending email" })
  }
}
