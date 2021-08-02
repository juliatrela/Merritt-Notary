import * as React from "react";
import Seo from "component/Seo/Seo";
import Layout from "layout/Layout";
import content from 'content/content.json';
import { StaticImage } from "gatsby-plugin-image";
import "./404.scss";

// markup
const NotFoundPage = () => {
	return (
		<Layout>
			<section className="section__page-not-found">
				<Seo title="Page Not Found" />
				<StaticImage 
					src="../../images/logo.png"  
					alt="Julia Trela Notary Public Logo"
					className="logo"
					width={100} /><h2>{content.pageNotFound.title}</h2>
				<p>{content.pageNotFound.copy}</p>
				<p>{content.pageNotFound.copy2}<a href="/" target="_self">{content.pageNotFound.linkTitle}</a>.</p>
			</section>
		</Layout>
	)
}

export default NotFoundPage
