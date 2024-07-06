'use client';

import Link from 'next/link';
import { Nav } from '.';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { Cart } from './Cart';

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [cartIsOpen, setCartIsOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1024) {
				setIsOpen(false);
			}
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	// Disable scrolling when the menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}, [isOpen]);

	return (
		<header className='flex border-b items-center border-b-gray-300 px-6 md:px-0 lg:py-0 py-6 relative'>
			<Image
				src='/images/icon-menu.svg'
				alt='menu'
				width={20}
				height={20}
				className='lg:hidden mr-6 cursor-pointer'
				onClick={() => setIsOpen(!isOpen)}
			/>
			<Link href='/' className='mr-20'>
				<Image src='/images/logo.svg' alt='logo' width={100} height={100} />
			</Link>
			{isOpen && (
				<div
					className='fixed inset-0 bg-black bg-opacity-65 z-10'
					onClick={() => setIsOpen(false)}
				></div>
			)}
			{cartIsOpen && (
				<div
					className='fixed inset-0 bg-transparent z-10'
					onClick={() => setCartIsOpen(false)}
				></div>
			)}
			<Nav isOpen={isOpen} setIsOpen={setIsOpen} />
			<div className='flex space-x-6 ml-auto'>
				<Button
					variant={'link'}
					size={'icon'}
					onClick={() => setCartIsOpen(!cartIsOpen)}
				>
					<Image
						src='/images/icon-cart.svg'
						alt='cart'
						width={25}
						height={25}
					/>
				</Button>
				<div className='w-10 h-10 rounded-full'>
					<Image
						src='/images/image-avatar.png'
						alt='avatar'
						width={40}
						height={40}
						className='rounded-full cursor-pointer border-2 border-transparent hover:border-primary-orange'
					/>
				</div>
			</div>
			<Cart cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen} />
		</header>
	);
};

/* 
Prompt for gpt:

*/