'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../../../@/lib/utils';

export const GlowingStarsBackgroundCard = ({
	className,
	children,
	mouseEffect,
}: {
	className?: string;
	children?: React.ReactNode;
	mouseEffect?: boolean;
}) => {
	const [mouseEnter, setMouseEnter] = useState(false);

	useEffect(() => {
		console.log(mouseEffect);
		setMouseEnter(mouseEffect);
	}, [mouseEffect]);

	return (
		<div
			onMouseEnter={() => {
				//setMouseEnter(true);
			}}
			onMouseLeave={() => {
				setMouseEnter(false);
			}}
			className={cn(
				'bg-[linear-gradient(110deg,#020617_0.6%,#01030d)] h-full w-full ',
				className
			)}
		>
			<div className='h-full flex justify-center items-center'>
				<Illustration mouseEnter={mouseEnter} />
			</div>
			<div className='px-2 pb-6'>{children}</div>
		</div>
	);
};

export const GlowingStarsDescription = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<p className={cn('text-base text-white max-w-[16rem]', className)}>
			{children}
		</p>
	);
};

export const GlowingStarsTitle = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<h2 className={cn('font-bold text-2xl text-[#eaeaea]', className)}>
			{children}
		</h2>
	);
};

export const Illustration = ({ mouseEnter }: { mouseEnter: boolean }) => {
	const stars = 108;
	const columns = 18;

	const [glowingStars, setGlowingStars] = useState<number[]>([]);
	const [fadingStars, setFadingStars] = useState<number[]>([]);

	const highlightedStars = useRef<number[]>([]);

	useEffect(() => {
		const interval = setInterval(() => {
			highlightedStars.current = Array.from({ length: 5 }, () =>
				Math.floor(Math.random() * stars)
			);
			setGlowingStars([...highlightedStars.current]);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (mouseEnter) {
			setFadingStars([]); // Reset fading stars when mouse enters

			let delay = 0;
			const interval = setInterval(() => {
				highlightedStars.current = Array.from(
					{ length: 5 },
					(_, i) => Math.floor(((i + delay) / 5) * stars) // Maintain left-to-right effect
				);
				setGlowingStars([...highlightedStars.current]);

				delay += 0.3; // Add delay between each batch of glowing stars
				if (delay > 5) clearInterval(interval);
			}, 500);

			return () => clearInterval(interval);
		} else {
			setFadingStars([...glowingStars]); // Store glowing stars for fading out
			setGlowingStars([]);
		}
	}, [mouseEnter]);

	return (
		<div
			className='h-full p-1 w-full'
			style={{
				display: 'grid',
				gridTemplateColumns: `repeat(${columns}, 1fr)`,
				gap: `1px`,
			}}
		>
			{[...Array(stars)].map((_, starIdx) => {
				const isGlowing = glowingStars.includes(starIdx);
				const delay = (starIdx % 10) * 0.1;
				const staticDelay = starIdx * 0.01;
				return (
					<div
						key={`matrix-col-${starIdx}}`}
						className='relative flex items-center justify-center'
					>
						<Star
							isGlowing={mouseEnter ? true : isGlowing}
							isFading={fadingStars.includes(starIdx)}
							delay={mouseEnter ? staticDelay : delay}
						/>
						{mouseEnter && <Glow delay={staticDelay} />}
						<AnimatePresence mode='wait'>
							{isGlowing && <Glow delay={delay} />}
						</AnimatePresence>
					</div>
				);
			})}
		</div>
	);
};

const Star = ({
	isGlowing,
	isFading,
	delay,
}: {
	isGlowing: boolean;
	isFading: boolean;
	delay: number;
}) => {
	return (
		<motion.div
			initial={{ scale: 1, opacity: 0.2, background: '#666' }}
			animate={{
				scale: isGlowing ? [1, 1.2, 2.5, 2.2, 1.5] : 1,
				background: isGlowing ? '#fff' : '#666',
				opacity: isGlowing ? [0.2, 0.5, 1] : isFading ? 0 : 0.2, // Smooth fade-in effect
			}}
			transition={{
				opacity: {
					duration: isGlowing ? 1.5 : 2,
					ease: 'easeInOut',
					delay: delay,
				}, // Delay for fade-in
				scale: {
					duration: isGlowing ? 1.5 : 2,
					ease: 'easeInOut',
					delay: delay,
				},
			}}
			className='bg-[#666] h-[1px] w-[1px] rounded-full relative z-20'
		/>
	);
};

const Glow = ({ delay }: { delay: number }) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			transition={{
				duration: 2,
				ease: 'easeInOut',
				delay: delay,
			}}
			exit={{
				opacity: 0,
			}}
			className='absolute  left-1/2 -translate-x-1/2 z-10 h-[4px] w-[4px] rounded-full bg-[#ffd700] blur-[1px] shadow-2xl  shadow-[0_0_8px_#ffd700]'
		/>
	);
};
