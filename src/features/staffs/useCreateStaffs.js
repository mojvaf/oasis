import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createStaffs } from "../../services/apiStaffs";
import toast from "react-hot-toast";

export function useCreateStaff() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createStaff } = useMutation({
    mutationFn: (newStaff) => createStaffs(newStaff),
    onSuccess: () => {
      toast.success("Staff successfully added");
      queryClient.invalidateQueries({
        queryKey: ["staffs"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createStaff };
}
