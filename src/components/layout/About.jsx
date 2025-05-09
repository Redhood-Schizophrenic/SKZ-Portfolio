import { tagDescription } from '@/constants/about';
import ScrollingImages from '../animations/section/ScrollingImages';
import { ButtonCenter } from '../ui/Button';
import { useCursorContext } from "@/contexts/CursorProvider";

const images = [
	'/hero/background.jpg', '/hero/background.jpg', '/hero/background.jpg',
	'/hero/background.jpg', '/hero/background.jpg', '/hero/background.jpg',
	'/hero/background.jpg', '/hero/background.jpg', '/hero/background.jpg',
	'/hero/background.jpg', '/hero/background.jpg', '/hero/background.jpg',
];

export default function About() {
	const { setScale } = useCursorContext();
	return (
		<section className="relative min-h-screen w-full">
			<ScrollingImages
				array1={images}
				array2={images}
				array3={images}
				overlayContent={
					<div className="text-white text-center px-6">
						<div className="flex items-center justify-center">
							<p
								className="lg:text-3xl md:text-2xl text-sm font-creato-display-bold md:w-[50%]"
								onMouseEnter={() => setScale(4)}
								onMouseLeave={() => setScale(1)}
							>
								{tagDescription}
							</p>
						</div>
						<ButtonCenter
							onMouseEnter={() => setScale(3)}
							onMouseLeave={() => setScale(1)}
							containerClass="mt-6 px-8 py-2 bg-transparent border-2 rounded-lg font-creato-display-bold uppercase"
							title={'About us'}
							hoverColor='text-foreground'
						/>
					</div>
				}
				overlayClassName="bg-black bg-opacity-70"
			/>
		</section>
	);
}
