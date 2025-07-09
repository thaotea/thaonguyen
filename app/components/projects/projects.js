'use client';

import styles from './projects.module.css';
import Image from 'next/image';
import thumbnailTd from '../../img/thumbnail-td.png';
import thumbnailUbs from '../../img/thumbnail-ubs.png';
import thumbnailCibc from '../../img/thumbnail-cibc.png';
import thumbnailFsd from '../../img/thumbnail-fsd.png';
import thumbnailSs from '../../img/thumbnail-ss.png';

import { cn } from '../../lib/utils';
import Link from 'next/link';

export default function Projects() {
	return (
		<div>
			<section className={`${styles.project} ${styles.td}`}>
				<div className={styles.titleDiv}>
					<div>
						<h2 className={`title {styles.title}`}>
							Leading design and front-end development for TD's Financial
							Advisor Websites
						</h2>
						<p className={styles.description}>
							I crafted a scalable design system and helped deliver a cohesive,
							accessible experience across hundreds of advisor sites - each
							aligned with TD's brand.
						</p>
					</div>
					<Link href='td' className={`arrowBtn`}>
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
						<div className={`arrowText`}>View project</div>
					</Link>
				</div>
				<div className={`${styles.imgWrap}`}>
					<Image className={`${styles.img}`} src={thumbnailTd} alt='' />
				</div>
			</section>
			<section className={`${styles.project} ${styles.cibc}`}>
				<div className={styles.titleDiv}>
					<div>
						<h2 className={`title {styles.title}`}>
							Leading design and front-end development of the CIBC Advisor &
							Branch Locator Experience
						</h2>
						<p className={styles.description}>
							I crafted a brand-aligned locator that helps users easily search,
							filter, and connect with the right CIBC financial advisor or
							branch.
						</p>
					</div>
					<Link href='cibc' className={`arrowBtn`}>
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
						<div className={`arrowText`}>View project</div>
					</Link>
				</div>
				<div className={`${styles.imgWrap}`}>
					<Image className={`${styles.img}`} src={thumbnailCibc} alt='' />
				</div>
			</section>
			<section className={`${styles.project} ${styles.ubs}`}>
				<div className={styles.titleDiv}>
					<div>
						<h2 className={`title {styles.title}`}>
							Leading design of the UBS Advisor & Branch Locator Experience
						</h2>
						<p className={styles.description}>
							I designed a user-friendly, brand-aligned locator that makes it
							easy for clients to find a UBS financial advisor or branch.
						</p>
					</div>
					<Link href='ubs' className={`arrowBtn`}>
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
						<div className={`arrowText`}>View project</div>
					</Link>
				</div>
				<div className={`${styles.imgWrap}`}>
					<Image className={`${styles.img}`} src={thumbnailUbs} alt='' />
				</div>
			</section>

			<section className={`${styles.project} ${styles.fsd}`}>
				<div className={styles.titleDiv}>
					<div>
						<h2 className={`title {styles.title}`}>
							Designing a clear infographic for identifying bad tomatoes
						</h2>
						<p className={styles.description}>
							Crafted through UX research and field observations, this
							infographic helps food sorting teams quickly identify bad
							tomatoes.
						</p>
					</div>
					<Link href='feedingsandiego' className={`arrowBtn`}>
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
						<div className={`arrowText`}>View project</div>
					</Link>
				</div>
				<div className={`${styles.imgWrap}`}>
					<Image className={`${styles.img}`} src={thumbnailFsd} alt='' />
				</div>
			</section>
		</div>
	);
}
