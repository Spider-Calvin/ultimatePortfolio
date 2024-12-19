import { useEffect, useState } from 'react';
import useMousePosition from '@/hooks/useMousePosition';

interface MainWrapperProps {
	isHovered: boolean;
	setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
	x: number;
	y: number;
	size: number;
}

const MainWrapper = (Component: React.ComponentType<MainWrapperProps>) =>
	function HOC() {
		const [isHovered, setIsHovered] = useState(false);
		const [hideMask, setHideMask] = useState(false);
		const [size, setSize] = useState(40);
		const { x, y } = useMousePosition();

		useEffect(() => {
			if (hideMask) {
				setSize(0);
			} else if (isHovered) {
				setSize(400);
			} else {
				setSize(40);
			}
		}, [isHovered, hideMask]);

		return (
			<div className='relative h-screen'>
				<Component isHovered={isHovered} setIsHovered={setIsHovered} x={x} y={y} size={size} />
				<div className='absolute bottom-0 h-screen w-44 p-6'>
					<div className='mt-14 w-2'>
						<div
							className='button h-8 -rotate-90 leading-8'
							onMouseEnter={() => setHideMask(true)}
							onMouseLeave={() => setHideMask(false)}>
							<span className='label-up cursor-pointer text-2xl tracking-widest text-stone-800'>
								CALVIN
							</span>
							<span className='label-up cursor-pointer text-2xl tracking-widest text-orange-700'>
								CALVIN
							</span>
						</div>
					</div>
				</div>
				<div className='absolute bottom-0 right-0 h-screen w-44'>
					<div
						className='mt-5 flex flex-col gap-y-2 p-6'
						onMouseEnter={() => setHideMask(true)}
						onMouseLeave={() => setHideMask(false)}>
						<div className='button h-4 leading-4'>
							<span className='label-up cursor-pointer text-sm text-stone-500'>ABOUT</span>
							<span className='label-up cursor-pointer text-sm text-stone-800'>ABOUT</span>
						</div>
						<div className='button h-4 leading-4'>
							<span className='label-up cursor-pointer text-sm text-stone-500'>WORK</span>
							<span className='label-up cursor-pointer text-sm text-stone-800'>WORK</span>
						</div>
						<div className='button h-4 leading-4'>
							<span className='label-up cursor-pointer text-sm text-stone-500'>TESTIMONIAL</span>
							<span className='label-up cursor-pointer text-sm text-stone-800'>TESTIMONIAL</span>
						</div>
						<div className='button h-4 leading-4'>
							<span className='label-up cursor-pointer text-sm text-stone-500'>CONTACT</span>
							<span className='label-up cursor-pointer text-sm text-stone-800'>CONTACT</span>
						</div>
					</div>
				</div>
			</div>
		);
	};

export default MainWrapper;
