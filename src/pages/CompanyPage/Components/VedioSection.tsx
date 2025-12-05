import styled from "styled-components";
import vedio from "../../../assets/images/company/vedio.png";

const VedioSection = () => {
  return (
    <Section>
      <TextBlock>
        <Title>디지털 혁신을 통한 가치 창출</Title>
        <Description>
          <p>알트룸은 인테리어 시장의 디지털 전환을 선도하며,</p>
          <p>고객과 파트너 모두에게 새로운 가치를 제공합니다.</p>
        </Description>
      </TextBlock>

      <HeroImageWrapper>
        <HeroImage src={vedio} alt="디지털 혁신을 상징하는 코드 화면" />
      </HeroImageWrapper>
    </Section>
  );
};

export default VedioSection;

const Section = styled.section`
  width: 100%;
  padding: 96px 0 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextBlock = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 24px;
  line-height: 1.4;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
`;

const Description = styled.div`
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  white-space: pre-line;
`;

const HeroImageWrapper = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background-color: #000; /* 로딩 중 빈 화면 방지용 */
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;
