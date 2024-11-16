import { useState } from "react";
import { MdOutlineClose, MdCloudUpload } from "react-icons/md";
import productCategory from "../helpers/ProductCategory";
import UploadImage from "../helpers/UploadImage";

export function UploadProduct({ onClose }) {
  const [data, setDate] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    description: "",
    price: "",
    sellingPrice: "",
  });

  const [uploadProductImageInput, setUploadProductImageInput] = useState("");

  const handleOnChange = (e) => {
    console.log(e);
  };

  const handleUploadProduct = async (e) => {
    const file = e.target.files[0];
    const uploadImageCloudinary = await UploadImage(file);
    setUploadProductImageInput(uploadImageCloudinary.url);

    console.log(uploadImageCloudinary.url);
  };

  return (
    <div className="fixed bg-slate-300 bg-opacity-40 top-0 bottom-0 left-0 right-0 w-full h-full flex justify-center items-center ">
      <div className="bg-white p-4 rounded w-full max-w-xl h-full max-h-[75%] overflow-hidden">
        <div className=" flex items-center justify-between pb-2">
          <h2 className=" font-bold text-lg">Upload Product</h2>
          <div
            className=" text-4xl cursor-pointer hover:text-red-700"
            onClick={onClose}
          >
            <MdOutlineClose />
          </div>
        </div>
        <form className="grid px-3 pb-12 gap-[2px] overflow-y-scroll h-full">
          <label htmlFor="productName">Product Name :</label>
          <input
            type="text"
            id="productName"
            name="productName"
            placeholder="enter product name."
            className="p-2 bg-slate-200 border rounded"
            value={data.productName}
            onChange={handleOnChange}
          />
          <label htmlFor="brandName">Brand Name :</label>
          <input
            type="text"
            id="brandName"
            name="brandName"
            placeholder="enter brand name."
            className="p-2 bg-slate-200 border rounded"
            value={data.brandName}
            onChange={handleOnChange}
          />
          <label htmlFor="category">Category:</label>
          <select
            type="text"
            id="category"
            name="category"
            placeholder="enter category name."
            className="p-2 bg-slate-200 border rounded"
            value={data.category}
            onChange={handleOnChange}
          >
            {productCategory.map((elem) => {
              return (
                <option value={elem.value} key={elem.id}>
                  {elem.label}
                </option>
              );
            })}
          </select>
          <label htmlFor="">Product Image :</label>
          <label htmlFor="uploadImageInput">
            <div className=" p-2 bg-slate-200 border rounded h-32 w-full flex items-center justify-center">
              <div className=" text-slate-700 flex flex-col items-center justify-center cursor-pointer ">
                <span className="text-4xl">
                  <MdCloudUpload />
                </span>
                <p className="text-md">Upload Product Image</p>
                <input
                  type="file"
                  id="uploadImageInput"
                  className="hidden"
                  onChange={handleUploadProduct}
                />
              </div>
            </div>
          </label>
          <div>
            <img
              width={80}
              height={80}
              src={uploadProductImageInput}
              className="bg-slate-100"
            />
          </div>
          <label htmlFor="description">Description :</label>
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="enter description."
            className="p-2 bg-slate-200 border rounded"
            value={data.description}
            onChange={handleOnChange}
          />
          <label htmlFor="productName">Product Name :</label>
          <input
            type="textarea"
            id="productName"
            name="productName"
            placeholder="enter product Name."
            className="p-2 bg-slate-200 border rounded"
            value={data.productName}
            onChange={handleOnChange}
          />
        </form>
      </div>
    </div>
  );
}
