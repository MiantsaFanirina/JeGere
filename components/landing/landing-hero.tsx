import React from 'react';
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {motion} from "motion/react";
import {ColourfulText} from "@/components/ui/colorful-text";
import Image from "next/image";

const LandingHero = () => {
    return (
        <div className={'h-screen w-screen md:w-[50vw] overflow-hidden fixed top-0 left-0 flex justify-center'}>
            <div className={`
                        relative
                        top-36
                        md:top-1/4
                        flex flex-col gap-3
                        items-center
                `}>
                <h1
                    className={`
                        text-nowrap
                        uppercase
                    `}
                >
                    <TextGenerateEffect words={'Manage everything easily'}
                                        className={"font-gloria text-2xl md:text-4xl font-bold"}/>
                </h1>

                <motion.h1
                    initial={{y: 30, opacity: 0}} animate={{y: 0, opacity: 1}}
                    transition={{duration: 1, delay: 0.5}}
                    className={`
                        text-nowrap
                        font-gloria text-xl md:text-2xl font-bold
                        uppercase
                    `}
                >
                    with
                </motion.h1>


                <motion.h1
                    initial={{scale: 0.3, opacity: 0}} animate={{scale: 1, opacity: 1}}
                    transition={{duration: 0.3, delay: 1.2}}
                    className={`
                        text-nowrap
                        font-gloria text-5xl md:text-7xl font-bold
                        
                    `}
                >
                    <ColourfulText text={'JeGere'}/>
                </motion.h1>

            </div>
            <Image
                src={'/character/character.png'} alt={'character'} width={1000} height={1000}
                className={'h-1/3 md:h-1/2 w-auto absolute bottom-0 left-1/2 -translate-x-1/2'}
            />
        </div>
    );
};

export default LandingHero;