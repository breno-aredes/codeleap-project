import * as yup from "yup";

export const CommentSchema: yup.ObjectSchema<{
  content: string;
}> = yup.object().shape({
  content: yup.string().required("* Content is required"),
});
