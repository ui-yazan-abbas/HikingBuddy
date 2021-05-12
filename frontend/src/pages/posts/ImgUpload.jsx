import React, { useEffect, useState } from "react";
import ReactImageUploadComponent from "react-images-upload";
import axios from "axios";

export default function ImgUpload({ uploadImg }) {
  const [imgFile, setImgFile] = useState(null);
  const imgUpload = (e) => {
    console.log(e);
    let imageFile = e[0]; //from console it index 0
    let imagePreset = new FormData();
    imagePreset.append("file", imageFile);
    imagePreset.append("upload_preset", "HikingBuddy");
    setImgFile(imagePreset);
  };

  const postToCloude = async () => {
    try {
      if (imgFile !== null) {
        const response = await axios.post(
          //Cloud link to upload the image to
          "https://api.cloudinary.com/v1_1/dz2vr4bag/image/upload",
          imgFile
        );
        //

        //simulate the event object so its doesn't clash with handleChange
        uploadImg({
          target: {
            name: "imageUrl",
            value: response.data.secure_url,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    postToCloude();
  }, [imgFile]);
  return (
    <div>
      <ReactImageUploadComponent
        singleImage={false}
        onChange={imgUpload}
        buttonText="Upload Image"
        withLabel={false}
        withIcon={false}
        buttonClassName="upload-button"
        name="imageUrl"
      />
    </div>
  );
}
