"use client";

import React, { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { searchPaintings } from "#/utils/SearchFilter";
import { IPaintings } from "./DisplayPaintings";

interface Props {
  allPaintings: IPaintings[];
  setFilteredPaintings: React.Dispatch<React.SetStateAction<IPaintings[]>>;
}

export interface ISearchFilter {
  search: string;
  minPrice: string;
  maxPrice: string;
  rating: string;
}

const Search: React.FC<Props> = ({ allPaintings, setFilteredPaintings }) => {
  const [searchFilters, setSearchFilters] = useState({
    search: "",
    minPrice: "200",
    maxPrice: "14000",
    rating: "",
  });

  const [showFilter, setShowFilter] = useState(false);

  const filterBox = useRef<HTMLDivElement>(null);

  useOnClickOutside(filterBox, () => {
    setShowFilter(false);
  });

  const handleSearchFilter = (name: keyof ISearchFilter, value: string) => {
    setSearchFilters((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const filteredPaintings = searchPaintings(allPaintings, searchFilters);
    setFilteredPaintings(filteredPaintings);
  }, [searchFilters]);

  return (
    <div className="flex space-x-4">
      <input
        className="py-4 px-2 w-full rounded border-2 outline-gray-300"
        placeholder="Search for a painting..."
        value={searchFilters.search}
        onChange={(e) => {
          handleSearchFilter("search", e.target.value);
        }}
      />
      <div className="  relative" ref={filterBox}>
        <div
          onClick={() => setShowFilter(!showFilter)}
          className="px-4 rounded select-none shadow h-full hover:shadow-lg cursor-pointer flex justify-center items-center"
        >
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
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
            />
          </svg>
        </div>
        {showFilter && (
          <div className="absolute px-4 py-4 rounded z-10 bg-white shadow-lg -bottom-[200px] right-0 flex flex-col space-y-3">
            <div className="relative">
              <label className="absolute -top-[.55rem] bg-white px-2 left-2 text-sm">
                Min Price
              </label>
              <input
                type="number"
                className="px-2 py-1 rounded border-2  outline-gray-400"
                name=""
                value={searchFilters.minPrice}
                id=""
                onChange={(e) => {
                  handleSearchFilter("minPrice", e.target.value);
                }}
              />
            </div>
            <div className="relative">
              <label className="absolute -top-[.55rem] bg-white px-2 left-2 text-sm">
                Max Price
              </label>
              <input
                type="number"
                className="px-2 py-1 rounded border-2 outline-gray-400"
                name=""
                value={searchFilters.maxPrice}
                id=""
                onChange={(e) => {
                  handleSearchFilter("maxPrice", e.target.value);
                }}
              />
            </div>
            <div className="relative">
              <label className="absolute -top-[.55rem] bg-white px-2 left-2 text-sm">
                Rating
              </label>
              <input
                type="number"
                className="px-2 py-1 rounded border-2 outline-gray-400"
                name=""
                placeholder="x / 5"
                value={searchFilters.rating}
                id=""
                onChange={(e) => {
                  handleSearchFilter("rating", e.target.value);
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
