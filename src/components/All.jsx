
import Card from './Card'
function All() {
    const allData=[
      {
        image:"https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp",
        name:"Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
        description:"If your New Year resolution consists of building a successful tech career in 2024 ",
        footerText:"19 January 2024  No Comments"
      },
      {
          image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-UIUX-Designer-Roles-Responsibilities-Job-Description.jpg",
          name:"UI/UX Designer Job Description and Roles & Responsibilities",
          description:"UI UX is the abbreviated word that’s been rocking the trend over the years, especially in the past decade.",
          footerText:"13 December 2023  No Comments"
      },
      {
          image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
          name:"Top 5 IT Jobs for Economics Students",
          description:"In today’s digital age, the intersection of economics and technology offers exciting career opportunities for students with a background in economics. ",
          footerText:"04 December 2023  No Comments"
      },
      {
        image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
        name:"Top IT Jobs for Commerce Students: A Lucrative Career Path",
        description:"The intersection of commerce and technology offers a wide range of job prospects that can provide both financial stability and personal growth. ",
        footerText:"2 December 2023  No Comments"
      },
      {
          image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp",
          name:"Automation Test Engineer Resume: 10 Important Things To Consider",
          description:"The world is moving towards automating the testing of products in order to increase work efficiency.",
          footerText:"01 December 2023  No Comments"
      },
      {
          image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-3-1536x804.webp",
          name:"Professional Civil Engineer Resume: A Guide To Attract Employers in 2024",
          description:"The world is moving towards modernization leading to an increase in the popularity of civil engineering. ",
          footerText:"1 December 2023  No Comments"
      },
      {
        image:"https://www.guvi.in/blog/wp-content/uploads/2024/01/feature_image-6.webp",
        name:"Web Components: A Deep Dive into Reusable and Custom Elements [2024]",
        description:"As a full-stack developer, have you ever got bored of using the same HTML, CSS, and JavaScript codes? ",
        footerText:"22 January 2024  No Comments"
      },
      {
          image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
          name:"Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
          description:"When you’re hiring a full-stack developer, what are the most important things you look for?",
          footerText:"15 November 2023  No Comments"
      },
      {
          image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
          name:"Top Differences: Full Stack Developer vs Software Engineer 2024",
          description:"A Full Stack Developer is a tech all-rounder. ",
          footerText:"15 November 2023  No Comments"
      },
      {
        image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
        name:"Horizontal vs Vertical Scaling for Efficient System Design",
        description:"As a full-stack developer, have you ever got bored of using the same HTML, CSS, and JavaScript codes?",
        footerText:"10 November 2024  No Comments"
      },
      {
          image:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
          name:"Best Books to Learn Full-Stack Development",
          description:"Are you interested in becoming a full-stack developer but not sure where to start? In this blog, we’ll introduce you to a list of books to learn full-stack development.",
          footerText:"9 November 2023  No Comments"
      },
      {
          image:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
          name:"Top 10 Product-Based Companies for Full-Stack Developers [2024]",
          description:"In the dynamic landscape of technology, full-stack developers are the architects of the digital world, bridging the gap between front-end and back-end development. ",
          footerText:"8 November 2023  No Comments"
      },
      {
        image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
        name:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
        description:"In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills are a prerequisite for success.",
        footerText:"4 December 2023  No Comments"
      },
      {
          image:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
          name:"What Is Hacking? Types of Hacking & More",
          description:"Have you ever wondered what hacking is all about? It’s a big deal in today’s tech-heavy world",
          footerText:"25 September 2023  No Comments"
      },
      {
          image:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
          name:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
          description:"Cybersecurity & Ethical hacking and have been key in making sure that your data online is secure",
          footerText:"27 December 2022  No Comments"
      },
      {
        image:"https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
        name:"What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
        description:"Look around today, you will witness that we are more reliant on technology and devices than ever before",
        footerText:"20 December 2022  1 Comment"
      },
      {
          image:"https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-1536x864.png",
          name:"8 Different Types of Cybersecurity and Threats Involved",
          description:"Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from cyberattacks, data theft, breaches, unauthorized access, etc",
          footerText:"9 November 2022  1 Comment"
      },
      {
          image:"https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
          name:"Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
          description:"Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well, it depends on many facets.",
          footerText:"22 June 2022  No Comments"
      },
      {
        image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
        name:"Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
        description:"Are you someone who’s not interested in coding, but wants to get placed in tech through data science, and earn a handsome salary?",
        footerText:"28 November 2023  No Comments"
      },
      {
          image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-1536x768.webp",
          name:"Impact of Certification Programs on Hiring Data Scientists",
          description:"Data scientists are the creators behind transforming the raw data into edible data insights.",
          footerText:"15 November 2023  No Comments"
      },
      {
          image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
          name:"Top Product-Based Companies for Data Science Freshers",
          description:"n today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
          footerText:"10 November 2023  No Comments"
      },
      {
          image:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
          name:"What is the Difference between Data Science and Data Engineering?",
          description:"India has been making some serious waves in the world of data. Just like the rest of the world, we’re seeing a massive jump in the demand for data science and data engineering roles.",
          footerText:"8 November 2023  No Comments"
        },
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Data-Science-Tools-1-1536x804.png",
            name:"Top 10 Data Science Tools in 2024",
            description:"Data Science is an in-demand profession and will continue growing in the coming years. ",
            footerText:"1 November 2023  No Comments"
        },
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
            name:"Best Data Science Books to Learn in 2024",
            description:"Today, we’re going to talk about something really cool: data science. It’s all about using data to make smart decisions and create amazing things.",
            footerText:"26 October 2023  No Comments"
        }

  
      ]
      return (
        <>
          <div className="container">
            <div className="row">
              {allData.map((item, index) => (
                <Card key={index} data={item} />
              ))}
            </div>
          </div>
        </>
      );
    }
    
    export default All;