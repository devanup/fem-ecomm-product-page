import { Card, CardHeader, CardContent } from '@/components/ui/card';
import clsx from 'clsx';

export const Cart = ({
	cartIsOpen,
	setCartIsOpen,
}: {
	cartIsOpen: boolean;
	setCartIsOpen: (cartIsOpen: boolean) => void;
}) => {
	return (
		<Card
			className={clsx(
				'absolute md:top-20 top-28 right-0 border-none shadow-lg md:w-72 w-[90%] left-1/2 transform -translate-x-1/2 md:left-auto md:transform-none z-20',
				{ hidden: !cartIsOpen, block: cartIsOpen },
			)}
		>
			<CardHeader className='text-left border-b'>
				<h1 className='font-semibold'>Cart</h1>
			</CardHeader>
			<CardContent className='w-full h-44 flex items-center justify-center'>
				<h3 className='text-center font-semibold text-primary/70'>
					Your cart is empty.
				</h3>
			</CardContent>
		</Card>
	);
};
