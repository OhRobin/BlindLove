import UploadPhotoFrame from "../components/UploadPhotoFrame";
import ZkMask from "../components/ZkMask";
import MatchingButton from "../components/button/MatchingButton";
import VotingButton from "../components/button/VotingButton";

function Home() {
    return(
        <>
            <ZkMask />
            <div className="mt-20 mb-16 mx-9 top-0 left-0">
                <h1 className="text-center">To generate a DID<br />Get your photo voted on</h1>
            </div>
            <UploadPhotoFrame />
            <VotingButton />
            <MatchingButton />
        </>
    )
}

export default Home;