'use client';

import styles from './page.module.css';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import { useEffect, useState } from 'react';
import Projects from './components/projects/projects';
import {
	GlowingStarsBackgroundCard,
	GlowingStarsDescription,
	GlowingStarsTitle,
} from './components/ui/glowing-stars';
export default function Home() {
	const [isVisible, setIsVisible] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const handleEnter = () => {
		setIsHovered(true);
	};

	const handleLeave = () => {
		setIsHovered(false);
	};

	useEffect(() => {
		setIsVisible(true);
	}, []); // Empty array ensures this effect runs only on mount and unmount

	return (
		<div
			className={` transition-opacity duration-2000 ease-in-out ${
				isVisible ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<div className={`starBg w-full`}>
				<GlowingStarsBackgroundCard
					mouseEffect={isHovered}
				></GlowingStarsBackgroundCard>
			</div>
			<Header></Header>
			<main className={styles.main}>
				<Intro onEnter={handleEnter} onLeave={handleLeave} />
				<div id='projects'>
					<Projects />
				</div>
			</main>
			<footer className={styles.footer}></footer>
		</div>
	);
}
