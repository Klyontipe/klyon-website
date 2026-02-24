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

    // TODO: brancher ici un vrai service d'envoi d'email (SendGrid, Resend, SMTP, etc.)
    // En attendant, on se contente de valider les données et de répondre un succès.

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
