import {
  NaviWrap,
  Logo,
  MenuBox,
  Menu,
  NaviBtnBox,
  NaviBtn,
} from "./LayoutNavi.styles";

export default function NaviWrapUI(props) {
  return (
    <NaviWrap>
      <Logo src="./icon/logo.svg" onClick={props.onClickHome} />

      <MenuBox>
        <Menu onClick={props.onClickList}>New Releases</Menu>
        <Menu onClick={props.onClickList}>Men</Menu>
        <Menu onClick={props.onClickList}>Women</Menu>
        <Menu onClick={props.onClickList}>Kids</Menu>
        <Menu onClick={props.onClickList}>Sale</Menu>
      </MenuBox>

      <NaviBtnBox>
        <NaviBtn src="./icon/Heart.svg" />
        <NaviBtn src="./icon/Cart.svg" onClick={props.onClickCart} />
      </NaviBtnBox>
    </NaviWrap>
  );
}
