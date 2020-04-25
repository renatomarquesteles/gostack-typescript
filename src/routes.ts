import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'renato@email.com',
    password: '123456',
    hobbies: ['Codar', 'Games', 'Futebol'],
    techs: [
      'Node.js',
      'ReactJS',
      'React Native',
      { title: 'Javascript', experience: 100 },
    ],
  });

  return response.json({ message: 'Hello World' });
}
