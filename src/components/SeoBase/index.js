import React from "react"
import { Helmet } from "react-helmet"
import { any, string } from "prop-types"
import { Wrapper } from "./SeoBase.style"

const SeoBase = ({
  children,
  title,
  webSchema,
  description,
  articleSchema,
  organizationSchema,
  webpageSchema,
  websiteSchema,
  jsonLd,
}) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {articleSchema && (
          <script type="application/ld+json">
            {`${JSON.stringify({
                "@context": "http://schema.org",
                "@type": "Article",
                ...articleSchema
              })}
            `}
          </script>
        )}
        {organizationSchema && (
          <script type="application/ld+json">
            {`${JSON.stringify({
                "@context": "http://schema.org",
                "@type": "Organization",
                ...organizationSchema
              })}
            `}
          </script>
        )}
        {webpageSchema && (
          <script type="application/ld+json">
            {`${JSON.stringify({
                "@context": "http://schema.org",
                "@type": "WebPage",
                ...webpageSchema
              })}
            `}
          </script>
        )}
        {websiteSchema && (
          <script type="application/ld+json">
            {`${JSON.stringify({
                "@context": "http://schema.org",
                "@type": "WebSite",
                ...websiteSchema
              })}
            `}
          </script>
        )}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement":
              [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@id": "https://yupi-there.netlify.com/google-ads/",
                    "name": "Google Ads"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@id": "https://yupi-there.netlify.com/seo/",
                    "name": "SEO"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@id": "https://yupi-there.netlify.com/analityka/",
                    "name": "Analityka Web"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@id": "https://yupi-there.netlify.com/kampanie-sm/",
                    "name": "Kampanie social media"
                  }
                }
              ]
          }`}
        </script>
      </Helmet>

      <Wrapper>{children}</Wrapper>
    </React.Fragment>
  )
}

SeoBase.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  children: any.isRequired,
}

export default SeoBase
