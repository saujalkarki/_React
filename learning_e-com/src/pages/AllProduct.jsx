import { useEffect, useState } from "react";
import { UploadProduct } from "../components/index";
import SummaryApi from "../common/api";

export function AllProduct() {
  const [openUploadProduct, setOpenUploadProduct] = useState(false);
  const [allProduct, setAllProduct] = useState([]);

  const fetchAllProduct = async () => {
    const dataResponse = await fetch(SummaryApi.getProduct.url, {
      method: SummaryApi.getProduct.method,
    });

    const dataApi = await dataResponse.json();

    setAllProduct(dataApi?.data);
  };

  useEffect(() => {
    fetchAllProduct();
  }, []);

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

      <div className="flex items-center gap-5 p-3">
        {allProduct.map((product, index) => {
          return (
            <div key={index} className="bg-slate-300 p-4 rounded text-center">
              <img src={product.productImage[0]} width={140} height={140} />
              <h1>{product.productName}</h1>
            </div>
          );
        })}
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
