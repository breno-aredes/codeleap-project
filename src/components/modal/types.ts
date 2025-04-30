import { ReactNode } from "react";

export interface ModalProps {
  children?: ReactNode;
  isVisible: boolean;
  isWide: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  direction?: number;
  setDirection?: React.Dispatch<React.SetStateAction<number>>;
}
