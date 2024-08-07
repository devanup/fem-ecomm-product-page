'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

import { productData } from '@/lib/productData';
import clsx from 'clsx';

export const ProductImageGallery = ({
	setIsLightBoxOpen,
	classNames,
	clickable,
	currentIndex,
	setCurrentIndex,
}: {
	setIsLightBoxOpen: (isOpen: boolean) => void;
	classNames?: string;
	clickable?: boolean;
	currentIndex: number;
	setCurrentIndex: (index: number) => void;
}) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);

	useEffect(() => {
		setCurrentImageIndex(currentIndex);
	}, [currentIndex]);

	const handlePrevClick = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === 0 ? productData.images.length - 1 : prevIndex - 1,
		);
		setCurrentIndex(
			currentImageIndex === 0
				? productData.images.length - 1
				: currentImageIndex - 1,
		);
	};

	const handleNextClick = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === productData.images.length - 1 ? 0 : prevIndex + 1,
		);
		setCurrentIndex(
			currentImageIndex === productData.images.length - 1
				? 0
				: currentImageIndex + 1,
		);
	};

	return (
		<>
			<div className='flex flex-col items-center space-y-6'>
				{/* Main Product Image */}
				<div
					className={clsx(
						`md:w-96 w-full h-96 bg-gray-300 md:rounded-lg rounded-none relative ${
							clickable ? 'cursor-pointer' : ''
						}`,
						classNames,
					)}
					onClick={() => clickable && setIsLightBoxOpen(true)}
				>
					<Image
						src={productData.images[currentImageIndex].productSrc}
						alt={productData.images[currentImageIndex].alt}
						layout='fill'
						objectFit='cover'
						className='md:rounded-lg rounded-none'
					/>
					<div className='w-full h-14 flex justify-between absolute top-1/2 transform -translate-y-1/2 px-4 md:hidden'>
						<div
							className='w-10 h-10 bg-white flex items-center justify-center rounded-full cursor-pointer'
							onClick={handlePrevClick}
						>
							<Image
								src='/images/icon-previous.svg'
								alt='left arrow'
								width={12}
								height={12}
							/>
						</div>
						<div
							className='w-10 h-10 bg-white flex items-center justify-center rounded-full cursor-pointer'
							onClick={handleNextClick}
						>
							<Image
								src='/images/icon-next.svg'
								alt='right arrow'
								width={12}
								height={12}
							/>
						</div>
					</div>
				</div>

				{/* Thumbnails */}
				<div className='space-x-4 hidden md:flex'>
					{productData.images.map((image, index) => (
						<div
							key={index}
							className={`w-20 h-20 rounded-md relative cursor-pointer hover:opacity-50 transition duration-100 ease-in ${
								currentImageIndex === index
									? 'border-2 border-primary-orange'
									: 'border-2 border-transparent'
							}`}
							onClick={() => {
								setCurrentImageIndex(index);
								setCurrentIndex(index);
							}}
						>
							<Image
								src={image.thumbnailSrc}
								alt={image.alt}
								layout='fill'
								objectFit='cover'
								className={`rounded ${
									currentImageIndex === index ? 'opacity-50' : ''
								}`}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
