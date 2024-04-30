"use client";

import React, { useState } from "react";

import Search from "./Search";
import DisplayPaintings, { IPaintings } from "./DisplayPaintings";
import { paintings } from "./Paintings";
import Link from "next/link";
import { parseCookieString } from "#/utils/cookie";
import { logout } from "./logout";

interface Props {
  username: string;
  paintings: IPaintings[];
}

const Index: React.FC<Props> = ({ username, paintings: allPaintings }) => {
  const [filteredPaintings, setFilteredPaintings] = useState<IPaintings[]>([]);

  return (
    <div className="">
      <div className="flex justify-end my-8 space-x-3">
        <Link href="/wishlist">
          <div className="px-4 py-2 rounded shadow hover:shadow-lg cursor-pointer">
            Wishlist
          </div>
        </Link>
        <div
          onClick={() => {
            logout();
          }}
        >
          <div className="px-4 py-2 rounded shadow hover:shadow-lg cursor-pointer">
            Logout
          </div>
        </div>
      </div>

      <div className="my-8">
        <span className="font-semibold text-lg">Hello {username}</span>
      </div>
      <div className="my-8">
        <Search
          allPaintings={allPaintings}
          setFilteredPaintings={setFilteredPaintings}
        />
      </div>
      <div className="my-8 px-4 py-2">
        <DisplayPaintings paintings={filteredPaintings} />
      </div>
    </div>
  );
};

export default Index;
