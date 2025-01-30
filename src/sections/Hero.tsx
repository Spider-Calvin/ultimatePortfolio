'use client';
import '@/App.css';

interface HeroProps {
	setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
}

const S = {
	title1: `xs:text-[40px] mt-2 text-[30px] font-black sm:text-[50px] lg:text-[70px] lg:leading-[95px]`,
	caption1: `xs:text-[15px] mt-2 text-[12px] font-medium sm:text-[22px] lg:text-[26px] lg:leading-[45px]`,
	div1: `w-[45vw]`,
};

import { HeroActionBackground, HeroActionForeground } from '@/components/HeroAction';

export function HeroForeground({ setIsHovered }: HeroProps) {
	return (
		<section className='flex h-screen w-screen flex-row items-center px-44'>
			<div className='flex items-start gap-5 sm:top-[120px]'>
				<div className='mt-5 flex flex-col items-center justify-center'>
					<div className='h-5 w-5 rounded-full bg-[#4f483f]' />
					<div className='violet-gradient h-40 w-1 sm:h-72' />
				</div>

				<div
					className={S.div1}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}>
					<h1 className={S.title1}>
						Hi, I'm <span className=''>Calvin</span>
					</h1>
					<p className={S.caption1}>
						2 years of Experience in
						<br className='hidden sm:block' />
						<span> FULL STACK DEVELOPMENT</span>
						<br className='hidden sm:block' />
						Building Scalable Web & Mobile Applications
					</p>
				</div>
			</div>
			<HeroActionForeground setIsHovered={setIsHovered} />
		</section>
	);
}

export function HeroBackground() {
	return (
		<section className='flex h-screen w-screen flex-row items-center px-44'>
			<div className='flex items-start gap-5 sm:top-[120px]'>
				<div className='mt-5 flex flex-col items-center justify-center'>
					<div className='h-5 w-5 rounded-full bg-[#4f483f]' />
					<div className='violet-gradient h-40 w-1 sm:h-72' />
				</div>

				<div className={S.div1}>
					<h1 className={S.title1}>
						Hi, I'm <span className=''>Calvin</span>
					</h1>
					<p className={S.caption1}>
						I am Full Stack Mobile
						<br className='hidden sm:block' />
						and Web-Application developer
					</p>
				</div>
			</div>
			<HeroActionBackground />
		</section>
	);
}
