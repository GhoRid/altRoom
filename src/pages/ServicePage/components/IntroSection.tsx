import styled from "styled-components";

const IntroSection = () => {
  return (
    <SectionGray>
      <SectionInner>
        <SectionHeader>
          <SectionKicker>알트룸 서비스 특징</SectionKicker>
          <SectionTitle>언제 어디서든, 시공 상담을 온라인으로</SectionTitle>
          <SectionDescription>
            알트룸은 오프라인 방문 없이도 견적부터 상담, 자재 선택,
            시공&nbsp;이미지 확인까지
            <br />
            모든 과정을 온라인으로 이어주는 원스톱 인테리어 상담 서비스를
            제공합니다.
          </SectionDescription>
        </SectionHeader>

        <IntroGrid>
          <IntroCard>
            <IntroLabel>01</IntroLabel>
            <IntroTitle>실시간 온라인 견적 시스템</IntroTitle>
            <IntroBody>
              기본 정보 입력만으로 공사 범위와 자재에 맞는 견적을 바로 확인할 수
              있습니다.
            </IntroBody>
            <IntroList>
              <li>도면/평형/공간 용도에 따른 자동 계산</li>
              <li>옵션 변경 시 실시간 금액 반영</li>
              <li>상담 이력 저장 및 다시 불러오기</li>
            </IntroList>
          </IntroCard>

          <IntroCard>
            <IntroLabel>02</IntroLabel>
            <IntroTitle>비대면 3D 상담 서비스</IntroTitle>
            <IntroBody>
              온라인 화상 상담과 함께 3D 시뮬레이션 화면을 공유하여
              시공&nbsp;이미지를 직관적으로 확인합니다.
            </IntroBody>
            <IntroList>
              <li>전문 상담 매니저의 1:1 비대면 상담</li>
              <li>3D 뷰를 통한 마감/색상 변경 비교</li>
              <li>상담 내용 자동 기록 및 공유</li>
            </IntroList>
          </IntroCard>

          <IntroCard>
            <IntroLabel>03</IntroLabel>
            <IntroTitle>샘플박스 배송 서비스</IntroTitle>
            <IntroBody>
              화면으로만 보기 어려운 마감 재질과 색상은 샘플박스로 직접 확인할
              수 있도록 배송해 드립니다.
            </IntroBody>
            <IntroList>
              <li>주요 마감재 샘플 구성</li>
              <li>실제 조명 아래 색감 확인</li>
              <li>온라인 상담과 연동된 옵션 안내</li>
            </IntroList>
          </IntroCard>
        </IntroGrid>
      </SectionInner>
    </SectionGray>
  );
};
export default IntroSection;

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
