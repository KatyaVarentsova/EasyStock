import { getUsers } from './mockServer';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  user?: {
    id: string;
    email: string;
    name: string;
    role: string;
  };
  message?: string;
}

export const login = async ({ email, password }: { email: string; password: string }) => {
  const users = await getUsers();

  const matchedUser = users.find((user: any) => {
    const fields = user.fields;
    return fields?.email === email && fields?.password === password;
  });

  if (matchedUser) {
    return {
      success: true,
      user: {
        id: matchedUser.recordId || 'unknown',
        email: matchedUser.fields.email,
        name: matchedUser.fields.name || 'Без имени',
        role: matchedUser.fields.role || 'worker',
      },
    };
  }

  return {
    success: false,
    message: 'Неверный логин или пароль',
  };
};



