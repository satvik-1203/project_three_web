"use server";
import { prisma } from "#/prisma.config";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const login = async (username: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  const samePassword = await bcrypt.compare(password, user!.password);

  if (samePassword) {
    cookies().set("username", user!.username);
    redirect("/home");
  }
};
