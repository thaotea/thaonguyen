import React, { useEffect, useRef, useState } from 'react';

import styles from './cursor.module.scss';

export default function Cursor() {
	const cursorRef = useRef(null);
	const cursorLgRef = useRef(null);
	const targetX = useRef(0);
	const targetY = useRef(0);
	const currentX = useRef(0);
	const currentY = useRef(0);
	const currentX2 = useRef(0);
	const currentY2 = useRef(0);

	const animate = () => {
		currentX.current += targetX.current - currentX.current;
		currentY.current += targetY.current - currentY.current;

		currentX2.current += (targetX.current - currentX2.current) * 0.25;
		currentY2.current += (targetY.current - currentY2.current) * 0.25;

		if (cursorRef.current && cursorLgRef.current) {
			cursorRef.current.style.left = `${currentX.current - 25}px`;
			cursorRef.current.style.top = `${currentY.current - 25}px`;
			cursorLgRef.current.style.left = `${currentX2.current - 25}px`;
			cursorLgRef.current.style.top = `${currentY2.current - 25}px`;
		}

		requestAnimationFrame(animate);
	};

	useEffect(() => {
		const handleMouseMove = (event) => {
			targetX.current = event.pageX;
			targetY.current = event.pageY;

			const cursor = window
				.getComputedStyle(event.target)
				.getPropertyValue('--cursor');

			const smallCursor = document.querySelector(`.${styles.sm}`);
			if (smallCursor) {
				const allChildren = smallCursor.querySelectorAll('svg');
				allChildren.forEach((child) => {
					child.style.display = 'none';
				});
				const selected = document.querySelector(`.${styles.sm} #${cursor}`);
				if (selected) selected.style.display = 'block';
			}
		};

		document.addEventListener('mousemove', handleMouseMove);
		animate();

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<div className={styles.cursor}>
			<span className={`${styles.span} ${styles.sm}`} ref={cursorRef}>
				<svg
					className={styles.svg}
					id='auto'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 15.31 17.14'
				>
					<path
						d='M43.66,36c-1.36,1.35-2.69,2.7-4,4.06a28.26,28.26,0,0,0-3.6,4.56,48.74,48.74,0,0,0-3.6-4.51A56.9,56.9,0,0,0,28.34,36a46.47,46.47,0,0,0,7.71-8.52,29.63,29.63,0,0,0,3.5,4.51Q41.43,33.92,43.66,36Z'
						transform='translate(-28.34 -27.43)'
					/>
				</svg>
				<svg
					className={styles.svg}
					id='text'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 11 18'
				>
					<path
						d='M38.19,31.58c.08-1.23.16-2.41.26-3.58h3V27h-11v1h3.16c.19,1.5.34,2.95.41,4.33.08,1.56.11,3.05.08,4.49s-.1,2.79-.22,4.08c-.1,1.08-.22,2.11-.35,3.1H30.5v1h11V44H38.42c-.16-1.23-.28-2.47-.34-3.73C38,38.82,38,37.36,38,35.9S38.1,33,38.19,31.58Z'
						transform='translate(-30.5 -27)'
					/>
				</svg>
				<svg
					className={styles.svg}
					id='plus'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 14 14'
				>
					<path
						d='M30.31,38a3,3,0,0,1-.85-.13.61.61,0,0,1-.46-.66V34.82a.65.65,0,0,1,.46-.68,1.72,1.72,0,0,1,.85-.1c1.22,0,2.27.09,3.14.13s1.72.07,2.55.07,1.68,0,2.55-.07,1.92-.09,3.14-.13a1.72,1.72,0,0,1,.85.1.65.65,0,0,1,.46.68v2.42a.61.61,0,0,1-.39.66,2.61,2.61,0,0,1-.85.13ZM38,41.69a3.38,3.38,0,0,1-.13.85.61.61,0,0,1-.66.46H34.82a.6.6,0,0,1-.65-.46,3,3,0,0,1-.13-.85c.08-1.22.15-2.27.19-3.14s.07-1.72.07-2.55,0-1.68-.07-2.55-.11-1.92-.19-3.14a3,3,0,0,1,.13-.85.6.6,0,0,1,.65-.46h2.42a.61.61,0,0,1,.66.39,2.91,2.91,0,0,1,.13.85Z'
						transform='translate(-29 -29)'
					/>
				</svg>
				<svg
					className={styles.svg}
					id='pointer'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 11.81 14'
				>
					<path
						d='M13.37,22.53c-.06-2-.22-4.26-.52-6.7-.33-2.66-.78-5.1-1.27-7.3q1.55,1.28,3,2.34c.41.3,1.37,1,2.88,1.94s3.42,2.1,5.9,3.38c-2.36.42-4.31.57-6,1.63S14.76,20.57,13.37,22.53Z'
						transform='translate(-11.58 -8.53)'
					/>
				</svg>
				<svg
					className={styles.svg}
					id='minus'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 14.01 4.01'
				>
					<path
						d='M1.3,9A3,3,0,0,1,.45,8.9.61.61,0,0,1,0,8.25V5.83a.67.67,0,0,1,.46-.69A1.73,1.73,0,0,1,1.3,5c1.23,0,2.27.09,3.15.13s1.72.07,2.55.07,1.68,0,2.55-.07S11.47,5.08,12.7,5a1.73,1.73,0,0,1,.85.1.67.67,0,0,1,.46.69V8.25a.6.6,0,0,1-.4.65,2.57,2.57,0,0,1-.85.13Z'
						transform='translate(0.01 -5.02)'
					/>
				</svg>
				<svg
					className={styles.svg}
					id='heart'
					width='20'
					height='18'
					viewBox='0 0 20 18'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d='M19.1199 5.27417C19.1199 2.3613 16.7583 0 13.8457 0C12.0775 0 10.5173 0.872793 9.55993 2.20684C8.6026 0.872793 7.04233 0 5.27467 0C2.36152 0 0 2.36077 0 5.27417C0 5.68679 0.0523832 6.08657 0.142183 6.47193C0.874479 11.0219 5.93373 15.822 9.55993 17.14C13.1856 15.822 18.2454 11.0219 18.9766 6.47246C19.0675 6.08711 19.1199 5.68732 19.1199 5.27417Z' />
				</svg>
			</span>
			<span className={`${styles.span} ${styles.lg}`} ref={cursorLgRef}></span>
		</div>
	);
}
