import styled from "styled-components";
import { colors } from "../../../styles/color";

const PartnersSection = () => {
  return (
    <Wrapper>
      {/* 자재 */}
      <CategoryBlock>
        <CategoryTitle>자재</CategoryTitle>
        <CardGrid>
          {[
            "LX하우시스",
            "영림",
            "대림",
            "아메리칸 스탠다드",
            "이건",
            "예림",
          ].map((item) => (
            <Card key={item}>{item}</Card>
          ))}
        </CardGrid>
      </CategoryBlock>

      {/* 가구/가전 */}
      <CategoryBlock>
        <CategoryTitle>가구/가전</CategoryTitle>
        <CardGrid>
          {["삼성전자", "LG전자", "일룸", "한샘", "에이스침대", "시몬스"].map(
            (item) => (
              <Card key={item}>{item}</Card>
            )
          )}
        </CardGrid>
      </CategoryBlock>

      {/* 시공 */}
      <CategoryBlock>
        <CategoryTitle>시공</CategoryTitle>
        <CardGrid>
          {["알트룸 파트너스", "알트룸 시공팀"].map((item) => (
            <Card key={item}>{item}</Card>
          ))}
        </CardGrid>
      </CategoryBlock>
    </Wrapper>
  );
};

export default PartnersSection;

/* ---------------- Styled Components ---------------- */

const Wrapper = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 80px 0;

  display: flex;
  flex-direction: column;
  gap: 120px;
`;

const CategoryBlock = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const CategoryTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

const CardGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 20px;
  justify-items: center;
`;

const Card = styled.div`
  width: 100%;

  height: 110px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: 500;
  color: #374151;

  transition: box-shadow 0.25s ease, transform 0.25s ease,
    border-color 0.25s ease, color 0.25s ease, background-color 0.25s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
    background: #f9fafb;
    border-color: ${colors.app_brown};
    color: ${colors.app_brown};
  }
`;
