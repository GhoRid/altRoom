import styled from "styled-components";
import { colors } from "../../../styles/color";

const HeroSection = () => {
  return (
    <Section>
      <Title>행복한 기다림이 실현됩니다.</Title>

      <TextBlock>
        <Paragraph>
          알트룸은 인테리어 시장의 <Strong>파편화된 정보</Strong>를{" "}
          <Strong>표준화</Strong>하고
          <br />
          디지털로 전환하여 공간 모듈로 구성하였습니다.
          <br />
          <br />
          첫 번째도 신뢰성, 두 번째도 신뢰성이라는 경영이념으로
          <br />
          인테리어를 경험하는 모든 소비자들에게
          <br />
          행복한 경험을 선사하고 싶습니다.
        </Paragraph>
      </TextBlock>
    </Section>
  );
};

export default HeroSection;

const Section = styled.section`
  width: 100%;
  text-align: center;
  padding-top: 32px;
`;

const Title = styled.h1`
  font-size: 36px;
  line-height: 40px;
  font-weight: 700;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  line-height: 28px;
  color: ${colors.text_gray};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Paragraph = styled.p``;

const Strong = styled.span`
  font-weight: 700;
`;
