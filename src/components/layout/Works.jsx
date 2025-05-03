import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef } from "react";
import { useNavColor } from "@/contexts/NavColorProvider";

export default function Works() {
	const ref = useRef(null);
	const { scrollY } = useScroll();
	const { setColor } = useNavColor();

	useMotionValueEvent(scrollY, "change", (latest) => {
		const secTop = ref.current.offsetTop;
		const secHeight = ref.current.offsetHeight;

		if (latest >= secTop && latest < secTop + secHeight) {
			setColor("text-foreground");
		} else {
			setColor("text-background");
		}
	});

	// Demo data for the cards
	const workItems = [
		{
			title: 'Luxury Transportation',
			subtitle: 'Premium experience for VIP clients',
			image: '/images/car.jpg',
			tags: ['luxury', 'transportation']
		},
		{
			title: 'Live Event Production',
			subtitle: 'Dynamic lighting and effects',
			image: '/images/event.jpg',
			tags: ['events', 'production']
		},
		{
			title: 'Brand Ambassador',
			subtitle: 'Creative content partnerships',
			image: '/images/ambassador.jpg',
			tags: ['lifestyle']
		},
		{
			title: 'Product Launch',
			subtitle: 'Innovative marketing campaigns',
			image: '/images/product.jpg',
			tags: ['marketing', 'launch']
		},
		{
			title: 'Digital Campaigns',
			subtitle: 'Social media content creation',
			image: '/images/digital.jpg',
			tags: ['digital', 'content']
		},
		{
			title: 'Brand Integration',
			subtitle: 'Seamless product placement',
			image: '/images/integration.jpg',
			tags: ['branding', 'strategy']
		}
	];

	return (
		<section ref={ref} className="min-h-screen w-full">
			<h1 className="py-20 px-10 font-bebas-neue text-4xl">Our Works</h1>
		</section>
	)
}

