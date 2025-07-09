'use client';

import styles from './about.module.scss';
import Image from 'next/image';
import thao from '../../img/thao.png';
import thaoGif from '../../img/thao.gif';
import { cn } from '../../lib/utils';

export default function About() {
	return (
		<div className={styles.about}>
			<div className={styles.aboutImage}>
				<div className='max-w-xs w-full'>
					<div
						className={cn(
							'group w-full  overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4  dark:border-neutral-800',
							'bg-[url(img/thao.png)] bg-cover',
							// Preload hover image by setting it in a pseudo-element
							'before:bg-[url(img/thao.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]',
							'hover:bg-[url(img/thao.gif)]',
							"hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
							'transition-all duration-500'
						)}
					>
						{/* <div className='text relative z-50'>
						<h1 className='font-bold text-xl md:text-3xl text-gray-50 relative'>
							Background Overlays
						</h1>
						<p className='font-normal text-base text-gray-50 relative my-4'>
							This card is for some special elements, like displaying background
							gifs on hover only.
						</p>
					</div> */}
					</div>
				</div>
			</div>
			<div className={styles.aboutText}>
				<h2 className={styles.aboutTitle}>About Me</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
					tristique velit ut condimentum vestibulum. Aenean tristique, nulla
					eget venenatis luctus, enim ipsum feugiat ligula, et ullamcorper urna
					turpis sed ligula. Cras laoreet ultricies dolor at rutrum.
				</p>
			</div>
		</div>
	);
}
