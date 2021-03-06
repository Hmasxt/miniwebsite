import React from 'react';
import TourList from './TourList';
import { graphql, useStaticQuery } from 'gatsby';

const getTours = graphql`
	query {
		tours: allContentfulTour {
			edges {
				node {
					name
					price
					slug
					country
					id: contentful_id
					days
					images {
						fluid {
							...GatsbyContentfulFluid_tracedSVG
						}
					}
				}
			}
		}
	}
`;

const Tours = () => {
	const { tours } = useStaticQuery(getTours);
	// console.log(tours);

	return <TourList tours={tours} />;
};

export default Tours;
