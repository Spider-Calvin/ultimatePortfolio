import './App.css';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { HeroBackground, HeroForeground } from '@/sections/Hero';
import MainWrapper from '@/hoc/main';

interface AppProps {
	isHovered: boolean;
	setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
	x: number;
	y: number;
	size: number;
}

function App({ isHovered, setIsHovered, x, y, size }: AppProps) {
	// Create refs for both scrollable elements
	const maskRef = useRef<HTMLDivElement>(null);
	const bodyRef = useRef<HTMLDivElement>(null);

	// Sync the scroll between both components (optional if you still want scroll sync)
	const syncScroll = (
		source: React.RefObject<HTMLDivElement>,
		target: React.RefObject<HTMLDivElement>,
	) => {
		if (target.current && source.current) {
			target.current.scrollTop = source.current.scrollTop;
			console.log('target.current.scrollTop', target.current.scrollTop);
		}
	};

	return (
		<main className='main'>
			<motion.div
				className='mask pointer-events-none' // Disabling pointer events on the mask
				animate={{
					WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
					WebkitMaskSize: `${size}px`,
				}}
				transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}>
				<div className='h-screen w-screen overflow-y-scroll' ref={maskRef}>
					<HeroBackground isHovered={isHovered} />

					<div className='h-screen'>
						<p className='font-bold'>
							A visual designer - with skills that haven't been replaced by A.I (yet) - making good
							shit only if the paycheck is equally good.
						</p>
					</div>
				</div>
			</motion.div>

			{/* Body handles all the interactions */}
			<div className='body'>
				<div
					className='noBar h-screen w-screen overflow-y-scroll'
					ref={bodyRef}
					onScroll={() => syncScroll(bodyRef, maskRef)} // Optional scroll syncing
				>
					<HeroForeground setIsHovered={setIsHovered} isHovered={isHovered} />
					<div className='h-screen'>
						<p
							className='font-bold'
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}>
							I’m a <span>selectively skilled</span> product designer with a strong focus on
							producing high-quality & impactful digital experiences.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}

export default MainWrapper(App);
