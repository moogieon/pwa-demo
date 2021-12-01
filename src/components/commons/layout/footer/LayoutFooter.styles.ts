import styled from "@emotion/styled";

export const FooterWrap = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;
  padding: 0px 68px;
`;
export const FooterLogo = styled.img`
  width: 100px;
  height: 15px;
  margin: 36px 0px 28px 0px;
`;
export const FooterTitle = styled.h5`
  margin: 0;
`;
export const FooterText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
export const LeftTextBox = styled.div`
  p {
    font-size: 10px;
    letter-spacing: 0.2;
    color: #888;
    margin-top: 12px;
  }
`;
export const RightTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  p {
    font-size: 10px;
    letter-spacing: 0.2;
    color: #888;
  }
`;
export const FooterBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
`;
export const FooterBtn = styled.div`
  margin-left: 10px;
  font-size: 11px;
  letter-spacing: -2;
  font-weight: 500;
  color: #000;
`;
