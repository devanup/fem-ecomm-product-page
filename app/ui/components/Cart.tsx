import Image from 'next/image';
import clsx from 'clsx';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';

import { productData } from '@/lib/productData';
import { CartItem } from '@/lib/types';

const variants = {
	hidden: { opacity: 0, y: -20 },
	visible: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -20 },
};

export const Cart = ({
	cartItems,
	cartIsOpen,
	setCartIsOpen,
	handleRemoveFromCart,
}: {
	cartItems: CartItem[];
	cartIsOpen: boolean;
	setCartIsOpen: (cartIsOpen: boolean) => void;
	handleRemoveFromCart: (index: number) => void;
}) => {
	const imgSrc = productData.images[0]?.thumbnailSrc;

	return (
		<AnimatePresence>
			{cartIsOpen && (
				<motion.div
					initial='hidden'
					animate='visible'
					exit='exit'
					variants={variants}
					className={clsx(
						'absolute md:top-28 top-28 border-none shadow-lg w-[90%] md:w-[350px] md:right-0 transform z-20',
					)}
				>
					<Card
						className={clsx({
							hidden: !cartIsOpen,
							block: cartIsOpen,
							'md:w-[350px]': cartItems.length === 0,
						})}
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
														src={imgSrc}
														alt='product image'
														className='w-full h-full object-cover rounded-md'
													/>
												</div>
												<div className='flex flex-col space-y-1'>
													<h1 className='font-light text-sm'>{item.name}</h1>
													<p className='font-light'>
														{item.quantity > 1 &&
															`$${item.salePrice} x ${item.quantity}`}{' '}
														<span className='font-semibold'>
															{`$${(
																parseFloat(item.salePrice) * item.quantity
															).toFixed(2)}`}
														</span>
													</p>
												</div>
											</div>
											{/* delete icon */}
											<button
												className='text-primary-orange hover:text-primary-orange/65 font-bold transition duration-300 ease-in-out'
												onClick={() => handleRemoveFromCart(index)}
											>
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
				</motion.div>
			)}
		</AnimatePresence>
	);
};
