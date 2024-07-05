import { Header, ProductCard } from './ui';

export default function Home() {
	return (
		<main className='lg:max-w-[75%] xl:max-w-[1200px] md:w-[85%] mx-auto'>
			<Header />
			<div className='w-full bg-gray-300 p-10'>
				<ProductCard />
			</div>
		</main>
	);
}
