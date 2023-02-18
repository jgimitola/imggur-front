import imggurApi from "@/modules/api/imggurApi";

const getImages = async ({ queryKey }) => {
  const [_key, { startDate, endDate }] = queryKey;

  return await imggurApi.get("/posts", { params: { startDate, endDate } });
};

export default getImages;
