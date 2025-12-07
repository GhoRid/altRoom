import styled from "styled-components";
import meetingImageUrl from "../../../assets/images/service/meeting.png";
import personImageUrl from "../../../assets/images/service/person.png";
import { colors } from "../../../styles/color";
import FadeInUpOnView from "../../../components/FadeInUpOnView";

const HappyHomeSection = () => {
  return (
    <SectionWrapper>
      <FadeInUpOnView threshold={0.3} duration={0.7}>
        <SectionInner>
          <Title>당신도 지금, 나만의 행복한 집을 원하시나요?</Title>

          <ParagraphGroup>
            <Paragraph>
              도면, 자재, 시공업체, 견적비교 등등 알아볼게 뭐 그리 많은지…..
              <br />
              이것저것 따지다보면 일주일이 훌쩍 가버리더라구요.
              <br />
              <br />
              그런데 이제 시간낭비 할 이유가 사라졌어요!
              <br />
              알트룸에서는 내가 원하는 예산으로 인테리어를 선택할 수 있어요.
            </Paragraph>
          </ParagraphGroup>

          <HighlightText>언제, 어디서든, 편리하고, 정확한 시스템</HighlightText>

          <ImageGrid>
            <ImageCard>
              <img src={meetingImageUrl} alt="알트룸 상담 이미지" />
            </ImageCard>
            <ImageCard>
              <img src={personImageUrl} alt="현장 시공 이미지" />
            </ImageCard>
          </ImageGrid>
        </SectionInner>
      </FadeInUpOnView>
    </SectionWrapper>
  );
};

export default HappyHomeSection;

const SectionWrapper = styled.section`
  width: 100%;
  padding: 96px 16px 80px;
`;

const SectionInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
  /* letter-spacing: -0.03em; */
  /* color: #111827; */

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ParagraphGroup = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: #4b5563;
`;

const HighlightText = styled.p`
  margin-top: 52px;
  font-size: 24px;
  line-height: 24px;
  font-weight: 700;
  color: ${colors.app_brown};
`;

const ImageGrid = styled.div`
  margin-top: 52px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const ImageCard = styled.div`
  aspect-ratio: 4/3;
  border-radius: 8px;
  overflow: hidden;
  background-color: #000000;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.18);

  img {
    object-fit: cover;
    display: block;
    width: 100%;
    height: 100%;
  }
`;
