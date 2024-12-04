import { useParams } from "react-router-dom";

export function CategoryProduct() {
  const params = useParams();
  console.log(params.categoryName);

  return <h1>Category Page --- {params.categoryName} </h1>;
}
