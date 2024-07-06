import { Header, ProductDetails, ProductImageGallery } from './ui';

export default function Home() {
	return (
		<main className='lg:max-w-[75%] xl:max-w-[1200px] md:w-[85%] mx-auto'>
			<Header />
			<div className='w-full md:p-10 p-0 flex flex-col items-center md:flex-row md:space-x-16 md:mt-10 mt-0'>
				<div className='w-full md:w-1/2'>
					<ProductImageGallery />
				</div>
				<div className='w-full md:w-1/2'>
					<ProductDetails />
				</div>
			</div>
		</main>
	);
}
