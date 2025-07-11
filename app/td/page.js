'use client';

import styles from './page.module.css';
import Header from '../components/header/header';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import websiteHero1 from '../img/td-website-hero-1.png';
import websiteHero2 from '../img/td-website-hero-2.png';
import website1 from '../img/td-website-1.png';
import website2 from '../img/td-website-2.png';
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
				'The original intro sections suffered from poor contrast and competing visual elements. Background imagery made text difficult to read.',
			name: 'Individual Intro',
			designation: 'Before',
			src: websiteBefore1,
		},
		{
			quote:
				'I redesigned this sections with clear visual hierarchy, improved typography, and strategic use of white space. The banner is now complemented by readable text overlays, while prominent contact CTAs drive engagement.',
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
					<p className='title'>Balancing Scale with Personalization</p>
					<p className='mb-3'>
						TD's existing advisor system was constrained by rigid templates that
						failed to communicate advisors' stories. TD needed an accessible,
						flexible, and brand-aligned framework that addressed key pain
						points:{' '}
					</p>
					<ul className='list-disc pl-4'>
						<li className='mb-1'>
							Development bottlenecks -{' '}
							<strong className='text-gradient'>Scale</strong> across unique
							advisor expertise and background to foster meaningful connections
						</li>
						<li className='mb-1'>
							Accessibility gaps - Maintain strict{' '}
							<strong className='text-gradient'>compliance</strong> without
							sacrificing engagement
						</li>
						<li className='mb-1'>
							Brand inconsistency - Reflect their institutional{' '}
							<strong className='text-gradient'>trust</strong> while feeling
							approachable
						</li>
					</ul>
				</div>
			),
		},
		{
			title: 'Key persona',
			content: (
				<div>
					<p className='title '>
						“Every advisor has a unique story and area of expertise, so we
						needed a{' '}
						<strong className='text-gradient'>
							design system that could adapt and grow{' '}
						</strong>
						with us. Something that highlights what makes each advisor stand
						out, while still feeling unmistakably TD.” <br />
					</p>
					<p className='subtitle'>Financial Advisor</p>
				</div>
			),
		},
		{
			title: 'Design Process',
			content: (
				<div>
					<div className='mb-20'>
						<h3 class='title'>Discovery </h3>

						<p>
							I conducted a comprehensive audit of existing advisor sites,
							identifying patterns in both successful elements and common
							failure points while tying in business needs. This research
							revealed that the most effective sites balanced personal
							storytelling with professional expertise, providing clear pathways
							for potential clients to connect.
						</p>
					</div>
					<div className='mb-8'>
						<h3 class='title'>Prototyping</h3>

						<p>
							Using TD's corporate assets as a foundation, I created
							high-fidelity Figma prototypes focusing on modular component
							design. Weekly feedback sessions with TD stakeholders ensured
							alignment across teams while maintaining design integrity.
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
							Figma prototype with client feedback notes
						</figcaption>
					</figure>
					<div className=''>
						<h3 class='title'>Refining Core Components</h3>
						<p>
							I focused on elevating what already worked and utilized the
							strongest elements of TD's existing site while enhancing them to
							be more engaging, accessible, and user-friendly.
						</p>
						<AnimatedTestimonials testimonials={needs} fullWidth='false' />
					</div>
				</div>
			),
		},
		{
			title: 'Development Solution',
			content: (
				<div>
					<div className='mb-8'>
						<h3 class='title'>Scalable, Cohesive, and Conversion-Ready</h3>
						<p>
							Transitioning into front-end development, I built a scalable,
							accessible component library tested across devices and assistive
							tech. Designed to support hundreds of advisor profiles, it ensures
							consistency, faster updates, and intuitive pathways that drive
							engagement while maintaining a cohesive brand experience.
						</p>
						<AnimatedTestimonials testimonials={components} fullWidth='true' />
					</div>
					<div>
						<h3 class='title'>Key Improvements</h3>

						<ul className='list-disc pl-4'>
							<li>
								<strong>Accessibility-First Development </strong>- Fully WCAG
								2.2 AA compliant using semantic HTML, ARIA labels, and clear
								focus states to ensure inclusive experiences for all users.
							</li>
							<li>
								<strong>Keyboard & Screen Reader Support </strong>- Full
								navigation support via keyboard, optimized for JAWS, NVDA, and
								VoiceOver for seamless screen reader interaction.
							</li>
							<li>
								<strong> Cross-Platform Consistency</strong> - Designed and
								tested for consistent performance across Windows, Mac, and all
								major mobile devices and browsers.
							</li>
							<li>
								<strong>Responsive Performance</strong> - Fast-loading,
								responsive layout ensures optimal usability across device types
								and screen sizes.
							</li>
							<li>
								<strong>Enhanced Usability Features</strong> - Skip links,
								strong color contrast, and intuitive focus indicators improve
								navigation for users with varying needs.
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
					<div className='mb-8'>
						<h3 class='title'>Representing the TD brand</h3>
						<p>
							Developed in close partnership with TD's team, this design system
							now serves as TD's foundation for advisor digital presence. The
							scalable architecture supports future growth while maintaining the
							quality and consistency that strengthens TD's market position.
						</p>
					</div>
					<div className='grid mb-20'>
						<Image
							src={website2}
							alt='team website template'
							width={500}
							className='rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
						/>
					</div>
					<div className='mb-20'>
						<h3 class='title'>User and Business Impact </h3>
						<ul className='list-disc pl-4'>
							<li>Faster advisor website setup with streamlined workflows</li>
							<li>
								Longer engagement times through improved UX and content clarity
							</li>
							<li>
								Increased lead generation from professionally branded designs
							</li>
							<li>Full accessibility compliance across all advisor sites</li>
						</ul>
					</div>
					<div className=''>
						<h3 class='title'>Business Outcomes</h3>
						<ul className='list-disc pl-4'>
							<li>500+ advisor websites migrated to the new system</li>
							<li>
								10,000+ monthly visitors engaging with a consistent experience
							</li>
							<li>Zero accessibility-related complaints since launch</li>
							<li>
								Significant reduction in custom development requests and overall
								costs
							</li>
						</ul>
					</div>
				</div>
			),
		},
		{
			title: 'Conclusion',
			content: (
				<div>
					<p>
						As both UI Designer and Developer, I collaborated with TD and
						cross-functional teams to build a scalable, accessible design system
						powering hundreds of advisor websites. This project showcased how
						thoughtful design and development can align business goals with user
						needs, empowering advisors, strengthening client relationships, and
						reinforcing brand trust at scale.
					</p>

					<div className={`${styles.pageFooter}`}>
						<Link href='cibc' className={`arrowBtn next`}>
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
									Leading design and front-end development for TD's Financial
									Advisor Websites
								</h1>
								<p>
									As UI Designer and Developer, I led the complete redesign of
									TD's financial advisor websites to serve over 500 individual
									advisors. The challenge was creating a scalable solution that
									showcases what each advisor at TD brings to the table from
									their expertise to their approach to financial planning while
									staying true to TD's brand.
									<br />
									<br />
									Working closely with cross-functional teams including product
									managers and business stakeholders, I built a comprehensive
									design system that reduced website creation time while
									achieving full WCAG 2.2 AA compliance. The result: a unified
									digital experience that strengthens both individual advisor
									brands and TD's market presence.
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
