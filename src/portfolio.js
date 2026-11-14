/* Portfolio content */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Muhammad Hidayat",
  logo_name: "Muhammad Hidayat",
  nickname: "@hidayat7z",
  subTitle:
    "Curious by nature, I enjoy exploring ideas, building products and bringing people together around shared interests.",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/
  // linkedin: "https://www.linkedin.com/
  // gmail: "
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  // instagram: "https://www.instagram.com/"


  
  /*
  {
    name: "Website",
    link: "https://hidayat7z.github.io/",
    fontAwesomeIcon: "fa-chrome", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#33cc33", // Reference https://simpleicons.org/?q=github
  },
  */

  {
    name: "Github",
    link: "https://github.com/hidayat7z",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/hidayat7/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  
  {
    name: "Gmail",
    link: "mailto:hidayatwork7@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "red", // Reference https://simpleicons.org/?q=gmail
  },
  
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC6QY-xBQC6_b79u43Gurhng",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  
  {
    name: "Medium",
    link: "https://hidayat7.medium.com/",
    fontAwesomeIcon: "fa-medium", // 	change medium to your wish
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "4Ummah",
    link: "https://4ummah.co/",
    logoPath: "4ummah-favicon-64.png",
    backgroundColor: "#ffffff",
  },
  
  /*
  {
    name: "Facebook",
    link: "https://www.facebook.com//",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  */
  
  /*SEVENTH
  {
    name: "Instagram",
    link: "https://www.instagram.com/hidayat_mufc/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  
  */
];

const skills = {				//checkout skills.js and skills.css
  data: [
    {
      title: "Startup & Product Building",
      fileName: "StartupBuildingImg",
      skills: [
        "Startup building, product ideation, product strategy, feature planning, translating ideas into actionable plans, and taking products from concept to execution.",
        "Identifying opportunities, strategic problem-solving, ecosystem development, and cross-functional product collaboration.",
      ],
      softwareSkills: [],
    },
    {
      title: "Operations & Leadership",
      fileName: "OperationsLeadershipImg",
      skills: [
        "Startup operations, cross-functional team management, workflow optimization, process development, and project execution.",
        "Team building, recruitment, onboarding, delegation, training, KPI tracking, stakeholder coordination, and operational planning.",
      ],
      softwareSkills: [],
    },
  
  
  //#0: SKILLS like C, C++		CHECKOUT FILE: CloudinfraImg.js
  {
      title: "Tech Stack",
      
      
      fileName: "CloudInfraImg",
      
      
      skills: [
        "Languages: Python, JavaScript, C++",
        "Frameworks: React.js, Node.js, React Native",
        "Data: SQL, MySQL, MongoDB, Machine Learning Algorithms & Models",
        "Tools: Claude, Codex, ChatGpt, Gamma, Gemini, Git, GitHub, Postman, Jupyter",
        /*  "⚡ HTML5, CSS3",  */
        
        /*
        "⚡Libraries: NumPy, Scikit, React, Pandas",
        ⚡ Experience working on multiple cloud platforms"
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",*/
      ],
      softwareSkills: [
        

        /*
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
         },
         },
      
      */


         /*  **
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
       ** */


        /*
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            backgroundColor: "transparent",
            color: "blue",
          },
        },
        
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
          
        },
        
        
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:cplus",
          style: {
            color: "green",
          },
        },
        
        
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:contao",
          style: {
            color: "#E34F26",
          },
        },

        */
        
        
      /*
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
       
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        
        */
      ],
    },
  
  
  
  
  
  
  	//#1
    {
      title: "Data Analysis, Machine Learning & AI",
      fileName: "DataScienceImg",
      skills: [
        "Exploratory data analysis, visualization, forecasting, web scraping, and machine learning algorithms.",
        "Libraries and tools: NumPy, Pandas, Matplotlib, Seaborn, Plotly, scikit-learn, GeoPy, Streamlit.",
        "AI-assisted workflows with prompt engineering and tools including ChatGPT, Claude, Gemini, and Codex.",
        "Content operations: catalog quality, metadata management, creator coordination, and workflow automation.",
        
        /* FIRST
        "⚡ Libraries: PyTorch, TensorFlow, Scikit-Learn, Pandas, Matplotlib",*/
        /*
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",*/
      ],
      softwareSkills: [
      
      /*  **
       {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },

        ** */ 
      
      	/* SIXTH
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        */
        
        /*
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        */
        
        /* SECOND
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        */
        
      ],
    },
  
    

    //#3: SKILLS like C, C++		CHECKOUT FILE: CloudinfraImg.js
    /*
    {
      title: "Coding",
      
      
      fileName: "CloudInfraImg",
      
      
      skills: [
        "⚡Programming Languages: C, C++, Python and JavaScript",
        "⚡Libraries: NumPy, Scikit, React, Pandas",
        /*
        ⚡ Experience working on multiple cloud platforms"
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
      
      
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        
        
     
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
       
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        
        
      ],
    },
    */
    
    
    
    /*
    {
      title: "Hobbies",
      
      
      
      fileName: "CloudInfraImg",
      
      
      
      skills: [
        "⚡Programming Languages: C, C++, Python and JavaScript",
        "⚡Libraries: NumPy, Scikit, React, Pandas",
        /*
        ⚡ Experience working on multiple cloud platforms"
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
      
      
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        
        
    
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        
        
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        
        
      ],
    },
    
    
    
    
    
    
    
    
    
   
    
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    */
    
    
    
    
    
    
    
  ],
};

// Education Page	CHECKOUT: EducationComponent.js  and Education.js


const competitiveSites = {
  competitiveSites: [
    /*
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/",
    },
    
    
    
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@hidayat7z",
    },
    */
    
  ],
};

const degrees = {


  degrees: [
  
  
  
    {
      title: "Maulana Abul Kalam Azad University of Technology",
      subtitle: "B.Tech in Computer Science and Engineering",
      logo_path: "makaut-logo.png",
      alt_name: "MAKAUT",
      duration: "2018 - 2022",
      
      descriptions: [
        "Graduated with an 8.92 CGPA.",
        "Coursework included software engineering, operating systems, databases, machine learning, deep learning, and computer networks.",
        /*"⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",*/
      ],
      website_link: "https://www.makautwb.ac.in/",
    }
    
  ],
  
};



const certifications = {
  certifications: [
  
  
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link: "https://www.coursera.org/account/accomplishments/verify/DC57TLBMKDLF",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    
    
    /*
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    */
  
    
    /* THIRD
    
    {
      title: "Machine Learning A-Z™",
      subtitle: "- Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "#",
      alt_name: "ML:A-Z™",
      color_code: "#e6e6e6",
    },
    
    */
    
     {
      title: "Complete Python Bootcamp",
      subtitle: "- Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "#",
      alt_name: "Python",
      color_code: "#e6e6e6",
    },
    
    {
      title: "Machine Learning for Mathematics",
      subtitle: "- Imperial College London",
      logo_path: "imperial.png",
      certificate_link: "https://www.coursera.org/account/accomplishments/verify/4YTSM4CUKSQ9",
      alt_name: "ML for Maths",
      color_code: "#2929a3",
    },


    {
      title: "AWS Machine Learning Foundations",
      subtitle: "- Udacity",
      logo_path: "udacity-logo.png",
      certificate_link:
        "https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/33adf6ba-f720-4540-be57-1fe206f990da.pdf?utm_campaign=sch_600_auto_ndxxx_aws-ml-completed_global&utm_source=blueshift&utm_medium=email&utm_content=sch_600_auto_ndxxx_aws-ml-complet",
      alt_name: "AWS ML Foundations",
      color_code: "#02B3E4",
    },
    
    /* FOURTH
    {
      title: "Python for Data Science and Machine Learning Bootcamp ",
      subtitle: "- Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "#",
      alt_name: "Python for DS&ML",
      color_code: "#e6e6e6",
    },
    */
    
    {
      title: "AWS Fundamentals: Going Cloud-Native",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/GY8GRTT3LQNJ",
        alt_name: "AWS Fundamentals",
      color_code: "#4285F499",
    },
    
    {
      title: "Introduction to Quantum Computing Course",
      subtitle: "- IBM Quantum",
      logo_path: "codingschool.jpg",
      certificate_link: "https://drive.google.com/file/d/1HGqwleStL5FVd9MZqKNM1u4rP7ZyZWE-/view?usp=sharing",
      alt_name: "Quantum Computing Course",
      color_code: "white",
    },

     {
      title: "Mathematical Thinking in Computer Science",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/EL7WXELV5K4R",
      alt_name: "Mathematical Thinking in CS",
      color_code: "#4285F499",
    },
    

    /*
    {
      title: "Learn JavaScript",
      subtitle: "- Scrimba",
      logo_path: "scrimba.png",		//fcc.png
      certificate_link:
        "#",
      alt_name: "JS",
      color_code: "white",
    },
    
    {
      title: "Learn React",
      subtitle: "- Scrimba",
      logo_path: "scrimba.png",
      certificate_link:
        "#",
      alt_name: "React",
      color_code: "white",
    },
    */
    
    /* FIFTH
    {
      title: "fcc",
      subtitle: "freeCodeCamp",
      logo_path: "fcc.png",
      certificate_link:
        "#",
      alt_name: "fcc",
      color_code: "white",
    },
    */
    
   
    {
      title: "Web Development",
      subtitle: "- Internshala",
      logo_path: "internshala.png",
      certificate_link:
        "#",
      alt_name: "WebDev",
      color_code: "#02B3E4",
    },
 
  ],
};

// Experience Page
const experience = {
  title: "EXPERIENCE",
  subtitle: "Work and internships",
  
  /*
  	description:
    /*"I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative."
    I have worked with", */
    
  header_image_path: "experience.svg",
  sections: [
    
     
    {
      title: "Work",
      experiences: [
        {
          title: "Founder",
          company: "4Ummah",
          company_url: "https://www.4ummah.co/",
          logo_path: "4ummah-logo.png",
          duration: "September 2026 - Present",
          location: "",
          description:
            "Building a platform for the Muslim ecosystem, helping people discover Muslim-led products, businesses, services, careers, and events.",
          color: "#138f87",
        },
        {
          title: "Founding Member",
          company: "Nasheedio",
          company_url: "https://app.nasheedio.com/",
          logo_path: "nasheedio-logo.jpeg",
          duration: "March 2024 - Present",
          location: "",
          positions: [
            {
              title: "Content Lead",
              duration: "December 2024 - Present",
              description:
                "Lead a five-person content team and the workflows behind a catalog of 130,000+ assets across 50+ categories. Built quality and metadata processes, used AI to support classification and playlist operations, coordinated with 100+ creators, and partnered with product and engineering on releases and issue resolution.",
            },
            {
              title: "Operations Lead",
              duration: "March 2024 - November 2024",
              description:
                "Coordinated daily operations across teams, tracked milestones and blockers, improved reporting and accountability, and supported hiring, onboarding, and payroll during the company’s growth phase.",
            },
          ],
          color: "#e4d900",
        },
        {
          title: "Software Engineer",
          company: "Passionate Solver Technologies",
          company_url: "https://www.passionatesolver.tech/",
          logo_path: "PST.jpg",
          duration: "November 2022 - March 2024",
          location: "Kolkata, West Bengal",
          description:
            "Built React interfaces and Node.js REST APIs, helped migrate integrations to MQTT, improved React Native pagination, and used Crashlytics and Postman to investigate and resolve issues. Worked with JavaScript, Jira, and Git.",
          color: "#0879bf",
        },
      ],
    },

    {
      title: "Internships",
      experiences: [
      
        {
          title: "Data Team Intern",
          company: "Gurucool",
          company_url: "https://gurucool.xyz/",
          logo_path: "gurukul.jpg",
          duration: "January 2022 - June 2022",
          location: "",
          description:
            "Developed an interactive map plotting all the educational institutions enlisted in database to easily locate regions to focus marketing and advertisements on. Was asked by CEO to lead the project titled 'Data Scraping of collegdunia.com'. Involved in recruiting freelancers to complete the project. Project was successfully completed and I received a bonus for it. Projects I worked on involved Data Preprocessing, Exploratory Data Analysis, Web Scraping and usage of several Python libraries and packages. Technologies used: JupyterNotebook, Google Colab, Power BI, GeoPy",
          color: "#181717",
        },
      
      
        {
          title: "Junior Machine Learning Engineer",
          company: "Omdena Giza Chapter",
          company_url: "https://www.linkedin.com/company/omdena-giza-chapter/",
          logo_path: "omdena-giza.png",
          duration: "January 2022 - February 2022",
          location: "",
          description:
            "Selected for the AI challenge titled 'Creating & Analysing Open Data About Egypt' by Omdena Giza Chapter. Performed Web Scraping to create a dataset of daily currency exchange rate of Egyptian Pound against US Dollar, Pound Sterling and Euro of the last six years. Performed Exploratory Data Analysis on the data and used Prophet to forecast the exchange rate till 2 years into the future. Involved in deployment of the whole project onto Heroku using Streamlit. Technologies used: JupyterNotebook, Git, GitHub, Plotly, Prophet, Streamlit, Heroku",
          color: "#181717",
        },

        /*
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
        */
      ],
    },
   
    
    
    {
      title: "Volunteerships",
      experiences: [
      
      
      	/*
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        */
        
     
        /*
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "September 2020 - PRESENT",
          location: " ",
          description:
            "I am actively contributing to opensource projects.",
          color: "#181717",
        },
        */
        
        
        
      ],
    },
  ],
};


// Projects Page
const projectsHeader = {
  title: "TECHNICAL PROJECTS",
  description:
    "A selection of projects in web development, data analysis, and machine learning. Explore the repositories for source code and implementation details.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page     //checkout ContactComponent.js
const contactPageData = {

  contactSection: {
    title: "LET'S CONNECT",
    profile_image_path: "experience.svg",
    description:
      "For work, collaboration, or a good conversation, reach me by email or connect on social media.",
  },
  
  
  addressSection: {
    title: "Email",
    subtitle:
      "hidayatwork7@gmail.com",
      
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Kolkata,+West+Bengal/@22.6757521,88.0495264,10z/data=!3m1!4b1!4m5!3m4!1s0x39f882db4908f667:0x43e330e68f6c2cbc!8m2!3d22.572646!4d88.363895",
  },

  blogSection: {
    title: "BLOGS",
    subtitle: "I like to write articles on various topics.",
    link: "https://hidayat7.medium.com/",
    avatar_image_path: "blogs_image.svg",
  },
  
  //phone number
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
