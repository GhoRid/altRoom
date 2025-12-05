import styled from "styled-components";
import { colors } from "../../../styles/color";
import { ReactComponent as TrustIcon } from "../../../assets/svgs/trust.svg";
import { ReactComponent as InnovationIcon } from "../../../assets/svgs/innovation.svg";
import { ReactComponent as ProfessionalismIcon } from "../../../assets/svgs/professionalism.svg";
import { ReactComponent as GrowthIcon } from "../../../assets/svgs/growth.svg";

const CORE_VALUES = [
  {
    key: "trust",
    label: "신뢰",
    lines: ["투명한 정보 제공과", "정직한 서비스"],
    icon: <TrustIcon />,
  },
  {
    key: "innovation",
    label: "혁신",
    lines: ["디지털 기술을 통한", "시장의 변화 선도"],
    icon: <InnovationIcon />,
  },
  {
    key: "expertise",
    label: "전문성",
    lines: ["축적된 데이터와 전문", "인력 보유"],
    icon: <ProfessionalismIcon />,
  },
  {
    key: "growth",
    label: "성장",
    lines: ["고객, 파트너와", "함께하는 발전"],
    icon: <GrowthIcon />,
  },
];

const CoreValuesSection = () => {
  return (
    <Section>
      <Inner>
        <Title>핵심가치</Title>

        <CardsRow>
          {CORE_VALUES.map((value) => (
            <Card key={value.key}>
              <IconContainer>{value.icon}</IconContainer>

              <CardLabel>{value.label}</CardLabel>

              <CardText>
                {value.lines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </CardText>
            </Card>
          ))}
        </CardsRow>
      </Inner>
    </Section>
  );
};

export default CoreValuesSection;

const Section = styled.section`
  width: 100%;
  margin-top: 80px;
  padding: 48px;
  background-color: rgb(249, 250, 251);
  border-radius: 8px;
`;

const Inner = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

const CardsRow = styled.div`
  margin-top: 56px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  padding: 32px;
  border-radius: 8px;
  background-color: #ffffff;
  /* box-shadow: 0 18px 40px rgba(0, 0, 0, 0.03); */
  border: 1px solid #f1f3f6;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconContainer = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #f6f2ed;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  color: ${colors.app_brown};
  font-size: 32px;
`;

const CardLabel = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #111827;
`;

const CardText = styled.p`
  font-size: 14px;
  color: ${colors.text_gray};
`;
