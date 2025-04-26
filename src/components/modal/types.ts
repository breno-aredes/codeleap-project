import { ReactNode } from "react";

export interface ModalProps {
  children?: ReactNode;
  isVisible: boolean;
  isWide: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
