import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';

import { ProductDetails as ProductDetailsType } from '@/lib/types';

export const ProductDetails = ({
	productDetails,
	salePrice,
	selectedQuantity,
	setSelectedQuantity,
	handleAddToCart,
}: {
	productDetails: ProductDetailsType;
	salePrice: string;
	selectedQuantity: number;
	setSelectedQuantity: (quantity: number) => void;
	handleAddToCart: () => void;
}) => {
	const { brand, name, price, salePercentage, description } = productDetails;
	const { toast } = useToast();

	const handleAddToCartClick = () => {
		if (selectedQuantity > 0) {
			handleAddToCart();
			toast({
				// title: 'Item added to cart',
				description: `${selectedQuantity} ${
					selectedQuantity === 1 ? 'item' : 'items'
				} added to cart`,
				className: 'bg-lime-600 text-white',
			});
		} else {
			toast({
				// title: 'Please select a quantity',
				description: 'Please select a quantity before adding to cart',
				className: 'bg-red-500 text-white',
			});
		}
	};

	return (
		<div className='flex flex-col space-y-6 p-10 md:p-0'>
			{/* Brand */}
			<h2 className='text-sm font-semibold text-neutral-darkGrayishBlue uppercase tracking-wider'>
				{brand}
			</h2>

			{/* Product Name */}
			<h1 className='text-3xl font-bold'>{name}</h1>

			{/* Product Description */}
			<p className='text-neutral-darkGrayishBlue font-light'>{description}</p>

			{/* Pricing */}
			<div className='flex md:flex-col flex-row justify-between space-x-0 space-y-2'>
				<div className='flex flex-row space-x-5'>
					<p className='text-3xl font-bold'>${salePrice}</p>
					<Badge className='rounded-md bg-neutral-veryDarkBlue'>
						{salePercentage}%
					</Badge>
				</div>
				<p className='text-neutral-darkGrayishBlue line-through font-semibold'>
					${price.toFixed(2)}
				</p>
			</div>

			{/* Quantity and Add to Cart */}
			<div className='flex lg:flex-row flex-col items-center lg:space-x-3 space-x-0 lg:space-y-0 space-y-3'>
				<div className='flex items-center justify-between bg-gray-100 p-3 rounded-md w-full lg:w-2/5'>
					<button
						className='text-xl text-primary-orange hover:text-primary-orange/65 font-bold transition duration-300 ease-in-out'
						onClick={() =>
							setSelectedQuantity(
								selectedQuantity !== 0 ? selectedQuantity - 1 : 0,
							)
						}
					>
						{/* - */}
						<Image
							src={'/images/icon-minus.svg'}
							alt='minus icon'
							width={10}
							height={10}
						/>
					</button>
					<p className='font-semibold'>{selectedQuantity}</p>
					<button
						className='text-xl font-bold transition duration-300 ease-in-out'
						onClick={() =>
							setSelectedQuantity(
								selectedQuantity < 99 ? selectedQuantity + 1 : selectedQuantity,
							)
						}
					>
						{/* + */}
						<Image
							src={'/images/icon-plus.svg'}
							alt='plus icon'
							width={10}
							height={10}
						/>
					</button>
				</div>

				<button
					className='bg-orange-500 hover:bg-primary-orange/65 text-black px-6 py-3 rounded-md font-semibold flex items-center space-x-3 w-full lg:w-4/5 justify-center transition duration-300 ease-in-out'
					onClick={handleAddToCartClick}
				>
					<Image
						src='/images/icon-cart.svg'
						alt='cart icon'
						width={20}
						height={20}
					/>
					<span>Add to cart</span>
				</button>
			</div>
		</div>
	);
};
