import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface SEOData {
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

export default function SEOHead() {
  const location = useLocation();
  const [seoData, setSeoData] = useState<SEOData | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(`seo_${location.pathname}`);
    if (stored) {
      try {
        setSeoData(JSON.parse(stored));
      } catch {
        setSeoData(null);
      }
    } else {
      setSeoData(null);
    }
  }, [location.pathname]);

  if (!seoData) return null;

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="robots" content={seoData.robots} />
      <link rel="canonical" href={seoData.canonical} />
      
      {/* Open Graph */}
      <meta property="og:locale" content={seoData.ogLocale} />
      <meta property="og:type" content={seoData.ogType} />
      <meta property="og:title" content={seoData.ogTitle} />
      <meta property="og:description" content={seoData.ogDescription} />
      <meta property="og:url" content={seoData.ogUrl} />
      <meta property="og:site_name" content={seoData.ogSiteName} />
      <meta property="og:image" content={seoData.ogImage} />
      <meta property="article:publisher" content={seoData.articlePublisher} />
      <meta property="article:modified_time" content={seoData.articleModifiedTime} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={seoData.twitterCard} />
      <meta name="twitter:site" content={seoData.twitterSite} />
      <meta name="twitter:title" content={seoData.twitterTitle} />
      <meta name="twitter:description" content={seoData.twitterDescription} />
      <meta name="twitter:image" content={seoData.twitterImage} />
      
      {/* Schema */}
      <script type="application/ld+json">{seoData.schema}</script>
    </Helmet>
  );
}
