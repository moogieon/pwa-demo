import styled from "@emotion/styled";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const BoxWrap = styled.div`
  width: 1264px;
  display: flex;
  flex-direction: row;
  text-align: center;
  padding: 56px 0px;
`;
export const HomeBoxLeft = styled.div`
  width: 274px;
  height: 600px;
  cursor: pointer;
  background: url("./image/1.png");

  line-height: 600px;
  color: #fff;
`;
export const HomeBoxRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #fff;
`;
export const SmallBox = styled.div`
  margin-left: 56px;
  width: 274px;
  height: 274px;
  cursor: pointer;
  background-color: lightgreen;
  line-height: 274px;
  /* display: flex;
  flex-direction: column;
  span {
    color: #fff;
  }
  p {
    color: #fff;
  } */

  :nth-child(1) {
    background-image: url("./image/2.png");
  }
  :nth-child(2) {
    background-image: url("./image/4.png");
  }
  :nth-child(3) {
    background-image: url("./image/6.png");
  }
`;
export const BottomSmallBox = styled.div`
  margin-left: 56px;
  width: 274px;
  height: 274px;
  cursor: pointer;
  background-image: url("./image/3.png");
  line-height: 274px;
`;
export const LongBox = styled.div`
  width: 604px;
  height: 274px;
  background-color: lightyellow;
  background-image: url("./image/5.png");
  cursor: pointer;
  line-height: 274px;
`;
