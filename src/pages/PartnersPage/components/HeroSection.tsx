import styled from "styled-components";
import { colors } from "../../../styles/color";
import FadeInUpOnView from "../../../components/FadeInUpOnView";

const HeroSection = () => {
  return (
    <Section>
      <FadeInUpOnView>
        <Title>파트너스</Title>
        <SubTitle>알트룸과 함께 하고 있는 파트너사 입니다.</SubTitle>
        <Paragraph>
          자재, 상품, 이사, 청소, 시공등 우수품질의 대기업과
          <br />
          혁신적인 스타트업까지 다양한 분야의 선두주자들이
          <br />
          알트룸의 가치관을 이해하고 함께하고 있습니다.
        </Paragraph>
      </FadeInUpOnView>
    </Section>
  );
};

export default HeroSection;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;

  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  line-height: 40px;
  font-weight: 700;
  margin-bottom: 32px;
`;

const SubTitle = styled.h3`
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
  color: ${colors.app_brown};
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${colors.text_gray};
  text-align: center;
  margin-top: 24px;
`;
