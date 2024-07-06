import { Badge } from '@/components/ui/badge';
import { productData } from '@/lib/productData';
import Image from 'next/image';

export const ProductDetails = () => {
	const { brand, name, price, salePercentage, description } =
		productData.details;
	const salePrice = (price * (1 - salePercentage / 100)).toFixed(2);

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
			<div className='flex md:flex-row flex-col items-center md:space-x-3 space-x-0 md:space-y-0 space-y-3'>
				<div className='flex items-center justify-between bg-gray-100 p-3 rounded-md w-full md:w-2/5'>
					<button className='text-xl text-primary-orange hover:text-primary-orange/65 font-bold transition duration-300 ease-in-out'>
						-
					</button>
					<p className='font-semibold'>0</p>
					<button className='text-xl text-primary-orange hover:text-primary-orange/65 font-bold transition duration-300 ease-in-out'>
						+
					</button>
				</div>

				<button className='bg-orange-500 hover:bg-primary-orange/65 text-black px-6 py-3 rounded-md font-semibold flex items-center space-x-3 w-full md:w-4/5 justify-center transition duration-300 ease-in-out'>
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
