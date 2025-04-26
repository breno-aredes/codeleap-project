import React, { useEffect } from "react";
import * as S from "./styles";
import { ModalProps } from "./types";

const Modal: React.FC<ModalProps> = ({
  children,
  isVisible,
  isWide,
  setIsVisible,
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
      <S.ModalContainer isWide={isWide}>{children}</S.ModalContainer>
    </S.ModalBackground>
  );
};

export default Modal;
