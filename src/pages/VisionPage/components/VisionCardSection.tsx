import styled from "styled-components";
import { colors } from "../../../styles/color";

const VisionCardSection = () => {
  return (
    <Section>
      <CardContainer>
        <Card>
          <CardTitle>MISSION</CardTitle>
          <CardBody>
            인테리어 시장의 디지털 전환을 통해
            <br />
            투명하고 효율적인 시장 생태계를
            <br />
            만듭니다.
          </CardBody>
        </Card>

        <Card>
          <CardTitle>VISION</CardTitle>
          <CardBody>
            모든 공간의 가치를 높이는 글로벌
            <br />
            인테리어 플랫폼이 되겠습니다.
          </CardBody>
        </Card>

        <Card>
          <CardTitle>VALUE</CardTitle>
          <CardBody>
            신뢰, 혁신, 전문성을 바탕으로 고객과
            <br />
            함께 성장합니다.
          </CardBody>
        </Card>
      </CardContainer>
    </Section>
  );
};

export default VisionCardSection;

const Section = styled.section`
  width: 100%;
  padding: 96px 0 80px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  padding: 32px;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid #f1f3f6;
  transition: box-shadow 0.4s ease 0.1s;

  &:hover {
    box-shadow: 0 4px 2px rgba(0, 0, 0, 0.08);
  }
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
  color: ${colors.app_brown};
`;

const CardBody = styled.p`
  font-size: 16px;
  color: ${colors.text_gray};
`;
