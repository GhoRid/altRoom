import styled from "styled-components";
import backgroundImage from "../../../assets/images/Home/main.png";
import FadeInUpOnView from "../../../components/FadeInUpOnView";

const HeroSection = () => {
  return (
    <Wrapper>
      <Content>
        <FadeInUpOnView transitionHeight={40}>
          <Header>MODULE SPACE COMPANY</Header>
          <MainText>
            당신을 위한
            <br />단 하나의 공간
          </MainText>
          <SubText>
            따뜻한 소통과 완성도 있는 공간으로 보답하겠습니다.
            <br className="br-pc" />
          </SubText>

          <ButtonRow>
            <PrimaryButton>알트룸 자동견적</PrimaryButton>
            <GhostButton>서비스소개</GhostButton>
            <GhostButton>시공사례</GhostButton>
          </ButtonRow>
        </FadeInUpOnView>
      </Content>
    </Wrapper>
  );
};

export default HeroSection;

const Header = styled.h1`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  color: #fff;
`;

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #fff;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.15); /* 배경 살짝 어둡게 */
    z-index: 1;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 0 16px;
`;

const MainText = styled.h2`
  font-size: 72px;
  font-weight: 700;
  line-height: 1.375;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 50px;
  }

  @media (max-width: 425px) {
    font-size: 30px;
  }
`;

const SubText = styled.p`
  margin-top: 60px;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  color: #fff;

  .br-mobile {
    display: none;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 50px;
  }

  @media (max-width: 425px) {
    .br-mobile {
      display: inline;
    }

    .br-pc {
      display: none;
    }
  }
`;

/* 버튼 영역 */

const ButtonRow = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

const BaseButton = styled.button`
  min-width: 210px;
  padding: 16px 24px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  outline: none;

  transition: background-color 0.5s ease, color 0.5s ease,
    border-color 0.2s ease, transform 0.1s ease;

  @media (max-width: 768px) {
    min-width: 260px;
    font-size: 18px;
    padding: 18px 36px;
  }

  @media (max-width: 425px) {
    min-width: 220px;
    font-size: 16px;
    padding: 16px 28px;
  }

  &:active {
    transform: translateY(1px);
  }
`;

/* 노란색 꽉 찬 버튼 */
const PrimaryButton = styled(BaseButton)`
  background-color: rgb(250, 204, 21);
  color: #222;
  border: none;

  &:hover {
    background-color: #ffe066;
    color: #000;
  }
`;

/* 투명 배경 버튼: hover 시 흰 배경 + 검정 글씨 */
const GhostButton = styled(BaseButton)`
  background-color: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.9);

  &:hover {
    background-color: #fff;
    color: #000;
    border-color: #fff;
  }
`;
