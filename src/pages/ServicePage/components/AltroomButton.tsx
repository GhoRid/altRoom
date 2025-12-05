import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import styled, { css, keyframes } from "styled-components";
import { colors } from "../../../styles/color";

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

const AltroomButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const target = buttonRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.8,
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <StyledLink ref={buttonRef} to="/estimate" $isVisible={isVisible}>
      <p>start ALT ROOM</p>
    </StyledLink>
  );
};

export default AltroomButton;

const StyledLink = styled(Link)<{ $isVisible: boolean }>`
  padding: 16px 32px;
  border-radius: 8px;
  background-color: ${colors.app_brown};
  opacity: 0;
  animation: ${({ $isVisible }) =>
    $isVisible
      ? css`
          ${fadeInUp} 0.8s ease-out forwards;
        `
      : "none"};

  p {
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    color: #ffffff;
  }
`;
