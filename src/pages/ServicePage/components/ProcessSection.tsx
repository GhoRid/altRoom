import styled from "styled-components";

const ProcessSection = () => {
  return (
    <SectionGray>
      <SectionInner>
        <SectionHeader>
          <SectionKicker>이용 절차</SectionKicker>
          <SectionTitle>알트룸 서비스 진행 단계</SectionTitle>
        </SectionHeader>

        <ProcessTimeline>
          <ProcessItem>
            <ProcessCircle>1</ProcessCircle>
            <ProcessTitle>온라인 자동 견적</ProcessTitle>
            <ProcessBody>
              공간 정보와 희망 공사 범위를 입력하면 실시간으로 대략적인 견적을
              확인합니다.
            </ProcessBody>
          </ProcessItem>
          <ProcessItem>
            <ProcessCircle>2</ProcessCircle>
            <ProcessTitle>비대면 3D 상담</ProcessTitle>
            <ProcessBody>
              전문 상담 매니저와 함께 3D 화면을 보며 마감 재와 옵션을 조정하고
              최종안을 논의합니다.
            </ProcessBody>
          </ProcessItem>
          <ProcessItem>
            <ProcessCircle>3</ProcessCircle>
            <ProcessTitle>샘플박스 수령</ProcessTitle>
            <ProcessBody>
              상담에서 결정한 마감 재질을 샘플박스로 받아 실제 공간의
              조명&nbsp;환경에서 비교해 봅니다.
            </ProcessBody>
          </ProcessItem>
          <ProcessItem>
            <ProcessCircle>4</ProcessCircle>
            <ProcessTitle>계약 및 시공 진행</ProcessTitle>
            <ProcessBody>
              최종 견적과 시공 일정을 온라인으로 확정하고, 현장 시공까지
              순차적으로 진행됩니다.
            </ProcessBody>
          </ProcessItem>
        </ProcessTimeline>
      </SectionInner>
    </SectionGray>
  );
};

export default ProcessSection;

const SectionHero = styled.section`
  padding: 96px 16px 80px;
  background: linear-gradient(135deg, #f5f7fb 0%, #ffffff 60%, #eef2ff 100%);
`;

const SectionWhite = styled.section`
  padding: 88px 16px;
  background-color: #ffffff;
`;

const SectionGray = styled.section`
  padding: 88px 16px;
  background-color: #f7f7f9;
`;

const SectionCTA = styled.section`
  padding: 72px 16px 96px;
  background: #111827;
  color: #f9fafb;
`;

const SectionInner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

const HeroInner = styled(SectionInner)`
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
  gap: 56px;
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const HeroTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const HeroTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: rgba(15, 23, 42, 0.04);
  color: #4b5563;
`;

const HeroTitle = styled.h1`
  font-size: 34px;
  line-height: 1.25;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #111827;

  span {
    color: #4f46e5;
  }

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const HeroDescription = styled.p`
  font-size: 15px;
  line-height: 1.8;
  color: #4b5563;
`;

const HeroStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 8px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const StatItem = styled.div`
  padding: 12px 14px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(148, 163, 184, 0.3);
  backdrop-filter: blur(6px);
`;

const StatLabel = styled.div`
  font-size: 11px;
  color: #6b7280;
  margin-bottom: 4px;
`;

const StatValue = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #111827;
`;

const HeroVisual = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 960px) {
    justify-content: flex-start;
  }
`;

const HeroCard = styled.div`
  max-width: 360px;
  width: 100%;
  padding: 20px 22px;
  border-radius: 20px;
  background: #111827;
  color: #f9fafb;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.35);
`;

const HeroCardTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const HeroCardBody = styled.p`
  font-size: 13px;
  line-height: 1.7;
  color: #e5e7eb;
`;

const HeroPillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
`;

const HeroPill = styled.span`
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 11px;
  background: rgba(249, 250, 251, 0.08);
  border: 1px solid rgba(249, 250, 251, 0.16);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const SectionKicker = styled.div`
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #6b7280;
  margin-bottom: 10px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #111827;
`;

const SectionDescription = styled.p`
  margin-top: 12px;
  font-size: 14px;
  line-height: 1.8;
  color: #4b5563;
`;

const IntroGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  margin-top: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const IntroCard = styled.div`
  padding: 24px 22px;
  border-radius: 18px;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
`;

const IntroLabel = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #a1a1aa;
  margin-bottom: 6px;
`;

const IntroTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 8px;
`;

const IntroBody = styled.p`
  font-size: 13px;
  line-height: 1.7;
  color: #4b5563;
  margin-bottom: 10px;
`;

const IntroList = styled.ul`
  margin-top: 6px;
  padding-left: 14px;

  li {
    font-size: 12px;
    color: #6b7280;
    line-height: 1.8;
    list-style: disc;
  }
`;

const FeatureGrid = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const FeatureCard = styled.div`
  padding: 22px 20px;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  background-color: #ffffff;
`;

const FeatureTitle = styled.h3`
  font-size: 15px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 8px;
`;

const FeatureBody = styled.p`
  font-size: 13px;
  line-height: 1.7;
  color: #4b5563;
`;

const ProcessTimeline = styled.div`
  margin-top: 36px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const ProcessItem = styled.div`
  position: relative;
  padding: 22px 20px 20px;
  border-radius: 18px;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
`;

const ProcessCircle = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  color: #4f46e5;
  background: rgba(79, 70, 229, 0.08);
  margin-bottom: 10px;
`;

const ProcessTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 6px;
`;

const ProcessBody = styled.p`
  font-size: 13px;
  line-height: 1.7;
  color: #4b5563;
`;

const CTAInner = styled(SectionInner)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CTATextBlock = styled.div`
  max-width: 560px;
`;

const CTATitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin-bottom: 10px;
`;

const CTABody = styled.p`
  font-size: 14px;
  line-height: 1.8;
  color: #e5e7eb;
`;

const CTAButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const CTAButtonBase = styled.button`
  border-radius: 999px;
  padding: 10px 18px;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid transparent;
  transition: background-color 0.18s ease, color 0.18s ease,
    border-color 0.18s ease;
`;

const CTAButtonPrimary = styled(CTAButtonBase)`
  background-color: #f97316;
  border-color: #f97316;
  color: #111827;

  &:hover {
    background-color: #fb923c;
    border-color: #fb923c;
  }
`;

const CTAButtonSecondary = styled(CTAButtonBase)`
  background-color: transparent;
  border-color: rgba(249, 250, 251, 0.4);
  color: #f9fafb;

  &:hover {
    background-color: rgba(249, 250, 251, 0.06);
  }
`;
