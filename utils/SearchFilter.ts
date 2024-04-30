import { IPaintings } from "#/app/home/DisplayPaintings";
import { ISearchFilter } from "#/app/home/Search";

export const searchPaintings = (
  allPaintings: IPaintings[],
  searchFilters: ISearchFilter
) => {
  let filteredPainting = [...allPaintings];

  if (searchFilters.search.trim())
    filteredPainting = filteredPainting.filter((painting) =>
      painting.Name.toLowerCase().startsWith(
        searchFilters.search.toLowerCase().trim()
      )
    );

  if (searchFilters.minPrice)
    filteredPainting = filteredPainting.filter(
      (painting) => painting.Price >= parseInt(searchFilters.minPrice)
    );

  if (searchFilters.maxPrice)
    filteredPainting = filteredPainting.filter(
      (painting) => painting.Price <= parseInt(searchFilters.maxPrice)
    );

  if (searchFilters.rating)
    filteredPainting = filteredPainting.filter(
      (painting) => painting.Rating == parseInt(searchFilters.rating)
    );

  return filteredPainting;
};
