
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import BlogPostCard from '@/components/BlogPostCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Search, BookOpen, Tag, Filter, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [showFilters, setShowFilters] = useState(false);

  // Extract unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  // Extract unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    const filtered = blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            post.content.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
      const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
      return matchesSearch && matchesCategory && matchesTag;
    });
    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory, selectedTag]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory(null);
    setSelectedTag(null);
  };

  // Get daily news and estimation specific posts
  const dailyNewsPosts = blogPosts.filter(post => post.category === "Daily News");
  const estimationPosts = blogPosts.filter(post => post.category === "Estimation");

  // Get the most recent post as featured
  const featuredPost = blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 lg:pt-32 bg-gradient-to-b from-navy to-navy/80 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
            Paradise Estimating Blog
          </h1>
          <p className="text-lg md:text-xl text-center max-w-4xl mx-auto opacity-90">
            Expert insights on construction cost estimation and daily industry updates
          </p>
          
          {/* Featured Post */}
          {featuredPost && (
            <div className="mt-12 max-w-5xl mx-auto">
              <BlogPostCard post={featuredPost} featured={true} />
            </div>
          )}
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        
        {/* Daily News Section */}
        {dailyNewsPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Daily Construction News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dailyNewsPosts.slice(0, 3).map(post => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
            {dailyNewsPosts.length > 3 && (
              <div className="mt-6 text-center">
                <Button 
                  variant="outline" 
                  className="hover:bg-blue-500 hover:text-white" 
                  onClick={() => setSelectedCategory("Daily News")}
                >
                  View More Daily News
                </Button>
              </div>
            )}
          </div>
        )}
        
        {/* Estimation Resources Section */}
        {estimationPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 border-l-4 border-gold pl-4">Estimation Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {estimationPosts.slice(0, 3).map(post => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
            {estimationPosts.length > 3 && (
              <div className="mt-6 text-center">
                <Button 
                  variant="outline" 
                  className="hover:bg-gold hover:text-white" 
                  onClick={() => setSelectedCategory("Estimation")}
                >
                  View More Estimation Resources
                </Button>
              </div>
            )}
          </div>
        )}
        
        {/* All Articles Section with Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-16">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6 bg-white p-6 rounded-lg border shadow-sm">
              <div>
                <h3 className="font-semibold text-lg mb-3">Search Articles</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    placeholder="Search..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-lg">Filter By</h3>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 px-2 lg:hidden" 
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    {showFilters ? <X className="h-4 w-4" /> : <Filter className="h-4 w-4" />}
                  </Button>
                </div>
                
                <div className={`space-y-4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Categories</h4>
                    <div className="space-y-2">
                      {categories.map(category => (
                        <div 
                          key={category} 
                          className={`cursor-pointer rounded-md px-2.5 py-2 text-sm transition-colors ${
                            selectedCategory === category 
                              ? 'bg-blue-500 text-white' 
                              : 'hover:bg-muted'
                          }`}
                          onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                        >
                          {category}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Popular Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {allTags.slice(0, 10).map(tag => (
                        <Badge 
                          key={tag}
                          variant="outline" 
                          className={`cursor-pointer ${
                            selectedTag === tag 
                              ? 'bg-muted border-primary' 
                              : ''
                          }`}
                          onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {(selectedCategory || selectedTag || searchTerm) && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={clearFilters} 
                      className="text-sm w-full mt-2"
                    >
                      <X className="h-3 w-3 mr-1" /> Clear Filters
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="border-t pt-4 hidden lg:block">
                <h3 className="font-semibold text-lg mb-3">Need Help?</h3>
                <div className="bg-navy/5 p-4 rounded-lg">
                  <p className="text-sm mb-3">Get professional construction cost estimation services.</p>
                  <Button 
                    className="w-full bg-gold hover:bg-gold/90 text-white" 
                    size="sm"
                  >
                    <Link to="/estimate-download">Request a Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">All Articles</h2>
              <div className="flex items-center space-x-2">
                {(selectedCategory || selectedTag || searchTerm) && (
                  <div className="hidden md:flex items-center space-x-2 text-sm">
                    <span>Filters:</span>
                    {selectedCategory && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        {selectedCategory}
                        <X 
                          className="h-3 w-3 ml-1 cursor-pointer" 
                          onClick={() => setSelectedCategory(null)} 
                        />
                      </Badge>
                    )}
                    {selectedTag && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        {selectedTag}
                        <X 
                          className="h-3 w-3 ml-1 cursor-pointer" 
                          onClick={() => setSelectedTag(null)} 
                        />
                      </Badge>
                    )}
                    {searchTerm && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        "{searchTerm}"
                        <X 
                          className="h-3 w-3 ml-1 cursor-pointer" 
                          onClick={() => setSearchTerm('')} 
                        />
                      </Badge>
                    )}
                  </div>
                )}
              </div>
            </div>
            
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map(post => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border rounded-lg">
                <h3 className="text-xl font-semibold">No articles found</h3>
                <p className="text-muted-foreground mt-2">Try adjusting your search criteria</p>
                <Button 
                  variant="outline" 
                  className="mt-4" 
                  onClick={clearFilters}
                >
                  Clear filters
                </Button>
              </div>
            )}
            
            {/* Mobile CTA */}
            <div className="mt-12 p-4 rounded-lg border bg-navy/5 lg:hidden">
              <h3 className="font-semibold mb-2">Need Professional Help?</h3>
              <p className="text-sm mb-3">Get accurate cost estimates for your construction projects.</p>
              <div className="flex gap-2">
                <Button 
                  className="flex-1 bg-gold hover:bg-gold/90 text-white" 
                  size="sm"
                >
                  <Link to="/estimate-download">Request a Quote</Link>
                </Button>
                <Button 
                  variant="outline"
                  className="flex-1" 
                  size="sm"
                >
                  <Link to="/services/cost-estimation">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
