import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import FeatureSection from "./components/FeatureSection";
import HappyHomeSection from "./components/HappyHomeSection";
import ProcessSection from "./components/ProcessSection";
import AltroomButton from "./components/AltroomButton";

const ServicePage = () => {
  return (
    <PageWrapper>
      <Content>
        <Title>서비스소개</Title>
        <HeroSection />
        <FeatureSection />
        <IntroSection />
        <HappyHomeSection />
        <ProcessSection />
        <AltroomButton />
      </Content>
    </PageWrapper>
  );
};

export default ServicePage;

const PageWrapper = styled.div`
  width: 100%;
  margin: 104px 0;
  background-color: #ffffff;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 960px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;
