import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export default function SEO({ children, location, description, title, image}) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetaData {
          title
          description
          twitter
        }
      }
    }
  `);

  return (
    // %s will append at the end of title
    <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
      <html lang="en" />
    </Helmet>
  );
}