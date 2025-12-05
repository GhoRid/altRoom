import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import FadeInUpOnView from "../../../components/FadeInUpOnView";
import { ReactComponent as PcIcon } from "../../../assets/svgs/pc.svg";
import { ReactComponent as Person2Icon } from "../../../assets/svgs/person2.svg";
import { ReactComponent as SearchIcon } from "../../../assets/svgs/search.svg";
import { ReactComponent as Check1Icon } from "../../../assets/svgs/check1.svg";
import { ReactComponent as StartIcon } from "../../../assets/svgs/start.svg";
import { ReactComponent as Check2Icon } from "../../../assets/svgs/check2.svg";
import { ReactComponent as SettingIcon } from "../../../assets/svgs/setting.svg";
import { colors } from "../../../styles/color";

const STEPS = [
  {
    step: 1,
    title: "온라인 견적내기",
    description:
      "온라인 견적하기를 통해 공사의 기본정보를 입력하고 맞는 품목을 선택해 가격견적을 미리 받아요.",
    icon: <PcIcon />,
  },
  {
    step: 2,
    title: "3D 상담",
    description:
      "온라인 견적내기를 통해 예약한 날짜와 시간에 상담을 진행하며 담당 어드바이저와 우리집에 적용될 디자인을 3D로 상담 받아요.",
    icon: <Person2Icon />,
  },
  {
    step: 3,
    title: "현장 점검",
    description:
      "3D디자인과 견적을 확인 한 뒤 상담받은 디자이너의 현장 적용여부와 컨디션 체크를 위해 현장을 방문해요.",
    icon: <SearchIcon />,
  },
  {
    step: 4,
    title: "계약 미팅",
    description:
      "담당 어드바이저를 통해 전자계약을 완료하고 마이하우스 매니저앱을 통해 공사진행 정보를 제공 받습니다.",
    icon: <Check1Icon />,
  },
  {
    step: 5,
    title: "시공시작",
    description:
      "매니저앱을 통해 우리집 3D 미리보기, 사용자재, 공사일정, 시공현황 등을 실시간으로 확인하고 소통할 수 있습니다.",

    icon: <StartIcon />,
  },
  {
    step: 6,
    title: "최종 점검",
    description:
      "공사 완료일 전 담당 어드바이저와 함께 공사의 전반적인 시공품질과 상태를 점검하고 잔금결제가 이뤄집니다.",
    icon: <Check2Icon />,
  },
  {
    step: 7,
    title: "A/S",
    description:
      "인테리어 하자 보증서를 발급해 드리고, 온라인 신청 서비스를 통해 간단하게 A/S를 신청할 수 있습니다.",
    icon: <SettingIcon />,
  },
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.8 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <SectionGray ref={sectionRef}>
      <SectionInner>
        <FadeInUpOnView threshold={0.5} duration={0.7}>
          <SectionTitle>알트룸 진행 프로세스</SectionTitle>
        </FadeInUpOnView>

        <ProcessTimeline>
          {STEPS.map((item, index) => (
            <ProcessItem
              key={item.step}
              $visible={isVisible}
              $delay={index * 0.08}
            >
              <StepBadge>Step. {item.step}</StepBadge>
              <ItemBox>
                <IconContainer>{item.icon}</IconContainer>
                <ProcessTitle>{item.title}</ProcessTitle>
                <ProcessBody>{item.description}</ProcessBody>
              </ItemBox>
            </ProcessItem>
          ))}
        </ProcessTimeline>
      </SectionInner>
    </SectionGray>
  );
};

export default ProcessSection;

/* 공통 섹션 스타일 */

const SectionGray = styled.section`
  margin: 96px 16px 128px;
  background-color: #ffffff;
`;

const SectionInner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 48px;
  height: auto;
  font-size: 36px;
  line-height: 40px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

/* 프로세스 카드 그리드 */

const ProcessTimeline = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 540px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const ProcessItem = styled.div<{ $visible: boolean; $delay: number }>`
  position: relative;
  padding: 24px;
  border-radius: 2px;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0)" : "translateY(24px)"};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition-delay: ${({ $delay }) => `${$delay}s`};
`;

const StepBadge = styled.div`
  position: absolute;
  top: -12px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4px 12px;
  border-radius: 999px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  background-color: ${colors.app_brown};

  color: #ffffff;
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
`;

const IconContainer = styled.div`
  width: 48px;
  height: 48px;

  color: ${colors.app_brown};

  svg {
    width: 100%;
    height: 100%;
  }
`;

const ProcessTitle = styled.h3`
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;
`;

const ProcessBody = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #4b5563;

  white-space: pre-wrap;
`;
