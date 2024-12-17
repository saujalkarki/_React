import { useEffect, useRef, useState } from "react";
import FetchCategoryWiseProduct from "../helpers/FetchCategoryWiseProduct";
import displayCurrency from "../helpers/DisplayCurency";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export function VerticalCardProduct({ category, heading }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadingList = new Array(13).fill(null);

  const [scroll, setScroll] = useState(0);
  const scrollElemnt = useRef();

  const fetChData = async () => {
    setLoading(true);
    const categoryProduct = await FetchCategoryWiseProduct(category);
    setLoading(false);

    setData(categoryProduct?.data);
  };

  useEffect(function () {
    fetChData();
  }, []);

  const scrollRight = () => {
    scrollElemnt.current.scrollLeft += 300;
  };

  const scrollLeft = () => {
    scrollElemnt.current.scrollLeft -= 300;
  };

  return (
    <div className="container mx-auto px-4 my-6">
      <h2 className="text-2xl font-semibold py-2">{heading}</h2>
      <div
        className="flex items-center gap-4 md:gap-6 overflow-x-scroll scrollbar-none transition-all"
        ref={scrollElemnt}
      >
        <button
          className="bg-white shadow-lg rounded-full m-4 absolute left-2 text-3xl hidden md:block hover:scale-110"
          onClick={scrollLeft}
        >
          <FaAngleLeft />
        </button>
        <button
          className="bg-white shadow-lg rounded-full m-4 absolute right-2 text-3xl hidden md:block hover:scale-110"
          onClick={scrollRight}
        >
          <FaAngleRight />
        </button>
        {data.map((product, index) => {
          return (
            <div
              key={index}
              className="w-full min-w-[280px] md:min-w-[400px] max-w-[280px] md:max-w-[320px] bg-white rounded-sm shadow-md"
            >
              <div className="bg-red-200 h-32 min-w-[280px] p-4 cursor-pointer flex justify-center items-center">
                <img
                  src={product.productImage[0]}
                  alt={`${index} image`}
                  className="object-scale-down h-full hover:scale-125 transition-all"
                />
              </div>
              <div className="p-4">
                <h2 className="font-medium text-base text-ellipsis line-clamp-1">
                  {product?.productName}
                </h2>
                <p className=" capitalize text-slate-600">
                  {product?.category}
                </p>
                <div className=" flex gap-3">
                  <p className="text-red-600">
                    {displayCurrency(product?.sellingPrice)}
                  </p>
                  <p className="text-slate-500 line-through">
                    {displayCurrency(product?.price)}
                  </p>
                </div>
                <button className="bg-red-500 hover:bg-red-700 text-white mt-3 px-6 py-[0.25rem] rounded-full">
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
