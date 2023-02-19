import imggurApi from "@/modules/api/imggurApi";

const getHoursSummary = async ({ queryKey }) => {
  const [_key] = queryKey;

  return await imggurApi.get("/posts/stats");
};

export default getHoursSummary;
