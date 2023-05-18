import * as jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";

export const sign = async (
  payload: string | object | Buffer,
  options?: jwt.SignOptions
): Promise<string> => {
  console.log("######### uso ovdje");
  const jwtS = jwt.sign(payload, "secret", options);
  console.log("######### jwtS: ", jwtS);
  return jwtS;
};

export const decode = (
  token: string | null
): null | JwtPayload | string | undefined => {
  if (token === null) return;
  return jwt.decode(token.includes("Bearer") ? token?.split(" ")[1] : token);
};
