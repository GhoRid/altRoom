import styled from "styled-components";
import realTimeQuoteImageUrl from "../../../assets/images/service/realTimeQuote.png";
import nonFaceConsultationImageUrl from "../../../assets/images/service/nonFaceConsultation.png";
import sampleBoxImageUrl from "../../../assets/images/service/sampleBox.png";
import FadeInUpOnView from "../../../components/FadeInUpOnView";

const CARD_LIST = [
  {
    id: 1,
    imageSrc: realTimeQuoteImageUrl,
    imageAlt: "실시간 온라인 견적서",
    title: "실시간 온라인 견적서",
    description:
      "언제 어디서나 실시간으로 견적을\n확인하고 원하는 시공 범위를 선택할 수 있습니다.",
  },
  {
    id: 2,
    imageSrc: nonFaceConsultationImageUrl,
    imageAlt: "비대면 3D 상담",
    title: "비대면 3D 상담",
    description:
      "전문 디자이너와 함께 3D로 구현된 공간을 온라인으로 상담받을 수 있습니다.",
  },
  {
    id: 3,
    imageSrc: sampleBoxImageUrl,
    imageAlt: "샘플박스 배송",
    title: "샘플박스 배송",
    description:
      "선택하신 자재 샘플을 직접 확인할 수 있도록 집으로 배송해 드립니다.",
  },
];

const IntroSection = () => {
  return (
    <SectionWapper>
      <SectionInner>
        <FadeInUpOnView threshold={0.5} duration={0.7}>
          <SectionHeader>
            <SectionTitle>
              견적부터 3D상담, 자재확인까지
              <br />
              모두 다 온라인으로 가능할까?
            </SectionTitle>
            <SectionDescription>
              알트룸은 실시간 견적시스템과 비대면 3D상담 서비스, 샘플박스 배송
              서비스로
              <br />
              상담과정의 모든 부분을 온라인을 통해 서비스 받으실 수 있습니다.
            </SectionDescription>
          </SectionHeader>
        </FadeInUpOnView>

        <FadeInUpOnView threshold={0.5} duration={0.7}>
          <IntroGrid>
            {CARD_LIST.map((card) => (
              <IntroCard key={card.id}>
                <ImageCard>
                  <img src={card.imageSrc} alt={card.imageAlt} />
                </ImageCard>
                <IntroContent>
                  <IntroNumberTitle>
                    {card.id}. {card.title}
                  </IntroNumberTitle>
                  <IntroBody>{card.description}</IntroBody>
                </IntroContent>
              </IntroCard>
            ))}
          </IntroGrid>
        </FadeInUpOnView>

        <FadeInUpOnView threshold={0.5} duration={0.7}>
          <IntroFooter>
            체계적이고 메뉴얼화된 서비스로 고객님들에게 편리성과 전문성을
            제공하겠습니다.
          </IntroFooter>
        </FadeInUpOnView>
      </SectionInner>
    </SectionWapper>
  );
};
export default IntroSection;

const SectionWapper = styled.section`
  padding: 88px 16px;
`;

const SectionInner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  line-height: 40px;
  font-weight: 700;
`;

const SectionDescription = styled.p`
  margin-top: 32px;
  font-size: 16px;
  line-height: 24px;
  color: #4b5563;
`;

const IntroGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  margin-top: 48px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const IntroCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 8px;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;

  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

const ImageCard = styled.div`
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  overflow: hidden;

  img {
    object-fit: cover;
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const IntroContent = styled.div``;

const IntroNumberTitle = styled.h3`
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
  margin-top: 16px;
`;

const IntroBody = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #4b5563;

  margin-top: 16px;
  white-space: pre-line;
`;

const IntroFooter = styled.p`
  margin-top: 48px;
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  color: #4b5563;
`;
