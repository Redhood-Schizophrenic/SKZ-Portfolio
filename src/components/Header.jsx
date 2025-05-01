import { CompanyName } from "@/constants/common";
import Link from "next/link";
import Navbar from "./Navbar";
import { useState } from "react";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<section className="w-full flex items-center justify-between p-4 lg:text-3xl md:text-2xl text-xl">
			<button onClick={() => setIsOpen(true)}>
				Menu
			</button>
			<Link href={'/'} className="font-vogue">{CompanyName}</Link>
			<h1>Lets talk</h1>
			<Navbar onClose={() => setIsOpen(false)} isOpen={isOpen} />
		</section>
	)
};
