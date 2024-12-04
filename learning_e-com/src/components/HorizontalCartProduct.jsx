import { useEffect, useState } from "react";
import FetchCategoryWiseProduct from "../helpers/FetchCategoryWiseProduct";

export function HorizontalCartProduct({ category, heading }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadingList = new Array(13).fill(null);

  const fetChData = async () => {
    setLoading(true);
    const categoryProduct = await FetchCategoryWiseProduct(category);
    setLoading(false);

    setData(categoryProduct?.data);
  };

  useEffect(function () {
    fetChData();
  }, []);

  return (
    <div className="container mx-auto px-4 my-6">
      <h2 className="text-2xl font-semibold py-2">{heading}</h2>
      {data.map((product, index) => {
        return (
          <div
            key={index}
            className="w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow-md"
          >
            <div className="bg-slate-300 h-full p-2 min-w-[120px] md:min-w-[145px]">
              <img src={product.productImage} alt="" />
            </div>
            <div></div>
          </div>
        );
      })}
    </div>
  );
}
