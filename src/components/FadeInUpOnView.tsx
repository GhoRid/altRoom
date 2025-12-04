import React, { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const fadeInUp = (distance: number) => keyframes`
  from {
    opacity: 0;
    transform: translateY(${distance}px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div<{
  $isVisible: boolean;
  $duration: number;
  $transitionHeight: number;
}>`
  opacity: 0;
  transform: translateY(${({ $transitionHeight }) => $transitionHeight}px);
  ${({ $isVisible, $duration, $transitionHeight }) =>
    $isVisible &&
    css`
      animation: ${fadeInUp($transitionHeight)} ${$duration}s linear forwards;
    `}
`;

type FadeInUpOnViewProps = {
  children: React.ReactNode;
  threshold?: number;
  duration?: number; // 초 단위
  transitionHeight?: number;
};

const FadeInUpOnView = ({
  children,
  threshold = 1,
  duration = 0.8,
  transitionHeight = 20,
}: FadeInUpOnViewProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Wrapper
      ref={ref}
      $isVisible={isVisible}
      $duration={duration}
      $transitionHeight={transitionHeight}
    >
      {children}
    </Wrapper>
  );
};

export default FadeInUpOnView;
