import { whatWeDoTagline } from "@/constants/services";
import RippleEffect from "../animations/images/RippleEffect";
import Text from "../ui/Text";

export default function WhatWeDo() {
	return (
		<section className="flex md:flex-row flex-col-reverse items-center justify-end w-full min-h-screen">
			<div className="w-full h-screen flex flex-col gap-[5dvh] justify-center p-[10%]">
				<Text containerClass="font-creato-display-bold uppercase text-sm text-background" title={'Services'} />
				<Text containerClass="text-5xl font-bebas-neue" title={'What we Do'}></Text>
				<Text containerClass="font-creato-display-regular" title={whatWeDoTagline} />
			</div>
			<div className="w-full h-screen relative">
				<RippleEffect
					src={'/services/background.jpg'}
					alt='Navbar'
					width={'100%'}
					height={'100%'}
				/>
			</div>
		</section>
	)
}
