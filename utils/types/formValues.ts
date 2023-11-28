export interface FormValues {
  name: string;
  title: string;
  email: string;
  phone: string;
  address: string;
  education: {
    school: string;
    degree: string;
    startDate: string;
    endDate: string;
  }[];
  workExperience: {
    company: string;
    title: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  skills: never[];
  achievements: never[];
}
