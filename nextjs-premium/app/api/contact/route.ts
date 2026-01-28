import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, subject, message } = body

    // Validation basique côté serveur
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs requis doivent être remplis' },
        { status: 400 }
      )
    }

    // Ici, vous pouvez intégrer votre service d'email (SendGrid, Resend, etc.)
    // Pour l'instant, on simule un envoi réussi
    
    // Exemple avec un service d'email (à configurer selon vos besoins)
    // const emailService = new EmailService()
    // await emailService.send({
    //   to: 'klyonme@gmail.com',
    //   subject: `Nouveau message de contact : ${subject}`,
    //   html: `
    //     <h2>Nouveau message de contact</h2>
    //     <p><strong>Nom:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Téléphone:</strong> ${phone || 'Non renseigné'}</p>
    //     <p><strong>Entreprise:</strong> ${company || 'Non renseigné'}</p>
    //     <p><strong>Sujet:</strong> ${subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // })

    // Pour l'instant, on retourne un succès
    // En production, configurez votre service d'email ici
    return NextResponse.json(
      { message: 'Message envoyé avec succès' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    )
  }
}
