import {
  SideMenuWrap,
  MenuTitle,
  MenuList,
  ListTitleBox,
  ListTitle,
  ListOpenBtn,
  ListText,
  Bar,
} from "./LayoutSideMenu.styles";

export default function SideMenuWrapUI() {
  return (
    <SideMenuWrap>
      <MenuTitle>New Releases</MenuTitle>
      <MenuList>
        <ListTitleBox>
          <ListTitle>2021년 신상 의류</ListTitle>
          <ListOpenBtn src="/icon/Arrow.svg" />
        </ListTitleBox>
        <ListText>탑 & 티셔츠</ListText>
        <ListText>숏팬츠</ListText>
        <ListText>후디 & 크루</ListText>
        <ListText>팬츠 & 타이츠</ListText>
        <ListText>재킷 & 베스트</ListText>
        <ListText>셔츠</ListText>
        <ListText>데일리 정장</ListText>
        <ListText>양말</ListText>
      </MenuList>
      <Bar />
      <MenuList>
        <ListTitleBox>
          <ListTitle>2020년 일반 상품</ListTitle>
          <ListOpenBtn src="/icon/Arrow.svg" />
        </ListTitleBox>
        <ListText>탑 & 티셔츠</ListText>
        <ListText>숏팬츠</ListText>
        <ListText>후디 & 크루</ListText>
      </MenuList>
    </SideMenuWrap>
  );
}
