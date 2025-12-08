import styled from "styled-components";
import { colors } from "../../../styles/color";
import FadeInUpOnView from "../../../components/FadeInUpOnView";

const StatsSection = () => {
  return (
    <Section>
      <FadeInUpOnView delay={0.15}>
        <StatsInner>
          <StatItem>
            <StatNumber>100억+</StatNumber>
            <StatLabel>누적 계약액</StatLabel>
          </StatItem>

          <StatItem>
            <StatNumber>50+</StatNumber>
            <StatLabel>파트너사</StatLabel>
          </StatItem>

          <StatItem>
            <StatNumber>98%</StatNumber>
            <StatLabel>고객 만족도</StatLabel>
          </StatItem>
        </StatsInner>
      </FadeInUpOnView>
    </Section>
  );
};

export default StatsSection;

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const StatsInner = styled.div`
  width: 100%;
  max-width: 1024px;
  padding: 64px 0;
  border-radius: 16px;
  background-color: rgb(249 250 251);

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    padding: 32px 24px;
    grid-template-columns: 1fr;
    row-gap: 24px;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 36px;
  line-height: 40px;
  font-weight: 700;
  margin-bottom: 8px;
  color: ${colors.app_brown};
`;

const StatLabel = styled.div`
  font-size: 16px;
  color: #6b7280;
`;
