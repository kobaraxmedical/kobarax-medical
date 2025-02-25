import nodemailer from 'nodemailer';

const generateDevisHtml = (userData, cartList) => {
    const cartItemsHtml = cartList.map(item => `
        <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">
                <img src="${item.proImg}" alt="${item.title}" style="width: 50px; height: 50px;"/>
                ${item.title}
            </td>
            <td style="padding: 10px; border: 1px solid #ddd;">${item.qty}</td>
        </tr>
    `).join('');

    return `
        <html>
            <body style="font-family: Arial, sans-serif;">
                <h2>Devis - Kobarax Medical</h2>
                <div style="margin-bottom: 20px;">
                    <h3>Informations Client</h3>
                    <p>Nom: ${userData.fname} ${userData.lname}</p>
                    <p>Email: ${userData.email}</p>
                    <p>Téléphone: ${userData.phone}</p>
                    <p>Adresse: ${userData.country}</p>
                </div>
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                    <thead>
                        <tr style="background-color: #f8f9fa;">
                            <th style="padding: 10px; border: 1px solid #ddd;">Produit</th>
                            <th style="padding: 10px; border: 1px solid #ddd;">Quantité</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${cartItemsHtml}
                    </tbody>
                </table>
                <div style="margin-top: 20px;">
                    <p>Notes: ${userData.note || 'Aucune note'}</p>
                </div>
            </body>
        </html>
    `;
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { userData, cartList } = req.body;
        
        let transporter = nodemailer.createTransport({
            service: "Gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "kobaraxmedicalinfo@gmail.com",
                pass: "foBvid-cunge3-dojpox",
            },
        });

        const htmlContent = generateDevisHtml(userData, cartList);

        await transporter.sendMail({
            from: 'kobaraxmedicalinfo@gmail.com',
            to: userData.email,
            subject: "Votre Devis - Kobarax Medical",
            text: "Voici votre devis de Kobarax Medical",
            html: htmlContent,
        });

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Error sending email' });
    }
}
