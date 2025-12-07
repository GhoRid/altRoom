import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../../../styles/color";

type Side = "left" | "right";

type TimelineItem = {
  id: number;
  month: string;
  text: string;
  side: Side;
};

type TimelineYearBlock = {
  year: number;
  items: TimelineItem[];
};

// helper function to group items into rows of up to two
const groupItemsByRow = (items: TimelineItem[]): TimelineItem[][] => {
  const rows: TimelineItem[][] = [];
  for (let i = 0; i < items.length; i += 2) {
    rows.push(items.slice(i, i + 2));
  }
  return rows;
};

// 여기서 타임라인 데이터만 수정해서 쓰면 됨
const TIMELINE_2020_now: TimelineYearBlock[] = [
  {
    year: 2025,
    items: [{ id: 1, month: "01", text: "벤처기업인증 획득", side: "left" }],
  },
  {
    year: 2024,
    items: [
      { id: 2, month: "01", text: "한국포룸테크포럼 회원사", side: "left" },
      {
        id: 3,
        month: "09",
        text: "한국산업기술진흥협회 정회원사",
        side: "right",
      },
      {
        id: 4,
        month: "04",
        text: "중소벤처기업부 선정 기술우수기업",
        side: "left",
      },
      {
        id: 5,
        month: "12",
        text: "기업부설연구소 알트룸 랩 설립",
        side: "right",
      },
    ],
  },
  {
    year: 2023,
    items: [
      {
        id: 6,
        month: "06",
        text: "아파트전문 브랜드 ‘마이하우스’ 파트신설",
        side: "left",
      },
      {
        id: 7,
        month: "10",
        text: "(주)넥스트엘레베이션 Pre Seed 투자유치",
        side: "right",
      },

      {
        id: 8,
        month: "09",
        text: "마이스하우스(주) 법인설립",
        side: "left",
      },
      {
        id: 9,
        month: "11",
        text: "(주)스타팅라인 Pre Seed 투자유치",
        side: "right",
      },
    ],
  },
  {
    year: 2022,
    items: [
      {
        id: 10,
        month: "08",
        text: "08 Asia Design Award residence 수상",
        side: "left",
      },
    ],
  },
  {
    year: 2021,
    items: [
      {
        id: 11,
        month: "02",
        text: "02 ㈜비율 법인설립",
        side: "left",
      },
    ],
  },
  {
    year: 2020,
    items: [
      {
        id: 12,
        month: "01",
        text: "01 한국실내건축가협회 회원사",
        side: "left",
      },
    ],
  },
];

const TIMELINE_2015_2020: TimelineYearBlock[] = [
  {
    year: 2019,
    items: [
      {
        id: 101,
        month: "03",
        text: "03 종합건설 설립",
        side: "left",
      },
    ],
  },
  {
    year: 2018,
    items: [
      {
        id: 102,
        month: "02",
        text: "02 건축설계사업, 건설사업 확장",
        side: "left",
      },
    ],
  },
  {
    year: 2017,
    items: [
      {
        id: 103,
        month: "07",
        text: "07 KOSID 전문건설협회 회원사",
        side: "left",
      },
    ],
  },
  {
    year: 2016,
    items: [
      {
        id: 104,
        month: "05",
        text: "05 광주광역시 본사 설립",
        side: "left",
      },
      {
        id: 105,
        month: "09",
        text: "09 실내건축면허 등록",
        side: "right",
      },
    ],
  },
  {
    year: 2015,
    items: [
      {
        id: 106,
        month: "03",
        text: "03 공간디자인 사업개시",
        side: "left",
      },
    ],
  },
];

// 스크롤로 화면에 보이면 true가 되는 훅
const useFadeInOnView = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
};

type YearBlockProps = {
  block: TimelineYearBlock;
};

const YearBlock = ({ block }: YearBlockProps) => {
  const { ref, isInView } = useFadeInOnView(0.8);
  const rows = groupItemsByRow(block.items);

  return (
    <YearBlockContainer ref={ref} $isVisible={isInView}>
      <YearBadge>{block.year}</YearBadge>

      {rows.map((row, rowIndex) => (
        <TimelineRow key={`${block.year}-row-${rowIndex}`}>
          <Dot />
          {row.map((item, colIndex) => {
            const side: Side = colIndex === 0 ? "left" : "right";
            return (
              <ItemCard
                key={`${block.year}-${item.month}-${item.id}`}
                month={item.month}
                text={item.text}
                side={side}
              />
            );
          })}
        </TimelineRow>
      ))}
    </YearBlockContainer>
  );
};

const HistoryTimelineSection = () => {
  return (
    <Section>
      <SectionTitle>2020 ~ 현재</SectionTitle>

      <TimelineWrapper>
        {TIMELINE_2020_now.map((block) => (
          <YearBlock key={block.year} block={block} />
        ))}
      </TimelineWrapper>

      <SectionTitle>2015 ~ 2020</SectionTitle>
      <TimelineWrapper>
        {TIMELINE_2015_2020.map((block) => (
          <YearBlock key={block.year} block={block} />
        ))}
      </TimelineWrapper>
    </Section>
  );
};

export default HistoryTimelineSection;

// 개별 카드 컴포넌트 (여기서 fade-in-up 적용)
type ItemCardProps = {
  month: string;
  text: string;
  side: Side;
};

const ItemCard = ({ month, text, side }: ItemCardProps) => {
  return (
    <Card $side={side}>
      <Month>{month}</Month>
      <Text>{text}</Text>
    </Card>
  );
};

/* ---------------- styled-components ---------------- */

const Section = styled.section`
  width: 100%;
  max-width: 768px;
  /* padding: 120px 0 160px; */
  margin: 64px auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 50px;

  position: relative;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  margin-bottom: 80px;
  color: #111827;
`;

const TimelineWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;

  /* 가운데 세로 라인 */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    background-color: #e5e7eb;
  }
`;

const YearBlockContainer = styled.div<{ $isVisible: boolean }>`
  position: relative;
  padding: 0 0 60px;

  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) =>
    $isVisible ? "translateY(0)" : "translateY(24px)"};
  transition: opacity 0.6s ease, transform 0.6s ease;
`;

const YearBadge = styled.div`
  position: absolute;
  top: -64px;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 1;
  padding: 8px 24px;
  border-radius: 999px;
  background-color: ${colors.app_brown};

  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
`;

const TimelineRow = styled.div`
  position: relative;
  margin: 28px 0;
  min-height: 64px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 96px;
`;

const Dot = styled.span`
  position: absolute;
  top: 32px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background-color: #b89474;
  z-index: 1;
`;

const Card = styled.div<{ $side: Side }>`
  position: relative;
  width: 100%;
  /* max-width: 360px; */
  padding: 16px;
  border-radius: 12px;
  background-color: #f9fafb;
  /* box-shadow: 0 14px 30px rgba(15, 23, 42, 0.06); */
  display: flex;
  gap: 12px;
  align-items: center;
  line-height: 1.6;
  color: #4b5563;

  /* 좌/우 위치 */
  margin-left: ${({ $side }) => ($side === "left" ? "0" : "auto")};
  margin-right: ${({ $side }) => ($side === "left" ? "auto" : "0")};

  grid-column: ${({ $side }) => ($side === "left" ? "1 / 2" : "2 / 3")};

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Month = styled.span`
  flex-shrink: 0;
  font-weight: 600;
  font-size: 16px;
  color: #6b7280;
`;

const Text = styled.p`
  font-size: 16px;
  color: #4b5563;
`;
