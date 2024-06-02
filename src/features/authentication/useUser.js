import { getCurrentUser } from "../../services/apiAuth";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
};

export default useUser;
