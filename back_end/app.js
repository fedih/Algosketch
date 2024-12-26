import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors'; 
import { createuser, validateUser } from './web_db.js';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/signup', async (req, res) => {
  const { name, email, pss, conf_pass } = req.body;
  const user = await createuser(name, email, pss, conf_pass);
  if (user === 'Passwords do not match') {
    res.status(400).json({ message: 'Passwords do not match' });
  } else {
    res.status(201).send(user);
  }
});
app.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    //console.log({'blabla : ': password});
    const user = await validateUser(email, password);
    //console.log(user);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'An unexpected error occurred' }); 
  }
});
app.listen(3360, () => {
  console.log('Server is running on port 3360');
});
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})