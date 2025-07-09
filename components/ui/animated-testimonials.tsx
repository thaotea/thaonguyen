'use client';

import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { StaticImageData } from 'next/image';
type Testimonial = {
	quote: string;
	name: string;
	designation: string;
	src: string | StaticImageData;
};
export const AnimatedTestimonials = ({
	testimonials,
	autoplay = false,
	fullWidth = false,
}: {
	testimonials: Testimonial[];
	autoplay?: boolean;
	fullWidth?: boolean;
}) => {
	const [active, setActive] = useState(0);

	const handleNext = () => {
		setActive((prev) => (prev + 1) % testimonials.length);
	};

	const handlePrev = () => {
		setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
	};

	const isActive = (index: number) => {
		return index === active;
	};

	useEffect(() => {
		if (autoplay) {
			const interval = setInterval(handleNext, 5000);
			return () => clearInterval(interval);
		}
	}, [autoplay]);

	const randomRotateY = () => {
		return Math.floor(Math.random() * 21) - 10;
	};
	return (
		<div className='mx-auto max-w-sm  py-20 font-sans antialiased md:max-w-4xl '>
			<div
				className={`relative grid grid-cols-1 ${
					fullWidth ? '' : 'gap-20  lg:grid-cols-2 '
				}`}
			>
				<div>
					<div className='relative w-full' style={{ height: 400 }}>
						<AnimatePresence>
							{testimonials.map((testimonial, index) => (
								<motion.div
									key={testimonial.name || index}
									initial={{
										opacity: 0,
										scale: 0.9,
										z: -100,
										rotate: randomRotateY(),
									}}
									animate={{
										opacity: isActive(index) ? 1 : 0.2,
										scale: isActive(index) ? 1 : 0.95,
										z: isActive(index) ? 0 : -100,
										rotate: isActive(index) ? 0 : randomRotateY(),
										zIndex: isActive(index)
											? 40
											: testimonials.length + 2 - index,
										y: isActive(index) ? [0, -80, 0] : 0,
									}}
									exit={{
										opacity: 0,
										scale: 0.9,
										z: 100,
										rotate: randomRotateY(),
									}}
									transition={{
										duration: 0.4,
										ease: 'easeInOut',
									}}
									className='absolute inset-0 origin-bottom'
								>
									{typeof testimonial.src === 'string' &&
									testimonial.src.includes('.mp4') ? (
										<video
											src={testimonial.src}
											controls
											height={400}
											className='h-full w-full m-auto'
											playsInline
											muted
										/>
									) : (
										<img
											src={
												typeof testimonial.src === 'string'
													? testimonial.src
													: testimonial.src.src
											}
											alt={testimonial.name}
											height={400}
											draggable={false}
											className='h-full w-full object-contain object-center'
										/>
									)}
								</motion.div>
							))}
						</AnimatePresence>
					</div>
				</div>
				<div
					className={`flex flex-col justify-between pt-6 ${
						fullWidth ? 'align-middle text-center ' : ''
					}`}
				>
					<motion.div
						key={active}
						initial={{
							y: 20,
							opacity: 0,
						}}
						animate={{
							y: 0,
							opacity: 1,
						}}
						exit={{
							y: -20,
							opacity: 0,
						}}
						transition={{
							duration: 0.2,
							ease: 'easeInOut',
						}}
					>
						<h3 className='text-2xl font-bold'>{testimonials[active].name}</h3>
						<p className='text-gray'>{testimonials[active].designation}</p>
						{testimonials[active].quote && (
							<motion.p className={`${fullWidth ? 'mt-4 ' : 'mt-8'}`}>
								{testimonials[active].quote.split(' ').map((word, index) => (
									<motion.span
										key={index}
										initial={{
											filter: 'blur(10px)',
											opacity: 0,
											y: 5,
										}}
										animate={{
											filter: 'blur(0px)',
											opacity: 1,
											y: 0,
										}}
										transition={{
											duration: 0.2,
											ease: 'easeInOut',
											delay: 0.02 * index,
										}}
										className='inline-block'
									>
										{word}&nbsp;
									</motion.span>
								))}
							</motion.p>
						)}
					</motion.div>
					<div
						className={`flex gap-4 mt-8 lg:mt-0 ${
							fullWidth ? 'lg:mt-8 justify-center ' : ''
						}`}
					>
						<button
							onClick={handlePrev}
							className='group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800'
						>
							<IconArrowLeft className='h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400' />
						</button>
						<button
							onClick={handleNext}
							className='group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800'
						>
							<IconArrowRight className='h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400' />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
