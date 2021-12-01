import styled from "@emotion/styled";

export const Wrap = styled.div`
  width: 100%;
  padding: 0px 68px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
`;
export const CartTitle = styled.div`
  width: 850px;
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 26px;
  border-bottom: 1px solid #eee;
`;
export const CartPageWap = styled.div`
  display: flex;
  flex-direction: row;
`;
export const CartListWrap = styled.div`
  width: 850px;
  display: flex;
  flex-direction: column;
`;
export const CartList = styled.div`
  width: 100%;
  border-bottom: 1px solid #eee;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ProductInfoBox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ProductImg = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 5px;
  margin: 16px;
  margin-left: 0;
`;
export const ProductInfo = styled.div`
  margin: 16px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ProductName = styled.h4`
  margin: 0;
`;
export const ProductDelivery = styled.p`
  font-size: 13px;
  margin: 0;
  font-weight: 600;
  color: #666;
  padding-bottom: 10px;
  span {
    font-weight: 500;
    color: #999;
  }
`;
export const BenefitsAndPrice = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  color: #888;
  p {
    margin: 0;
  }
  span {
    color: #000;
  }
`;
export const SubTitle = styled.p`
  margin: 0px;
  padding-right: 10px;
  color: #888;
`;
export const DeleteIcon = styled.img`
  cursor: pointer;
`;

// !-- 우측 결제정보 Start --
export const PaymentWrap = styled.div`
  width: 290px;
  margin-left: 38px;
  display: flex;
  flex-direction: column;
  margin-top: 58px;
`;
export const PayInfo = styled.div`
  width: 100%;
  height: 217px;
  background-color: #f8f8f8;
  border-radius: 5px;
  padding: 22px;
`;
export const PayInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0px;
  font-size: 14px;
  p {
    color: #777;
    font-weight: 500;
    margin: 0;
  }
  span {
    font-weight: 600;
  }
`;
export const GoToPay = styled.button`
  width: 100%;
  height: 56px;
  background-color: #346aff;
  border-radius: 3px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  border: none;
  margin-top: 20px;
  :hover {
    background-color: #1c54f0;
  }
`;
