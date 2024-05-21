const projects = [
    {
      title: 'Alex Portfolio',
      description: ' This project highlights a selection of my work, demonstrating my skills and creativity in designing and developing diverse portfolio layouts. It serves as a testament to my ability to create visually appealing and functional portfolios that effectively showcase professional achievements and projects. Explore this portfolio to see examples of my design thinking, attention to detail, and technical expertise.',
      imageUrl: 'https://app.gemoo.com/share/website-screenshot/651469462002896896?codeId=DWlbbyZaJdo9W',
      caseStudyUrl: 'https://portlio-murex.vercel.app/'
    },
    {
      title: 'MoShopper',
      description: 'MoShopper offers you a way to filter the best deals for electronics.Weve sorted these deals by price so all you have to do is decide how much you want to spend. The specifications vary too so theres something for everyone whether you plan to use your laptop for gaming, work, school, or just need a portable option for checking your email.',
      imageUrl: 'https://app.gemoo.com/share/image-annotation/651465713561788416?codeId=M07WW7OYgQABg&origin=imageurlgenerator&card=651465710260871168',
      caseStudyUrl: 'https://mshoppe.vercel.app/',
    },
    

    
    {
      title: 'This website ✨',
      description: 'Fintech Innovators delivers the latest fintech news and trends while fostering a vibrant tech community. We organize hackathons, workshops, and conferences to bring together leading minds in technology and finance. Stay informed and inspired with Fintech Innovators.',
      imageUrl: 'https://nextjs.org/static/blog/next-13/twitter-card.png',
      caseStudyUrl: 'https://afik-demov2-k2m2.vercel.app/',
    }
  ];

  const PreviousWork: React.FC = () => {
    return (
      <div id='previouswork' className="bg-transparent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-center mb-20">Previous Projects</h2>
          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-[#0a0a0a]">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={project.imageUrl} alt={project.title} />
                </div>
                <div className="flex-1 bg-transparent p-6 flex flex-col justify-between pw-bg">
                  <div className="flex-1">
                    {project.caseStudyUrl !== '#' ? (
                      <a href={project.caseStudyUrl} target='_blank' rel='noopener noreferrer'>
                        <div className="block mt-2">
                          <p className="text-xl font-semibold text-gray-300">{project.title}</p>
                          <p className="mt-3 text-base text-gray-300">{project.description}</p>
                        </div>
                      </a>
                    ) : (
                      <a>
                        <div className="block mt-2">
                          <p className="text-xl font-semibold text-gray-300">{project.title}</p>
                          <p className="mt-3 text-base text-gray-300">{project.description}</p>
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default PreviousWork;
  