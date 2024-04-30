"use server";

import { cookies } from "next/headers";
import { prisma } from "#/prisma.config";
import { revalidatePath } from "next/cache";

export const addToWishList = async (id: number) => {
  const username = cookies().get("username");

  if (!username) return;

  const user = await prisma.user.findUnique({
    where: {
      username: username.value,
    },
  });

  const inWishlist = user?.wishlist.find((painting) => painting == id);

  if (inWishlist) return;

  await prisma.user.update({
    where: {
      username: username.value,
    },
    data: {
      wishlist: {
        push: id,
      },
    },
  });

  revalidatePath(`/painting/${id}`);

  return true;
};
