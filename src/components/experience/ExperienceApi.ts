const unsortedData = [
    {
      id: 4,
      category: "experience",
      year: "July 2016 - Feb 2017",
      title: "Business Analytics Intern (Pre-sales)",
      desc: ["Developed an interactive dashboard with SAS Visual Analytics for National Service use-cases, highlighting insights of attrition trends for MINDEF", "Wrangled and feature-engineered data retrieved by DSTA’ distributed data sources using Excel and Data Management Studio for a SAS’ tender demonstration", "Remediated data governance issues with Data Management Studio faced by external clients and wrote a detailed analysis report to present to clients and senior leadership", "Managed several minor data management projects with clients such as DSTA, MINDEF, MOM, and Singtel."],
      rate: "4.70/5 ",
      company: "SAS Institute Pte Ltd",
      image: "/images/sas.png"
    },
    {
      id: 5,
      category: "experience",
      year: "Aug 2020 - Dec 2020",
      title: "Data Science Intern",
      desc: ["Utilized a time-series forecasting model named FBProphet to predict BMW’s Bank future cash-flow and automating it on a monthly-basis via AWS Sagemaker for relevant department to make efficient financial decisions", "Deployed interactive map-based visualizations of key dealership branches to provide insights on used-car analytics for the relevant departments to track second-hand car trends with Python libraries’ Seaborn & Matplotlib", "Presented new in-car machine-learning uses cases for the innovation team to senior management"],
      rate: "4.95/5 ",
      company: "BMW Group Asia",
      image: "/images/bmw.png"
    },
    {
      id: 6,
      category: "experience",
      year: "May 2021 - Aug 2021",
      title: "Software Engineer Intern",
      desc: ["Built and integrated an automated monitoring microservice with Java and Docker for the Personal Alarm Button (PAB) project to retrieve crucial alert information stored in messaging broker sent by clients to the button", "Implemented an automated microservice via Cron, Docker and Flask to retrieve, process, and insert stakeholders’ data from HDB’ Cassandra database for more efficient integration and deployment of the PAB project.", "Designed and developed an email service in Javascript and Java that interacts with SendGrid API to inform stakeholders with regards to the updates of PAB clients"],
      rate: "5.00/5 ",
      company: "Government Technology Agency",
      image: "/images/govtech.png"
    },
    {
      id: 7,
      category: "experience",
      year: "May 2022 - Aug 2022",
      title: "Summer Analyst (Technology)",
      desc: ["Implemented a service to display trade workflows with Kotlin, Typescript, and Spring to increase debugging efficiencies of developers from the Securities' Execution team.", "Developed a crypto-currency exchange microservice with Kotlin and Spring to demonstrate internal trade flows to relevant stakeholders."],
      rate: "5.00/5 ",
      company: "Credit Suisse",
      image: "/images/credit-suisse.png"
    },
    {
      id: 8,
      category: "experience",
      year: "Jan 2023 - Mar 2023",
      title: "Security Engineer Intern",
      desc: ["Developed full-stack applications and API integrations, utilizing key security mechanisms to ensure secure access to internal resources", "Integrated external APIs from public applications (e.g. AvengersDAO, Hashdit) into Binance's security infrastructure.", "Handled phishing and scamming alerts on a daily basis, effectively preventing security breaches and unauthorized access"],
      rate: "5.00/5 ",
      company: "Binance",
      image: "/images/binance.png"
    },
    {
      id: 9,
      category: "experience",
      year: "May 2023 - July 2023",
      title: "Cloud Engineer Intern",
      desc: ["Led the successful development and implementation of a robust Disaster Recovery Proof of Concept (POC) utilizing Azure Cloud Services for the Singpass system."],
      rate: "5.00/5 ",
      company: "Government Technology Agency",
      image: "/images/govtech.png"
    },
    {
      id: 10,
      category: "experience",
      year: "Aug 2023 - Present",
      title: "Software Engineer, Tech Analyst",
      desc: ["Part of the Securities Execution Team, contributing to a centralized internal order management system"],
      rate: "5.00/5 ",
      company: "Credit Suisse",
      image: "/images/credit-suisse.png"
    },

  ]

  const data = unsortedData.sort((a, b) => b.id - a.id);
  
  export default data
  