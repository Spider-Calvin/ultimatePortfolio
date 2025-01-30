'use client';
import './styles.css';

interface HeroProps {
	setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
}

export function HeroActionForeground({ setIsHovered }: HeroProps) {
	return (
		<div className='relative h-[25vw] min-h-[340px] w-[25vw] min-w-[340px]'>
			{/* Bottom Black */}
			<img
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				src='/assets/images/astroid1.png'
				alt=''
				className='float-animation-1 absolute -bottom-4 -right-5 -z-0 w-36 transition-transform duration-300 hover:scale-105'
			/>

			{/* Top White */}
			<img
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				src='/assets/images/astroid2.png'
				alt=''
				className='float-animation-2 absolute -top-24 right-5 w-40 transition-transform duration-300 hover:scale-105'
			/>

			{/* Chakli */}
			<img
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				src='/assets/images/astroid3.png'
				alt=''
				className='float-animation-3 absolute left-16 top-20 w-24 transition-transform duration-300 hover:scale-105'
			/>

			{/* 2 years+ */}
			<img
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				src='/assets/images/object1.png'
				alt=''
				className='float-animation-2 absolute -left-0 -top-2 w-40 transition-transform duration-300 hover:scale-105'
			/>

			{/* 11 PM */}
			<img
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				src='/assets/images/object2.png'
				alt=''
				className='float-animation-1 absolute bottom-44 right-5 w-20 transition-transform duration-300 hover:scale-105'
			/>

			{/* SPIDER */}
			<img
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				src='/assets/images/object3.png'
				alt=''
				className='float-animation-3 absolute bottom-28 left-12 w-36 transition-transform duration-300 hover:scale-105'
			/>

			{/* 404 Not found */}
			<img
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				src='/assets/images/object4.png'
				alt=''
				className='float-animation-2 absolute -right-10 top-24 w-20 transition-transform duration-300 hover:scale-105'
			/>

			{/* SQL query */}
			<img
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				src='/assets/images/object5.png'
				alt=''
				className='float-animation-1 absolute bottom-9 left-0 w-32 transition-transform duration-300 hover:scale-105'
			/>

			{/* Man */}
			<img
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				src='/assets/images/man.png'
				alt=''
				className='absolute bottom-5 left-10 h-[25vw] w-[25vw] opacity-0 transition-transform duration-300 hover:scale-105'
			/>
		</div>
	);
}

export function HeroActionBackground() {
	return (
		<div className='relative h-[25vw] min-h-[340px] w-[25vw] min-w-[340px]'>
			{/* Bottom Black */}
			<img
				src='/assets/images/astroid1.png'
				alt=''
				className='absolute -bottom-4 -right-5 -z-0 w-36'
			/>
			{/* Top White */}
			<img src='/assets/images/astroid2.png' alt='' className='absolute -top-24 right-5 w-40' />
			{/* Chakli */}
			<img src='/assets/images/astroid3.png' alt='' className='absolute left-16 top-20 w-24' />
			{/* 2 years+ */}
			<img src='/assets/images/object1.png' alt='' className='absolute -left-0 -top-2 w-40' />
			{/* 11 PM */}
			<img src='/assets/images/object2.png' alt='' className='absolute bottom-44 right-5 w-20' />
			{/* SPIDER */}
			<img src='/assets/images/object3.png' alt='' className='absolute bottom-28 left-12 w-36' />
			{/* 404 Not found */}
			<img src='/assets/images/object4.png' alt='' className='absolute -right-10 top-24 w-20' />
			{/* SQL query */}
			<img src='/assets/images/object5.png' alt='' className='absolute bottom-9 left-0 w-32' />
			<img
				src='/assets/images/man.png'
				alt=''
				className='absolute bottom-5 left-10 h-[25vw] w-[25vw]'
			/>
		</div>
	);
}
