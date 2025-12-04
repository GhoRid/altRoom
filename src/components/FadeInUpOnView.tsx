import React, { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div<{ $isVisible: boolean }>`
  opacity: 0;
  transform: translateY(20px);
  ${({ $isVisible }) =>
    $isVisible &&
    css`
      animation: ${fadeInUp} 0.8s ease-out forwards;
    `}
`;

type Props = {
  children: React.ReactNode;
  threshold?: number;
};

const FadeInUpOnView = ({ children, threshold = 1 }: Props) => {
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
    <Wrapper ref={ref} $isVisible={isVisible}>
      {children}
    </Wrapper>
  );
};

export default FadeInUpOnView;
