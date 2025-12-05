import styled from "styled-components";
import imageUrl from "../../../assets/images/service/heroImage.webp";
import { colors } from "../../../styles/color";

const HeroSection = () => {
  return (
    <SectionHero>
      <HeroInner>
        <HeroImageCard>
          <HeroImage src={imageUrl} />
        </HeroImageCard>

        <HeroTextBlock>
          <HeroMainTitle>
            비용은 낮추며 품질은 높이는
            <br />
            알트룸 디자인 모듈 시스템
          </HeroMainTitle>

          <HeroSubTitle>우리 가족의 유일한 쉼터인 우리 집,</HeroSubTitle>
          <HeroCaption>누구한테 맡길 수 있을까요?</HeroCaption>

          <HeroDivider />
        </HeroTextBlock>
      </HeroInner>
    </SectionHero>
  );
};

export default HeroSection;

const SectionHero = styled.section`
  width: 100%;
  padding: 92px 16px 80px;
  background-color: #ffffff;
`;

const HeroInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;

  @media (max-width: 768px) {
    gap: 32px;
  }
`;

const HeroTextBlock = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const HeroImageCard = styled.div`
  width: 100%;
  aspect-ratio: 21/9;
  margin: 0 auto;
  overflow: hidden;

  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);
`;

const HeroImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroMainTitle = styled.h1`
  font-size: 36px;
  line-height: 40px;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #111827;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const HeroSubTitle = styled.p`
  margin-top: 24px;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  color: ${colors.app_brown};
`;

const HeroCaption = styled.p`
  font-size: 18px;
  line-height: 28px;
  color: #4b5563;
  margin-top: 4px;
`;

const HeroDivider = styled.div`
  width: 96px;
  height: 4px;
  border-radius: 999px;
  background-color: ${colors.app_brown};
  opacity: 0.5;
  margin-top: 24px;
`;
