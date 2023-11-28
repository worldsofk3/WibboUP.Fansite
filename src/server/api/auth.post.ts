import * as bcrypt from 'bcrypt'
import { generateJWTToken } from '../utils/jsonwebtoken'
import { prisma } from '../utils/database'

export default defineEventHandler(async (event) => {
  const { name, password } = await readBody<{ name: string; password: string }>(event)

  if (!name || !password) {
    throw createError({ statusCode: 400, message: 'Merci de saisir un nom d\'utilisateur et un mot de passe' })
  }

  const user = await prisma.user.findFirst({
    where: {
      name
    }
  })

  if (!user) {
    throw createError({ statusCode: 400, message: 'Nom d\'utilisateur ou mot de passe incorrect' })
  }

  const passwordMatch = await bcrypt.compare(password, user.password)

  if (!passwordMatch) {
    throw createError({ statusCode: 400, message: 'Nom d\'utilisateur ou mot de passe incorrect' })
  }

  const JWT_TOKEN = generateJWTToken(user.id)

  return JWT_TOKEN
})
