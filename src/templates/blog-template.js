import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import styles from '../css/single-blog.module.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Blog = ({ data }) => {
	const { title, published, text: { json } } = data.posts;

	const options = {
		renderNode: {
			'embedded-asset-block': (node) => {
				return (
					<div className="rich">
						<h3>emir awesome image</h3>
						<p>image by emir</p>
						<img width="400" src={node.data.target.fields.file['en-US'].url} />
					</div>
				);
			}
		}
	};

	return (
		<Layout>
			<section className={styles.blog}>
				<div className={styles.center}>
					<h1>{title}</h1>
					<h4>pubshlied at : {published}</h4>
					<article className={styles.post}>{documentToReactComponents(json, options)}</article>
					<AniLink fade to="/blog" className="btn-primary">
						all posts
					</AniLink>
				</div>
			</section>
		</Layout>
	);
};

export const query = graphql`
	query getPost($slug: String!) {
		posts: contentfulPost(slug: { eq: $slug }) {
			title
			published(formatString: "Do MMMM YYYY")
			text {
				json
			}
		}
	}
`;

export default Blog;
