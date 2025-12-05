import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    step: 1,
    title: "온라인 견적내기",
    description:
      "온라인 견적하기를 통해 공사의 기본정보를 입력하고 맞는 품목을 선택해 가격견적을 미리 받아요.",
  },
  {
    step: 2,
    title: "3D 상담",
    description:
      "온라인 견적내기를 통해 예약한 날짜와 시간에 상담을 진행하며 담당 어드바이저와 우리집에 적용될 디자인을 3D로 상담 받아요.",
  },
  {
    step: 3,
    title: "현장 점검",
    description:
      "3D디자인과 견적을 확인 한 뒤 상담받은 디자이너의 현장 적용여부와 컨디션 체크를 위해 현장을 방문해요.",
  },
  {
    step: 4,
    title: "계약 미팅",
    description:
      "담당 어드바이저를 통해 전자계약을 완료하고 마이하우스 매니저앱을 통해 공사진행 정보를 제공 받습니다.",
  },
  {
    step: 5,
    title: "시공시작",
    description:
      "매니저앱을 통해 우리집 3D 미리보기, 사용자재, 공사일정, 시공현황 등을 실시간으로 확인하고 소통할 수 있습니다.",
  },
  {
    step: 6,
    title: "최종 점검",
    description:
      "공사 완료일 전 담당 어드바이저와 함께 공사의 전반적인 시공품질과 상태를 점검하고 잔금결제가 이뤄집니다.",
  },
  {
    step: 7,
    title: "A/S",
    description:
      "인테리어 하자 보증서를 발급해 드리고, 온라인 신청 서비스를 통해 간단하게 A/S를 신청할 수 있습니다.",
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
        <SectionHeader>
          <SectionTitle>알트룸 진행 프로세스</SectionTitle>
        </SectionHeader>

        <ProcessTimeline>
          {STEPS.map((item, index) => (
            <ProcessItem
              key={item.step}
              $visible={isVisible}
              $delay={index * 0.08}
            >
              <StepBadge>Step. {item.step}</StepBadge>
              <ProcessTitle>{item.title}</ProcessTitle>
              <ProcessBody>{item.description}</ProcessBody>
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
  padding: 96px 16px 96px;
  background-color: #ffffff;
`;

const SectionInner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
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
  border-radius: 18px;
  background-color: #ffffff;
  border: 1px solid #f2e9df;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
  text-align: center;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0)" : "translateY(24px)"};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition-delay: ${({ $delay }) => `${$delay}s`};
`;

const StepBadge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 16px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  color: #8b5a2b;
  background-color: #fff3e3;
  margin-bottom: 20px;
`;

const ProcessTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 16px;
`;

const ProcessBody = styled.p`
  font-size: 13px;
  line-height: 1.9;
  color: #4b5563;
`;

/* 아래쪽에 기존에 쓰이던 Hero / Intro / Feature / CTA 관련 styled 들이 있으면
   안 쓰이는 건 지워도 되고, 그냥 두어도 동작에는 문제 없음 */
