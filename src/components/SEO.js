import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, grahpql } from 'gatsby';

const getData = graphql`
	query {
		site {
			siteMetadata {
				siteTitle: title
				siteDesc: description
				author
				siteUrl
				image
				twitterUsername
			}
		}
	}
`;

const SEO = ({ title, description }) => {
	const { site } = useStaticQuery(getData);
	const { siteDesc, siteTitle, siteUrl, twitterUsername, image } = site.siteMetadata;

	return (
		<Helmet htmlAttributes={{ lang: 'eng' }} title={`${title} | ${siteTitle}`}>
			<meta name="description" content={description || siteDesc} />
			<meta name="image" content={image} />
		</Helmet>
	);
};

export default SEO;
