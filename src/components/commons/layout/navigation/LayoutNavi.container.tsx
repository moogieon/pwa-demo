import NaviWrapUI from "./LayoutNavi.presenter";
import { useRouter } from "next/router";
export default function NaviWrap() {
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
    <NaviWrapUI
      onClickHome={onClickHome}
      onClickList={onClickList}
      onClickCart={onClickCart}
    />
  );
}
