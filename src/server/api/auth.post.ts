export default defineEventHandler(async (event) => {
  const { username, password } = await readBody<{ username: String, password: String }>(event)

  if (!username || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Merci de saisir un nom d\'utilisateur et un mot de passe'
    })
  }

  return 'JWT_TOKEN'
})
