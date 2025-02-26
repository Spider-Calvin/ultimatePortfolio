'use client';
import { useEffect, useState } from 'react';
import './styles.css';
import { motion, useMotionValue } from 'framer-motion';

interface HeroProps {
	setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
	isHovered: boolean;
	className: string;
}

export function HeroActionForeground({ setIsHovered, isHovered, className }: HeroProps) {
	const [actionHovered, setActionHovered] = useState(false);
	const [backAnimation, setBackAnimation] = useState(false);

	console.log(backAnimation ? 'comeback' : Boolean(isHovered && actionHovered) ? 'hover' : 'float');

	return (
		<div
			className={`relative h-[25vw] max-h-[410px] min-h-[340px] w-[25vw] min-w-[340px] max-w-[410px] ${className}`}
			onMouseEnter={() => {
				setIsHovered(true);
				setActionHovered(true);
			}}
			onMouseLeave={() => {
				setActionHovered(false);
				setIsHovered(false);
				setBackAnimation(true);
				setTimeout(() => {
					setBackAnimation(false);
				}, 1000);
			}}>
			{/* Bottom Black */}
			<motion.img
				src='/assets/images/astroid1.png'
				alt='black asteroid'
				className='absolute -bottom-4 -right-5 -z-0 w-36'
				variants={{
					float1: {
						y: [-15, 10, -15],
						x: [0, 20, 0],
						rotate: [0, -20, 0],
						scale: 1,
						transition: {
							duration: 6,
							ease: 'easeInOut',
							repeat: Infinity,
						},
					},
					hover: {
						y: -20,
						x: 80,
						rotate: 20,
						scale: 1.2,
						transition: {
							duration: 1,
							ease: 'easeInOut',
						},
					},
					comeback: {
						y: -15,
						x: 0,
						rotate: 0,
						scale: 1,
						transition: {
							duration: 0.5,
							ease: 'easeInOut',
						},
					},
				}}
				animate={
					backAnimation ? 'comeback' : Boolean(isHovered && actionHovered) ? 'hover' : 'float1'
				}
			/>

			{/* Top White */}
			<motion.img
				src='/assets/images/astroid2.png'
				alt='white asteroid'
				className='absolute -top-24 right-5 w-40'
				variants={{
					float1: {
						y: [-10, -25, -10],
						x: [0, 20, 0],
						rotate: [0, 20, 0],
						scale: 1,
						transition: {
							duration: 6,
							ease: 'easeInOut',
							repeat: Infinity,
						},
					},
					hover: {
						y: -70,
						x: 60,
						rotate: 20,
						scale: 1.2,
						transition: {
							duration: 1,
							ease: 'easeInOut',
						},
					},
					comeback: {
						y: -10,
						x: 0,
						rotate: 0,
						scale: 1,
						transition: {
							duration: 0.5,
							ease: 'easeInOut',
						},
					},
				}}
				animate={
					backAnimation ? 'comeback' : Boolean(isHovered && actionHovered) ? 'hover' : 'float1'
				}
			/>

			{/* Chakli */}
			<motion.img
				src='/assets/images/astroid3.png'
				alt='Chakli'
				className='absolute left-16 top-14 w-24'
				variants={{
					float: {
						y: [0, -10, 10, 0],
						x: [0, -20, 10, 0],
						scale: 1,
						transition: {
							duration: 7,
							ease: 'easeInOut',
							repeat: Infinity,
						},
					},
					hover: {
						y: -30,
						x: -65,
						scale: 1.3,
						transition: {
							duration: 1,
							ease: 'easeInOut',
						},
					},
					comeback: {
						y: 0,
						x: 0,
						scale: 1,
						transition: {
							duration: 0.5,
							ease: 'easeInOut',
						},
					},
				}}
				animate={
					backAnimation ? 'comeback' : Boolean(isHovered && actionHovered) ? 'hover' : 'float'
				}
			/>

			{/* 2 years+ */}
			<motion.img
				src='/assets/images/object1.png'
				alt='2 years'
				className='absolute -left-0 -top-2 w-40'
				variants={{
					float1: {
						y: [-10, -30, -10],
						x: [20, -30, 20],
						scale: 1,
						transition: {
							duration: 6,
							ease: 'easeInOut',
							repeat: Infinity,
						},
					},
					hover: {
						y: -60,
						x: 15,
						scale: 1.4,
						transition: {
							duration: 1,
							ease: 'easeInOut',
						},
					},
					comeback: {
						y: -10,
						x: 20,
						scale: 1,
						transition: {
							duration: 0.5,
							ease: 'easeInOut',
						},
					},
				}}
				animate={
					backAnimation ? 'comeback' : Boolean(isHovered && actionHovered) ? 'hover' : 'float1'
				}
			/>

			{/* 11 PM */}
			<motion.img
				src='/assets/images/object2.png'
				alt='11 am'
				className='absolute bottom-48 right-14 w-20'
				variants={{
					float: {
						y: [-10, 10, -10],
						x: [0, 10, 0],
						scale: 1,
						transition: {
							duration: 5,
							ease: 'easeInOut',
							repeat: Infinity,
						},
					},
					hover: {
						y: 0,
						x: 70,
						scale: 1.2,
						transition: {
							duration: 1,
							ease: 'easeInOut',
						},
					},
					comeback: {
						y: -10,
						x: 0,
						scale: 1,
						transition: {
							duration: 0.5,
							ease: 'easeInOut',
						},
					},
				}}
				animate={
					backAnimation ? 'comeback' : Boolean(isHovered && actionHovered) ? 'hover' : 'float'
				}
			/>

			{/* SPIDER */}
			<motion.img
				src='/assets/images/object3.png'
				alt='SPIDER'
				className='absolute bottom-28 left-12 w-36'
				variants={{
					float: {
						y: [0, -20, 0],
						x: [0, -20, 0],
						scale: 1,
						transition: {
							duration: 5,
							ease: 'easeInOut',
							repeat: Infinity,
						},
					},
					hover: {
						y: -10,
						x: -60,
						scale: 1.1,
						transition: {
							duration: 1,
							ease: 'easeInOut',
						},
					},
					comeback: {
						y: 0,
						x: 0,
						scale: 1,
						transition: {
							duration: 0.5,
							ease: 'easeInOut',
						},
					},
				}}
				animate={
					backAnimation ? 'comeback' : Boolean(isHovered && actionHovered) ? 'hover' : 'float'
				}
			/>

			{/* 404 Not found */}
			<motion.img
				src='/assets/images/object4.png'
				alt='404 Not found'
				className='absolute -right-10 top-24 w-20'
				variants={{
					float: {
						y: [0, -25, 0],
						x: [0, -25, 0],
						scale: 1,
						transition: {
							duration: 7,
							ease: 'easeInOut',
							repeat: Infinity,
						},
					},
					hover: {
						y: -40,
						x: 10,
						scale: 1.2,
						transition: {
							duration: 1,
							ease: 'easeInOut',
						},
					},
					comeback: {
						y: 0,
						x: 0,
						scale: 1,
						transition: {
							duration: 0.5,
							ease: 'easeInOut',
						},
					},
				}}
				animate={
					backAnimation ? 'comeback' : Boolean(isHovered && actionHovered) ? 'hover' : 'float'
				}
			/>

			{/* SQL query */}
			<motion.img
				src='/assets/images/object5.png'
				alt='sql query'
				className='absolute bottom-9 left-0 w-32'
				variants={{
					float: {
						y: [-10, 10, -10],
						x: [0, 30, 0],
						scale: 1,
						transition: {
							duration: 4,
							ease: 'easeInOut',
							repeat: Infinity,
						},
					},
					hover: {
						y: 10,
						x: -20,
						scale: 1.6,
						transition: {
							duration: 1,
							ease: 'easeInOut',
						},
					},
					comeback: {
						y: -10,
						x: 0,
						scale: 1,
						transition: {
							duration: 0.5,
							ease: 'easeInOut',
						},
					},
				}}
				animate={
					backAnimation ? 'comeback' : Boolean(isHovered && actionHovered) ? 'hover' : 'float'
				}
			/>
		</div>
	);
}

interface HeroBackgroundProps {
	isHovered: boolean;
	className: string;
}

export function HeroActionBackground({ isHovered, className }: HeroBackgroundProps) {
	return (
		<div
			className={`relative h-[25vw] max-h-[410px] min-h-[340px] w-[25vw] min-w-[340px] max-w-[410px] ${className}`}>
			<img
				src='/assets/images/man.png'
				alt=''
				className='absolute bottom-6 left-8 h-[25vw] w-[25vw]'
			/>
		</div>
	);
}
