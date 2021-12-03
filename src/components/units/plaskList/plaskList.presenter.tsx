import {
  Wrap,
  ListSubTitle,
  ListTitle,
  ListButtonBox,
  ListBtn,
  ProductWrap,
  ProductBox,
  ProductImg,
  ProductSubTitle,
  ProductName,
  PriceBox,
  Sale,
  Price,
  RateBox,
  Star,
  Score,
} from "./plaskList.styles";
import { itemList } from "../../commons/dataList/DataList.container";
import { useRouter } from "next/router";

export default function PlaskListUI() {
  const router = useRouter();
  const onClickDetail = (datalist) => () => {
    console.log("확인용 콘솔 :", datalist);
    console.log("돼라! 콘솔 :", itemList[datalist]);
    router.push(`./plaskDetail/${itemList[datalist]._id}`);
  };

  return (
    <Wrap>
      <ListSubTitle>2021년 신상 의류</ListSubTitle>
      <ListTitle>데일리 정장</ListTitle>
      <ListButtonBox>
        <ListBtn>낮은 가격</ListBtn>
        <ListBtn>높은 가격</ListBtn>
        <ListBtn>평점</ListBtn>
        <ListBtn>최신순</ListBtn>
      </ListButtonBox>
      <ProductWrap>
        {itemList.map((data) => (
          <ProductBox
            key={data?._id}
            id={data?._id}
            onClick={onClickDetail(data._id)}
          >
            <ProductImg src={data?.product} />
            <ProductSubTitle>{data?.delivery}</ProductSubTitle>
            <ProductName>{data?.name}</ProductName>
            <PriceBox>
              <Sale>{data.sale}</Sale>
              <Price>{data.price}</Price>
            </PriceBox>
            <RateBox>
              <Star src="./icon/FillStar.svg" />
              <Score>{data.rate}</Score>
            </RateBox>
          </ProductBox>
        ))}
      </ProductWrap>
    </Wrap>
  );
}
