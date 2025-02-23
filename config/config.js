
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';
import { Briefcase, GraduationCap } from 'lucide-react';

export const navigation = {
  name: "Hayath",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Experience",
      link: "#experience",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },

  ],
}
export const intro = {
  title: "Hey, I'm Hayath",
  description: "A Data Analyst transforming complex data into actionable insights.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1-wRUN0GxbsgxRHg7xPodDSB06l6UHkuD/view?usp=sharing",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I graduated from the University of Memphis with a Masters degree in Computer Science and have nearly three years of experience in data analytics, machine learning, and financial risk assessment. My professional journey began at Infosys Limited, where I worked as a Data Analyst supporting financial data processing and predictive modeling. I am currently a Data Analyst at Raymond James, optimizing SQL-based risk evaluation models and building interactive dashboards to enhance data-driven decision-making.",
    "The tech industry is constantly evolving, and I find excitement in learning new technologies while strengthening my foundational knowledge. I am passionate about leveraging data to drive meaningful insights and operational efficiencies.",
    "My experience in cloud computing, automated ETL pipelines, and business intelligence tools allows me to build scalable data solutions. I also enjoy mentoring and sharing knowledge within the data analytics community, helping newcomers navigate their journey in the field.",
  ],
}


/*export const work = {
  title: "What I do",
  cards: [
    {
      title: "Data Analytics & Machine Learning",
      description: "I specialize in building predictive models, statistical analyses, and automated data workflows to support business intelligence and decision-making processes. My technical expertise includes SQL, Python, Tableau, Power BI, and AWS, which I use to analyze large datasets and derive actionable insights.",
      icons: null,
    },
    {
      title: "Cloud & ETL Engineering",
      description: "I design and optimize ETL pipelines using AWS Glue, Lambda, and Informatica, ensuring seamless data integration and automation. My experience in cloud platforms such as AWS and Azure allows me to create secure and efficient data workflows.",
      icons: null,
    }
  ],
}
*/
export const experience = {
  title: "Professional Experience & Education",
  cards: [
    {
      date: 'Aug 2024 - Present',
      title: 'Data Analyst',
      company: 'Raymond James (Remote, USA)',
      description: `Conducting EDA on loan portfolios, improving risk assessment accuracy by 25%. Developing SQL queries for financial risk evaluation, improving precision by 30%. Building Tableau dashboards for key financial metrics, enhancing reporting efficiency by 40%. Automating data workflows using AWS Lambda, reducing manual effort by 30%.`,
      icon: <Briefcase />,
    },
    {
      date: 'Dec 2024',
      title: 'Master of Science in Computer Science',
      company: 'University of Memphis',
      description: `Completed advanced coursework in machine learning, data analytics, and software development, strengthening analytical and programming skills.`,
      icon: <GraduationCap />,
    },
    {
      date: 'Aug 2021 - Nov 2022',
      title: 'Data Analyst',
      company: 'Infosys Limited – Truist Bank',
      description: `Analyzed large datasets of 200K+ records, enhancing customer retention by 10%. Optimized data pipelines with Informatica, reducing processing time by 30%. Developed Power BI dashboards for KPIs, improving operational efficiency by 20%.`,
      icon: <Briefcase />,
    },
    {
      date: 'Jul 2021 - Aug 2021',
      title: 'Intern - Data Analyst',
      company: 'Infosys Limited',
      description: `Built Power BI dashboards and conducted SQL-based analysis, contributing to enhanced data-driven insights and reporting.`,
      icon: <Briefcase />,
    },
    {
      date: 'Aug 2020 - Jun 2021',
      title: 'Intern - Data Analyst',
      company: 'Kosha Technohub',
      description: `Extracted and analyzed e-commerce data, performed statistical analysis, and deployed Tableau dashboards for visualization.`,
      icon: <Briefcase />,
    },
    {
      date: 'Jul 2021',
      title: 'Bachelor of Technology in Computer Science and Engineering',
      company: 'Bapatla Engineering College',
      description: `Acquired strong foundations in computer science principles, coding, and problem-solving techniques.`,
      icon: <GraduationCap />,
    }
  ]
}


export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Emotion Detection Model",
      description: "Developed a BERT-based machine learning model for emotion detection in textual data. This project aimed to enhance sentiment analysis applications, particularly in social media analysis, customer service, and mental health monitoring.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/Hayath07",
        },
      ]
    },
    {
      title: "Diabetes Predictive Model",
      description: "Constructed a classification-based machine learning model for early diabetes detection, leveraging decision trees, logistic regression, and K-nearest neighbors on the Pima Indians Diabetes Database. This project tackled class imbalance and missing data challenges using feature selection and optimization techniques.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/Hayath07",
        },
      ]
    },
    {
      title: "Retail Data Analytics Platform",
      description: "Designed and implemented ETL pipelines and dashboards for an online retail platform, optimizing inventory and sales analysis. Used SQL, Python, and Tableau to track key performance metrics and improve decision-making for stakeholders.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/Hayath07",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at hayath.m7891@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:hayath.m7891@gmail.com",
      isPrimary: true,
    },
    {
      title: "Schedule Meeting",
      link: "https://topmate.io/hayath_mohammad",
      isPrimary: false,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Hayath Mohammad | Data Analyst | Machine Learning | Cloud & ETL Engineer",
  description: "I extract insights from complex data using machine learning, SQL, and cloud technologies. I hold a Masters in Computer Science from the University of Memphis and have nearly three years of experience in data analytics and automation.",
  image: profile.png,
}

export const links = {
  image: profile.src,
  title: "@hayath",
  description: "Data Analyst | Machine Learning | Cloud & ETL Engineer",
  cards: [
    {
      title: "My website",
      link: "https://hayath.com/",
    },
    {
      title: "My GitHub",
      link: "https://github.com/Hayath07/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/hayath07/",
    },
  ]
}