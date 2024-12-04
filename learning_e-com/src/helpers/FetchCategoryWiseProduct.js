import SummaryApi from "../common/api";

async function FetchCategoryWiseProduct(category) {
  const response = await fetch(SummaryApi.categoryproduct.url, {
    method: SummaryApi.categoryproduct.method,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      category: category,
    }),
  });

  const dataResponse = await response.json();

  return dataResponse;
}

export default FetchCategoryWiseProduct;
