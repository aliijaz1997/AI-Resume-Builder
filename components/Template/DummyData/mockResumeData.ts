import { FormValues } from "../../../utils/types/formValues";

export const mockValues: FormValues = {
  name: "John Doe",
  title: "Software Engineer",
  email: "johndoe@example.com",
  phone: "+92565488654",
  address: "Islamabad, Pakistan",
  education: [
    {
      school: "University of ABC",
      degree: "Bachelor of Science in Computer Science",
      startDate: "2015",
      endDate: "2019",
    },
    {
      school: "XYZ College",
      degree: "Master of Business Administration",
      startDate: "2020",
      endDate: "2022",
    },
  ],
  custom: [
    {
      name: "Skills",
      items: [
        "JavaScript",
        "React",
        "Node.js",
        "HTML",
        "CSS",
        "Python",
        "SQL",
        "Git",
      ],
    },
    {
      name: "Achievements",
      items: [
        "Completed Jedi Master training and built a lightsaber from scratch in order to do battle against the Empire",
        "Defeated the Rancor and rescued Princess Leia from Jabba the Hutt",
        "Competent fighter pilot as well as an excelent shot with nearly any weapon",
      ],
    },
  ],
  workExperience: [
    {
      company: "Tech Solutions Inc.",
      title: "Software Developer",
      startDate: "2019",
      endDate: "2021",
      description:
        "Developed scalable web applications using React.js and Node.js. - Led a team to implement new features and improve performance. - Designed and implemented RESTful APIs, enhancing system functionality and interoperability. - Conducted regular code reviews, ensuring high code quality and adherence to best practices. - Mentored junior developers, fostering a culture of continuous learning and growth within the team.",
    },
    {
      company: "ABC Corporation",
      title: "Business Analyst Intern",
      startDate: "2018",
      endDate: "2018",
      description:
        "Assisted in analyzing market trends and preparing reports. - Conducted data-driven research for strategic decision-making. - Identified cost-saving opportunities through data analysis, resulting in a 15% reduction in expenses. - Contributed insights that influenced a successful product launch strategy in a new market segment. - Collaborated with cross-functional teams, ensuring alignment of market strategies with company goals.",
    },
  ],
};

export const dummyResumeLists: FormValues[] = [
  {
    name: "John Doe",
    title: "Software Engineer",
    email: "johndoe@example.com",
    phone: "+92565488654",
    address: "Islamabad, Pakistan",
    type: "modern",
    education: [
      {
        school: "University of ABC",
        degree: "Bachelor of Science in Computer Science",
        startDate: "2015",
        endDate: "2019",
      },
      {
        school: "XYZ College",
        degree: "Master of Business Administration",
        startDate: "2020",
        endDate: "2022",
      },
    ],
    custom: [
      {
        name: "Skills",
        items: [
          "JavaScript",
          "React",
          "Node.js",
          "HTML",
          "CSS",
          "Python",
          "SQL",
          "Git",
        ],
      },
      {
        name: "Achievements",
        items: [
          "Completed Jedi Master training and built a lightsaber from scratch in order to do battle against the Empire",
          "Defeated the Rancor and rescued Princess Leia from Jabba the Hutt",
          "Competent fighter pilot as well as an excelent shot with nearly any weapon",
        ],
      },
    ],
    workExperience: [
      {
        company: "Tech Solutions Inc.",
        title: "Software Developer",
        startDate: "2019",
        endDate: "2021",
        description:
          "Developed scalable web applications using React.js and Node.js. - Led a team to implement new features and improve performance. - Designed and implemented RESTful APIs, enhancing system functionality and interoperability. - Conducted regular code reviews, ensuring high code quality and adherence to best practices. - Mentored junior developers, fostering a culture of continuous learning and growth within the team.",
      },
      {
        company: "ABC Corporation",
        title: "Business Analyst Intern",
        startDate: "2018",
        endDate: "2018",
        description:
          "Assisted in analyzing market trends and preparing reports. - Conducted data-driven research for strategic decision-making. - Identified cost-saving opportunities through data analysis, resulting in a 15% reduction in expenses. - Contributed insights that influenced a successful product launch strategy in a new market segment. - Collaborated with cross-functional teams, ensuring alignment of market strategies with company goals.",
      },
    ],
  },
  {
    name: "John Doe",
    title: "Software Engineer",
    email: "johndoe@example.com",
    phone: "+92565488654",
    type: "classic",
    address: "Islamabad, Pakistan",
    education: [
      {
        school: "University of ABC",
        degree: "Bachelor of Science in Computer Science",
        startDate: "2015",
        endDate: "2019",
      },
      {
        school: "XYZ College",
        degree: "Master of Business Administration",
        startDate: "2020",
        endDate: "2022",
      },
    ],
    custom: [
      {
        name: "Skills",
        items: [
          "JavaScript",
          "React",
          "Node.js",
          "HTML",
          "CSS",
          "Python",
          "SQL",
          "Git",
        ],
      },
      {
        name: "Achievements",
        items: [
          "Completed Jedi Master training and built a lightsaber from scratch in order to do battle against the Empire",
          "Defeated the Rancor and rescued Princess Leia from Jabba the Hutt",
          "Competent fighter pilot as well as an excelent shot with nearly any weapon",
        ],
      },
    ],
    workExperience: [
      {
        company: "Tech Solutions Inc.",
        title: "Software Developer",
        startDate: "2019",
        endDate: "2021",
        description:
          "Developed scalable web applications using React.js and Node.js. - Led a team to implement new features and improve performance. - Designed and implemented RESTful APIs, enhancing system functionality and interoperability. - Conducted regular code reviews, ensuring high code quality and adherence to best practices. - Mentored junior developers, fostering a culture of continuous learning and growth within the team.",
      },
      {
        company: "ABC Corporation",
        title: "Business Analyst Intern",
        startDate: "2018",
        endDate: "2018",
        description:
          "Assisted in analyzing market trends and preparing reports. - Conducted data-driven research for strategic decision-making. - Identified cost-saving opportunities through data analysis, resulting in a 15% reduction in expenses. - Contributed insights that influenced a successful product launch strategy in a new market segment. - Collaborated with cross-functional teams, ensuring alignment of market strategies with company goals.",
      },
    ],
  },
  {
    name: "John Doe",
    title: "Software Engineer",
    email: "johndoe@example.com",
    phone: "+92565488654",
    address: "Islamabad, Pakistan",
    education: [
      {
        school: "University of ABC",
        degree: "Bachelor of Science in Computer Science",
        startDate: "2015",
        endDate: "2019",
      },
      {
        school: "XYZ College",
        degree: "Master of Business Administration",
        startDate: "2020",
        endDate: "2022",
      },
    ],
    custom: [
      {
        name: "Skills",
        items: [
          "JavaScript",
          "React",
          "Node.js",
          "HTML",
          "CSS",
          "Python",
          "SQL",
          "Git",
        ],
      },
      {
        name: "Achievements",
        items: [
          "Completed Jedi Master training and built a lightsaber from scratch in order to do battle against the Empire",
          "Defeated the Rancor and rescued Princess Leia from Jabba the Hutt",
          "Competent fighter pilot as well as an excelent shot with nearly any weapon",
        ],
      },
    ],
    workExperience: [
      {
        company: "Tech Solutions Inc.",
        title: "Software Developer",
        startDate: "2019",
        endDate: "2021",
        description:
          "Developed scalable web applications using React.js and Node.js. - Led a team to implement new features and improve performance. - Designed and implemented RESTful APIs, enhancing system functionality and interoperability. - Conducted regular code reviews, ensuring high code quality and adherence to best practices. - Mentored junior developers, fostering a culture of continuous learning and growth within the team.",
      },
      {
        company: "ABC Corporation",
        title: "Business Analyst Intern",
        startDate: "2018",
        endDate: "2018",
        description:
          "Assisted in analyzing market trends and preparing reports. - Conducted data-driven research for strategic decision-making. - Identified cost-saving opportunities through data analysis, resulting in a 15% reduction in expenses. - Contributed insights that influenced a successful product launch strategy in a new market segment. - Collaborated with cross-functional teams, ensuring alignment of market strategies with company goals.",
      },
    ],
  },
  {
    name: "John Doe",
    title: "Software Engineer",
    email: "johndoe@example.com",
    phone: "+92565488654",
    type: "modern",
    address: "Islamabad, Pakistan",
    education: [
      {
        school: "University of ABC",
        degree: "Bachelor of Science in Computer Science",
        startDate: "2015",
        endDate: "2019",
      },
      {
        school: "XYZ College",
        degree: "Master of Business Administration",
        startDate: "2020",
        endDate: "2022",
      },
    ],
    custom: [
      {
        name: "Skills",
        items: [
          "JavaScript",
          "React",
          "Node.js",
          "HTML",
          "CSS",
          "Python",
          "SQL",
          "Git",
        ],
      },
      {
        name: "Achievements",
        items: [
          "Completed Jedi Master training and built a lightsaber from scratch in order to do battle against the Empire",
          "Defeated the Rancor and rescued Princess Leia from Jabba the Hutt",
          "Competent fighter pilot as well as an excelent shot with nearly any weapon",
        ],
      },
    ],
    workExperience: [
      {
        company: "Tech Solutions Inc.",
        title: "Software Developer",
        startDate: "2019",
        endDate: "2021",
        description:
          "Developed scalable web applications using React.js and Node.js. - Led a team to implement new features and improve performance. - Designed and implemented RESTful APIs, enhancing system functionality and interoperability. - Conducted regular code reviews, ensuring high code quality and adherence to best practices. - Mentored junior developers, fostering a culture of continuous learning and growth within the team.",
      },
      {
        company: "ABC Corporation",
        title: "Business Analyst Intern",
        startDate: "2018",
        endDate: "2018",
        description:
          "Assisted in analyzing market trends and preparing reports. - Conducted data-driven research for strategic decision-making. - Identified cost-saving opportunities through data analysis, resulting in a 15% reduction in expenses. - Contributed insights that influenced a successful product launch strategy in a new market segment. - Collaborated with cross-functional teams, ensuring alignment of market strategies with company goals.",
      },
    ],
  },
  {
    name: "John Doe",
    title: "Software Engineer",
    email: "johndoe@example.com",
    phone: "+92565488654",
    type: "classic",
    address: "Islamabad, Pakistan",
    education: [
      {
        school: "University of ABC",
        degree: "Bachelor of Science in Computer Science",
        startDate: "2015",
        endDate: "2019",
      },
      {
        school: "XYZ College",
        degree: "Master of Business Administration",
        startDate: "2020",
        endDate: "2022",
      },
    ],
    custom: [
      {
        name: "Skills",
        items: [
          "JavaScript",
          "React",
          "Node.js",
          "HTML",
          "CSS",
          "Python",
          "SQL",
          "Git",
        ],
      },
      {
        name: "Achievements",
        items: [
          "Completed Jedi Master training and built a lightsaber from scratch in order to do battle against the Empire",
          "Defeated the Rancor and rescued Princess Leia from Jabba the Hutt",
          "Competent fighter pilot as well as an excelent shot with nearly any weapon",
        ],
      },
    ],
    workExperience: [
      {
        company: "Tech Solutions Inc.",
        title: "Software Developer",
        startDate: "2019",
        endDate: "2021",
        description:
          "Developed scalable web applications using React.js and Node.js. - Led a team to implement new features and improve performance. - Designed and implemented RESTful APIs, enhancing system functionality and interoperability. - Conducted regular code reviews, ensuring high code quality and adherence to best practices. - Mentored junior developers, fostering a culture of continuous learning and growth within the team.",
      },
      {
        company: "ABC Corporation",
        title: "Business Analyst Intern",
        startDate: "2018",
        endDate: "2018",
        description:
          "Assisted in analyzing market trends and preparing reports. - Conducted data-driven research for strategic decision-making. - Identified cost-saving opportunities through data analysis, resulting in a 15% reduction in expenses. - Contributed insights that influenced a successful product launch strategy in a new market segment. - Collaborated with cross-functional teams, ensuring alignment of market strategies with company goals.",
      },
    ],
  },
  {
    name: "John Doe",
    title: "Software Engineer",
    email: "johndoe@example.com",
    phone: "+92565488654",
    address: "Islamabad, Pakistan",
    education: [
      {
        school: "University of ABC",
        degree: "Bachelor of Science in Computer Science",
        startDate: "2015",
        endDate: "2019",
      },
      {
        school: "XYZ College",
        degree: "Master of Business Administration",
        startDate: "2020",
        endDate: "2022",
      },
    ],
    custom: [
      {
        name: "Skills",
        items: [
          "JavaScript",
          "React",
          "Node.js",
          "HTML",
          "CSS",
          "Python",
          "SQL",
          "Git",
        ],
      },
      {
        name: "Achievements",
        items: [
          "Completed Jedi Master training and built a lightsaber from scratch in order to do battle against the Empire",
          "Defeated the Rancor and rescued Princess Leia from Jabba the Hutt",
          "Competent fighter pilot as well as an excelent shot with nearly any weapon",
        ],
      },
    ],
    workExperience: [
      {
        company: "Tech Solutions Inc.",
        title: "Software Developer",
        startDate: "2019",
        endDate: "2021",
        description:
          "Developed scalable web applications using React.js and Node.js. - Led a team to implement new features and improve performance. - Designed and implemented RESTful APIs, enhancing system functionality and interoperability. - Conducted regular code reviews, ensuring high code quality and adherence to best practices. - Mentored junior developers, fostering a culture of continuous learning and growth within the team.",
      },
      {
        company: "ABC Corporation",
        title: "Business Analyst Intern",
        startDate: "2018",
        endDate: "2018",
        description:
          "Assisted in analyzing market trends and preparing reports. - Conducted data-driven research for strategic decision-making. - Identified cost-saving opportunities through data analysis, resulting in a 15% reduction in expenses. - Contributed insights that influenced a successful product launch strategy in a new market segment. - Collaborated with cross-functional teams, ensuring alignment of market strategies with company goals.",
      },
    ],
  },
  {
    name: "John Doe",
    title: "Software Engineer",
    email: "johndoe@example.com",
    phone: "+92565488654",
    address: "Islamabad, Pakistan",
    education: [
      {
        school: "University of ABC",
        degree: "Bachelor of Science in Computer Science",
        startDate: "2015",
        endDate: "2019",
      },
      {
        school: "XYZ College",
        degree: "Master of Business Administration",
        startDate: "2020",
        endDate: "2022",
      },
    ],
    custom: [
      {
        name: "Skills",
        items: [
          "JavaScript",
          "React",
          "Node.js",
          "HTML",
          "CSS",
          "Python",
          "SQL",
          "Git",
        ],
      },
      {
        name: "Achievements",
        items: [
          "Completed Jedi Master training and built a lightsaber from scratch in order to do battle against the Empire",
          "Defeated the Rancor and rescued Princess Leia from Jabba the Hutt",
          "Competent fighter pilot as well as an excelent shot with nearly any weapon",
        ],
      },
    ],
    workExperience: [
      {
        company: "Tech Solutions Inc.",
        title: "Software Developer",
        startDate: "2019",
        endDate: "2021",
        description:
          "Developed scalable web applications using React.js and Node.js. - Led a team to implement new features and improve performance. - Designed and implemented RESTful APIs, enhancing system functionality and interoperability. - Conducted regular code reviews, ensuring high code quality and adherence to best practices. - Mentored junior developers, fostering a culture of continuous learning and growth within the team.",
      },
      {
        company: "ABC Corporation",
        title: "Business Analyst Intern",
        startDate: "2018",
        endDate: "2018",
        description:
          "Assisted in analyzing market trends and preparing reports. - Conducted data-driven research for strategic decision-making. - Identified cost-saving opportunities through data analysis, resulting in a 15% reduction in expenses. - Contributed insights that influenced a successful product launch strategy in a new market segment. - Collaborated with cross-functional teams, ensuring alignment of market strategies with company goals.",
      },
    ],
  },
  {
    name: "John Doe",
    title: "Software Engineer",
    email: "johndoe@example.com",
    phone: "+92565488654",
    address: "Islamabad, Pakistan",
    education: [
      {
        school: "University of ABC",
        degree: "Bachelor of Science in Computer Science",
        startDate: "2015",
        endDate: "2019",
      },
      {
        school: "XYZ College",
        degree: "Master of Business Administration",
        startDate: "2020",
        endDate: "2022",
      },
    ],
    custom: [
      {
        name: "Skills",
        items: [
          "JavaScript",
          "React",
          "Node.js",
          "HTML",
          "CSS",
          "Python",
          "SQL",
          "Git",
        ],
      },
      {
        name: "Achievements",
        items: [
          "Completed Jedi Master training and built a lightsaber from scratch in order to do battle against the Empire",
          "Defeated the Rancor and rescued Princess Leia from Jabba the Hutt",
          "Competent fighter pilot as well as an excelent shot with nearly any weapon",
        ],
      },
    ],
    workExperience: [
      {
        company: "Tech Solutions Inc.",
        title: "Software Developer",
        startDate: "2019",
        endDate: "2021",
        description:
          "Developed scalable web applications using React.js and Node.js. - Led a team to implement new features and improve performance. - Designed and implemented RESTful APIs, enhancing system functionality and interoperability. - Conducted regular code reviews, ensuring high code quality and adherence to best practices. - Mentored junior developers, fostering a culture of continuous learning and growth within the team.",
      },
      {
        company: "ABC Corporation",
        title: "Business Analyst Intern",
        startDate: "2018",
        endDate: "2018",
        description:
          "Assisted in analyzing market trends and preparing reports. - Conducted data-driven research for strategic decision-making. - Identified cost-saving opportunities through data analysis, resulting in a 15% reduction in expenses. - Contributed insights that influenced a successful product launch strategy in a new market segment. - Collaborated with cross-functional teams, ensuring alignment of market strategies with company goals.",
      },
    ],
  },
];
