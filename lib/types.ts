export interface ProductImage {
	thumbnailSrc: string;
	productSrc: string;
	alt: string;
}

export interface ProductDetails {
	brand: string;
	name: string;
	price: number;
	salePercentage: number;
	description: string;
}

export interface ProductData {
	images: ProductImage[];
	details: ProductDetails;
}
