import prisma from 'lib/prisma'

export default async function handler(req, res) {
  const { method, query } = req

  switch (method) {
    case 'GET':
      try {
        const guestbook = await prisma.guestbook.findMany({
          take: parseInt(query.limit) || 10,
          skip: parseInt(query.offset) || 0,
          select: {
            id: true,
            message: true,
            createdAt: true,
            author: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
        })
        res.status(200).json(guestbook)
      } catch (error) {
        res.status(500).json({ error })
      }
      break

    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
      break
  }
}
