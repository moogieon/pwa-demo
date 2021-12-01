import {
  Wrap,
  DetialWrap,
  DetailTop,
  ProductImg,
  ProductBox,
  Top,
  ProductSubTitle,
  RateBox,
  Star,
  Score,
  Title,
  PriceBox,
  PriceSaleBox,
  Sale,
  OriginPrice,
  Price,
  GoToJoinBtn,
  GoToJoinText,
  ArrowIcon,
  CardInfo,
  SubTitle,
  CardInfoDetail,
  ButtonBox,
  CartOrBuyButton,
  ProductDetailInfoTabs,
  Tabs,
  ProductDetailPage,
} from "./plaskDetail.styles";

export default function PlaskDetailUI(props: any) {
  return (
    <Wrap>
      <DetialWrap>
        <DetailTop>
          <ProductImg src={props.data?.product} />
          <ProductBox>
            <Top>
              <ProductSubTitle>{props.data?.delivery}</ProductSubTitle>
              <RateBox>
                <Star src="/icon/FillStar.svg" />
                <Score>{props.data?.rate}</Score>
              </RateBox>
            </Top>
            <Title>{props.data?.name}</Title>
            <PriceBox>
              <PriceSaleBox>
                <Sale>{props.data?.sale}</Sale>
                <OriginPrice>{props.data?.price}</OriginPrice>
              </PriceSaleBox>
              <Price>{props.data?.price}원</Price>
            </PriceBox>
            <GoToJoinBtn>
              <GoToJoinText>회원가입을 하시면 5% 할인해드려요!</GoToJoinText>
              <ArrowIcon src="/icon/Arrow.svg" />
            </GoToJoinBtn>
            <CardInfo>
              <SubTitle>혜택</SubTitle>
              <CardInfoDetail>
                <p>
                  <span>6,290P</span>적립 (WELCOME 0.3% 적립)
                  <br />
                  <span>월 10,000원</span>(7개월) 무이자할부 &gt;
                </p>
              </CardInfoDetail>
            </CardInfo>
            <ButtonBox>
              <CartOrBuyButton
                id={props.data?.id}
                onClick={props.onClickBasket(props.data)}
              >
                장바구니 담기
              </CartOrBuyButton>
              <CartOrBuyButton>바로 구매하기</CartOrBuyButton>
            </ButtonBox>
          </ProductBox>
        </DetailTop>

        <ProductDetailInfoTabs>
          <Tabs>상품 정보</Tabs>
          <Tabs>리뷰</Tabs>
          <Tabs>문의</Tabs>
          <Tabs>배송/환불</Tabs>
        </ProductDetailInfoTabs>

        <ProductDetailPage>상품 준비 중입니다.</ProductDetailPage>
      </DetialWrap>
    </Wrap>
  );
}
