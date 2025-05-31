
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Calendar, BookOpen, Tag } from 'lucide-react';
import { BlogPost } from '@/data/blogPosts';
import { Badge } from '@/components/ui/badge';

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, featured = false }) => {
  // Determine badge color based on category
  const getBadgeClass = (category: string) => {
    switch(category) {
      case 'Estimation':
        return 'bg-gold/20 text-gold hover:bg-gold/30';
      case 'Daily News':
        return 'bg-blue-500/20 text-blue-500 hover:bg-blue-500/30';
      case 'Sustainability':
        return 'bg-green-500/20 text-green-500 hover:bg-green-500/30';
      default:
        return 'bg-slate-500/20 text-slate-500 hover:bg-slate-500/30';
    }
  };

  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-xl ${featured ? 'lg:flex' : ''} border-t-4 ${
      post.category === 'Estimation' ? 'border-t-gold' : 
      post.category === 'Daily News' ? 'border-t-blue-500' : 
      post.category === 'Sustainability' ? 'border-t-green-500' : 
      'border-t-slate-500'
    }`}>
      <div className={`${featured ? 'lg:w-1/2' : 'w-full'} relative`}>
        <img 
          src={post.image} 
          alt={post.title} 
          className={`w-full h-60 object-cover ${featured ? 'lg:h-full' : ''}`}
        />
        <div className="absolute top-3 left-3">
          <Badge className={`${getBadgeClass(post.category)}`}>
            {post.category}
          </Badge>
        </div>
      </div>
      <div className={`${featured ? 'lg:w-1/2' : 'w-full'}`}>
        <CardHeader className="pt-6">
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <div className="flex items-center">
              <Calendar className="h-3.5 w-3.5 mr-1" />
              <span>{post.date}</span>
            </div>
          </div>
          <Link 
            to={`/blog/${post.id}`}
            className="text-xl font-bold hover:text-gold transition-colors duration-200 flex items-start gap-2"
          >
            <BookOpen className="h-5 w-5 mt-1 flex-shrink-0" />
            <span>{post.title}</span>
          </Link>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
          <div className="mt-4 flex flex-wrap gap-1">
            {post.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded-full inline-flex items-center">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
            {post.tags.length > 2 && (
              <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                +{post.tags.length - 2} more
              </span>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-sm font-medium">By {post.author}</span>
          </div>
          <Button variant="outline" className={`hover:bg-gold hover:text-white ${post.category === 'Daily News' ? 'hover:bg-blue-500' : post.category === 'Sustainability' ? 'hover:bg-green-500' : ''}`}>
            <Link to={`/blog/${post.id}`}>
              Read More
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default BlogPostCard;
