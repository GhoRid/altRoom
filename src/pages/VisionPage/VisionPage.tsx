import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import VisionImage from "../../assets/images/company/vision.png";
import VisionCardSection from "./components/VisionCardSection";
import CoreValuesSection from "../CompanyPage/Components/CoreValuesSection";

const VisionPage = () => {
  return (
    <Wrapper>
      <HeroSection />

      <ImageCard>
        <img src={VisionImage} alt="알트룸의 비전을 상징하는 이미지" />
      </ImageCard>

      <VisionCardSection />
      <CoreValuesSection />
    </Wrapper>
  );
};

export default VisionPage;

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 72px; */
`;

const ImageCard = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  margin-top: 40px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;
