import styled from "styled-components";
import dataImageUrl from "../../../assets/images/service/data.png";
import moduleImageUrl from "../../../assets/images/service/module.png";
import constructionImageUrl from "../../../assets/images/service/construction.png";
import FadeInUpOnView from "../../../components/FadeInUpOnView";

const FeatureSection = () => {
  const list = [
    {
      eyebrow: "STANDARDIZED QUOTING SYSTEM",
      headline: "표준화된 데이터로\n합리적인 견적시스템",
      text: `빅데이터를 활용한 시공면적, 자재물량, 시공일수를 표준화하여 
              폐자재와 인건비를 줄여
              합리적인 비용을 제공합니다.`,
      image: dataImageUrl,
    },
    {
      eyebrow: "CONCEPT-BASED MODULAR DESIGN",
      headline: "예산과 컨셉에 맞는\n디자인모듈 제공",
      text: `체계화된 디자인 제조시스템으로 소비자의 예산과 컨셉에 가장 적합한
              모듈로 구성해
              최적의 트렌디한 디자인을 제공합니다.`,
      image: moduleImageUrl,
    },
    {
      eyebrow: "SYSTEMATIC CONSTRUCTION SYSTEM",
      headline: "체계적인 디지털\n공사관리 시스템",
      text: `디자인이 구현되는 시공 매뉴얼을 포함해 공정스케쥴, 시공관리, 
      품질점검 등의 
      공사의 전반적인 과정을 체계적으로 관리하며 마감품질을 높힐 수 있는
    자체 프로그램을 사용하여 프로젝트의 만족도를 높입니다.`,
      image: constructionImageUrl,
    },
  ];

  return (
    <SectionWrapper>
      <SectionInner>
        {list.map((item, index) => (
          <FadeInUpOnView duration={0.7}>
            <FeatureRow key={index}>
              <FeatureCopy>
                <FeatureEyebrow>{item.eyebrow}</FeatureEyebrow>
                <FeatureHeadline>{item.headline}</FeatureHeadline>
                <FeatureText>{item.text}</FeatureText>
              </FeatureCopy>
              <FeatureImageCard>
                <FeatureImage src={item.image} alt={item.headline} />
              </FeatureImageCard>
            </FeatureRow>
          </FadeInUpOnView>
        ))}
      </SectionInner>
    </SectionWrapper>
  );
};

export default FeatureSection;

const SectionWrapper = styled.section`
  padding: 88px 16px;
  background-color: #ffffff;
`;

const SectionInner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 96px;
`;

const FeatureRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 48px;

  @media (max-width: 960px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
  }
`;

const FeatureCopy = styled.div``;

const FeatureEyebrow = styled.div`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #6b7280;
  margin-bottom: 12px;
`;

const FeatureHeadline = styled.h3`
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
  /* letter-spacing: -0.03em; */
  color: #000;
  margin-top: 24px;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const FeatureText = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: #4b5563;
  white-space: pre-line;

  margin-top: 24px;
`;

const FeatureImageCard = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 960px) {
    justify-content: flex-start;
  }
`;

const FeatureImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  /* border-radius: 24px; */
  background: #e5e7eb;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
  object-fit: cover;
`;
