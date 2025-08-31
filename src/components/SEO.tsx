import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage = '/og-image.jpg'
}) => {
  const location = useLocation();

  useEffect(() => {
    const pageData = {
      '/': {
        title: 'Bolt Fitness Bengaluru - Premium Gym in Doddanekkundi | Personal Training & Nutrition',
        description: 'Transform your fitness journey at Bolt Fitness, Bengaluru\'s premier gym in Doddanekkundi. Expert personal trainers, state-of-the-art equipment, nutrition coaching. Join 2000+ members!',
        keywords: 'gym Bengaluru, fitness center Doddanekkundi, personal trainer Bengaluru, premium gym Karnataka'
      },
      '/about': {
        title: 'About Bolt Fitness Bengaluru - Best Gym in Doddanekkundi Since 2010',
        description: 'Learn about Bolt Fitness Bengaluru - Premier fitness center in Doddanekkundi offering expert training, modern equipment, and wellness programs since 2010.',
        keywords: 'about bolt fitness, gym history Bengaluru, fitness center story, Doddanekkundi gym'
      },
      '/trainers': {
        title: 'Expert Personal Trainers in Bengaluru - Bolt Fitness Doddanekkundi',
        description: 'Meet our certified personal trainers at Bolt Fitness Bengaluru. ACSM, NASM certified professionals for strength training, HIIT, yoga, and nutrition coaching.',
        keywords: 'personal trainers Bengaluru, certified fitness trainers, strength training coach, yoga instructor Bengaluru'
      },
      '/nutrition': {
        title: 'Nutrition Coaching Bengaluru - Diet Plans & Wellness | Bolt Fitness',
        description: 'Professional nutrition coaching and personalized diet plans at Bolt Fitness Bengaluru. Expert nutritionists for weight loss, muscle gain, and athletic performance.',
        keywords: 'nutrition coaching Bengaluru, diet plans, nutritionist Doddanekkundi, weight loss coaching'
      }
    };
    
    const currentPage = pageData[location.pathname as keyof typeof pageData];
    const pageTitle = title || currentPage?.title || 'Bolt Fitness Bengaluru';
    const pageDescription = description || currentPage?.description || 'Premier fitness center in Bengaluru';
    const pageKeywords = keywords || currentPage?.keywords || 'gym Bengaluru, fitness center';

    // Update document title
    document.title = pageTitle;

    // Update or create meta tags
    updateMetaTag('description', pageDescription);
    updateMetaTag('keywords', pageKeywords);
    
    // Update Open Graph tags
    updateMetaTag('og:title', pageTitle, 'property');
    updateMetaTag('og:description', pageDescription, 'property');
    updateMetaTag('og:url', `https://boltfitness-bengaluru.vercel.app${location.pathname}`, 'property');
    updateMetaTag('og:image', `https://boltfitness-bengaluru.vercel.app${ogImage}`, 'property');
    
    // Update Twitter tags
    updateMetaTag('twitter:title', pageTitle, 'property');
    updateMetaTag('twitter:description', pageDescription, 'property');
    updateMetaTag('twitter:image', `https://boltfitness-bengaluru.vercel.app${ogImage}`, 'property');
    
    // Update canonical URL
    updateCanonicalLink(`https://boltfitness-bengaluru.vercel.app${location.pathname}`);
  }, [location.pathname, title, description, keywords, ogImage]);

  return null;
};

const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  
  if (element) {
    element.setAttribute('content', content);
  } else {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    element.setAttribute('content', content);
    document.head.appendChild(element);
  }
};

const updateCanonicalLink = (href: string) => {
  let element = document.querySelector('link[rel="canonical"]');
  
  if (element) {
    element.setAttribute('href', href);
  } else {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    element.setAttribute('href', href);
    document.head.appendChild(element);
  }
};

export default SEO;
