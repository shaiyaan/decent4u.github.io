import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const projects = [
    {
      title: 'Student Loan Analysis',
      description: 'Analysis and visualization of U.S. student loan data over several years.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c',
      slug: 'student-loan-analysis',
    },
    {
      title: 'Marathon Analysis',
      description: 'Analysis of Boston Marathon data (2010-2023) focusing on trends and insights.',
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5',
      slug: 'marathon-analysis',
    },
    {
      title: 'Bluebike Time Prediction',
      description: 'ML models for predicting trip times using regression techniques.',
      image: 'https://images.unsplash.com/photo-1556316384-12c35d30afa4',
      slug: 'bluebike-prediction',
    },
    {
      title: 'News Clustering',
      description: 'Unsupervised ML techniques for analyzing and visualizing news content.',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c',
      slug: 'news-clustering',
    },
    {
      title: 'NBA Stats Prediction',
      description: 'ML model to predict NBA player stats for upcoming games.',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc',
      slug: 'nba-stats-prediction',
    },
    {
      title: 'Shape Ratio Analysis',
      description: 'Analysis of Sharpe ratios for G10 currency pairs.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3',
      slug: 'shape-ratio-analysis',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Your Name</span>
            </h1>
            <p className="text-xl text-gray-400">
              Data Scientist & Machine Learning Engineer
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="Profile"
              className="w-64 h-64 rounded-full object-cover border-4 border-primary"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Python',
              'Machine Learning',
              'Data Analysis',
              'SQL',
              'Statistical Analysis',
              'Deep Learning',
              'Data Visualization',
              'TensorFlow',
              'PyTorch',
              'Scikit-learn',
              'Pandas',
              'NumPy',
            ].map((skill) => (
              <div
                key={skill}
                className="bg-secondary/50 p-4 rounded-lg text-center hover:bg-primary/20 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}