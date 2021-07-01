import React from "react";
import { IoPersonOutline, IoHomeOutline, IoDocumentTextOutline } from "react-icons/io5";
import { FaFax, FaMapMarkerAlt, FaClock, FaEnvelope, FaPhone } from "react-icons/fa";
import "./index.scss";
import Layout from "layout/Layout";
import Fade from 'react-reveal/Fade';
import Seo from "component/Seo/Seo";
import Navigation from 'component/Navigation/Navigation';
import ContactForm from 'component/ContactForm/ContactForm';
import Tile from 'component/Tile/Tile';
import BackgroundImage from 'component/BackgroundImage/BackgroundImage';
import Footer from 'component/Footer/Footer';
import content from 'content/content.json';

const IndexPage = () => {

  return (
    <Layout>
		<Seo title="Merritt Notary" image="../images/mikhail-pavstyuk-unsplash.jpg" />
		<Navigation link1={content.navigation.link1Name} link2={content.navigation.link2Name} link3={content.navigation.link3Name} />
		<main id="page-wrap">
			<BackgroundImage titleFirst={content.heroTitleFirst} titleSecond={content.heroTitleSecond} ariaLabelAltText={content.heroImageAlt} />
			<div className="content-wrapper">
				<Fade>
					<section className="about__section" id="about">
						<div>
							<h2>{content.aboutTitle}</h2>
						</div>
						<div>
							<p>{content.aboutCopy}</p>
						</div>
					</section>	
				</Fade>
				<Fade>
					<section className="services__section" id="services">
						<h2>{content.services.servicesTitle}</h2>
						<p className="copy">{content.services.servicesCopy}</p>
						<div className="tile__wrapper">
							<Tile icon={<IoPersonOutline />} title={content.services.personalPlanning.title} items={content.services.personalPlanning.servicesOffered} />
							<Tile icon={<IoHomeOutline />} title={content.services.realEstate.title} items={content.services.realEstate.servicesOffered} />
							<Tile icon={<IoDocumentTextOutline />} title={content.services.notarizations.title} items={content.services.notarizations.servicesOffered} />
						</div>
					</section>	
				</Fade>
				<Fade>
					<section className="contact__section" id="contact">
						<h2>{content.contact.contactUsTitle}</h2>
						<div className="contact-wrapper">
							<div className="contact-us-info">
								<div className="contact__tile-wrapper">
									<div className="contact-tile">
										<div className="contact__icon"><FaMapMarkerAlt /></div>
										<p>{content.contact.contactInfo.address}</p>
									</div>
									<div className="contact-tile">
										<div className="contact__icon"><FaPhone /></div>
										<p><a href="tel:250-378-0333">{content.contact.contactInfo.phoneNo}</a></p>
									</div>
									<div className="contact-tile">
										<div className="contact__icon"><FaFax/></div>
										<p><a href="fax:250-378-0332">{content.contact.contactInfo.fax}</a></p>
									</div>
									<div className="contact-tile">
										<div className="contact__icon"><FaEnvelope /></div>
										<p><a href="mailto:julia@merrittnotary.ca">{content.contact.contactInfo.email}</a></p>
									</div>
									<div className="contact-tile">
										<div className="contact__icon"><FaClock /></div>
										<p>{content.contact.contactInfo.hours}</p>
									</div>
									<div className="map-container">
										<div><iframe title="Location of Merritt Notary on map" aria-label="" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10234.610835284626!2d-120.7859119!3d50.1115071!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x285e91eeb4f24653!2sJulia%20Trela%20Notary%20Public!5e0!3m2!1sen!2sca!4v1623868236196!5m2!1sen!2sca" width="550" height="300" style={{border: '0'}} allowFullScreen loading="lazy"></iframe></div>
									</div>
								</div>
							</div>
							<ContactForm copy={content.contact.contactUsCopy} formSuccess={content.contact.formSuccess} name={content.contact.formLabels.name} email={content.contact.formLabels.email} phone={content.contact.formLabels.phone} message={content.contact.formLabels.message} submit={content.contact.formLabels.submitBtn} />
						</div>
					</section>
				</Fade>
			</div>
			<Fade>
				<Footer />
			</Fade>
		</main>
    </Layout>
  )
}

export default IndexPage
