'use client';

import { useState } from 'react';

import { Header, ProductPage } from './ui';

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
	// detect click on main product image
	const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);

	const handleAddToCart = () => {
		setCartItems((prevItems) => [
			...prevItems,
			{
				...productDetails,
				salePrice,
				quantity: selectedQuantity,
			},
		]); // prevItems is the previous state of cartItems. We spread the previous items and add the new item to the end of the array. This new array is then set as the new state.
		setSelectedQuantity(0); // Reset quantity after adding to cart
	};

	const handleRemoveFromCart = (index: number) => {
		setCartItems((prevItems) => prevItems.filter((_, i) => i !== index)); // prevItems.filter((_, i) => i !== index) returns a new array without the item at the specified index. This new array is then set as the new state.
	};
	return (
		<main className='lg:max-w-[75%] xl:max-w-[1200px] md:w-[85%] mx-auto'>
			<Header
				cartItems={cartItems}
				handleRemoveFromCart={handleRemoveFromCart}
			/>

			<ProductPage
				productDetails={productDetails}
				salePrice={salePrice}
				selectedQuantity={selectedQuantity}
				setSelectedQuantity={setSelectedQuantity}
				handleAddToCart={handleAddToCart}
				isLightBoxOpen={isLightBoxOpen}
				setIsLightBoxOpen={setIsLightBoxOpen}
			/>
		</main>
	);
}
