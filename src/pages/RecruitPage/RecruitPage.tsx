import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import RecruitImage from "../../assets/images/company/recruite.webp";
import MicroCrewSection from "./components/MicroCrewSection";
import FutureWithAltroomSection from "./components/FutureWithAltroomSection";
import ApplySection from "./components/ApplySection";
import FadeInUpOnView from "../../components/FadeInUpOnView";

const RecruitPage = () => {
  return (
    <Wrapper>
      <HeroSection />

      <ImageCard>
        <FadeInUpOnView threshold={0.1} delay={0.15}>
          <img src={RecruitImage} alt="알트룸 채용을 상징하는 이미지" />
        </FadeInUpOnView>
      </ImageCard>

      <MicroCrewSection />

      <FutureWithAltroomSection />

      <ApplySection />
    </Wrapper>
  );
};

export default RecruitPage;

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 72px; */
`;

const ImageCard = styled.div`
  max-width: 672px;
  aspect-ratio: 4/5;
  border-radius: 8px;
  margin-top: 40px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;
