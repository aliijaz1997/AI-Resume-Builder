export interface FormValues {
  id?: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  address: string;
  education: Education[];
  workExperience: WorkExperience[];
  skills: string[];
  achievements: string[];
  type?: string;
}

export interface Education {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export interface WorkExperience {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
}
