# Verif-rol
Projet de vérification de rôle Discord avec Vercel
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { type } = req.body;

    // Interaction type 1 = PING
    if (type === 1) {
      return res.status(200).json({ type: 1 });
    }

    return res.status(200).json({ message: 'ok' });
  }

  res.status(405).send('Method Not Allowed');
}
