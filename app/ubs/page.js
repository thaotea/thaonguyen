'use client';

import styles from './page.module.css';
import Header from '../components/header/header';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import websiteHero1 from '../img/ubs-website-hero-1.png';
import websiteHero2 from '../img/ubs-website-hero-2.png';
import website1 from '../img/td-website-1.png';
import website2 from '../img/td-website-2.png';
import websiteBefore1 from '../img/ubs-website-before-1.png';
import websiteAfter1 from '../img/thumbnail-ubs.png';
import websiteComponent1 from '../img/ubs-website-component-1.png';
import websiteComponent2 from '../img/ubs-website-component-2.png';
import websiteComponent3 from '../img/ubs-website-component-3.png';
import websiteComponent4 from '../img/ubs-website-component-4.png';

import websiteComponent5 from '../img/td-website-component-5.png';

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

	const needs = [
		{
			quote:
				'The cluttered layout and outdated branding made it difficult for users to begin their search with confidence. Too many inputs created friction, making the experience feel restrictive and unintuitive.',
			name: 'Main Search Page',
			designation: 'Before',
			src: websiteBefore1,
		},
		{
			quote:
				'A simplified layout lets users toggle between searching by name or location, or select a CTA link - reducing friction and supporting different user intents.',
			name: 'Main Search Page',
			designation: 'After',
			src: websiteAfter1,
		},
	];

	const components = [
		{
			quote:
				'The stepped form added unnecessary complexity by asking for user information upfront - 50% of users stated they initially thought it was a part of the search process. This confusion increased task completion times and created friction, ultimately reducing the efficiency of the overall experience.',
			name: 'Prioritizing Best Match Stepped Form',
			designation: 'Test Iteration',
			src: websiteComponent1,
		},

		{
			quote:
				'By placing location and name inputs front and center, the design directly supported the two most common user intents: finding a nearby branch or searching for an advisor by name. A clear CTA led users to the full-page Best Match form, minimizing confusion and removing unnecessary steps. This streamlined approach reduced task completion times and boosted satisfaction.',
			name: 'Prioritizing Location or Name Search',
			designation: 'Final Iteration',
			src: websiteComponent2,
		},
	];

	const data = [
		{
			title: 'Problem statement',
			content: (
				<div>
					<p className='title'>Redesigning the UBS Locator Experience</p>
					<p className=''>
						UBS's existing advisor and branch locator featured an outdated
						interface, limited search functionality, and inconsistent brand
						alignment. To address these challenges, the redesigned experience
						prioritized user-centered design and brand consistency. The new
						experience had to solve:
					</p>
					<ul className='list-disc pl-4'>
						<li>
							Outdated Interface - Replace the outdated interface with a more{' '}
							<strong className='text-gradient'>modern and intuitive</strong>{' '}
							solution.
						</li>
						<li>
							Search Limitations - Make it{' '}
							<strong className='text-gradient'>easy for clients</strong> to
							search by name or location based on their intent.
						</li>
						<li>
							Accessibility Gaps - Ensure{' '}
							<strong className='text-gradient'>
								accessibility and usability
							</strong>{' '}
							across devices.
						</li>
						<li>
							Brand Inconsistency - Reflect{' '}
							<strong className='text-gradient'>UBS's brand identity</strong> to
							foster trust and credibility.
						</li>
					</ul>
					<AnimatedTestimonials testimonials={needs} fullWidth='false' />
				</div>
			),
		},
		{
			title: 'Design process',
			content: (
				<div>
					<div className='mb-8'>
						<h3 class='title'>Locator Search Inputs</h3>

						<p>
							Users completed common tasks such as searching for an advisor by
							name, by location, or opting to be matched to simulate real-world
							use cases. We tracked task completion times and collected user
							satisfaction ratings to evaluate ease of use. These insights
							helped identify which layout best supported users who were
							unfamiliar with advisor details or uncertain about how to start
							their search.
						</p>
						<AnimatedTestimonials testimonials={components} />
					</div>

					<div className='mb-20'>
						<h3 class='title'>Locator Search Results Design Comparison </h3>

						<p>
							Following my market research and identifying business needs, I
							developed two distinct interface approaches. The comparison below
							illustrates the strategic design evolution from a traditional
							information-heavy grid layout to a location-first, user-centered
							discovery experience.
						</p>
					</div>

					<div className='mb-8'>
						<h3 class='title'>Advisor Results Test Iteration </h3>

						<p>
							The grid-based interface prioritized comprehensive information
							display, presenting detailed advisor profiles simultaneously with
							filtering capabilities. However, user testing revealed that this
							approach created cognitive overload and failed to address users'
							primary need for geographic context.
						</p>
					</div>
					<figure className='mb-20'>
						<Image
							src={websiteComponent3}
							alt=''
							width={500}
							className=' rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
						/>
						<figcaption className='mt-4 text-center'>
							<strong>Advisor Results Card with search filter</strong>
							<br />
							Filterable advisor cards displaying contact information,
							professional designations, and clear CTAs to message or visit
							their website.
						</figcaption>
					</figure>

					<div className='mb-8'>
						<h3 class='title'>Advisor Results Final Iteration</h3>
						<p>
							Additional research shows that users are likely to pick an advisor
							within a 5 mile search radius. In response, our redesigned
							map-integrated interface fundamentally restructures the user
							experience around location-based discovery while maintaining
							access to essential advisor information.
						</p>
					</div>

					<figure className='mb-20'>
						<Image
							src={websiteComponent4}
							alt=''
							width={500}
							className=' rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
						/>
						<figcaption className='mt-4 text-center'>
							<strong>Advisor Results Cards with map integration</strong>
							<br />
							Advisor cards with contact details and clear CTAs to message or
							visit their website, paired with an interactive map for location
							context.
						</figcaption>
					</figure>
				</div>
			),
		},
		{
			title: 'Results & Impact',
			content: (
				<div>
					<h3 class='title'>
						{' '}
						Redesigning the UBS Advisor & Branch Locator Experience
					</h3>

					<p className='mb-3'>
						The redesigned platform delivers measurable business value by
						streamlining client connections and reinforcing UBS's digital
						presence.
					</p>
					<ul className='list-disc pl-4'>
						<li>
							<strong>Enhanced User Experience </strong> - Location-first design
							approach improves advisor discovery efficiency and user
							satisfaction
						</li>
						<li>
							<strong>Engagement</strong> - Intuitive user experience with
							streamlined search process and clear CTAs drive higher advisor
							connection rates
						</li>
						<li>
							<strong>Brand Consistency</strong> - Professional design execution
							reinforces UBS's trusted brand identity and credibility
						</li>
						<li>
							<strong>Universal Accessibility</strong> - WCAG-compliant design
							ensures all clients can effectively navigate and utilize the
							platform
						</li>
					</ul>
				</div>
			),
		},
		{
			title: 'Conclusion',
			content: (
				<div>
					<p>
						As Lead UI Designer on the UBS Financial Advisor Locator redesign, I
						partnered closely with product managers, developers, and business
						stakeholders to turn a complex search experience into a clear,
						location-first journey. Collaborating with UBS's digital platform
						team, we delivered a scalable solution that supports thousands of
						financial advisors - while reinforcing the brand's premium and
						trusted identity.
					</p>

					<div className={`${styles.pageFooter}`}>
						<Link href='cibc' className={`arrowBtn previous`}>
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
						<Link href='feedingsandiego' className={`arrowBtn next`}>
							<div className={`arrowText`}>Next project</div>

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
									Leading design of the UBS Advisor & Branch Locator Experience
								</h1>
								<p className={`mb-3`}>
									UBS required a user-centric solution to help clients discover
									financial advisors and branches efficiently while driving
									meaningful advisor-client connections. As Lead UI Designer, I
									designed a user-friendly, brand-aligned locator that makes it
									easy for clients to find a UBS financial advisor or branch.
								</p>
								<p>
									Starting with comprehensive user research, I refined the
									experience through iterative design sessions and usability
									testing. The outcome prioritized location-based discovery and
									streamlined interactions, ensuring users could easily search,
									filter, and connect with the right financial guidance.
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
