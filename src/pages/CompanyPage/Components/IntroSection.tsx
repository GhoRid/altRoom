import styled from "styled-components";

const IntroSection = () => {
  return (
    <Section>
      <Kicker>공간모듈 솔루션</Kicker>
      <MainTitle>Alt room</MainTitle>

      <ParagraphGroup>
        <Paragraph>
          <Strong>우후죽순의 인테리어 시장,</Strong>
        </Paragraph>
        <Paragraph>
          알트룸은 파편화된 견적정보를 <Strong>빅데이터</Strong>를 기반으로
        </Paragraph>
        <Paragraph>
          표준화하고 복잡했던 인테리어 과정들을 <Strong>디자인 모듈화</Strong>
          라는
          <br />
          시스템을 통해 간편화시켰습니다.
        </Paragraph>
      </ParagraphGroup>

      <ParagraphGroup>
        <Paragraph>변화하는 시장속의 디지털라이징을 통해</Paragraph>
        <Paragraph>
          <Strong>투명하고 신뢰있는 인테리어 시장</Strong>을 만들어
          나가겠습니다.
        </Paragraph>
      </ParagraphGroup>
    </Section>
  );
};

export default IntroSection;

const Section = styled.section`
  padding: 24px 16px;
  text-align: center;
`;

const Kicker = styled.h2`
  font-size: 36px;
  line-height: 40px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const MainTitle = styled.h3`
  font-size: 30px;
  font-weight: 700;
  margin-top: 32px;
`;

const ParagraphGroup = styled.div`
  margin-top: 32px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 28px;
  color: #4b5563;
`;

const Strong = styled.span`
  font-weight: 700;
  color: #111827;
`;
