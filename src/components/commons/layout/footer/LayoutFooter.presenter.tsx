import {
  FooterWrap,
  FooterLogo,
  FooterTitle,
  FooterText,
  LeftTextBox,
  RightTextBox,
  FooterBtnBox,
  FooterBtn,
} from "./LayoutFooter.styles";

export default function FooterWrapUI() {
  return (
    <FooterWrap>
      <FooterLogo src="./icon/footerLogo.png" />
      <FooterTitle>(주)라우트육십오</FooterTitle>
      <FooterText>
        <LeftTextBox>
          <p>사업자 등록번호 : 123-45-67890 | 대표 : 홍길동</p>
          <p>
            호스팅 서비스 : 주식회사 라우트육십오 | 통신판매업 신고번호 :
            2021-서울강남-123456
            <br />
            04958 서울특별시 강남구 역삼동 선릉로 551 새롬빌딩 5F
          </p>
        </LeftTextBox>
        <RightTextBox>
          <FooterBtnBox>
            <FooterBtn>서비스 이용 약관</FooterBtn>
            <FooterBtn>개인정보 처리방침</FooterBtn>
            <FooterBtn>입점/제휴 문의</FooterBtn>
          </FooterBtnBox>
          <p>Copyright&copy;라우트육십오 2010-2020 All Rights Reserved.</p>
        </RightTextBox>
      </FooterText>
    </FooterWrap>
  );
}
