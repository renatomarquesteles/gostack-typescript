interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  hobbies: string[];
  techs: Array<string | TechObject>;
}

export default function createUser({
  name,
  email,
  password,
  hobbies,
  techs,
}: CreateUserData) {
  const user = { name, email, password, hobbies, techs };

  return user;
}
