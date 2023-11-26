import { findUserByNameAndPassword } from './user.model';

app.post('/api/login', async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await findUserByNameAndPassword(name, password);

    res.status(200).json({ message: 'Connexion réussie', user });
  } catch (error) {
    console.error('Erreur lors de la connexion :', error);
    res.status(401).json({ message: 'Identifiants invalides' });
  }
});
