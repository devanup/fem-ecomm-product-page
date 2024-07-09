'use client';

import { useEffect } from 'react';
import Image from 'next/image';

import { ProductImageGallery } from '.';

export const LightBox = ({
	isLightBoxOpen,
	setIsLightBoxOpen,
	currentIndex,
	setCurrentIndex,
}: {
	isLightBoxOpen: boolean;
	setIsLightBoxOpen: (isOpen: boolean) => void;
	currentIndex: number;
	setCurrentIndex: (index: number) => void;
}) => {
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768 && isLightBoxOpen) {
				setIsLightBoxOpen(false);
			}
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [isLightBoxOpen, setIsLightBoxOpen]);

	return (
		<div className='absolute md:flex hidden flex-col items-center justify-center top-0 left-0 right-0 h-full z-20'>
			{/* background overlay */}
			<div
				className='absolute inset-0 bg-black bg-opacity-65'
				onClick={() => setIsLightBoxOpen(false)}
			/>

			<div className='w-auto h-auto flex justify-center items-center relative'>
				<span
					className='absolute -top-10 right-0 z-10 cursor-pointer'
					onClick={() => setIsLightBoxOpen(false)}
				>
					<Image
						src='/images/icon-close.svg'
						alt='close icon'
						width={24}
						height={24}
					/>
				</span>
				<ProductImageGallery
					setIsLightBoxOpen={setIsLightBoxOpen}
					classNames='md:w-[450px] md:h-[450px]'
					clickable={false}
					currentIndex={currentIndex}
					setCurrentIndex={setCurrentIndex}
				/>
			</div>
		</div>
	);
};
