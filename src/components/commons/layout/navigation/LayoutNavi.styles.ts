import styled from "@emotion/styled";

export const NaviWrap = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e2e1e1;
  padding: 0px 68px;
  /* position: relative; */
`;
export const Logo = styled.img`
  width: 130px;
  height: 20px;
  cursor: pointer;
`;
export const MenuBox = styled.div`
  width: 490px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding: 10px 20px;
`;
export const Menu = styled.p`
  margin: 0px;
  font-weight: 600;
  cursor: pointer;
  :hover {
    color: #2b2963;
    border-bottom: 1px solid #2b2963;
  }
`;

export const NaviBtnBox = styled.div``;
export const NaviBtn = styled.img`
  width: 32px;
  margin-left: 30px;
  cursor: pointer;
`;
