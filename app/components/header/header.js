import styles from './header.module.scss';
import Image from 'next/image';
import logo from '../../img/thao.svg';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Header() {
	const [toggler, setToggler] = useState(false); // To handle open/close of the toggler
	const [collapsed, setCollapsed] = useState(true);
	const [fadingOut, setFadingOut] = useState(false);

	const [navHeight, setNavHeight] = useState(0); // Initial state
	const headerRef = useRef(null); // Reference to the header element

	const links = [
		{ text: 'Projects', href: './#projects' },
		{ text: 'About', href: '/about' },
		{ text: 'Resume', href: '/Thao-Nguyen-Resume.pdf', target: '_blank' },
		{ text: 'Email', href: 'mailto:thaotnguyen910@gmail.com' },
		{
			text: 'Connect',
			href: 'https://www.linkedin.com/in/thao-nguyen-04bab313b/',
			target: '_blank',
		},
	];

	const handleClick = () => {
		setToggler((prevToggler) => {
			if (prevToggler) {
				setFadingOut(true);
				setTimeout(() => {
					setCollapsed(true);
					setFadingOut(false);
				}, 500);
			} else {
				setCollapsed(false);
			}

			return !prevToggler;
		});
	};

	const updateNavHeight = () => {
		if (headerRef.current) {
			const headerHeight = headerRef.current.offsetHeight;
			setNavHeight(headerHeight); // Set the navHeight state
			document.documentElement.style.setProperty(
				'--nav-height',
				`${headerHeight}px`
			); // Update the CSS variable
		}
	};

	useEffect(() => {
		// Initial update
		updateNavHeight();

		// Optionally: Update on window resize if the header size can change
		window.addEventListener('resize', updateNavHeight);

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener('resize', updateNavHeight);
		};
	}, []); // Empty array ensures this effect runs only on mount and unmount

	//<div className={styles.verticalLine}></div>

	return (
		<header className={styles.header} ref={headerRef}>
			<div className={styles.navbar}>
				<Link href='./'>
					<p className={styles.name}>thao nguyen</p>
				</Link>
				<button
					className={`${styles.toggler} ${toggler ? styles.open : ''}`}
					type='button'
					aria-controls='navbarNav'
					aria-label='Toggle main navigation'
					aria-expanded={`${toggler ? true : false} `}
					onClick={handleClick}
				>
					<svg
						width='24px'
						height='24px'
						viewBox='0 0 48 48'
						version='1.1'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g>
							<line x1='0' y1='12' x2='48' y2='12' strokeWidth='4' />
							<line x1='0' y1='36' x2='48' y2='36' strokeWidth='4' />
						</g>

						<g>
							<line x1='0' y1='24' x2='48' y2='24' strokeWidth='4' />
							<line x1='0' y1='24' x2='48' y2='24' strokeWidth='4' />
						</g>
					</svg>
				</button>
			</div>

			<div
				className={`${styles.navbarCollapse} ${collapsed ? styles.hide : ''} ${
					fadingOut ? styles.fadingOut : ''
				}`}
				id='navbarNav'
				tabIndex='-1'
				role='dialog'
				aria-modal='true'
			>
				<nav>
					<ul className={styles.navbarNav}>
						{links.map((link, index) => (
							<li className={styles.navItem} key={index}>
								<a
									className={styles.navLink}
									href={link.href}
									target={link.target}
									onClick={(e) => {
										if (link.href === '/#projects') {
											e.preventDefault();
											const el = document.getElementById('projects');
											if (el) {
												const y =
													el.getBoundingClientRect().top +
													window.pageYOffset -
													100;
												window.scrollTo({ top: y, behavior: 'smooth' });
											}
										}
										setFadingOut(true);
										setTimeout(() => {
											setCollapsed(true);
											setFadingOut(false);
											setToggler(false);
										}, 500);
									}}
								>
									{link.text.split('').map((char, i) => (
										<span key={i}>{char}</span>
									))}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}
