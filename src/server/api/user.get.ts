import { prisma } from '../utils/database'

export default defineEventHandler(async () => {
  const user = await prisma.user.findUnique({ where: { id: 1 } })
  return user
})
