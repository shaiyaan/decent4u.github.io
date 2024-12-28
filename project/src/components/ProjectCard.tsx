import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export default function ProjectCard({ title, description, image, slug }: ProjectCardProps) {
  return (
    <div className="bg-secondary/50 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <Link
          to={`/projects/${slug}`}
          className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
        >
          View Project <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}