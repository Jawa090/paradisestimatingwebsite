import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <div className="service-card group min-h-[280px] h-full flex flex-col p-6 border-2 rounded-lg hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4 text-gold">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-navy group-hover:text-gold transition-colors">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow line-clamp-3">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-navy font-semibold group-hover:text-gold transition-colors mt-auto"
      >
        Read More <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

export default ServiceCard;
