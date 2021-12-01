import { useRouter } from "next/router";
import {
  NaviWrap,
  Logo,
  MenuBox,
  Menu,
  NaviBtnBox,
  NaviBtn,
} from "./LayoutNavi.styles";

export default function NaviWrapUI() {
  const router = useRouter();
  const onClickHome = () => {
    router.push("../plaskHome");
  };
  const onClickList = () => {
    router.push("../plaskList");
  };
  const onClickCart = () => {
    router.push("../plaskCart");
  };

  return (
    <NaviWrap>
      <Logo src="./icon/logo.svg" onClick={onClickHome} />

      <MenuBox>
        <Menu onClick={onClickList}>New Releases</Menu>
        <Menu onClick={onClickList}>Men</Menu>
        <Menu onClick={onClickList}>Women</Menu>
        <Menu onClick={onClickList}>Kids</Menu>
        <Menu onClick={onClickList}>Sale</Menu>
      </MenuBox>

      <NaviBtnBox>
        <NaviBtn src="./icon/Heart.svg" />
        <NaviBtn src="./icon/Cart.svg" onClick={onClickCart} />
      </NaviBtnBox>
    </NaviWrap>
  );
}
