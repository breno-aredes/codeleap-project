import { UseFormReturn } from "react-hook-form";

export interface PostFormValues {
  title: string;
  content: string;
}

export interface PostFormProps {
  isModal?: boolean;
  isEdit?: boolean;
  setIsVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  useForm: UseFormReturn<PostFormValues>;
  onConfirm: (data: any) => void;
  title?: string;
  content?: string;
}
