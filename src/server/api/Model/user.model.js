import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const findUserByNameAndPassword = async (name, password) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        name,
        password,
      },
    });

    if (!user) {
      throw new Error('Nom d\'utilisateur ou mot de passe incorrect');
    }

    return user;
  } catch (error) {
    throw new Error(`Erreur lors de la recherche de l'utilisateur ou des identifiants invalides : ${error}`);
  }
};
