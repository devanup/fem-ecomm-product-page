import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

const navItems = [
	{ name: 'Collections', href: '/' },
	{ name: 'Men', href: '/' },
	{ name: 'Women', href: '/' },
	{ name: 'About', href: '/' },
	{ name: 'Contact', href: '/' },
];

export const Nav = ({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}) => {
	// if (isOpen) alert('open');
	return (
		<nav
			className={clsx(
				'lg:flex flex-col lg:flex-row items-center font-bold space-y-4 lg:space-y-0 lg:space-x-8 absolute lg:relative top-0 left-0 lg:top-auto lg:left-auto w-3/5 lg:w-auto h-[100vh] lg:h-auto bg-white lg:bg-transparent lg:pt-0 md:pt-16 pt-16 z-20',
				{ hidden: !isOpen, flex: isOpen },
			)}
		>
			<Button variant={'link'} size={'icon'}>
				<Image
					src='/images/icon-close.svg'
					alt='close'
					width={20}
					height={20}
					className='lg:hidden absolute top-9 left-6'
					onClick={() => setIsOpen(false)}
				/>
			</Button>
			{navItems.map((item, index) => (
				<Link
					key={index}
					href={item.href}
					className='lg:border-b-4 border-b-0 lg:border-r-0 border-r-4 md:py-0 lg:py-8 py-1 px-6 lg:px-0 border-b-transparent border-r-transparent hover:border-orange-400 w-full lg:w-auto'
				>
					{item.name}
				</Link>
			))}
		</nav>
	);
};
