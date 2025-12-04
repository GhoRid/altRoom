import { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { ReactComponent as DirectionDown } from "../assets/svgs/directionDown.svg";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
`;

const Wrapper = styled.section<{ $backgroundImage: string }>`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-image: ${({ $backgroundImage }) => `url(${$backgroundImage})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent);
    z-index: 1;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  color: #fff;
`;

const TitleBlock = styled.div<{
  $visible: boolean;
  $centered?: boolean;
}>`
  position: absolute;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.4s ease;

  ${({ $centered }) =>
    $centered
      ? css`
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        `
      : css`
          top: 50%;
          left: 10%;
          transform: translateY(-50%);
          text-align: left;
        `}
`;

const BaseTitle = styled.h2<{ $animate?: boolean }>`
  font-weight: 700;
  line-height: 1.4;
  font-size: 60px;
  white-space: pre-line;
  min-width: 100vh;

  ${({ $animate }) =>
    $animate &&
    css`
      animation: ${fadeUp} 0.6s ease;
    `}

  @media (max-width: 768px) {
    font-size: 50px;
  }

  @media (max-width: 425px) {
    font-size: 30px;
  }
`;

const Title2 = styled(BaseTitle)`
  font-size: 42px;
  line-height: 1.8;
  text-align: center;
  word-break: keep-all;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 32px;
  }
  @media (max-width: 425px) {
    font-size: 18px;
  }
`;

const ScrollIconBox = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
`;

const ScrollIcon = styled(DirectionDown)`
  width: 24px;
  height: 24px;
  color: #fff;
  animation: ${bounce} 1.5s infinite;
`;

type CustomHeroSectionProps = {
  title1?: string;
  title2?: string;
  backgroundImage?: string;
};

const CustomHeroSection = ({
  title1,
  title2,
  backgroundImage,
}: CustomHeroSectionProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isReplaced, setIsReplaced] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const shouldLockScroll =
      !isAnimating && !isReplaced && window.scrollY <= 10;
    document.body.style.overflow = shouldLockScroll ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isReplaced, isAnimating]);

  useEffect(() => {
    const node = contentRef.current;
    if (!node) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY < 0 && window.scrollY > 0) return;

      if (isAnimating) {
        e.preventDefault();
        return;
      }

      if (e.deltaY > 0 && !isReplaced) {
        e.preventDefault();
        setIsAnimating(true);
        setIsReplaced(true);
        setTimeout(() => setIsAnimating(false), 1000);
      } else if (e.deltaY < 0 && isReplaced) {
        e.preventDefault();
        setIsReplaced(false);
        setIsAnimating(false);
      } else if (!isReplaced) {
        e.preventDefault();
      }
    };

    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const moveY = e.touches[0].clientY;
      const diffY = startY - moveY;

      if (diffY < -10 && window.scrollY > 0) return;

      if (isAnimating) {
        e.preventDefault();
        return;
      }

      if (diffY > 30 && !isReplaced) {
        e.preventDefault();
        setIsAnimating(true);
        setIsReplaced(true);
        setTimeout(() => setIsAnimating(false), 1000);
      } else if (diffY < -30 && isReplaced) {
        e.preventDefault();
        setIsReplaced(false);
        setIsAnimating(false);
      } else if (!isReplaced) {
        e.preventDefault();
      }
    };

    node.addEventListener("wheel", handleWheel, { passive: false });
    node.addEventListener("touchstart", handleTouchStart, { passive: false });
    node.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      node.removeEventListener("wheel", handleWheel);
      node.removeEventListener("touchstart", handleTouchStart);
      node.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isAnimating, isReplaced]);

  return (
    <Wrapper ref={contentRef} $backgroundImage={backgroundImage || ""}>
      <Overlay />
      <Content>
        <TitleBlock $visible={!isReplaced}>
          <BaseTitle $animate={!isReplaced && isAnimating}>{title1}</BaseTitle>
        </TitleBlock>

        <TitleBlock $visible={isReplaced} $centered>
          <Title2 $animate={isReplaced && isAnimating}>{title2}</Title2>
        </TitleBlock>
      </Content>
      <ScrollIconBox>
        <ScrollIcon />
      </ScrollIconBox>
    </Wrapper>
  );
};

export default CustomHeroSection;
