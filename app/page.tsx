"use client"
import { motion } from "motion/react"
import LandingHero from "@/components/landing/landing-hero";
import Login from "@/components/landing/Login";

export default function Home() {
    return (
        <>
            <LandingHero/>
            <div className={'h-screen w-screen md:w-[50vw] fixed top-0 right-0 flex items-center justify-center'}>

                <motion.div
                    initial={{scale: 0.8, opacity: 0}} animate={{scale: 1, opacity: 1}}
                    transition={{duration: 0.3, delay: 2.2, type: "spring"}}
                >
                    <Login/>
                </motion.div>
            </div>
        </>
    );
}
