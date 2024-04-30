import React from "react";
import Link from "next/link";

export interface IPaintings {
  paintingId: number;
  Name: string;
  Rating: number;
  Price: number;
  Date: string;
  ImageUrl: string;
}

interface Props {
  paintings: IPaintings[];
}

const DisplayPaintings: React.FC<Props> = ({ paintings }) => {
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {paintings.map((painting) => (
        <Link
          key={painting.paintingId}
          href={`/painting/${painting.paintingId}`}
        >
          <div className="relative w-fit rounded cursor-pointer shadow hover:shadow-lg">
            <img
              src={painting.ImageUrl}
              alt="test"
              className="object-cover h-[400px] w-[175px]"
            />
            <div className="left-0 text-gray-700 px-4 py-2 right-0 bottom-0 absolute h-[170px] rounded-tl rounded-tr z-10 bg-gray-50">
              <div className="font-semibold my-2 text-lg text-black">
                {painting.Name}
              </div>
              <div>
                <span className="font-semibold">Date:</span> {painting.Date}
              </div>
              <div>
                <span className="font-semibold">Price:</span> {painting.Price}$
              </div>
              <div>
                <span className="font-semibold">Rating:</span> {painting.Rating}{" "}
                / 5
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DisplayPaintings;
