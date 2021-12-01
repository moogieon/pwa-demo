import { useRouter } from "next/router";
import {
  Wrap,
  BoxWrap,
  HomeBoxLeft,
  HomeBoxRight,
  Box,
  SmallBox,
  BottomSmallBox,
  LongBox,
} from "./plaskHome.styles";

export default function PlaskHomeUI() {
  const router = useRouter();
  const onClickNew = () => {
    router.push("./plaskList");
  };

  return (
    <Wrap>
      <BoxWrap>
        <HomeBoxLeft onClick={onClickNew}>New Releases</HomeBoxLeft>
        <HomeBoxRight>
          <Box>
            <SmallBox onClick={onClickNew}>Women</SmallBox>
            <SmallBox onClick={onClickNew}>Men</SmallBox>
            <SmallBox onClick={onClickNew}>Kids</SmallBox>
          </Box>
          <Box>
            <BottomSmallBox onClick={onClickNew}>Sale</BottomSmallBox>
            <LongBox>준비 중입니다.</LongBox>
          </Box>
        </HomeBoxRight>
      </BoxWrap>
    </Wrap>
  );
}
