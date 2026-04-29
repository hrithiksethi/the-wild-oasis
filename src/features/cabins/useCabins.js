import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabins() {
  const {
    data: cabins,
    // error,
    isLoading,
  } = useQuery({
    queryKey: ["cabins"], //This is unique identifier for the query being fetched. Can be a string in an array or multiple inside array.
    queryFn: getCabins, //This is the function that will be called to fetch the data. It can be an async function that returns a promise or a regular function that returns data.
  });

  return {
    cabins,
    isLoading,
  };
}
