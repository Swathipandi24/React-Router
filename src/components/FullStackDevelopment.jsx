import Card from './Card';

function FullStackDevelopment() {
  const fsdData = [
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/01/feature_image-6.webp",
      name: "Web Components: A Deep Dive into Reusable and Custom Elements [2024]",
      description: "As a full-stack developer, have you ever got bored of using the same HTML, CSS, and JavaScript codes?",
      footerText: "22 January 2024  No Comments"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
      name: "Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
      description: "When you’re hiring a full-stack developer, what are the most important things you look for?",
      footerText: "15 November 2023  No Comments"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
      name: "Top Differences: Full Stack Developer vs Software Engineer 2024",
      description: "A Full Stack Developer is a tech all-rounder.",
      footerText: "15 November 2023  No Comments"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
      name: "Horizontal vs Vertical Scaling for Efficient System Design",
      description: "As a full-stack developer, have you ever got bored of using the same HTML, CSS, and JavaScript codes?",
      footerText: "10 November 2024  No Comments"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
      name: "Best Books to Learn Full-Stack Development",
      description: "Are you interested in becoming a full-stack developer but not sure where to start? In this blog, we’ll introduce you to a list of books to learn full-stack development.",
      footerText: "9 November 2023  No Comments"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
      name: "Top 10 Product-Based Companies for Full-Stack Developers [2024]",
      description: "In the dynamic landscape of technology, full-stack developers are the architects of the digital world, bridging the gap between front-end and back-end development.",
      footerText: "8 November 2023  No Comments"
    }
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          {fsdData.map((fsd, index) => (
            <Card key={index} data={fsd} />
          ))}
        </div>
      </div>
    </>
  );
}

export default FullStackDevelopment;
