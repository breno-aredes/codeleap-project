import * as yup from "yup";

export const PostSchema: yup.ObjectSchema<{
  title: string;
  content: string;
}> = yup.object().shape({
  title: yup.string().required("* Title is required"),
  content: yup.string().required("* Content is required"),
});
