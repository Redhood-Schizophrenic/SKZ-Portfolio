import { CompanyName } from '@/constants/common';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import Button from './ui/Button';
import ButtonLeft from './ui/ButtonLeft';

export default function Navbar({ onClose, isOpen }) {
	useEffect(() => {
		if (!isOpen) {
			const timer = setTimeout(() => onClose(), 500); // Match the slide-up duration
			return () => clearTimeout(timer);
		}
	}, [isOpen]);

	return (
		<div
			className={`fixed top-0 left-0 w-full h-full bg-background transform transition-transform duration-700 ease-in-out z-40 ${isOpen ? 'translate-y-0' : 'translate-y-full'
				}`}
		>
			<div className='flex items-center justify-between p-4'>
				<button
					onClick={onClose}
					className="text-3xl"
				>
					Close
				</button>
				<h1 className='font-vogue'>{CompanyName}</h1>
				<div />
			</div>
			<div className='w-full h-[95%] flex gap-1'>
				{/* Left Side Container */}
				<div className='h-full w-full flex flex-col justify-between gap-10 p-10 '>
					<Image
						src={'/navbar/1.png'}
						width={5000}
						height={5000}
						alt='Navbar'
						className='w-[80%] rounded-md pt-[10%]'
					/>
					<div className="flex flex-col">
						<Link
							className='font-bebas-neue md:text-5xl text-xl text-left'
							href={'/'}
						>
							<ButtonLeft id={'home'} title={'Home'} />
						</Link>
						<Link
							className='font-bebas-neue md:text-5xl text-xl text-left'
							href={'/'}
						>
							<ButtonLeft id={'Work'} title={'Work'} />
						</Link>
						<Link
							className='font-bebas-neue md:text-5xl text-xl text-left'
							href={'/'}
						>
							<ButtonLeft id={'about us'} title={'About Us'} />
						</Link>
						<div className="flex gap-4 items-center">
							<Link
								className='font-bebas-neue md:text-5xl text-xl text-left flex gap-10'
								href={'/'}
							>
								<ButtonLeft id={'reach us'} title={'reach us'} />

							</Link>
							<Link href={'/'} className='text-lg'>Instagram</Link>
							<Link href={'/'} className='text-lg'>LinkedIn</Link>
						</div>
					</div>
				</div>
				<div className='h-full w-full flex flex-col justify-center pr-10'>
					<Link
						className='font-bebas-neue md:text-8xl text-xl text-right'
						href={'/'}
					>
						<Button id={'integrated-communications'} title={'integrated communications'} />
					</Link>
					<Link
						className='font-bebas-neue md:text-8xl text-xl text-right'
						href={'/'}
					>
						<Button id={'influencer-marketing'} title={'influencer marketing'} />
					</Link>
					<Link
						className='font-bebas-neue md:text-8xl text-xl text-right'
						href={'/'}
					>
						<Button id={'public'} title={'Public Relations'} />
					</Link>
					<Link
						className='font-bebas-neue md:text-8xl text-xl text-right'
						href={'/'}
					>
						<Button id={'social'} title={'Social Media'} />
					</Link>
					<Link
						className='font-bebas-neue md:text-8xl text-xl text-right'
						href={'/'}
					>
						<Button id={'event'} title={'Event Planning & Production'} />
					</Link>
				</div>
			</div>
		</div>

	);
}
