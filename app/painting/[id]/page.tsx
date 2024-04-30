import React from "react";
import { paintings } from "#/app/home/Paintings";
import { IPaintings } from "#/app/home/DisplayPaintings";
import Link from "next/link";
import { redirect } from "next/navigation";
import Wishlist from "./Wishlist";
import { prisma } from "#/prisma.config";
import { cookies } from "next/headers";

const getPainting = async (id: string) => {
  const painting = await prisma.painting.findUnique({
    where: {
      paintingId: parseInt(id),
    },
  });

  return painting;
};

const inWishList = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: {
      username: cookies().get("username")!.value,
    },
  });

  return Boolean(
    user?.wishlist.find((paintingId) => paintingId == parseInt(id))
  );
};

const Id = async ({ params }: { params: { id: string } }) => {
  const paintingId = params.id;

  const painting = await getPainting(paintingId);

  if (!painting) return redirect("/404");

  const contains = await inWishList(paintingId);

  return (
    <div className="">
      <Link href={"/home"}>
        <div className="flex space-x-4 cursor-pointer my-16">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          Home
        </div>
      </Link>
      {painting && (
        <div className="my-16 flex space-x-8">
          <div>
            <img
              src={painting.ImageUrl}
              alt=""
              className="h-[500px] object-cover w-[250px] rounded shadow"
            />
          </div>
          <div className="text-gray-700 my-16 flex flex-col space-y-1">
            <div className="text-lg font-semibold text-black">
              {painting.Name}
            </div>
            <div>Price: {painting.Price}$</div>
            <div>Rating: {painting.Rating} / 5</div>
            <div>Date: {painting.Date}</div>
            <div>
              <Wishlist id={painting.paintingId} contains={contains} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Id;
