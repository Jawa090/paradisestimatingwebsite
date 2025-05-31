
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getPostById, getRelatedPosts } from '@/data/blogPosts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import BlogPostCard from '@/components/BlogPostCard';
import { Calendar, User, Tag, ArrowLeft, Share2, BookOpen, Clock } from 'lucide-react';
import { toast } from 'sonner';

const BlogPost: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const post = postId ? getPostById(postId) : undefined;
  const relatedPosts = postId ? getRelatedPosts(postId) : [];
  const [isScrolled, setIsScrolled] = useState(false);
  const [readTime] = useState(() => {
    // Calculate estimated read time
    if (!post) return "5 min";
    const words = post.content.split(/\s+/).length;
    const minutes = Math.ceil(words / 200); // Assuming 200 words per minute reading speed
    return `${minutes} min read`;
  });

  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
    
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [post, navigate]);

  if (!post) {
    return null;
  }

  // Determine badge color based on category
  const getBadgeClass = (category: string) => {
    switch(category) {
      case 'Estimation':
        return 'border-gold text-gold';
      case 'Daily News':
        return 'border-blue-500 text-blue-500';
      case 'Sustainability':
        return 'border-green-500 text-green-500';
      default:
        return 'border-slate-500 text-slate-500';
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      })
      .catch(() => {
        // Fallback if share fails
        navigator.clipboard.writeText(window.location.href);
        toast.success("Link copied to clipboard!");
      });
    } else {
      // Fallback for browsers that don't support sharing
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="pt-24 lg:pt-28">
        <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center brightness-50" 
            style={{ backgroundImage: `url(${post.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12">
            <Badge variant="outline" className={`mb-4 py-1 border-2 ${getBadgeClass(post.category)}`}>
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl">{post.title}</h1>
            
            <div className="flex flex-wrap items-center mt-6 text-white/90 gap-4">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1.5" />
                <span className="text-sm">{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1.5" />
                <span className="text-sm">{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1.5" />
                <span className="text-sm">{readTime}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="sticky top-0 z-30 w-full h-1 bg-gray-200">
          <div 
            className={`h-full transition-all duration-300 ${
              post.category === 'Estimation' ? 'bg-gold' : 
              post.category === 'Daily News' ? 'bg-blue-500' : 
              post.category === 'Sustainability' ? 'bg-green-500' : 
              'bg-slate-500'
            }`}
            style={{ width: isScrolled ? `${Math.min((window.scrollY - 300) / ((document.body.scrollHeight - window.innerHeight - 300) / 100), 100)}%` : '0%' }}
          />
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Social sharing sidebar */}
            <div className="hidden lg:block col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="p-4 border rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Share2 className="h-4 w-4" />
                    Share this article
                  </h3>
                  <Button 
                    variant="outline" 
                    className={`w-full mb-2 hover:text-white ${
                      post.category === 'Estimation' ? 'hover:bg-gold' : 
                      post.category === 'Daily News' ? 'hover:bg-blue-500' : 
                      post.category === 'Sustainability' ? 'hover:bg-green-500' : 
                      'hover:bg-slate-500'
                    }`}
                    onClick={handleShare}
                  >
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
                
                <div className="p-4 border rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    Topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <Link to={`/blog?tag=${tag}`} key={tag}>
                        <span className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm transition-colors">
                          <Tag className="h-3 w-3 inline mr-1" />
                          {tag}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
                  <h3 className="font-semibold mb-2">Estimation Resources</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/services/cost-estimation" className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                        <BookOpen className="h-3 w-3" />
                        Our Estimation Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/estimate-download" className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                        <BookOpen className="h-3 w-3" />
                        Get a Free Estimate
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>
              
              {/* Tags for mobile */}
              <div className="lg:hidden mt-8 p-4 border rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <Link to={`/blog?tag=${tag}`} key={tag}>
                      <span className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm transition-colors">
                        {tag}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Call to action */}
              <div className="mt-12 p-6 bg-navy text-white rounded-lg">
                <h3 className="text-xl font-bold mb-3">Need Professional Estimation Services?</h3>
                <p className="mb-4">Get accurate cost estimates for your construction projects from our team of experienced professionals.</p>
                <div className="flex gap-4 flex-wrap">
                  <Button className="bg-gold hover:bg-gold/80 text-white">
                    <Link to="/services/cost-estimation">Our Services</Link>
                  </Button>
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-navy">
                    <Link to="/estimate-download">Request a Quote</Link>
                  </Button>
                </div>
              </div>
              
              {/* Navigation buttons */}
              <div className="flex justify-between mt-12 mb-8">
                <Button variant="outline" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  <Link to="/blog">Back to Blog</Link>
                </Button>
                <Button 
                  variant="outline" 
                  className={`flex items-center hover:text-white ${
                    post.category === 'Estimation' ? 'hover:bg-gold' : 
                    post.category === 'Daily News' ? 'hover:bg-blue-500' : 
                    post.category === 'Sustainability' ? 'hover:bg-green-500' : 
                    'hover:bg-slate-500'
                  }`} 
                  onClick={handleShare}
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Share this article
                </Button>
              </div>
              
              {/* Related posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6 border-l-4 border-gold pl-4">Related Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {relatedPosts.map(relatedPost => (
                      <BlogPostCard key={relatedPost.id} post={relatedPost} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
