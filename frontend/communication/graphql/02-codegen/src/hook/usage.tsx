import React from "react";
import { useGetUser } from "../generated";

function Forms() {
  const { loading, data, error } = useGetUser({
    variables: {
      id: "f61b1c96-6031-456d-abc7-a667a88c8728",
    },
  });

  return <div>Forms</div>;
}

export default Forms;
