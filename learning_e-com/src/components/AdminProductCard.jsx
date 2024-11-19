import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { AdminEditProduct } from "./index";
import displayCurrency from "../helpers/DisplayCurency";

export function AdminProductCard({ data, fetchData }) {
  const [editProduct, setEditProduct] = useState(false);

  return (
    <div className="bg-slate-300 p-4 rounded">
      <div className="w-36 ">
        <div className=" w-32 h-32 flex justify-center items-center">
          <img
            src={data.productImage[0]}
            width={140}
            height={140}
            className="  mx-auto object-fill h-full"
          />
        </div>
        <div className=" mt-4">
          <h1 className=" font-semibold text-ellipsis line-clamp-1">
            {data.productName}
          </h1>
          <p className=" font-medium"> {displayCurrency(data?.sellingPrice)}</p>
          <div
            className=" w-fit ml-auto p-2 bg-green-500 hover:bg-green-700 rounded-full text-white cursor-pointer"
            onClick={() => {
              setEditProduct(true);
            }}
          >
            <MdEdit />
          </div>
        </div>
      </div>
      {editProduct && (
        <AdminEditProduct
          productData={data}
          onClose={() => {
            setEditProduct(false);
          }}
          fetchData={fetchData}
        />
      )}
    </div>
  );
}
