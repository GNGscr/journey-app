'use client';
import { useEffect } from "react";
import { SEOHeadProps } from "../../constants/types";
import { stepMetadata } from "../../helpers/stepMetadata";

const SEOHead: React.FC<SEOHeadProps> = ({ step }) => {
  const meta = stepMetadata[step];

  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.title = meta.title;

    const updateMetaTag = (name: string, content: string, property?: string) => {
      const selector = property 
        ? `meta[property="${property}"]` 
        : `meta[name="${name}"]`;
      
      let metaTag = document.querySelector(selector) as HTMLMetaElement;
      
      if (metaTag) {
        metaTag.setAttribute('content', content);
      } else {
        metaTag = document.createElement('meta');
        if (property) {
          metaTag.setAttribute('property', property);
        } else {
          metaTag.setAttribute('name', name);
        }
        metaTag.setAttribute('content', content);
        document.head.appendChild(metaTag);
      }
    };

    updateMetaTag('description', meta.description);
    updateMetaTag('keywords', meta.keywords.join(', '));
    
    updateMetaTag('og:title', meta.title, 'og:title');
    updateMetaTag('og:description', meta.description, 'og:description');
    updateMetaTag('og:type', 'website', 'og:type');

  }, [step, meta]);

  return null;
};

export default SEOHead;