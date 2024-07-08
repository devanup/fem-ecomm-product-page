'use client';

import Image from 'next/image';
import { ProductImageGallery } from '.';

export const LightBox = ({
	isLightBoxOpen,
	setIsLightBoxOpen,
}: {
	isLightBoxOpen: boolean;
	setIsLightBoxOpen: (isOpen: boolean) => void;
}) => {
	return (
		<div className='absolute md:flex hidden flex-col items-center justify-center top-0 left-0 right-0 h-full bg-neutral-blackWithOpacity z-20'>
			<div className='w-auto h-auto flex justify-center items-center relative'>
				<span
					className='absolute -top-10 right-0 z-10 cursor-pointer'
					onClick={() => setIsLightBoxOpen(false)}
				>
					<Image
						src='/images/icon-close.svg'
						alt='close icon'
						width={24}
						height={24}
					/>
				</span>
				<ProductImageGallery
					setIsLightBoxOpen={setIsLightBoxOpen}
					classNames='md:w-[450px] md:h-[450px]'
					clickable={false}
				/>
			</div>
		</div>
	);
};
// i want you to help me create a lightbox modal component which will display the images in a lightbox modal. This should be a separate component that will be called in the ProductImageGallery.tsx file so hen the main product image is clicked this should appear.
