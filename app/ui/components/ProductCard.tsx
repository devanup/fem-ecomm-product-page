import Image from 'next/image';

const productImagesSrc = [
	{
		thumbnailSrc: '/images/image-product-1-thumbnail.jpg',
		productSrc: '/images/image-product-1.jpg',
		alt: 'product 1 image',
	},
	{
		thumbnailSrc: '/images/image-product-2-thumbnail.jpg',
		productSrc: '/images/image-product-2.jpg',
		alt: 'product 2 image',
	},
	{
		thumbnailSrc: '/images/image-product-3-thumbnail.jpg',
		productSrc: '/images/image-product-3.jpg',
		alt: 'product 3 image',
	},
	{
		thumbnailSrc: '/images/image-product-4-thumbnail.jpg',
		productSrc: '/images/image-product-4.jpg',
		alt: 'product 4 image',
	},
];

export const ProductCard = () => {
	return (
		<div className='w-72 h-auto flex flex-col space-y-4'>
			<div className=''>
				<Image
					src={productImagesSrc[0].thumbnailSrc}
					alt={productImagesSrc[0].alt}
					width={300}
					height={300}
					className='rounded-lg'
				/>
			</div>
			<div className='flex flex-row justify-between'>
				<div className='img-thumbnail w-14 h-14 rounded-md bg-blue-100'></div>
				<div className='img-thumbnail w-14 h-14 rounded-md bg-blue-100'></div>
				<div className='img-thumbnail w-14 h-14 rounded-md bg-blue-100'></div>
				<div className='img-thumbnail w-14 h-14 rounded-md bg-blue-100'></div>
			</div>
		</div>
	);
};
