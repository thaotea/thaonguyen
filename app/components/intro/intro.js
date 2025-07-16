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
					I'm a UI designer and developer who turns complex ideas into intuitive
					digital experiences. I bring a curious mindset and user-first
					approach, balancing empathy, technical feasibility, and business
					impact. With five years of experience building scalable design systems
					and accessible interfaces, I help teams deliver products that look
					sharp, feel effortless, and perform reliably. I'm driven by the belief
					that thoughful design can improve{' '}
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
