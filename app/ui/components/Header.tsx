'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Nav } from './Nav';
import { Cart } from './Cart';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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

	// scrolling disabled when the menu is open
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
					className='relative'
				>
					<Image
						src='/images/icon-cart.svg'
						alt='cart'
						width={25}
						height={25}
					/>
					<Badge className='bg-primary-orange hover:bg-primary-orange absolute left-4 bottom-5 flex justify-center w-4 h-4 text-[.8em]'>
						<span>1</span>
					</Badge>
				</Button>
				<div className='w-11 h-11 rounded-full'>
					<Image
						src='/images/image-avatar.png'
						alt='avatar'
						width={45}
						height={45}
						className='rounded-full cursor-pointer border-2 border-transparent hover:border-primary-orange'
					/>
				</div>
			</div>
			<Cart cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen} />
		</header>
	);
};
