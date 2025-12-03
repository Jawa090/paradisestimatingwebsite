import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface SEOData {
  path: string;
  title: string;
  description: string;
  robots: string;
  canonical: string;
  ogLocale: string;
  ogType: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogSiteName: string;
  ogImage: string;
  articlePublisher: string;
  articleModifiedTime: string;
  twitterCard: string;
  twitterSite: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  schema: string;
}

const pages = [
  { path: '/', name: 'Home' },
  { path: '/services', name: 'Services' },
  { path: '/about', name: 'About' },
  { path: '/contact', name: 'Contact' },
  { path: '/portfolio', name: 'Portfolio' },
  { path: '/blog', name: 'Blog' },
  { path: '/service-areas', name: 'Service Areas' },
  { path: '/get-a-quote', name: 'Get A Quote' },
  { path: '/upload-plan', name: 'Upload Plan' },
  { path: '/services/quantity-takeoff', name: 'Quantity Takeoff' },
  { path: '/services/concrete-takeoff', name: 'Concrete Takeoff' },
  { path: '/services/masonry-takeoff', name: 'Masonry Takeoff' },
  { path: '/services/structural-steel', name: 'Structural Steel' },
  { path: '/services/carpentry-millwork', name: 'Carpentry Millwork' },
  { path: '/services/drywall-insulation', name: 'Drywall Insulation' },
  { path: '/services/roofing-waterproofing', name: 'Roofing Waterproofing' },
  { path: '/services/flooring-takeoffs', name: 'Flooring Takeoffs' },
  { path: '/services/doors-windows-glazing', name: 'Doors Windows Glazing' },
  { path: '/services/mep-systems', name: 'MEP Systems' },
  { path: '/services/sitework-earthworks', name: 'Sitework Earthworks' },
  { path: '/services/cost-estimation', name: 'Cost Estimation' },
];

const defaultSEO: SEOData = {
  path: '',
  title: 'Paradise Estimating - Professional Construction Estimating',
  description: 'Expert construction estimating services including quantity takeoffs, cost estimation, and bid preparation. Accurate estimates for residential & commercial projects.',
  robots: 'index, follow',
  canonical: 'https://paradiseestimating.com',
  ogLocale: 'en_US',
  ogType: 'website',
  ogTitle: 'Paradise Estimating - Professional Construction Estimating Services',
  ogDescription: 'Expert construction estimating services including quantity takeoffs, cost estimation, and bid preparation for all types of construction projects.',
  ogUrl: 'https://paradiseestimating.com',
  ogSiteName: 'Paradise Estimating',
  ogImage: 'https://paradiseestimating.com/logo.png',
  articlePublisher: 'https://facebook.com/paradiseestimating',
  articleModifiedTime: new Date().toISOString(),
  twitterCard: 'summary_large_image',
  twitterSite: '@paradiseestimate',
  twitterTitle: 'Paradise Estimating - Professional Construction Estimating',
  twitterDescription: 'Expert construction estimating services including quantity takeoffs, cost estimation, and bid preparation for construction projects.',
  twitterImage: 'https://paradiseestimating.com/logo.png',
  schema: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Paradise Estimating",
    "description": "Professional construction estimating and quantity takeoff services",
    "url": "https://paradiseestimating.com",
    "logo": "https://paradiseestimating.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "serviceType": "Construction Estimating Services",
    "areaServed": "United States"
  }, null, 2),
};

export default function SEOManager() {
  const [selectedPage, setSelectedPage] = useState<string | null>(null);
  const [seoData, setSeoData] = useState<SEOData>(defaultSEO);
  const { toast } = useToast();

  const checkSEOStatus = (path: string): boolean => {
    const stored = localStorage.getItem(`seo_${path}`);
    if (!stored) return false;
    
    try {
      const data: SEOData = JSON.parse(stored);
      // Check if SEO is properly configured (not default values)
      const hasValidTitle = data.title && data.title.length > 10 && !data.title.includes('Enter SEO');
      const hasValidDescription = data.description && data.description.length > 50 && !data.description.includes('Enter SEO');
      const hasValidCanonical = data.canonical && !data.canonical.includes('yourdomain.com');
      const hasValidOGImage = data.ogImage && !data.ogImage.includes('yourdomain.com');
      
      return hasValidTitle && hasValidDescription && hasValidCanonical && hasValidOGImage;
    } catch {
      return false;
    }
  };

  const getPageDefaults = (path: string, pageName: string): SEOData => {
    const baseUrl = 'https://paradiseestimating.com';
    return {
      path,
      title: `${pageName} - Paradise Estimating`,
      description: `Professional construction estimating services for ${pageName.toLowerCase()}. Get accurate cost estimates and quantity takeoffs.`,
      robots: 'index, follow',
      canonical: `${baseUrl}${path}`,
      ogLocale: 'en_US',
      ogType: 'website',
      ogTitle: `${pageName} - Paradise Estimating`,
      ogDescription: `Professional construction estimating services for ${pageName.toLowerCase()}. Get accurate cost estimates and quantity takeoffs.`,
      ogUrl: `${baseUrl}${path}`,
      ogSiteName: 'Paradise Estimating',
      ogImage: `${baseUrl}/logo.png`,
      articlePublisher: 'https://facebook.com/paradiseestimating',
      articleModifiedTime: new Date().toISOString(),
      twitterCard: 'summary_large_image',
      twitterSite: '@paradiseestimate',
      twitterTitle: `${pageName} - Paradise Estimating`,
      twitterDescription: `Professional construction estimating services for ${pageName.toLowerCase()}. Get accurate cost estimates and quantity takeoffs.`,
      twitterImage: `${baseUrl}/logo.png`,
      schema: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `${pageName} - Paradise Estimating`,
        "description": `Professional construction estimating services for ${pageName.toLowerCase()}`,
        "url": `${baseUrl}${path}`,
      }, null, 2),
    };
  };

  const handleEdit = (path: string) => {
    const stored = localStorage.getItem(`seo_${path}`);
    const page = pages.find(p => p.path === path);
    if (stored) {
      setSeoData(JSON.parse(stored));
    } else {
      setSeoData(getPageDefaults(path, page?.name || 'Page'));
    }
    setSelectedPage(path);
  };

  const handleSave = () => {
    if (!selectedPage) return;
    localStorage.setItem(`seo_${selectedPage}`, JSON.stringify(seoData));
    toast({
      title: 'SEO Data Saved',
      description: 'Page SEO tags have been updated successfully.',
    });
    setSelectedPage(null);
  };

  const handleCancel = () => {
    setSelectedPage(null);
  };

  if (selectedPage) {
    return (
      <div className="container mx-auto p-6 max-w-4xl">
        <Button onClick={handleCancel} variant="ghost" className="mb-4">
          ← Back to SEO Manager
        </Button>
        <Card>
          <CardHeader>
            <CardTitle>Edit SEO Tags - {pages.find(p => p.path === selectedPage)?.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Title (Max 60 characters)</Label>
              <Input value={seoData.title} onChange={(e) => setSeoData({ ...seoData, title: e.target.value })} maxLength={60} />
              <span className="text-xs text-gray-500">{seoData.title.length}/60</span>
            </div>

            <div className="space-y-2">
              <Label>Description (Max 160 characters)</Label>
              <Textarea value={seoData.description} onChange={(e) => setSeoData({ ...seoData, description: e.target.value })} maxLength={160} rows={3} />
              <span className="text-xs text-gray-500">{seoData.description.length}/160</span>
            </div>

            <div className="space-y-2">
              <Label>Robots</Label>
              <Input value={seoData.robots} onChange={(e) => setSeoData({ ...seoData, robots: e.target.value })} />
            </div>

            <div className="space-y-2">
              <Label>Canonical URL</Label>
              <Input value={seoData.canonical} onChange={(e) => setSeoData({ ...seoData, canonical: e.target.value })} />
            </div>

            <h3 className="font-semibold text-lg mt-8 mb-4">Open Graph Tags</h3>
            
            <div className="space-y-2">
              <Label>OG Locale</Label>
              <Input value={seoData.ogLocale} onChange={(e) => setSeoData({ ...seoData, ogLocale: e.target.value })} />
            </div>

            <div className="space-y-2">
              <Label>OG Type</Label>
              <Input value={seoData.ogType} onChange={(e) => setSeoData({ ...seoData, ogType: e.target.value })} />
            </div>

            <div className="space-y-2">
              <Label>OG Title</Label>
              <Input value={seoData.ogTitle} onChange={(e) => setSeoData({ ...seoData, ogTitle: e.target.value })} />
            </div>

            <div className="space-y-2">
              <Label>OG Description</Label>
              <Textarea value={seoData.ogDescription} onChange={(e) => setSeoData({ ...seoData, ogDescription: e.target.value })} rows={2} />
            </div>

            <div className="space-y-2">
              <Label>OG URL</Label>
              <Input value={seoData.ogUrl} onChange={(e) => setSeoData({ ...seoData, ogUrl: e.target.value })} />
            </div>

            <div className="space-y-2">
              <Label>OG Site Name</Label>
              <Input value={seoData.ogSiteName} onChange={(e) => setSeoData({ ...seoData, ogSiteName: e.target.value })} />
            </div>

            <div className="space-y-2">
              <Label>OG Image</Label>
              <Input value={seoData.ogImage} onChange={(e) => setSeoData({ ...seoData, ogImage: e.target.value })} />
            </div>

            <div className="space-y-2">
              <Label>Article Publisher</Label>
              <Input value={seoData.articlePublisher} onChange={(e) => setSeoData({ ...seoData, articlePublisher: e.target.value })} />
            </div>

            <div className="space-y-2">
              <Label>Article Modified Time</Label>
              <Input value={seoData.articleModifiedTime} onChange={(e) => setSeoData({ ...seoData, articleModifiedTime: e.target.value })} />
            </div>

            <h3 className="font-semibold text-lg mt-8 mb-4">Twitter Tags</h3>

            <div className="space-y-2">
              <Label>Twitter Card</Label>
              <Input value={seoData.twitterCard} onChange={(e) => setSeoData({ ...seoData, twitterCard: e.target.value })} />
            </div>

            <div className="space-y-2">
              <Label>Twitter Site</Label>
              <Input value={seoData.twitterSite} onChange={(e) => setSeoData({ ...seoData, twitterSite: e.target.value })} />
            </div>

            <div className="space-y-2">
              <Label>Twitter Title</Label>
              <Input value={seoData.twitterTitle} onChange={(e) => setSeoData({ ...seoData, twitterTitle: e.target.value })} />
            </div>

            <div className="space-y-2">
              <Label>Twitter Description</Label>
              <Textarea value={seoData.twitterDescription} onChange={(e) => setSeoData({ ...seoData, twitterDescription: e.target.value })} rows={2} />
            </div>

            <div className="space-y-2">
              <Label>Twitter Image</Label>
              <Input value={seoData.twitterImage} onChange={(e) => setSeoData({ ...seoData, twitterImage: e.target.value })} />
            </div>

            <h3 className="font-semibold text-lg mt-8 mb-4">Schema Markup</h3>

            <div className="space-y-2">
              <Label>Schema JSON-LD</Label>
              <Textarea value={seoData.schema} onChange={(e) => setSeoData({ ...seoData, schema: e.target.value })} rows={6} className="font-mono text-sm" />
            </div>

            <div className="flex gap-4 pt-4">
              <Button onClick={handleSave} className="flex-1">Save SEO Tags</Button>
              <Button onClick={handleCancel} variant="outline" className="flex-1">Cancel</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">SEO Manager</h1>
      <Card>
        <CardHeader>
          <CardTitle>All Pages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {pages.map((page) => {
              const isComplete = checkSEOStatus(page.path);
              return (
                <div key={page.path} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${isComplete ? 'bg-green-500' : 'bg-red-500'}`} title={isComplete ? 'SEO Complete' : 'SEO Incomplete'} />
                    <div>
                      <h3 className="font-semibold">{page.name}</h3>
                      <p className="text-sm text-gray-500">{page.path}</p>
                    </div>
                  </div>
                  <Button onClick={() => handleEdit(page.path)}>Edit Page</Button>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
