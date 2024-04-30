"use server";
import { prisma } from "#/prisma.config";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const createAccount = async (
  username: string,
  email: string,
  password: string
) => {
  const hashPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      email,
      username,
      password: hashPassword,
    },
  });

  const cookieStore = cookies();
  cookieStore.set("username", username);
  redirect("/home");
};
