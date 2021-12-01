import { HeaderWrap, ButtonWrap, HeaderBtn } from "./LayoutHeader.styles";

export default function HeaderWrapUI() {
  return (
    <HeaderWrap>
      <ButtonWrap>
        <HeaderBtn>고객센터</HeaderBtn>
        <HeaderBtn>사이트맵</HeaderBtn>
        <HeaderBtn>로그인</HeaderBtn>
      </ButtonWrap>
    </HeaderWrap>
  );
}
