import { useState } from "react";
import { UploadProduct } from "../components/index";

export function AllProduct() {
  const [openUploadProduct, setOpenUploadProduct] = useState(false);

  return (
    <div>
      <div className="py-2 px-4 bg-white flex items-center justify-between">
        <h2 className=" font-bold text-lg">All Product</h2>
        <button
          className="border-2 border-red-200 rounded-lg text-red-600 bg-white px-3 py-2 hover:bg-red-600 hover:text-white transition-all"
          onClick={() => {
            setOpenUploadProduct(true);
          }}
        >
          Upload Product
        </button>
      </div>
      {openUploadProduct && (
        <UploadProduct
          onClose={() => {
            setOpenUploadProduct(false);
          }}
        />
      )}
    </div>
  );
}
