import * as React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const Seo = ({ title, description, image }) => {
    const { site } = useStaticQuery(query);

    const {
        defaultTitle,
        titleTemplate,
        defaultDescription,
        siteUrl,
        defaultImage,
        keywords
      } = site.siteMetadata

      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}`,
        keywords: `${keywords}`
      }

    return (
        <Helmet encodeSpecialCharacters={true} defer={false} titleTemplate={titleTemplate}>
            <html lang="en" />
            <title lang="en">{seo.title}</title>
            { seo.url && <base target="_blank" href={seo.url} /> }
            { seo.url && <link rel="canonical" href={seo.url} /> }
            <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&amp;family=Work+Sans:wght@400;700&amp;display=swap" rel="stylesheet"/>
            { seo.description && <meta name="description" content={seo.description} /> }
            { seo.keywords && <meta name="keywords" content={seo.keywords} /> }
            {seo.image && <meta name="image" content={seo.image} /> }
            { seo.url && <meta property="og:url" content={seo.url} /> }
            { seo.title && <meta property="og:title" content={seo.title} /> }
            <meta property="og:type" content="website" />
            { seo.description && <meta property="og:description" content={seo.description} /> }
            { seo.image && <meta property="og:image" content={seo.image} /> }
            { seo.siteName && <meta property="og:site_name" content={seo.siteName}/> }
            <meta name="twitter:card" content="summary" />
            { seo.title && <meta name="twitter:title" content={seo.title} /> }
            { seo.description && <meta name="twitter:description" content={seo.description} /> }
            { seo.image && <meta name="twitter:image" content={seo.image} /> }
        </Helmet>
    )
}

export default Seo

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        keywords
      }
    }
  }
`
Seo.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
}

Seo.defaultProps = {
    title: null,
    description: null,
    image: null
  }