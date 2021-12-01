import { useEffect, useState } from "react";
import {
  Wrap,
  CartTitle,
  CartPageWap,
  CartListWrap,
  CartList,
  ProductInfoBox,
  ProductImg,
  ProductInfo,
  ProductName,
  ProductDelivery,
  BenefitsAndPrice,
  SubTitle,
  DeleteIcon,
  PaymentWrap,
  PayInfo,
  PayInfoBox,
  GoToPay,
} from "./plaskCart.styles";

export default function PlaskCartUI() {
  const [cart, setCart] = useState([]);
  const allPrice = cart.map((item) => item.price).reduce((a, b) => a + b, 0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("baskets") || "[]");
    setCart(items);
  }, []);

  console.log(allPrice);

  return (
    <Wrap>
      <CartPageWap>
        <CartListWrap>
          <CartTitle>홍길동님 장바구니</CartTitle>
          {cart.map((data: any) => (
            <CartList key={data._id}>
              <ProductInfoBox>
                <ProductImg src={data.product} />
                <ProductInfo>
                  <ProductName>{data.name}</ProductName>
                  <ProductDelivery>
                    {data.delivery} <span>(업체직배송)</span>
                  </ProductDelivery>
                  <BenefitsAndPrice>
                    <SubTitle>혜택</SubTitle>
                    <p>
                      <span>6,290P</span>적립 (WELCOME 0.3% 적립)
                    </p>
                  </BenefitsAndPrice>
                  <BenefitsAndPrice>
                    <SubTitle>가격</SubTitle>
                    <p>
                      <span>{data.price}원</span>할인 ({data.sale} 적용)
                    </p>
                  </BenefitsAndPrice>
                </ProductInfo>
              </ProductInfoBox>
              <DeleteIcon src="/icon/Trash.svg" />
            </CartList>
          ))}
        </CartListWrap>
        <PaymentWrap>
          <PayInfo>
            <PayInfoBox>
              <p>총 상품금액</p>
              <span>300,000원</span>
            </PayInfoBox>
            <PayInfoBox>
              <p>총 배송비</p>
              <span>0원</span>
            </PayInfoBox>
            <PayInfoBox>
              <p>총 할인금액</p>
              <span>300,000원</span>
            </PayInfoBox>
            <PayInfoBox>
              <p>결제금액</p>
              <span>
                {allPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원
              </span>
            </PayInfoBox>
          </PayInfo>
          <GoToPay>3개 상품 구매하기</GoToPay>
        </PaymentWrap>
      </CartPageWap>
    </Wrap>
  );
}
