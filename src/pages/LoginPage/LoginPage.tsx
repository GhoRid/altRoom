import styled from "styled-components";
import imagesrc from "../../assets/images/login.webp";
import { ReactComponent as KakaoIcon } from "../../assets/svgs/kakao.svg";

const LoginPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 아이디/비밀번호 로그인 로직 연결
  };

  const handleKakaoLogin = () => {
    // TODO: 카카오 로그인 연동
  };

  return (
    <Wrapper>
      <LoginCard>
        <HeaderSection>
          {/* <SubTitle>견적서 작성에는 로그인이 필요합니다</SubTitle> */}
          <MainTitle>
            알트룸에서 쉽고 빠르게
            <br />
            <Highlight>견적서</Highlight>를 받아보세요
          </MainTitle>
        </HeaderSection>
        <IllustrationWrapper>
          {/* 실제 이미지 경로로 교체해서 사용하세요 */}
          <Illustration src={imagesrc} alt="알트룸 견적 작성 일러스트" />
        </IllustrationWrapper>

        <KakaoButton type="button" onClick={handleKakaoLogin}>
          <KakaoIcon width={16} height={16} />
          <p>카카오로 1초 로그인</p>
        </KakaoButton>

        <DividerWrapper>
          <DividerLine />
          <DividerText>또는</DividerText>
          <DividerLine />
        </DividerWrapper>

        <Form onSubmit={handleSubmit}>
          <Field>
            <Label htmlFor="login-id">아이디</Label>
            <TextInput
              id="login-id"
              placeholder="아이디를 입력해주세요"
              autoComplete="username"
            />
          </Field>

          <Field>
            <Label htmlFor="login-password">비밀번호</Label>
            <TextInput
              id="login-password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              autoComplete="current-password"
            />
          </Field>

          <SubmitButton type="submit">아이디로 로그인</SubmitButton>
        </Form>
        <BottomLinks>
          <BottomLinkButton type="button">회원가입</BottomLinkButton>
          <Separator>|</Separator>
          <BottomLinkButton type="button">아이디 찾기</BottomLinkButton>
          <Separator>|</Separator>
          <BottomLinkButton type="button">비밀번호 찾기</BottomLinkButton>
        </BottomLinks>
      </LoginCard>
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 130px 16px 150px 16px;
`;

const LoginCard = styled.div`
  width: 100%;
  max-width: 450px;
  background: #ffffff;
  border-radius: 24px;
  padding: 24px 48px;

  display: flex;
  flex-direction: column;
`;

const HeaderSection = styled.header`
  text-align: center;
`;

const MainTitle = styled.h1`
  font-size: 36px;
  line-height: 1.25;
  font-weight: 700;
`;

const Highlight = styled.span`
  color: #ae8c71;
`;

const IllustrationWrapper = styled.div`
  margin: 16px 36px 16px;
  width: 280px;
`;

const Illustration = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const KakaoButton = styled.button`
  width: 100%;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: #fee500;
  cursor: pointer;
  padding: 8px 16px;
  height: 48px;

  p {
    font-size: 16px;
    font-weight: 600;
    text-align: end;
  }
`;

const DividerWrapper = styled.div`
  margin: 28px 0;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const DividerLine = styled.div`
  flex: 1;
  height: 0.5px;
  background: rgb(195 202 215);
`;

const DividerText = styled.span`
  font-size: 12px;
  color: rgb(107, 114, 128);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
`;

const TextInput = styled.input`
  width: 100%;
  height: 36px; /* h-9 */
  border-radius: 6px; /* rounded-md */
  border: 0.5px solid rgb(195 202 215);
  background: transparent;
  padding: 4px 12px; /* py-1 px-3 */
  font-size: 16px; /* text-base */
  outline: none;
  box-shadow: 0 1px 1px rgba(15, 23, 42, 0.04);
  transition: border-color 0.15s ease, box-shadow 0.15s ease,
    background-color 0.15s ease, color 0.15s ease; /* transition-colors */

  &::placeholder {
    color: rgb(183, 189, 202);
  }

  &:focus-visible {
    outline: none; /* focus-visible:outline-none */
    border-color: #c5976b;
    box-shadow: 0 0 0 1px rgba(197, 151, 107, 0.4); /* focus-visible:ring-1 + ring-ring 느낌 */
  }

  &:disabled {
    cursor: not-allowed; /* disabled:cursor-not-allowed */
    opacity: 0.5; /* disabled:opacity-50 */
  }

  @media (min-width: 768px) {
    font-size: 14px; /* md:text-sm */
  }
`;

const SubmitButton = styled.button`
  margin-top: 8px;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 600;
  background: #ae8c71;
  color: #ffffff;
  cursor: pointer;
`;

const BottomLinks = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #9d8d7a;
`;

const BottomLinkButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  font-size: 14px;
  color: #9d8d7a;
  cursor: pointer;
`;

const Separator = styled.span`
  color: #d2c4b5;
`;
