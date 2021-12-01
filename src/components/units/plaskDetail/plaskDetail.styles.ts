import styled from "@emotion/styled";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;
export const DetialWrap = styled.div`
  width: 850px;
  display: flex;
  flex-direction: column;
`;
export const DetailTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px 0px;
  padding-top: 15px;
`;
export const ProductImg = styled.img`
  width: 410px;
  height: 410px;
`;
export const ProductBox = styled.div`
  width: 410px;
  height: 410px;
  padding: 20px 0px;
`;
export const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ProductSubTitle = styled.div`
  font-size: 13px;
  color: #bdbdbd;
  font-weight: 600;
`;

export const RateBox = styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export const Star = styled.img``;
export const Score = styled.div`
  margin-left: 10px;
  font-size: 12px;
`;
export const Title = styled.h2`
  margin: 14px 0px 30px;
`;
export const PriceBox = styled.div``;
export const PriceSaleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
export const Sale = styled.div`
  padding-right: 10px;
  font-weight: 600;
`;
export const OriginPrice = styled.div`
  color: #bdbdbd;
  text-decoration: line-through;
`;
export const Price = styled.h2`
  color: #346aff;
  margin: 5px 0px 10px;
`;
export const GoToJoinBtn = styled.div`
  width: 100%;
  height: 45px;
  border: 1px solid #346aff;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  margin-bottom: 30px;
  cursor: pointer;
`;
export const GoToJoinText = styled.p`
  font-size: 13px;
  font-weight: 600;
`;
export const ArrowIcon = styled.img`
  width: 13px;
  transform: rotate(90deg);
`;
export const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 34px;
`;
export const SubTitle = styled.div`
  color: #777;
  font-size: 13px;
  line-height: 26px;
`;
export const CardInfoDetail = styled.div`
  padding-left: 10px;
  font-size: 13px;
  color: #777;
  display: flex;
  flex-direction: column;
  line-height: 26px;
  p {
    margin: 0px;
  }
  span {
    color: #000;
    font-weight: 600;
  }
`;
export const ButtonBox = styled.div`
  width: 100%;
  height: 46px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const CartOrBuyButton = styled.button`
  width: 48%;
  height: 100%;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 13px;

  :nth-child(1) {
    background-color: #f8f8f8;
    color: #777;
  }
  :nth-child(2) {
    background-color: #346aff;
    color: #f8f8f8;
  }
  :hover {
    font-weight: 700;
  }
`;
export const ProductDetailInfoTabs = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
export const Tabs = styled.div`
  width: 127px;
  height: 48px;
  line-height: 48px;

  text-align: center;
  :hover {
    border-bottom: 2px solid #0373e9;
    color: #0373e9;
    font-weight: 600;
  }
`;
export const ProductDetailPage = styled.div`
  width: 100%;
  padding: 80px;
  text-align: center;
  align-items: center;
  margin-top: 28px;
  background-color: #f8f8f8;
`;
