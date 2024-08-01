import { useQuery } from "@tanstack/react-query";
import { getStaffs } from "../../services/apiStaffs";

const Staffs = () => {
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
