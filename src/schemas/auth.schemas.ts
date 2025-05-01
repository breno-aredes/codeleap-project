import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("* Must be a valid email")
    .required("* Email is required"),
  password: Yup.string()
    .min(6, "* Password must have at least 6 characters")
    .required("* Password is required"),
});

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required("* Name is required")
    .matches(/^[^\s]+$/, "* Name must not contain spaces"),
  email: Yup.string()
    .email("* Must be a valid email")
    .required("* Email is required"),
  password: Yup.string()
    .min(6, "* Password must have at least 6 characters")
    .required("* Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "* Passwords must match")
    .required("* Confirm Password is required"),
});
