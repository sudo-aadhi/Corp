import { object, string } from "zod";

const getPasswordSchema = (type: "password" | "confirmPassword") =>
  string({
    required_error: `${
      type === "confirmPassword" ? "Confirm Password" : "Password"
    } is required`,
  })
    .min(
      8,
      `${
        type === "confirmPassword" ? "Confirm Password" : "Password"
      } must be atleast 8 characters`,
    )
    .max(
      32,
      `${
        type === "confirmPassword" ? "Confirm Password" : "Password"
      } can not exceed 32 characters`,
    );

const getEmailSchema = () =>
  string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email");

const getNameSchema = (type: "firstName" | "lastName") =>
  string({
    required_error: `${type === "firstName" ? "First Name" : "Last Name"} is required`,
  })
    .min(1, `${type === "firstName" ? "First Name" : "Last Name"} is required`)
    .max(
      50,
      `${type === "firstName" ? "First Name" : "Last Name"} must be less than 50 characters`,
    );

export const signUpSchema = object({
  firstName: getNameSchema("firstName"),
  lastName: getNameSchema("lastName"),
  email: getEmailSchema(),
  password: getPasswordSchema("password"),
  confirmPassword: getPasswordSchema("confirmPassword"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const signInSchema = object({
  email: getEmailSchema(),
  password: getPasswordSchema("password"),
});

export const forgotPasswordSchema = object({
  email: getEmailSchema(),
});

export const resetPasswordSchema = object({
  password: getPasswordSchema("password"),
  confirmPassword: getPasswordSchema("confirmPassword"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});
