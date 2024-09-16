import Card from './Card';

function CyberSecurity() {
  const cybersecurityData = [
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      name: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      description: "In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills are a prerequisite for success.",
      footerText: "4 December 2023  No Comments"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      name: "What Is Hacking? Types of Hacking & More",
      description: "Have you ever wondered what hacking is all about? It’s a big deal in today’s tech-heavy world",
      footerText: "25 September 2023  No Comments"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
      name: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      description: "Cybersecurity & Ethical hacking and have been key in making sure that your data online is secure",
      footerText: "27 December 2022  No Comments"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
      name: "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      description: "Look around today, you will witness that we are more reliant on technology and devices than ever before",
      footerText: "20 December 2022  1 Comment"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-1536x864.png",
      name: "8 Different Types of Cybersecurity and Threats Involved",
      description: "Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from cyberattacks, data theft, breaches, unauthorized access, etc",
      footerText: "9 November 2022  1 Comment"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
      name: "Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
      description: "Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well, it depends on many facets.",
      footerText: "22 June 2022  No Comments"
    }
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          {cybersecurityData.map((cybersecurity, index) => (
            <Card key={index} data={cybersecurity} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CyberSecurity;
