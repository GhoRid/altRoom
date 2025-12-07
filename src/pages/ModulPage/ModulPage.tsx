import styled from "styled-components";
import ModulIntroGif from "../../assets/images/module/module_movie.gif";

const ModulPage = () => {
  return (
    <Wrapper>
      <Inner>
        <SectionLabel>모듈소개</SectionLabel>

        <Title>
          <TitleLine>
            <Accent>온라인 견적내기를</Accent> 활용하시면
          </TitleLine>
          <TitleLine>
            나의 <Accent>예산</Accent>과 <Accent>컨셉</Accent>에 최적화된
          </TitleLine>
          <TitleLine>
            <UnderlineText>모듈 디자인을 추출해 드려요</UnderlineText>
          </TitleLine>
        </Title>

        <ImageWrapper>
          <IntroImage src={ModulIntroGif} alt="모듈 디자인 예시 이미지" />
        </ImageWrapper>

        <BottomButton>모듈 둘러보기</BottomButton>
      </Inner>
    </Wrapper>
  );
};

export default ModulPage;

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 72px; */
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 102px;
`;

const SectionLabel = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 40px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  color: #111827;
  margin-bottom: 72px;
`;

const TitleLine = styled.div``;

const Accent = styled.span`
  color: #b08a65;
`;

const UnderlineText = styled.span`
  position: relative;
  display: inline-block;
  padding-bottom: 4px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 8px;
    background: rgba(176, 138, 101, 0.24);
    border-radius: 999px;
    z-index: -1;
  }
`;

const ImageWrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 96px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const IntroImage = styled.img`
  width: 100%;
  max-width: 540px;
  height: auto;
  display: block;
`;

const BottomButton = styled.button`
  margin-bottom: 80px;
  padding: 12px 40px;
  border-radius: 999px;
  border: none;
  background: #a58365;
  color: #ffffff;
  font-size: 18px;
  line-height: 28px;
  font-weight: 400;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background: #b28f6f;
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;
