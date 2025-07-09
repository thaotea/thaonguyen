import Image from 'next/image';
import styles from './intro.module.scss';
import catImage from '../../img/cat.png';
import meow from '../../img/meow.png';
import { useEffect, useState } from 'react';

export default function Intro({ onEnter, onLeave }) {
	const [images, setImages] = useState([]);
	const dataText = ['inclusivity.', 'engagement.', 'wellness.', 'tomorrow.'];
	const [text, setText] = useState('');
	const [index, setIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);

	const handleClick = () => {
		setImages([...images, meow]);
	};

	useEffect(() => {
		if (index >= dataText.length) {
			setTimeout(() => setIndex(0), 5000);
			return;
		}

		if (charIndex < dataText[index].length) {
			const timeout = setTimeout(() => {
				setText(dataText[index].substring(0, charIndex + 1));
				setCharIndex((prev) => prev + 1);
			}, 100);

			return () => clearTimeout(timeout);
		} else {
			setTimeout(() => {
				setCharIndex(0);
				setIndex((prev) => prev + 1);
			}, 700);
		}
	}, [charIndex, index]);

	return (
		<section className={styles.intro}>
			<div className={`container`}>
				<h1 className={styles.title}>
					I'm a UI designer and developer who transforms business challenges
					into intuitive digital experiences. With five years of experience
					crafting scalable design systems and accessble interfaces, my dual
					expertise bridges the gap between vision and execution. I bring a
					curious mindset and a drive to think above and beyond the box while
					balancing user emphathy, technical feasibility, and business impact.
					This approach allows me to explore how thoughtful design can improve{' '}
					<span className={styles.type}>{text}</span>
				</h1>

				<p className={` ${styles.description}`}>📍 San Francisco, CA</p>
				<div className={styles.cat}>
					<button
						className={styles.catMeowBtn}
						onClick={handleClick}
						aria-label='Pet the cat laying outside of the box'
						onMouseEnter={onEnter}
						onMouseLeave={onLeave}
					>
						{images.map((src, index) => (
							<Image
								key={index}
								className={`${styles.catMeowImage}`}
								src={src}
								alt='meow'
								width={50}
							/>
						))}
					</button>
					<Image
						className={styles.catImage}
						src={catImage}
						alt=''
						width={200}
					/>
				</div>
			</div>
		</section>
	);
}
