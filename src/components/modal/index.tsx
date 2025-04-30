import React, { useEffect } from "react";
import * as S from "./styles";
import { ModalProps } from "./types";
import AnimatedModalWrapper from "../animeted";

const Modal: React.FC<ModalProps> = ({
  children,
  isVisible,
  isWide,
  setIsVisible,
  direction = -1,
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isWide && event.key === "Escape") {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isWide, isVisible, setIsVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <S.ModalBackground isWide={isWide}>
      <AnimatedModalWrapper direction={direction}>
        {direction !== 2 && (
          <S.ModalContainer isWide={isWide}>{children}</S.ModalContainer>
        )}
      </AnimatedModalWrapper>
    </S.ModalBackground>
  );
};

export default Modal;
