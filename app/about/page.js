'use client';

import styles from './page.module.css';
import Header from '../components/header/header';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
						<p className='block'>
							{' '}
							Hi! I'm Thao, a designer and developer based in SF with a
							Cognitive Science background from UCSD. I draw inspiration from
							everyday experiences and human behavior, using design and
							programming to create practical solutions that enhance our
							relationship with technology. When I'm not crafting digital
							experiences, you'll find me exploring creativity through my
							hobbies like pottery, cooking, and drinking matcha!
						</p>
						<Link
							href='https://www.linkedin.com/in/thao-nguyen-04bab313b/'
							className={`arrowBtn`}
							target='_blank'
						>
							<div className={`arrowIcon`}>
								<svg
									className={`arrowSvg`}
									width='86'
									height='56'
									viewBox='0 0 86 56'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										className={`arrowPath`}
										d='M2.97776 28H83.0222C71.7792 22.2725 63.2233 13.7165 57.425 2.40276M57.3543 53.668C63.2233 42.2836 71.7792 33.7276 82.9515 28.0707'
										stroke-width='8'
										stroke-miterlimit='10'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
							</div>

							<div className={`arrowText`}>Let's Connect</div>
						</Link>{' '}
					</div>
				</section>
			</main>
			<footer className={styles.footer}></footer>
		</div>
	);
}
