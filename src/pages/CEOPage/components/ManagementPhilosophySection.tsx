import styled from "styled-components";
import FadeInUpOnView from "../../../components/FadeInUpOnView";

const ManagementPhilosophySection = () => {
  return (
    <PhilosophyWrapper>
      <FadeInUpOnView threshold={0.1}>
        <PhilosophyCard>
          <PhilosophyTitle>경영 이념</PhilosophyTitle>
          <PhilosophySubtitle>
            “모든 공간에는 이야기가 있습니다”
          </PhilosophySubtitle>
          <PhilosophyText>
            알트룸은 각 공간이 가진 고유한 가치를 이해하고,
            <br />
            그 공간에 담길 삶의 이야기를 소중히 생각합니다.
            <br />
            우리는 단순한 인테리어가 아닌, 삶의 질을 높이는
            <br />
            의미 있는 공간을 만들어가고자 합니다.
          </PhilosophyText>
        </PhilosophyCard>

        <ValuesRow>
          <ValueItem>
            <ValueTitle>공간 가치</ValueTitle>
            <ValueText>
              각 공간의 고유한
              <br />
              스토리 창출
            </ValueText>
          </ValueItem>

          <ValueItem>
            <ValueTitle>투명성</ValueTitle>
            <ValueText>
              정직한 프로세스와
              <br />
              명확한 커뮤니케이션
            </ValueText>
          </ValueItem>

          <ValueItem>
            <ValueTitle>혁신</ValueTitle>
            <ValueText>
              디지털 기술을 통한
              <br />
              새로운 경험 제공
            </ValueText>
          </ValueItem>
        </ValuesRow>
      </FadeInUpOnView>
    </PhilosophyWrapper>
  );
};

export default ManagementPhilosophySection;

const PhilosophyWrapper = styled.section`
  width: 100%;
  margin-top: 80px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;

const PhilosophyCard = styled.div`
  width: 100%;
  padding: 80px 40px;
  background: #f7f8f9;
  border-radius: 8px;
  text-align: center;
`;

const PhilosophyTitle = styled.h2`
  font-size: 24px;
  line-height: 1.4;
  font-weight: 700;
  margin-bottom: 20px;
`;

const PhilosophySubtitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 28px;
`;

const PhilosophyText = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #555;
`;

const ValuesRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }
`;

const ValueItem = styled.div`
  flex: 1;
`;

const ValueTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const ValueText = styled.div`
  font-size: 15px;
  line-height: 1.7;
  color: #666;
`;
