import localFont from 'next/font/local';
import './globals.css';

const k2d = localFont({
	src: [
		{
			path: './fonts/K2D-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/K2D-Medium.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: './fonts/K2D-SemiBold.ttf',
			weight: '600',
			style: 'normal',
		},
		{
			path: './fonts/K2D-Bold.ttf',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--font-k2d',
});

const kanit = localFont({
	src: [
		{
			path: './fonts/Kanit-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/Kanit-Medium.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: './fonts/Kanit-SemiBold.ttf',
			weight: '600',
			style: 'normal',
		},
		{
			path: './fonts/Kanit-Bold.ttf',
			weight: '800',
			style: 'normal',
		},
	],
	variable: '--font-kanit',
});

const tangelo = localFont({
	src: [
		{
			path: './fonts/Tangelo.ttf',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-tangelo',
});

const peach = localFont({
	src: [
		{
			path: './fonts/Peach.ttf',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-peach',
});

export const metadata = {
	title: 'Thao Nguyen',
	description:
		'Thao Nguyen - UI Designer and Developer specializing in scalable design systems and accessible web experiences. 5+ years creating user-centric solutions for financial services including TD, CIBC, and UBS. Expert in WCAG 2.2 compliance, responsive development, and cross-functional leadership.',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en' class='dark'>
			<body
				className={` ${k2d.variable} ${kanit.variable} ${tangelo.variable} ${peach.variable}`}
			>
				{children}
			</body>
		</html>
	);
}
