import { CreateUserPayload, LoginUserPayload } from '@/app/libs/dto/user';
import * as bcrypt from 'bcrypt';
import { sign } from '../(core)/helper/jwt.helper';
import { prisma } from '../../../../lib/prisma';

const validateUser = async (
  email: string,
  password: string,
): Promise<Omit<LoginUserPayload, 'password'> | null> => {
  const user = await prisma.dBUser.findFirst({
    where: {
      email,
    },
  });
  if (user?.password && (await bcrypt.compare(password, user.password))) {
    const { password, ...result } = user;
    return result;
  }
  return null;
};

const login = async ({ email, password }: LoginUserPayload) => {
  const userData = await validateUser(email, password);
  if (!userData) {
    throw new Error();
  }
  const payload = {
    // id: userData.id,
    email: userData.email,
  };
  return {
    accessToken: await sign(payload, { expiresIn: '24h' }),
  };
};

const create = async ({
  name,
  surname,
  phone,
  email,
  address,
  password,
}: CreateUserPayload) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const isUser = await prisma.dBUser.findFirst({
    where: {
      OR: [{ email }, { phone }],
    },
  });
  if (isUser) {
    return new Response('User already exist!!!', {
      status: 409,
    });
  } else {
    const user = await prisma.dBUser.create({
      data: {
        name,
        surname,
        phone,
        email,
        address,
        password: hashedPassword as string,
      },
    });
    return new Response('user created', {
      status: 200,
    });
  }
};

export async function POST(request: Request) {
  const { name, surname, phone, email, address, password } =
    await request.json();
  switch (request.headers.get('req-type')) {
    case 'create':
      return create({ name, surname, phone, email, address, password });
    case 'login':
      return login({ email, password });
    case 'update':
      return null;
    default:
      return new Response('user created', {
        status: 200,
      });
  }
}
