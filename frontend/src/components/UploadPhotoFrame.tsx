import GeneratePhotoLabel from "./voting/GeneratePhotoLabel";

function UploadPhotoFrame() {
    return (
    <div className="bg-gray-200 w-72 h-48 mx-auto py-16 text-center rounded-2xl">
        {/* <h1>+</h1> */}
        <GeneratePhotoLabel />
    </div>
    );
}

export default UploadPhotoFrame;