import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'
import prisma from 'lib/prisma'

export default withApiAuthRequired(async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Method not allowed' })
  }
  try {
    const session = getSession(req, res)
    const { name } = session.user
    const { message } = req.body
    const guestbook = await prisma.guestbook.create({
      data: { author: name || 'Guest', message },
    })
    res.status(200).json(guestbook)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
})
