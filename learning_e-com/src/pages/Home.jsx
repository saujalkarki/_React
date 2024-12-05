import {
  CategoryList,
  BannerProduct,
  HorizontalCartProduct,
  VerticalCardProduct,
} from "../components/index";

export function Home() {
  return (
    <>
      <CategoryList />
      <BannerProduct />
      <HorizontalCartProduct category={"airpods"} heading={"Top's airpods"} />
      <HorizontalCartProduct
        category={"earphones"}
        heading={"Top's earphones"}
      />
      <HorizontalCartProduct category={"mobile"} heading={"Top's mobiles"} />
      <HorizontalCartProduct category={"mouse"} heading={"Top's mouse"} />
      <HorizontalCartProduct category={"printers"} heading={"Top's printers"} />
      <VerticalCardProduct />
    </>
  );
}
