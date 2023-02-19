import React from "react";

import { useQuery } from "@tanstack/react-query";
import getHoursSummary from "../controllers/getHoursSummary";

const useHoursSummary = () => {
  const info = useQuery({
    queryKey: ["hours-summary"],
    queryFn: getHoursSummary,
    initialData: { data: { result: [] } },
  });

  return info;
};

export default useHoursSummary;
