import styled from "styled-components";
import { ReactComponent as AltRommTextLogo } from "../assets/svgs/altRommTextLogo.svg";
import { ReactComponent as InstagramLogo } from "../assets/svgs/instagram.svg";
import { ReactComponent as NaverBlogLogo } from "../assets/svgs/naverBlog.svg";

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <Top>
          <Left>
            <AltRommTextLogo />
            <SnsRow>
              <InstagramLogo color="#9ca3af" />
              <NaverBlogLogo color="#9ca3af" width={20} height={20} />
            </SnsRow>
          </Left>

          <Middle>
            <SectionTitle>회사 정보</SectionTitle>
            <InfoRow>상호: 미하우스 주식회사</InfoRow>
            <InfoRow>대표이사: 장재근</InfoRow>
            <InfoRow>사업자등록번호: 642-81-03173</InfoRow>
            <InfoRow>
              주소: 광주광역시 동구제봉로110번길7,3층302호(장동)
            </InfoRow>
          </Middle>

          <Right>
            <CallTitle>고객센터</CallTitle>
            <CallNumber>1544-0000</CallNumber>
            <CallInfo>
              평일 09:00 - 18:00{"\n"}
              점심시간 12:00 - 13:00{"\n"}
              주말 및 공휴일 휴무
            </CallInfo>
          </Right>
        </Top>

        <Bottom>
          <BottomLeft>
            <BottomLink type="button">이용약관</BottomLink>
            <BottomLink type="button">개인정보처리방침</BottomLink>
            <BottomLink type="button">사업자정보확인</BottomLink>
          </BottomLeft>
          <Copyright>© 2025 Altroom. All rights reserved.</Copyright>
        </Bottom>
      </Content>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  background-color: #000;

  color: #fff;
  font-size: 14px;

  @media (max-width: 1024px) {
    padding: 40px 32px 28px;
  }

  @media (max-width: 640px) {
    padding: 32px 20px 24px;
  }
`;

const Content = styled.div`
  padding: 48px 16px;
  margin: 0 90px;
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-around;
  align-items: flex-start;
  padding-bottom: 28px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SnsRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const SnsIcon = styled.a`
  width: 28px;
  height: 28px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: #f5f5f5;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
    color: #000;
  }
`;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 260px;
  max-width: 480px;
`;

const SectionTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const InfoRow = styled.p`
  font-size: 13px;
  line-height: 1.6;
  color: #9ca3af;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 220px;
`;

const CallTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const CallNumber = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const CallInfo = styled.p`
  font-size: 13px;
  line-height: 1.7;
  color: #cccccc;
  white-space: pre-line;
`;

const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  gap: 12px 24px;
  justify-content: space-between;
  align-items: center;
`;

const BottomLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
`;

const BottomLink = styled.button`
  padding: 0;
  border: none;
  background: none;
  font-size: 14px;
  color: #b3b3b3;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const BottomDivider = styled.span`
  width: 1px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.3);
`;

const Copyright = styled.p`
  font-size: 12px;
  color: #777777;
  text-align: right;
`;
