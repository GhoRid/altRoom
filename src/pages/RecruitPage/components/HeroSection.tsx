import styled from "styled-components";
import { colors } from "../../../styles/color";
import FadeInUpOnView from "../../../components/FadeInUpOnView";

const HeroSection = () => {
  return (
    <Section>
      <FadeInUpOnView threshold={0.1}>
        <Title>
          인테리어 시장의 혁신을 일으킬
          <br />
          열정있는 인재들 다 모여라.
        </Title>

        <TextBlock>
          <Paragraph>투명하고 정직한 인테리어 시장을 만들겠습니다.</Paragraph>
        </TextBlock>
      </FadeInUpOnView>
    </Section>
  );
};

export default HeroSection;

const Section = styled.section`
  width: 100%;
  text-align: center;
  padding-top: 28px;
`;

const Title = styled.h1`
  font-size: 36px;
  line-height: 40px;
  font-weight: 700;
  margin-bottom: 36px;

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
