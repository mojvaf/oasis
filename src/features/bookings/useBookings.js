import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  //filter
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : // { field: "totalPrice", value: 250, method: 'gte' }
        { field: "status", value: filterValue };

  //sort
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [filed, direction] = sortByRaw.split("-");
  const sortBy = { filed, direction };
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({ filter }),
  });

  return { isLoading, error, bookings };
}
