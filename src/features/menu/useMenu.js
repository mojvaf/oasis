import { useQuery } from "@tanstack/react-query";
import { getMenu } from "../../services/apiMenu";

export function useMenu() {
  const {
    isLoading,
    error,
    data: menus,
  } = useQuery({
    queryKey: ["menus"],
    queryFn: getMenu,
  });

  return { isLoading, error, menus };
}
