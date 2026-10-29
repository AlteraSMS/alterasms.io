import { motion } from "motion/react"

import { cn } from "@/lib/utils"
import { HeroHighlight, Highlight } from "./custom/hero-highlight"
import ShinyBanner from "./custom/shiny-banner"
import ShinyButton from "./custom/shiny-button"
// @ts-ignore
import PhoneEmoji from "@/assets/phone.svg"
import { MoveRight } from "lucide-react"

const Hero = () => {
    return (
        <HeroHighlight>
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
            >
                <div
                    className="flex flex-col gap-4 md:gap-0 2xl:gap-y-4 px-4 text-white max-w-4xl 2xl:max-w-5xl leading-relaxed lg:leading-snug text-center mx-auto">
                    <div className="flex items-center justify-center">
                        <div
                            className={cn(
                                "group rounded-full border  border-white/5 bg-zinc-900 text-base text-white transition-all ease-in hover:bg-zinc-800",
                            )}
                        >
                            <ShinyBanner className="flex flex-row gap-x-2 items-center justify-center transition ease-out hover:text-zinc-600 hover:duration-300 hover:dark:text-zinc-400">
                                <img src={PhoneEmoji.src} alt="phone emoji" className="h-2.5 sm:h-4 w-auto" />
                                <span>Get your secure number now</span>
                                <MoveRight className="ml-1 w-auto h-3 sm:h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"/>
                            </ShinyBanner>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-y-3 2xl:gap-y-8 justify-center items-center">
                            <h1
                                className="font-poppins font-bold text-2xl md:text-4xl lg:text-5xl leading-relaxed md:leading-snug lg:leading-tight text-white">
                                Secure SMS Verification<br/>
                                <Highlight className="text-white">
                                    Privacy Without Compromise
                                </Highlight>
                            </h1>
                            <h3 className="max-w-lg 2xl:max-w-3xl text-sm 2xl:text-base text-zinc-200">
                                Value your digital privacy and don&apos;t want to use your phone number? Protect
                                yourself and use our non-VoIP phone numbers to verify your accounts.
                            </h3>
                        </div>
                        <div className="flex flex-row gap-4 max-w-sm mx-auto">
                            <span
                                className="group/disc relative overflow-hidden inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-gray-50 text-gray-900 hover:bg-gray-50/90 shadow px-4 cursor-not-allowed"
                            >
                                Sign In
                                <DiscontinuedBanners/>
                            </span>
                            <span className="group/disc relative overflow-hidden rounded-lg cursor-not-allowed">
                                <ShinyButton text="Get Started" className="pointer-events-none"/>
                                <DiscontinuedBanners/>
                            </span>
                        </div>
                    </div>
                </div>
            </motion.h1>
        </HeroHighlight>
    )
}

const DiscontinuedBanners = () => (
    <>
        {["-rotate-[20deg]", "rotate-[20deg]"].map((rotate) => (
            <span
                key={rotate}
                className={cn(
                    "pointer-events-none absolute left-1/2 top-1/2 w-[200%] -translate-x-1/2 -translate-y-1/2 bg-red-600 py-0.5 text-center text-[10px] font-bold uppercase tracking-widest text-white opacity-0 transition-opacity duration-200 group-hover/disc:opacity-100",
                    rotate
                )}
            >
                Discontinued
            </span>
        ))}
    </>
)

export default Hero