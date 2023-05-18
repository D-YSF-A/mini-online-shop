import { DBUser } from "@prisma/client";

export interface CreateUserPayload {
  name: string;
  surname: string;
  email: string;
  phone: string;
  address: string;
  password: string;
}

export interface LoginUserPayload {
  email: string;
  password: string;
}

interface DBUserOnePayload {
  address: string;
  name: string;
  surname: string;
}

interface DBUserListPayload {
  search?: string;
}

interface DBUserApi {
  list: {
    requestBody: never;
    request: DBUserListPayload;
    response: DBUser[];
  };
  getOne: {
    requestBody: never;
    requestParams: DBUserOnePayload;
    request: DBUserOnePayload;
    response: DBUser;
  };
  create: {
    requestBody: CreateUserPayload;
    requestParams: never;
    request: CreateUserPayload;
    response: { token: string; user: DBUser };
  };
  updateOne: {
    requestBody: DBUserOnePayload;
    requestParams: DBUserOnePayload;
    request: DBUserOnePayload;
    response: DBUser;
  };
}

export type { DBUserApi };
