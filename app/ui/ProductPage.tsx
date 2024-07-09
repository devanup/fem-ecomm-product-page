'use client';
import { useState } from 'react';

import { ProductDetails, ProductImageGallery, LightBox } from '.';

import { ProductDetails as ProductDetailsType } from '@/lib/types';

export const ProductPage = ({
	productDetails,
	salePrice,
	selectedQuantity,
	setSelectedQuantity,
	handleAddToCart,
	isLightBoxOpen,
	setIsLightBoxOpen,
}: {
	productDetails: ProductDetailsType;
	salePrice: string;
	selectedQuantity: number;
	setSelectedQuantity: (quantity: number) => void;
	handleAddToCart: () => void;
	isLightBoxOpen: boolean;
	setIsLightBoxOpen: (isOpen: boolean) => void;
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<div className='w-full md:p-10 p-0 flex flex-col items-center md:flex-row md:space-x-16 md:mt-10 mt-0'>
			<div className='w-full md:w-1/2'>
				<ProductImageGallery
					setIsLightBoxOpen={setIsLightBoxOpen}
					clickable={true}
					currentIndex={currentIndex}
					setCurrentIndex={setCurrentIndex}
				/>
				{isLightBoxOpen && (
					<LightBox
						isLightBoxOpen={isLightBoxOpen}
						setIsLightBoxOpen={setIsLightBoxOpen}
						currentIndex={currentIndex}
						setCurrentIndex={setCurrentIndex}
					/>
				)}
			</div>
			<div className='w-full md:w-1/2'>
				<ProductDetails
					productDetails={productDetails}
					salePrice={salePrice}
					selectedQuantity={selectedQuantity}
					setSelectedQuantity={setSelectedQuantity}
					handleAddToCart={handleAddToCart}
				/>
			</div>
		</div>
	);
};
