import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getStaffs } from "../../services/apiStaffs";
import Spinner from "../../ui/Spinner";

const Staffs = () => {
  const {
    isLoading,
    data: staffs,
    error,
  } = useQuery({
    queryKey: ["staffs"],
    queryFn: getStaffs,
  });

  if (isLoading) return <Spinner />;
  return (
    <div>
      {staffs.map((it) => (
        <div key={it.id}>
          {it.name}
          <img src={it.image} />
        </div>
      ))}
    </div>
  );
};

export default Staffs;
