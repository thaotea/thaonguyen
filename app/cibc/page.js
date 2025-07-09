'use client';

import styles from './page.module.css';
import Header from '../components/header/header';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import websiteHero1 from '../img/cibc-website-hero-1.png';
import websiteHero2 from '../img/cibc-website-hero-2.png';
import website1 from '../img/cibc-website-1.png';
import website2 from '../img/cibc-website-2.png';
import website2b from '../img/cibc-website-2b.png';

import website3 from '../img/cibc-website-3.png';
import website4 from '../img/cibc-website-4.png';
import website5 from '../img/cibc-website-5.png';

import websiteBefore1 from '../img/td-website-before-1.png';
import websiteAfter1 from '../img/td-website-after-1.png';
import websiteComponent1 from '../img/td-website-component-1.png';
import websiteComponent2 from '../img/td-website-component-2.png';
import websiteComponent3 from '../img/td-website-component-3.png';
import websiteComponent4 from '../img/td-website-component-4.png';
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
				'Each advisor page included name, quote, bio, and contact CTA, but background imagery made content harder to read.',
			name: 'Individual Intro',
			designation: 'Before',
			src: websiteBefore1,
		},
		{
			quote:
				'I improved readability by removing background images and simplifying the layout. Key info including CTA, contact details, and bio is now clearly structured and easier to navigate.',
			name: 'Individual Intro',
			designation: 'After',
			src: websiteAfter1,
		},
	];

	const components = [
		{
			quote:
				'Visually compelling headers that introduce page content while directing users to key actions through strategic CTAs and value-focused messaging. ',
			name: 'Hero Banners',
			designation: '',
			src: websiteComponent1,
		},
		{
			quote:
				'Streamlined contact forms designed for quick advisor outreach, minimizing fields while maximizing conversion potential. ',
			name: 'Contact Forms',
			designation: '',
			src: tdWebsiteVideo,
		},
		{
			quote:
				'Interactive modals featuring advisor bios, credentials, and contact options. ',
			name: 'Team Profiles',
			designation: '',
			src: websiteComponent2,
		},
		{
			quote:
				'Flexible modules that adapt messaging for both corporate and individual advisor content.',
			name: 'Highlights',
			designation: '',
			src: websiteComponent3,
		},
		{
			quote:
				'Curated display of upcoming webinars and workshops with clear registration prompts.',
			name: 'Events',
			designation: '',
			src: websiteComponent4,
		},
		{
			quote:
				'Dynamic blog with search and filtering to help clients find relevant articles.',
			name: 'Blog',
			designation: '',
			src: websiteComponent5,
		},
	];

	const data = [
		{
			title: 'Problem statement',
			content: (
				<div>
					<p className='title'>
						Redesigning the CIBC Advisor & Branch Locator Experience
					</p>
					<p className='mb-3'>
						CIBC's previous advisor and branch locator created friction for
						users, with limited search capabilities, accessibility gaps, and
						inconsistent branding. To address these challenges, the redesigned
						experience focused on clarity and usability. The new experience had
						to solve:{' '}
					</p>
					<ul className='list-disc pl-4'>
						<li className='mb-1'>
							Fragmented search experience - Enhance overall{' '}
							<strong className='text-gradient'>search usability</strong> to
							deliver relevant results
						</li>
						<li className='mb-1'>
							Brand inconsistency - Stay true to CIBC's{' '}
							<strong className='text-gradient'>brand identity</strong> to
							reinforce trust and familiarity
						</li>
						<li className='mb-1'>
							Unclear pathways - Provide{' '}
							<strong className='text-gradient'>clear calls-to-action</strong>{' '}
							to guide users toward meaningful engagement
						</li>
						<li>
							Accessibility gaps - Deliver a{' '}
							<strong className='text-gradient'>
								seamless, intuitive, and accessible
							</strong>{' '}
							experience across desktop and mobile
						</li>
					</ul>
				</div>
			),
		},
		{
			title: 'User Analysis',
			content: (
				<div>
					<p className='title'>
						Understanding the Path to Financial Connection
					</p>
					<p className='mb-3'>
						I identified two distinct user journeys that required different but
						complementary solutions:
					</p>
					<p className='mb-3'>
						<strong>Targeted Advisor Search:</strong> Users who knew specific
						advisor names needed quick, direct access to comprehensive
						professional profiles, credentials, and contact information.
					</p>
					<p>
						<strong>Location-Based Discovery:</strong> Users exploring financial
						services in their area required filtering capabilities, geographical
						context through interactive mapping, and clear branch information to
						make informed decisions.
					</p>
				</div>
			),
		},
		{
			title: 'Development Solution',
			content: (
				<div>
					<div className='mb-8'>
						<h3 class='title'>Easy and efficient search</h3>

						<p>
							I designed two clear inputs, name and location, to support
							distinct user intents and reduce friction during search. I removed
							the “search by” selector since CIBC's internal business lines
							already added complexity to the search experience. To streamline
							interaction, I implemented autofill in both fields, allowing users
							to search quickly, even with partial information. This simplified
							approach led to faster advisor selection in user testing and made
							the overall experience more intuitive and efficient.
						</p>
					</div>
					<figure className='mb-20'>
						<Image
							src={website1}
							alt=''
							width={500}
							className=' rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
						/>
						<figcaption className='mt-4 text-center'>
							Main search page with search by name and/or location inputs
						</figcaption>
					</figure>
					<div className='mb-8'>
						<h3 class='title'>Connecting with the right person</h3>
						<p class='mb-3'>
							The experience includes interactive Google Maps integration,
							giving users immediate location context for every result. Users
							can filter by language, explore advisor cards with essential info
							and clear CTAs. Clicking map pins to quickly narrow results by
							location - all designed to streamline the path to the right
							advisor.
						</p>
						<ul className='list-disc pl-4'>
							<li>
								Searching by name displays advisor cards with CTAs linking
								directly to their website or bio modal.
							</li>
							<li>
								Searching by location shows branch cards with CTAs that reveal
								advisors available at each branch.
							</li>
						</ul>
					</div>
					<figure className='mb-8'>
						<Image
							src={website2}
							alt=''
							width={500}
							className=' rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
						/>
						<figcaption className='mt-4 text-center'>
							Search results page header displaying input fields values and
							language filter
						</figcaption>
					</figure>
					<figure className='mb-8'>
						<Image
							src={website2b}
							alt=''
							width={500}
							className=' rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
						/>
						<figcaption className='mt-4 text-center'>
							<strong>Search name results for “Alex”</strong>
							<br /> Advisor cards include CTAs for more information and contact
							details, supported by an interactive Google Map for location
							context.
						</figcaption>
					</figure>
					<figure className='mb-8'>
						<Image
							src={website3}
							alt=''
							width={500}
							className=' rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
						/>
						<figcaption className='mt-4 text-center'>
							<strong>Search location results page for "Toronto, ON"</strong>
							<br />
							Branch cards include CTAs for more information, website, and
							contact details, supported by an interactive Google Map for
							location context.
						</figcaption>
					</figure>
					<figure className='mb-8'>
						<Image
							src={website4}
							alt=''
							width={500}
							className=' rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
						/>
						<figcaption className='mt-4 text-center'>
							Branch information page for Toronto, ON Branch
						</figcaption>
					</figure>
					<figure className='mb-20'>
						<Image
							src={website5}
							alt=''
							width={500}
							className=' rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
						/>
						<figcaption className='mt-4 text-center'>
							Advisor bio modal with contact information, bio, and office
							locations
						</figcaption>
					</figure>

					<div className='mb-24'>
						<h3 class='title'>Brand Consistency</h3>
						<p>
							To maintain alignment with CIBC's brand identity, I held weekly
							meetings with the design team to gather feedback and refine the
							interface. This collaborative approach ensured the experience
							fostered user trust, reinforced brand familiarity, and supported
							strategic goals.
						</p>
					</div>

					<div className=''>
						<h3 class='title'>Implementation Features</h3>
						<p className='mb-3'>
							I executed the technical development with focus on performance,
							accessibility, and seamless integration.
						</p>
						<ul className='list-disc pl-4'>
							<li className='mb-1'>
								<strong>Responsive Architecture</strong> - Developed fully
								responsive interfaces and consistent functionality across all
								devices
							</li>
							<li className='mb-1'>
								<strong>Functionality</strong> - Utilized dummy JSON data to
								enable comprehensive front-end testing and validation before
								backend integration
							</li>
							<li className='mb-1'>
								<strong>Accessibility Standards</strong> - Adhered to WCAG 2.2
								AA standards, ensuring keyboard navigation and screen reader
								compatibility
							</li>
							<li>
								<strong>Cross-Team Collaboration</strong> - Coordinated with
								backend developers to ensure quality assurance throughout
								implementation
							</li>
						</ul>
					</div>
				</div>
			),
		},
		{
			title: 'Results & Impact',
			content: (
				<div>
					<p className='title'>
						Redesigning the CIBC Advisor & Branch Locator Experience
					</p>
					<p className='mb-3'>
						The redesigned platform delivers measurable business value by
						streamlining client connections and reinforcing CIBC's digital
						presence.
					</p>
					<ul className='list-disc pl-4'>
						<li className='mb-1'>
							<strong>Enhanced User Engagement</strong> - Clear and
							comprehensive information architecture drive higher connection
							rates between clients and advisors
						</li>
						<li className='mb-1'>
							<strong>Improved Search Efficiency </strong>- Dual-search
							functionality and intelligent filtering reduce user friction and
							time to connect with the right advisor
						</li>
						<li>
							<strong>Strengthened Brand Trust</strong> - Consistent brand
							integration and professional presentation reinforce CIBC's market
							position
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
						As both UI Designer and Developer, I led the creation of an
						intuitive, accessible advisor and branch locator that serves
						hundreds of users monthly. By focusing on clarity and seamless
						interaction, the platform empowers users to make confident decisions
						and fosters lasting trust in the brand.
					</p>

					<div className={`${styles.pageFooter}`}>
						<Link href='td' className={`arrowBtn previous`}>
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
							<div className={`arrowText`}>Previous project</div>
						</Link>
						<Link href='ubs' className={`arrowBtn next`}>
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
										stroke-width='8'
										stroke-miterlimit='10'
										stroke-linecap='round'
										stroke-linejoin='round'
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
									Leading design and front-end development for CIBC's Advisor &
									Branch Locator
								</h1>
								<p>
									CIBC needed a user-centric solution to help clients find
									advisors and branches with ease. As UI Designer and Developer,
									I redesigned their locator experience to directly address user
									needs and stakeholder goals.
									<br /> <br />
									Beginning with a working prototype, I refined the experience
									through iterative feedback sessions and usability testing. The
									outcome focused on accessibility and user empathy, ensuring
									users could easily search, filter, and connect with
									confidence.
								</p>
							</div>
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
