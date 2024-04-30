"use server";

import { cookies } from "next/headers";
import { prisma } from "#/prisma.config";
import { revalidatePath } from "next/cache";

export const removeFromWishlist = async (id: number) => {
  const username = cookies().get("username");

  if (!username) return;

  const user = await prisma.user.findUnique({
    where: {
      username: username.value,
    },
  });

  const inWishlist = user?.wishlist.includes(id);

  if (!inWishlist) return;

  console.log(user?.wishlist.filter((paintingId) => paintingId != id));

  await prisma.user.update({
    where: {
      username: username.value,
    },
    data: {
      wishlist: {
        set: user?.wishlist.filter((paintingId) => paintingId != id),
      },
    },
  });

  revalidatePath(`/painting/${id}`);

  return true;
};
