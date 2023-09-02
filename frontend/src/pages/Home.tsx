import { useState } from "react";
import UploadPhotoFrame from "../components/UploadPhotoFrame";
import ZkMask from "../components/ZkMask";
import MatchingButton from "../components/button/MatchingButton";
import VotingButton from "../components/button/VotingButton";
import { uploadImg } from "../firebase";
import ConfirmUploadImage from "../components/ConfirmUploadImage";

function Home() {
  const [imgSrc, setImgSrc] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const onClickUploadImage = async () => {
    if (loading || !imgSrc) {
      console.log("no img");
      return;
    }

    setLoading(true);
    try {
      console.log("call");
      await uploadImg(imgSrc, "0xEA644e61a026c4f7c9D8499Ea772cA6e53E8A1a6");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ZkMask />
      <div className="mx-9 mb-16 mt-20">
        <h1 className="text-center">
          To generate a DID
          <br />
          Get your photo voted on
        </h1>
      </div>
      <UploadPhotoFrame setThumbnail={setImgSrc} />
      <VotingButton />
      <MatchingButton />
      <ConfirmUploadImage />
    </>
  );
}

export default Home;
