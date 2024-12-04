import { useEffect, useState } from "react";
import SummaryApi from "../common/api";
import { Link } from "react-router-dom";

export function CategoryList() {
  const [productCategory, setProductCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  const categoryLoading = new Array(13).fill(null);

  const fetchProductCategory = async () => {
    setLoading(true);
    const response = await fetch(SummaryApi.productCategory.url);

    const dataResponse = await response.json();
    setLoading(false);

    setProductCategory(dataResponse.data);
  };

  useEffect(() => {
    fetchProductCategory();
  }, []);

  return (
    <div className=" container mx-auto p-4">
      <div className=" flex items-center gap-4 overflow-scroll scrollbar-none">
        {loading
          ? categoryLoading.map((el, index) => {
              return (
                <div
                  className="w-16 h-16 md:w-20 md:h-20 p-2 bg-slate-300 rounded-full overflow-hidden flex justify-center animate-pulse"
                  key={index}
                ></div>
              );
            })
          : productCategory.map((product, index) => {
              return (
                <Link
                  to={`/categoryproduct/${product?.category}`}
                  key={index}
                  className="cursor-pointer"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 p-2 bg-slate-300 rounded-full overflow-hidden flex justify-center">
                    <img
                      src={product?.productImage[0]}
                      alt={product?.category}
                      className=" object-scale-down mix-blend-multiply hover:scale-125 transition-all"
                    />
                  </div>
                  <p className="text-center text-sm md:text-base capitalize">
                    {product?.category}
                  </p>
                </Link>
              );
            })}
      </div>
    </div>
  );
}
