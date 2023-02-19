import React from "react";

import { useQuery } from "@tanstack/react-query";
import getImages from "../controllers/getImages";

const useImages = ({ startDate, endDate }) => {
  const info = useQuery({
    queryKey: ["images", { startDate, endDate }],
    queryFn: getImages,
    initialData: { data: { result: [] } },
  });

  return info;
};

export default useImages;
