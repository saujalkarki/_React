import {
  CategoryList,
  BannerProduct,
  HorizontalCartProduct,
} from "../components/index";

export function Home() {
  return (
    <>
      <CategoryList />
      <BannerProduct />
      <HorizontalCartProduct category={"airpodes"} heading={"Top's airpods"} />
    </>
  );
}
