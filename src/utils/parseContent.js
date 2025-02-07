import React from "react";
import Link from "next/link";
import parse, { domToReact } from "html-react-parser";
import LazyImage from "@/components/globals/LazyImage";
import CallToAction from "@/components/globals/CallToAction";
import ImageCarousel from "@/components/portfolio/ImageCarousel";
import BrandCarousel from "@/components/globals/brand/BrandCarousel";
import ClientReviews from "@/components/globals/brand/ClientsReviews";
import Image from "next/image";

export function fixInternalLinks(html_string) {
  const pattern = /href="https:\/\/cpts\.cubesite\.fr\/([^"]+)"/g;
  const replacement = 'data-internal-link="true" href="/$1"';
  return html_string.replace(pattern, replacement);
}

export function parseHtml(html) {
  let _content = html
    .replace(/\n{2,}/g, '\n');
 
  const content = fixInternalLinks(_content);
 
  const options = {
    replace: ({ name, attribs, children }) => {
      if (attribs?.["data-block"] === "call-to-action") {
        const props = JSON.parse(attribs["data-props"] || "{}");
        return (
          <CallToAction {...props} />
        );
      }
      
      if (attribs?.["data-block"] === "image-carousel") {
        const props = JSON.parse(attribs["data-props"] || "{}");
        return <ImageCarousel {...props} />;
      }

      if (attribs?.["data-block"] === "brand-carousel") {
        const props = JSON.parse(attribs["data-props"] || "{}");
        return <BrandCarousel {...props} />;
      }

      if (attribs?.["data-block"] === "client-reviews") {
        const { reviews = [] } = JSON.parse(attribs["data-props"] || "{}");
        // Ajouter un id unique à chaque review si non présent
        const reviewsWithIds = reviews.map((review, index) => ({
          id: review.id || index + 1,
          ...review
        }));
        return <ClientReviews reviews={reviewsWithIds} />;
      }
      
      const isInternalLink = name === "a" && attribs["data-internal-link"] === "true";
      if (isInternalLink) {
        return (
          <Link href={attribs.href} {...attribs}>
            {domToReact(children, options)}
          </Link>
        );
      }
      
      // if (name === "img") {
      //   const { src, alt, width, height, className } = attribs;
      //   return (
      //     <Image
      //       src={src}
      //       width={800}
      //       height={600}
      //       alt={alt || ''}
      //     />
      //     // <LazyImage
      //     //   src={src}
      //     //   alt={alt || ''}
      //     //   width={parseInt(width, 10) || 800}
      //     //   height={parseInt(height, 10) || 600}
      //     //   className={className}
      //     // />
      //   );
      // }
    },
  };
 
  return parse(content, options);
}