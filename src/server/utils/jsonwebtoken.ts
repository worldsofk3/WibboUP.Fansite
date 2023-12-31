import jwt from 'jsonwebtoken'

export const generateJWTToken = (userId: number) => {
  const JWT_SECRET = '123'
  const JWT_EXPIRATION = '1h'

  if (!JWT_SECRET) {
    throw new Error('La clé secrète JWT n\'est pas définie dans les variables d\'environnement')
  }

  // eslint-disable-next-line import/no-named-as-default-member
  const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: JWT_EXPIRATION })
  return token
}
