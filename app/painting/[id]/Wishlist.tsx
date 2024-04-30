"use client";

import React from "react";
import { addToWishList } from "./addToWishlist";
import { removeFromWishlist } from "./removeFromWishlist";

interface Props {
  contains: boolean;
  id: number;
}

const Wishlist: React.FC<Props> = ({ id, contains }) => {
  return (
    <button
      onClick={() => {
        if (contains) removeFromWishlist(id);
        else addToWishList(id);
      }}
      className="border-2 my-2 px-4 py-2 rounded"
    >
      {contains ? "Remove from wishlist" : "Add to wishlist"}
    </button>
  );
};

export default Wishlist;
