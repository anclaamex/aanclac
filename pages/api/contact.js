import nodemailer from 'nodemailer';
export default async (req, res) => {
  const { name, email, message, phone } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtppro.zoho.com',
    port: 465,
    secure: true,
    auth: {
        user: "contacto@bybconsultingtraining.com",
        pass: "GEy0FabRkGg8",
    //   user: process.env.user,
    //   pass: process.env.pass,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: "contacto@bybconsultingtraining.com",
      to: 'contacto@bybconsultingtraining.com',
      subject: `Contact form submission from ${name}`,
      html: `<p>Tiene un nuevo envío de mensaje de la pagina web</p><br>
      <p><strong>Nombre: </strong> ${name} </p><br>
      <p><strong>Teléfono : </strong> ${phone} </p><br>
      <p><strong>Correo electrónico : </strong> ${email} </p><br>
      <p><strong>Mensaje: </strong> ${message} </p><br>
      
      `,
    });

    console.log('Message Sent', emailRes.messageId);
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};