import { useQuery } from "@tanstack/react-query";
import { getShifts } from "../../services/apiShifts.js";

export function useShifts() {
  const {
    isLoading,
    data: shifts,
    error,
  } = useQuery({
    queryKey: ["shifts"],
    queryFn: getShifts,
  });

  return { isLoading, error, shifts };
}
