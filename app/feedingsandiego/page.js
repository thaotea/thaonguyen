'use client';

import styles from './page.module.css';
import Header from '../components/header/header';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import websiteHero1 from '../img/fsd-hero-1.png';
import websiteHero2 from '../img/fsd-hero-2.png';
import img1 from '../img/fsd-img-1.png';
import img2 from '../img/fsd-img-2.png';
import img3 from '../img/fsd-img-3.png';
import img4 from '../img/fsd-img-4.png';
import img5 from '../img/fsd-img-5.png';
import img6 from '../img/fsd-img-6.png';
import img7 from '../img/fsd-img-7.png';
import img8 from '../img/fsd-img-8.png';
import persona1 from '../img/persona1.jpg';
import persona2 from '../img/persona2.jpg';
import persona3 from '../img/persona3.jpg';

import React from 'react';
import { Timeline } from '../../components/ui/timeline';
import { AnimatedTestimonials } from '../../components/ui/animated-testimonials';
import Link from 'next/link';

const tdWebsiteVideo = '/video/td-website.mp4';

export default function Home() {
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		setIsVisible(true);
	}, []); // Empty array ensures this effect runs only on mount and unmount

	const personas = [
		{
			quote:
				'As a first-time volunteer, I need guides to identify good produce from bad so I can sort without constantly asking for help.',
			name: 'Ginny Baker',
			designation: 'Student, 8 years old',
			src: persona1,
		},
		{
			quote:
				'I need simple training tools that help new volunteers learn food sorting basics quickly, so I can focus on coordinating rather than constantly explaining the same concepts.',
			name: 'Max Johnson',
			designation: 'Volunteer Coordinator, 15 years old',
			src: persona2,
		},
		{
			quote:
				"I want to make meaningful impact during my limited volunteer time, but I often hesitate when sorting produce because I'm unsure what qualifies as acceptable.",
			name: 'Joe Singh',
			designation: 'College Student, 20 years old',
			src: persona3,
		},
	];

	const data = [
		{
			title: 'Problem statement',
			content: (
				<div>
					<p className='title'>Addressing Knowledge Gaps in Food Sorting</p>
					<p className=''>
						New volunteers with Feeding San Diego needed a way to learn how to
						distinguish acceptable from unacceptable produce in order to
						decrease unnecessary food waste and maintain efficiency in the
						sorting process.
					</p>
				</div>
			),
		},
		{
			title: 'Key personas',
			content: (
				<div>
					<p>
						Volunteers are a diverse group of individuals who come together to
						support Feeding San Diego's mission. Volunteers may have varying
						levels of experience with food sorting and distribution, but they
						all share a common goal of ensuring that food reaches those who need
						it most.
					</p>
					<AnimatedTestimonials testimonials={personas} />
				</div>
			),
		},
		{
			title: 'Ideation',
			content: (
				<div>
					<div className='mb-8'>
						<h3 class='title'>Infographic Solution</h3>

						<p>
							After rapid ideation and storyboarding, I decided on creating a
							visual poster infographic that would showcase a good apple versus
							a bad apple.
						</p>
					</div>
					<figure className='mb-20'>
						<div className=' grid grid-cols-1 md:grid-cols-2 gap-4'>
							<Image
								src={img1}
								alt='infographic poster sketch contrasting good tomato (no mold, no deep cups, not squishy) and bad tomato (moldy, deep cuts, squishy)'
								width={500}
								className=' rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
							/>
							<Image
								src={img2}
								alt='infographic apron sketch contrasting good tomato (no mold, no deep cups, not squishy) and bad tomato (moldy, deep cuts, squishy)'
								width={500}
								className=' rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
							/>
						</div>
						<figcaption className='mt-4 text-center'>
							Sketches with infographic poster and apron identifying what
							contrasts good vs bad produce - no mold, no deep cuts, not squishy
						</figcaption>
					</figure>
				</div>
			),
		},
		{
			title: 'First Iteration',
			content: (
				<div>
					<div className='mb-8'>
						<h3 class='title'>Infographic Poster</h3>

						<p>
							I created one realistic and one cartoon infographic that showed
							mold, deep cuts, and squishines. I observed the amount of times
							the volunteers look up at the infographic when they were confused
							and also asked the volunteers their opinions about each prototype.
							Overall the volunteers and team leads liked the idea of having
							visuals of some kind however it was clear that infographics being
							placed alongside the wall wouldn't be the best idea because
							volunteers would have to turn away from the sorting area to see
							the posters.
						</p>
					</div>
					<figure className='mb-20'>
						<div className=' grid grid-cols-1 md:grid-cols-2 gap-4'>
							<Image
								src={img3}
								alt='infographic poster sketch contrasting good tomato (no mold, no deep cups, not squishy) and bad tomato (moldy, deep cuts, squishy)'
								width={500}
								className=' rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
							/>
							<Image
								src={img4}
								alt='infographic apron sketch contrasting good tomato and bad tomato (moldy, deep cuts, squishy)'
								width={500}
								className=' rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
							/>
						</div>
						<figcaption className='mt-4 text-center'>
							<strong>
								{' '}
								Traits of a bad apple infographic realistic vs cartoon
								infographic{' '}
							</strong>
							<br />
							moldy, (black/gray/white "fuzz" specs), squishy (can easily
							pressed in and it's soft), and deep cut (very deep cuts that can
							collect bacteria)
						</figcaption>
					</figure>
				</div>
			),
		},
		{
			title: 'Second Iteration',
			content: (
				<div>
					<div className='mb-8'>
						<h3 class='title'>Realistic Infographic Apron</h3>

						<p>
							I utilized realistic pictures to contrast tomatoes that are good
							vs bad. The volunteer leads liked how the apron was clearly
							visible during the entire shift. However, I noticed that our
							infographic wasn't as intuitive when it came to differentiating
							bad from good and volunteers would take extra time comparing
							actual tomatoes to the ones on the infographic.
						</p>
					</div>
					<figure className='mb-20'>
						<div className=' grid grid-cols-1 md:grid-cols-3 gap-4 '>
							<Image
								src={img5}
								alt='infographic on apron showing good tomatoes (small cuts, small bruises) and bad tomatoes (mold, squishy)'
								width={500}
								className='md:col-span-1 h-full rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
							/>
							<Image
								src={img6}
								alt='infographic showing good tomatoes (small cuts, small bruises) and bad tomatoes (mold, squishy))'
								width={500}
								className='md:col-span-2 h-full rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
							/>
						</div>
						<figcaption className='mt-4 text-center'>
							Good tomatoes with small cuts and bruises vs bad tomatoes with
							mold and squishiness tomatoes infographic on apron
						</figcaption>
					</figure>
				</div>
			),
		},
		{
			title: 'Final Iteration',
			content: (
				<div>
					<div className='mb-8'>
						<h3 class='title'>Infographic Solution</h3>

						<p>
							I recreated the infographic to include more abstract produce
							pictures and better verbiage. I created the catchphrase "if ___
							then it's bad." and provided additional description of a bad
							tomato traits. Overall, the design was validated as I got positive
							feedback from volunteers throughout the shift noting that it was
							straightforward and utilized to help explain when volunteers were
							confused.
						</p>
					</div>
					<figure className='mb-20'>
						<div className=' grid grid-cols-1 md:grid-cols-3  gap-4'>
							<Image
								src={img7}
								alt="infographic poster on apron showing if ___ then it's bad with severe cuts (cuts that expose the inside), moldy (white/black fuzz *mold wipes off, scars don't), and squishy (breaks open with slight pressure) tomatoes"
								width={500}
								className='md:col-span-1 h-full rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
							/>
							<Image
								src={img8}
								alt="infographic poster on apron showing if ___ then it's bad with severe cuts (cuts that expose the inside), moldy (white/black fuzz *mold wipes off, scars don't), and squishy (breaks open with slight pressure) tomatoes"
								width={500}
								className='md:col-span-2 h-full  rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
							/>
						</div>
						<figcaption className='mt-4 text-center'>
							<strong>
								{' '}
								Infographic poster on apron showing if ___ then it's bad{' '}
							</strong>{' '}
							<br />
							Severe cuts (cuts that expose the inside), moldy (white/black fuzz
							*mold wipes off, scars don't), and squishy (breaks open with
							slight pressure) tomatoes
						</figcaption>
					</figure>
				</div>
			),
		},
		{
			title: 'Conclusion',
			content: (
				<div>
					<p className='mb-3'>
						Through immersing in the lives of the Feeding San Diego volunteers
						it allowed me to identify opportunities for design and prototype
						solutions. I learned the importance of iteration based on user
						feedback. In learning to empathize with stakeholders, it helped me
						gain to better understanding of how everyday design can lead to
						more.
					</p>

					<div className={`${styles.pageFooter}`}>
						<Link href='ubs' className={`arrowBtn previous`}>
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
										strokeWidth='8'
										strokeMiterlimit='10'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</div>
							<div className={`arrowText`}>Previous project</div>
						</Link>
					</div>
				</div>
			),
		},
	];

	return (
		<div
			className={`transition-opacity duration-1000 ease-in-out ${
				isVisible ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<Header></Header>
			<main className={`main`}>
				<section className={`${styles.banner}`}>
					<Image className={`${styles.imgBg}`} src={websiteHero1} alt='' />
					<Image className={`${styles.img1}`} src={websiteHero2} alt='' />
					<Image className={`${styles.img2}`} src={websiteHero1} alt='' />
				</section>
				<section>
					<div className={`max-w-7xl mx-auto pt-10 md:pt-40 `}>
						<div
							className={`grid md:grid-cols-3 gap-8 pr-4 md:pr-8 pl-3 md:pl-8`}
						>
							<div className={`col-span-3`}>
								<p className={`subtitle`}>Intro</p>
								<h1 className={`title`}>
									Designing for Feeding San Diego Infographic
								</h1>
								<p>
									During the initial stages of our project, I conducted
									contextual observations and interviewed volunteers at the
									Feeding San Diego food distribution warehouse. I interviewed
									these volunteers in the context of food sorting shifts and
									figured out there was a gap in identifying usable produce. I
									developed a physical infographic that aims to resolve the
									confusion during the food sorting process.
								</p>
							</div>
							{/*<div className={`col-span-1`}>
								<p className={`subtitle`}>Role</p>
								<div className={`roles`}>
									<p>UI Designer</p>
									<p>UI Developer</p>
								</div>
							</div> */}
						</div>
					</div>
				</section>

				<section>
					<div className='w-full'>
						<Timeline data={data} />
					</div>
				</section>
			</main>
			<footer className={styles.footer}></footer>
		</div>
	);
}
