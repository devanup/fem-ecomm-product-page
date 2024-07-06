import Image from 'next/image';
import clsx from 'clsx';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

import { productData } from '@/lib/productData';
import { ProductDetails } from '@/lib/types';

export const Cart = ({
	cartIsOpen,
	setCartIsOpen,
}: {
	cartIsOpen: boolean;
	setCartIsOpen: (cartIsOpen: boolean) => void;
}) => {
	const { brand, name, price, salePercentage, description } =
		productData.details;
	const imgSrc = productData.images[0]?.thumbnailSrc;
	const cartItems: (ProductDetails & { imgSrc: string })[] = [
		{
			brand,
			name,
			price,
			salePercentage,
			description,
			imgSrc,
		},
	];

	return (
		<Card
			className={clsx(
				'absolute md:top-20 top-28 right-0 border-none shadow-lg md:w-auto w-[90%] left-1/2 transform -translate-x-1/2 md:left-auto md:transform-none z-20',
				{
					hidden: !cartIsOpen,
					block: cartIsOpen,
					'md:w-80': cartItems.length === 0,
				},
			)}
		>
			<CardHeader className='text-left border-b'>
				<h1 className='font-semibold'>Cart</h1>
			</CardHeader>

			<CardContent
				className={clsx(
					'w-full h-40 flex flex-col space-y-6 items-center justify-center',
					{
						'h-auto': cartItems.length > 0,
					},
				)}
			>
				{
					// if no items in the cart empty cart message is displayed, the width and height of the cart is adjusted accordingly
					cartItems.length === 0 ? (
						<h3 className='text-center font-semibold text-primary/70'>
							Your cart is empty.
						</h3>
					) : (
						// display cart items
						cartItems.map((item, index) => (
							<div
								key={index}
								className='flex items-center justify-between space-x-4 mt-6 flex-row w-full space-y-2'
							>
								<div className='flex items-center space-x-4'>
									<div className='w-14 h-14 bg-gray-300 rounded-md relative'>
										<img
											src={item.imgSrc}
											alt='product image'
											className='w-full h-full object-cover rounded-md'
										/>
									</div>
									<div className='flex flex-col space-y-1'>
										<h1 className='font-light text-sm'>{item.name}</h1>
										<p className='font-semibold'>${item.price.toFixed(2)}</p>
									</div>
								</div>
								{/* delete icon */}
								<button className='text-primary-orange hover:text-primary-orange/65 font-bold transition duration-300 ease-in-out'>
									<Image
										src='/images/icon-delete.svg'
										alt='delete icon'
										width={15}
										height={15}
									/>
								</button>
							</div>
						))
					)
				}
				{/* Checkout button */}
				{
					// if cart has items, display checkout button
					cartItems.length > 0 && (
						<Button
							className='bg-orange-500 hover:bg-primary-orange/65 text-black px-6 py-3 rounded-md font-semibold flex items-center space-x-3 w-full justify-center transition duration-300 ease-in-out'
							onClick={() => setCartIsOpen(false)}
						>
							Checkout
						</Button>
					)
				}
			</CardContent>
		</Card>
	);
};
