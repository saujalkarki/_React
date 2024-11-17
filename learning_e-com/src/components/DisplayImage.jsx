import { MdOutlineClose } from "react-icons/md";

export function DisplayImage({ imageUrl, onClose }) {
  return (
    <div className="fixed bottom-0 top-0 right-0 left-0 flex justify-center items-center">
      <div className=" bg-white shadow-lg rounded max-w-5xl ">
        <div
          className="w-fit ml-auto text-4xl hover:text-red-600 cursor-pointer p-3"
          onClick={onClose}
        >
          <MdOutlineClose />
        </div>
        <div className=" flex justify-center p-4 max-w-[75vh] max-h-[75vh]">
          <img src={imageUrl} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
