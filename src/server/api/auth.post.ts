import bcrypt from 'bcrypt'
import { generateJWTToken } from '../utils/jsonwebtoken'
import { prisma } from '../utils/database'

interface CustomError extends Error {
  statusCode?: number;
  statusMessage?: string;
}

export default defineEventHandler(async (event) => {
  try {
    const { name, password } = await readBody<{ name: string; password: string }>(event)

    if (!name || !password) {
      const error: CustomError = {
        statusCode: 400,
        name: '',
        message: 'Merci de saisir un nom d\'utilisateur et un mot de passe'
      }
      throw error
    }

    const user = await prisma.user.findFirst({
      where: {
        name
      }
    })

    if (!user) {
      const error: CustomError = {
        statusCode: 401,
        name: '',
        message: 'Nom d\'utilisateur ou mot de passe incorrect'
      }
      throw error
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      const error: CustomError = {
        statusCode: 401,
        name: '',
        message: 'Nom d\'utilisateur ou mot de passe incorrect'
      }
      throw error
    }

    const JWT_TOKEN = generateJWTToken(user.id)

    return JWT_TOKEN
  } catch (error) {
    const typedError = error as CustomError
    const statusCode = typedError.statusCode || 500
    const statusMessage = typedError.statusMessage || `Erreur lors de l'authentification: ${typedError.message}`
    throw createError({ statusCode, statusMessage })
  }
})