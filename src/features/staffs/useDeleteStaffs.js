import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteStaffs } from "../../services/apiStaffs";
import toast from "react-hot-toast";

export function useDeleteStaff() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteStaff } = useMutation({
    mutationFn: (id) => deleteStaffs(id),
    onSuccess: () => {
      toast.success("Staff successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["staffs"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteStaff };
}
