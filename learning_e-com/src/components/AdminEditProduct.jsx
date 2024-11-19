import { useState } from "react";
import { MdOutlineClose, MdCloudUpload, MdDelete } from "react-icons/md";
import productCategory from "../helpers/ProductCategory";
import UploadImage from "../helpers/UploadImage";
import { DisplayImage } from "../components/index";
import SummaryApi from "../common/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function AdminEditProduct({ onClose, productData, fetchData }) {
  const navigate = useNavigate();
  const [data, setData] = useState({
    ...productData,
    productName: productData?.productName,
    brandName: productData?.brandName,
    category: productData?.category,
    productImage: productData?.productImage,
    description: productData?.description,
    price: productData?.price,
    sellingPrice: productData?.sellingPrice,
  });

  const [fullScreenImage, setFullScreenImage] = useState("");
  const [openFullScreenImage, setOpenFullScreenImage] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleUploadProduct = async (e) => {
    const file = e.target.files[0];
    const uploadImageCloudinary = await UploadImage(file);

    setData((prev) => {
      return {
        ...prev,
        productImage: [...prev.productImage, uploadImageCloudinary.url],
      };
    });
  };

  const handleDeleteProductImage = async (index) => {
    const newProductImage = [...data.productImage];
    newProductImage.splice(index, 1);

    setData((prev) => {
      return {
        ...prev,
        productImage: [...newProductImage],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataResponse = await fetch(SummaryApi.updateProduct.url, {
      method: SummaryApi.updateProduct.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataApi = await dataResponse.json();

    if (dataApi.status === "Success") {
      toast.success(dataApi?.message);
      onClose();
      fetchData();
    }

    if (dataApi.status === "Error") {
      toast.error(dataApi?.message);
    }
  };

  return (
    <div className="fixed bg-slate-300 bg-opacity-40 top-0 bottom-0 left-0 right-0 w-full h-full flex justify-center items-center ">
      <div className="bg-white p-4 rounded w-full max-w-xl h-full max-h-[75%] overflow-hidden">
        <div className=" flex items-center justify-between pb-2">
          <h2 className=" font-bold text-lg">Edit Product</h2>
          <div
            className=" text-4xl cursor-pointer hover:text-red-700"
            onClick={onClose}
          >
            <MdOutlineClose />
          </div>
        </div>
        <form
          className="grid px-3 pb-12 gap-[2px] overflow-y-scroll h-full"
          onSubmit={handleSubmit}
        >
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
            <option value="">Select Category</option>
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
          <div className="flex gap-2 p-2">
            {data?.productImage[0] ? (
              data.productImage.map((elem, index) => {
                return (
                  <div className="relative group" key={index}>
                    <img
                      width={80}
                      height={80}
                      src={elem}
                      alt={elem}
                      className="bg-slate-100 cursor-pointer"
                      onClick={() => {
                        setOpenFullScreenImage(true);
                        setFullScreenImage(elem);
                      }}
                    />
                    <div
                      className="absolute bottom-0 right-0 text-lg p-1 bg-red-700 text-white rounded-full cursor hidden group-hover:block"
                      onClick={() => {
                        handleDeleteProductImage(index);
                      }}
                    >
                      <MdDelete />
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-red-600 text-md">
                *please upload product image
              </p>
            )}
          </div>
          <label htmlFor="description">Description :</label>
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="enter product description."
            rows={3}
            className="h-28 p-2 bg-slate-200 border rounded resize-none"
            value={data.description}
            onChange={handleOnChange}
          />
          <label htmlFor="price">Price :</label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="enter price."
            className="p-2 bg-slate-200 border rounded"
            value={data.price}
            onChange={handleOnChange}
          />
          <label htmlFor="sellingPrice">Selling price :</label>
          <input
            type="number"
            id="sellingPrice"
            name="sellingPrice"
            placeholder="enter selling price."
            className="p-2 bg-slate-200 border rounded"
            value={data.sellingPrice}
            onChange={handleOnChange}
          />

          <button className=" mt-3 px-2 py-3 text-white border bg-red-600 hover:bg-red-800 rounded-lg">
            Update Product
          </button>
        </form>
      </div>
      {openFullScreenImage && (
        <DisplayImage
          onClose={() => {
            setOpenFullScreenImage(false);
          }}
          imageUrl={fullScreenImage}
        />
      )}
    </div>
  );
}
