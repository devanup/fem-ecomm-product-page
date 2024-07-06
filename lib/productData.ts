import { ProductData } from './types';

export const productData: ProductData = {
	images: [
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
	],
	details: {
		brand: 'Sneaker Company',
		name: 'Fall Limited Edition Sneakers',
		price: 250.0,
		salePercentage: 50,
		description:
			'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
	},
};
