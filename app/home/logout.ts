"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const logout = () => {
  cookies().delete("username");

  redirect("/login");
};
