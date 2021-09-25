import * as React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import metaImage from "../../images/logo.png";

const Seo = ({ title, description }) => {
    const { site } = useStaticQuery(query);

    const {
        defaultTitle,
        titleTemplate,
        defaultDescription,
        siteUrl
      } = site.siteMetadata

      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
       	siteImage: metaImage,
        url: `${siteUrl}`,
      }

    return (
        <Helmet encodeSpecialCharacters={true} defer={false} titleTemplate={titleTemplate}>
			<html lang="en" />
			<title lang="en">{seo.title}</title>
			{ seo.url && <base target="_blank" href={seo.url} /> }
			{ seo.url && <link rel="canonical" href={seo.url} /> }
			{ seo.description && <meta name="description" content={seo.description} /> }
			{seo.siteImage && <meta name="image" content={seo.siteImage} /> }
			{ seo.url && <meta property="og:url" content={seo.url} /> }
			{ seo.title && <meta property="og:title" content={seo.title} /> }
			<meta property="og:type" content="website" />
			{ seo.description && <meta property="og:description" content={seo.description} /> }
			{ seo.siteImage && <meta property="og:image" content={seo.siteImage} /> }
			{ seo.siteName && <meta property="og:site_name" content={seo.siteName}/> }
			<meta name="twitter:card" content="summary" />
			{ seo.title && <meta name="twitter:title" content={seo.title} /> }
			{ seo.description && <meta name="twitter:description" content={seo.description} /> }
			{ seo.siteImage && <meta name="twitter:image" content={seo.siteImage} /> }
			<meta name="robots" content="index, follow" />
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