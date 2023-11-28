import * as yup from "yup";

const educationValidationSchema = yup.object().shape({
  school: yup.string().required("School is required"),
  degree: yup.string().required("Degree is required"),
  startDate: yup.string().required("Start date is required"),
  endDate: yup.string().required("End date is required"),
});
const workExperienceValidationSchema = yup.object().shape({
  company: yup.string().required("Company name is required"),
  title: yup.string().required("Title is required"),
  startDate: yup.string().required("Start date is required"),
  endDate: yup.string().required("End date is required"),
  description: yup.string().required("Description is required"),
});

export const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  address: yup.string().required("Address is required"),
  education: yup.array().of(educationValidationSchema),
  workExperience: yup.array().of(workExperienceValidationSchema),
});
