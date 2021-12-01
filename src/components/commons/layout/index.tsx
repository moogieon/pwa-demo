import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavi from "./navigation/LayoutNavi.container";
import LayoutSideMenu from "./sideMenu/LayoutSideMenu.container";
import LayoutFooer from "./footer/LayoutFooter.container";
import { ReactNode } from "react";
import { useRouter } from "next/router";

interface IProps {
  children: ReactNode;
}
const AllWrapper = styled.div`
  width: 100%;
  /* padding: 0px 50px; */
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const HIDDEN_URL = ["/plaskCart", "/plaskHome", "/plaskDetail"];

export default function Layout(props: any) {
  const router = useRouter();
  const isHidden = HIDDEN_URL.join().includes(router.pathname);

  return (
    <AllWrapper>
      <LayoutHeader />
      <LayoutNavi />
      <Wrapper>
        {!isHidden && <LayoutSideMenu />}
        <Body>{props.children}</Body>
      </Wrapper>
      <LayoutFooer />
    </AllWrapper>
  );
}
