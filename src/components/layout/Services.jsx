import { useInView, useMotionValueEvent, useScroll } from "framer-motion";
import WhatWeDo from "../screens/WhatWeDo";
import { useEffect, useRef, useState } from "react";
import { useNavColor } from "@/contexts/NavColorProvider";
import { navLinks } from "@/constants/navLinks";
import Link from "next/link";

export default function Services() {
	const ref = useRef(null);
	const [hoveredService, setHoveredService] = useState('');
	const { scrollY } = useScroll();
	const { setColor } = useNavColor();

	useMotionValueEvent(scrollY, "change", (latest) => {
		const secTop = ref.current.offsetTop;
		const secHeight = ref.current.offsetHeight;

		if (latest >= secTop && latest < secTop + secHeight) {
			setColor("text-background");
		} else {
			setColor("text-foreground");
		}
	});

	return (
		<section ref={ref} className="min-h-screen w-full bg-foreground text-background">
			<WhatWeDo />
			<div className="mt-10 px-6 w-full">
				{
					navLinks.map((item, index) => (
						<Link
							href={item.href}
							key={index}
							className="w-full h-64 grid grid-cols-3 gap-5 border-y border-background relative"
							onMouseEnter={() => setHoveredService(item.id)}
							onMouseLeave={() => setHoveredService(null)}
						>
							{/* Vignette Effect Overlay */}
							<div
								className={`absolute inset-0 transition-opacity duration-700 ease-in-out pointer-events-none ${hoveredService === item.id ? 'opacity-100' : 'opacity-0'
									}`}
								style={{
									background: 'radial-gradient(rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,1)100%)'
								}}
							></div>
							<div className="flex items-start justify-center p-4">
								<h2 className="text-violet-500 text-center text-sm font-creato-display-bold">Service 00{index + 1}</h2>
							</div>
							<div className="flex justify-center items-center">
								<h1 className="text-6xl text-center font-vogue">{item.title}</h1>
							</div>
							<div className="flex items-start justify-center p-4">
								<button className="text-violet-500 text-center text-sm font-creato-display-bold">Learn More</button>
							</div>
						</Link>
					))
				}
			</div>
		</section>
	)
}

