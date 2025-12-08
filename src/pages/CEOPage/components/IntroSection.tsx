import styled from "styled-components";
import CEOImageUrl from "../../../assets/images/ceo/ceo.webp";
import { colors } from "../../../styles/color";
import { ReactComponent as InstagramIcon } from "../../../assets/svgs/instagram.svg";
import { ReactComponent as ThreadIcon } from "../../../assets/svgs/thread.svg";
import FadeInUpOnView from "../../../components/FadeInUpOnView";

const IntroSection = () => {
  return (
    <Wrapper>
      <FadeInUpOnView threshold={0.1}>
        <HeaderSection>
          <Title>CEO 인사말</Title>
          <IntroLine>안녕하십니까,</IntroLine>
          <IntroLine>
            <IntroHighlight>알트룸 대표이사 장차근</IntroHighlight>
            입니다.
          </IntroLine>

          <SocialRow>
            <SocialButton
              onClick={() => {
                window.open(
                  "https://www.instagram.com/jang.cha.keun/",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              <Icon>
                <InstagramIcon />
              </Icon>
              <span>Instagram</span>
            </SocialButton>
            <SocialButton
              onClick={() => {
                window.open(
                  "https://www.threads.com/@jang.cha.keun",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              <Icon>
                <ThreadIcon />
              </Icon>
              <span>Threads</span>
            </SocialButton>
          </SocialRow>
        </HeaderSection>
      </FadeInUpOnView>

      <FadeInUpOnView threshold={0.1} delay={0.15}>
        <ContentSection>
          <ImageWrapper>
            <img src={CEOImageUrl} alt="알트룸 대표이사 장차근 사진" />
          </ImageWrapper>

          <RightColumn>
            <MessageCard>
              <MessageParagraph>
                알트룸은{" "}
                <Highlight>인테리어 소비자들의 알권리와 투명성 확보</Highlight>
                를 통해 시장의 부정적인 이미지를 바꾸고자 하는 취지로
                시작하였습니다.
              </MessageParagraph>
              <MessageParagraph>
                정직한 비용으로 완벽한 프로세스를 구축하고자 하는 경영목표는
                소비자에게 인테리어 과정을 행복한 경험으로 선물하기 위해
                <Highlight> “행복한 기다림”</Highlight>이라는 비전으로 만나길
                원합니다.
              </MessageParagraph>
            </MessageCard>

            <SignatureBlock>
              <SignatureRole>알트룸 대표이사</SignatureRole>
              <SignatureName>장 차 근</SignatureName>
            </SignatureBlock>

            <CareerCard>
              <CareerTitle>학력 및 수상</CareerTitle>
              <CareerList>
                <li>건국대학교 건축전문대학원 건축설계 석사</li>
                <li>Asia Design Award golden prize of residential space</li>
                <li>Energy Architecture award Future innovation Prize</li>
                <li>직접건축 건축 지적</li>
                <li>시각적 공간 가치상</li>
              </CareerList>
            </CareerCard>
          </RightColumn>
        </ContentSection>
      </FadeInUpOnView>
    </Wrapper>
  );
};

export default IntroSection;

const Wrapper = styled.div`
  padding: 24px 0;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderSection = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 56px;
`;

const Title = styled.h1`
  font-size: 36px;
  line-height: 40px;
  font-weight: 700;
  margin-bottom: 32px;
`;

const IntroLine = styled.p`
  font-size: 18px;
  color: ${colors.text_gray};
`;

const IntroHighlight = styled.span`
  color: ${colors.app_brown};
  font-weight: 600;
`;

const SocialRow = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 16px;
`;

const SocialButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: color 0.15s ease;

  span {
    font-size: 16px;
    color: ${colors.text_gray};
  }

  svg {
    color: ${colors.text_gray};
  }

  &:hover {
    span {
      color: #000;
    }
    svg {
      color: #000;
    }
  }
`;

const Icon = styled.div`
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

const ContentSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 48px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ImageWrapper = styled.div`
  border-radius: 8px;
  aspect-ratio: 3/4;
  overflow: hidden;
  background-color: #f5f5f5;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  justify-content: space-between;
`;

const MessageCard = styled.div`
  font-size: 18px;
  line-height: 1.8;
  color: ${colors.text_gray};
`;

const MessageParagraph = styled.p`
  & + & {
    margin-top: 16px;
  }
`;

const Highlight = styled.span`
  color: ${colors.app_brown};
  font-weight: 600;
`;

const SignatureBlock = styled.div`
  text-align: right;
  padding-top: 32px;

  border-top: 1px solid #ddd;
`;

const SignatureRole = styled.div`
  font-size: 16px;
  color: #777;
  margin-bottom: 4px;
`;

const SignatureName = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${colors.app_brown};
`;

const CareerCard = styled.div`
  padding: 32px;
  border-radius: 8px;
  background-color: rgba(249, 250, 251, 0.8);
`;

const CareerTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.app_brown};
  margin-bottom: 12px;
`;

const CareerList = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style: none;
  font-size: 16px;
  line-height: 1.8;
  color: #555;

  li {
    position: relative;
    padding-left: 18px;
  }

  li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.65em;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${colors.app_brown};
  }

  li + li {
    margin-top: 12px;
  }
`;
