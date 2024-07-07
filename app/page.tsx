'use client';

import { useState } from 'react';

import { Header, ProductDetails, ProductImageGallery } from './ui';

import { productData } from '@/lib/productData';
import { ProductDetails as ProductDetailsType } from '@/lib/types';
import { CartItem } from '@/lib/types';

export default function Home() {
	const { brand, name, price, salePercentage, description } =
		productData.details;
	const salePrice = (price * (1 - salePercentage / 100)).toFixed(2);
	const productDetails: ProductDetailsType = {
		brand,
		name,
		price,
		salePercentage,
		description,
	};
	const [selectedQuantity, setSelectedQuantity] = useState(0);
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	const handleAddToCart = () => {
		setCartItems((prevItems) => [
			...prevItems,
			{
				...productDetails,
				salePrice,
				quantity: selectedQuantity,
			},
		]);
		setSelectedQuantity(0); // Reset quantity after adding to cart
	};

	return (
		<main className='lg:max-w-[75%] xl:max-w-[1200px] md:w-[85%] mx-auto'>
			<Header cartItems={cartItems} />

			<div className='w-full md:p-10 p-0 flex flex-col items-center md:flex-row md:space-x-16 md:mt-10 mt-0'>
				<div className='w-full md:w-1/2'>
					<ProductImageGallery />
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
		</main>
	);
}
