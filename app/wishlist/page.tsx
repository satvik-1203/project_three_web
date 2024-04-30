import React from "react";
import type { NextPage } from "next";
import { cookies } from "next/headers";
import { prisma } from "#/prisma.config";
import DisplayPaintings, { IPaintings } from "../home/DisplayPaintings";
import Link from "next/link";

const getWishlistPaintings = async () => {
  const username = cookies().get("username")!.value;

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  const paintings =
    user?.wishlist.map(async (paintingId) => {
      const painting = await prisma.painting.findUnique({
        where: {
          paintingId,
        },
      });

      return painting;
    }) || [];

  return Promise.all(paintings);
};

const page: NextPage = async () => {
  const wishlistPaintings = (await getWishlistPaintings()) as IPaintings[];

  return (
    <div className="my-16">
      <div className="flex justify-between items-center">
        <h2 className="my-16 text-xl font-semibold">
          Your Wish list paintings!
        </h2>
        <Link href={"/home"}>
          <div className="px-4 py-2 rounded shadow hover:shadow-lg cursor-pointer">
            Home
          </div>
        </Link>
      </div>
      <DisplayPaintings paintings={wishlistPaintings} />
    </div>
  );
};

export default page;
