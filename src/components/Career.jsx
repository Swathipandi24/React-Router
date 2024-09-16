import Card from './Card';

function Career() {
  const careerData = [
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp",
      name: "Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
      description: "If your New Year resolution consists of building a successful tech career in 2024",
      footerText: "19 January 2024  No Comments"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-UIUX-Designer-Roles-Responsibilities-Job-Description.jpg",
      name: "UI/UX Designer Job Description and Roles & Responsibilities",
      description: "UI UX is the abbreviated word that’s been rocking the trend over the years, especially in the past decade.",
      footerText: "13 December 2023  No Comments"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
      name: "Top 5 IT Jobs for Economics Students",
      description: "In today’s digital age, the intersection of economics and technology offers exciting career opportunities for students with a background in economics.",
      footerText: "04 December 2023  No Comments"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
      name: "Top IT Jobs for Commerce Students: A Lucrative Career Path",
      description: "The intersection of commerce and technology offers a wide range of job prospects that can provide both financial stability and personal growth.",
      footerText: "2 December 2023  No Comments"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp",
      name: "Automation Test Engineer Resume: 10 Important Things To Consider",
      description: "The world is moving towards automating the testing of products in order to increase work efficiency.",
      footerText: "01 December 2023  No Comments"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-3-1536x804.webp",
      name: "Professional Civil Engineer Resume: A Guide To Attract Employers in 2024",
      description: "The world is moving towards modernization leading to an increase in the popularity of civil engineering.",
      footerText: "1 December 2023  No Comments"
    }
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          {careerData.map((career, index) => (
            <Card key={index} data={career} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Career;
