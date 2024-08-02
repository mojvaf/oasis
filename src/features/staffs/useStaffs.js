import { useQuery } from "@tanstack/react-query";
import { getStaffs } from "../../services/apiStaffs";

export const useStaffs = () => {
  const {
    isLoading,
    data: staffs,
    error,
  } = useQuery({
    queryKey: ["staffs"],
    queryFn: getStaffs,
  });
  return { isLoading, error, staffs };
};
