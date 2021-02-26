const nodemailer = require("nodemailer")

const template = (name, email, message) => {
  return (
    `
    <div>
      <h2>New Contact form submission from Gatsby Contact form test</h2>

      <h3>Name: ${name}</h3>
      <h3>Email: ${email}</h3>

      <h3>Message</h3>
      <div>
        ${message}
      </div>
    </div>
    `
  )
}

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

  let params = JSON.parse(event.body)
  let name = params.name
  let email = params.email
  let message = params.message

  const info = await transporter.sendMail({
    from: `${name} <${email}>`,
    to: `gatsby-contact-form@example.com`,
    subject: `New Contact form submission from ${name}`,
    html: template(name, email, message)
  }) 

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Success sending email" })
  }
}
