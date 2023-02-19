import imggurApi from "@/modules/api/imggurApi";

const createImage = async (formData) => {
  return await imggurApi.post("/posts", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default createImage;
