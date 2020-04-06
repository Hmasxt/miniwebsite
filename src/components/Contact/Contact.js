import React from 'react';
import Title from '../Title';
import styles from '../../css/contact.module.css';

const Contact = () => {
	return (
		<section className={styles.contact}>
			<Title title="contact" subtitle="us" />
			<div className={styles.center}>
				<form action="https://formspree.io/emihaikalemir@gmail.com" method="POST" className={styles.form}>
					<div>
						<label htmlFor="name">name</label>
						<input
							type="text"
							name="name"
							id="name"
							className={styles.formControl}
							placeholder="emir haikal"
						/>
						<label htmlFor="email">email</label>
						<input
							type="email"
							name="email"
							id="email"
							className={styles.formControl}
							placeholder="emirhaikal@email.com"
						/>
						<label htmlFor="message">message</label>
						<textarea
							name="message"
							id="message"
							rows="10"
							className={styles.formControl}
							placeholder="hello please give me FEEDBAACK"
						/>
						<div>
							<input type="submit" value="submit here" className={styles.submit} />
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
