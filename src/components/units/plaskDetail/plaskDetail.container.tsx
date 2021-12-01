import PlaskDetailUI from "./plaskDetail.presenter";
import { itemList } from "../../commons/dataList/DataList.container";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PlaskDetail() {
  const router = useRouter();
  const [itemDetail, setItemDetail] = useState([] as any);
  useEffect(() => {
    setItemDetail(router.query.plaskDetailPages);
  }, []);
  const data = itemList[itemDetail];

  // ---- 장바구니 담기 ----
  const onClickBasket = (basketData: any) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    let isExists = false;
    baskets.forEach((data: any) => {
      if (data._id === basketData._id) isExists = true;
    });
    if (isExists) return;
    baskets.push(basketData);
    localStorage.setItem("baskets", JSON.stringify(baskets));
    alert("상품이 장바구니에 담겼습니다.");
    console.log("장바구니 확인:", basketData);
    router.push("./plaskCart");
  };

  return <PlaskDetailUI data={data} onClickBasket={onClickBasket} />;
}
