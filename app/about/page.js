'use client';

import styles from './page.module.css';
import Header from '../components/header/header';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

import React from 'react';
const aboutVideo = '/video/about.mp4';

export default function Home() {
	const [isVisible, setIsVisible] = useState(false);
	const videoRef = useRef(null);

	useEffect(() => {
		setIsVisible(true);
		if (videoRef.current) {
			videoRef.current.playbackRate = 0.5;
		}
	}, []);

	return (
		<div
			className={`transition-opacity duration-1000 ease-in-out ${
				isVisible ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<Header></Header>
			<main className={`main`}>
				<section className={styles.about}>
					<video
						ref={videoRef}
						src={aboutVideo}
						loop
						muted
						autoPlay
						playsInline
						className='w-48 h-48 rounded-full object-cover'
					/>{' '}
					<div>
						Hi! I'm Thao, a designer and developer based in SF with a Cognitive
						Science background from UCSD. I draw inspiration from everyday
						experiences and human behavior, using design and programming to
						create practical solutions that enhance our relationship with
						technology. When I'm not crafting digital experiences, you'll find
						me exploring creativity through my hobbies like pottery, cooking,
						and drinking matcha!
					</div>
				</section>
			</main>
			<footer className={styles.footer}></footer>
		</div>
	);
}
