"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function HeroSection() {
    return (
        <section className="text-gray-600 body-font -mt-32">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0, x: -100 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
                >
                    <Image
                        className="object-cover object-center rounded w-full"
                        alt="hero"
                        src="/nec.gif"
                        width={300}
                        height={300}
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0, x: 100 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
                >
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        BACKGROUND
                        <br className="hidden lg:inline-block" />
                    </h1>
                    <p className="leading-relaxed">
                        The National Economic Consultative Forum (NECF) originated from the
                        Private and Public Sectors participation at the International Smart
                        Partnership Dialogue in July, 1995 at Langkawi Island in Malaysia.
                        Experts from the private sector, labour, academia, civic society
                        approached the Government for the development of a smart partnership
                        institution that would be the think tank for the country. This
                        process led to the establishment of the National Economic
                        Consultative Forum on 17 July, 1997 after a series of consultative
                        meetings amongst stakeholders.
                    </p>
                    <p className="my-4 leading-relaxed">
                        The imperative to create the NECF was necessitated by the need to
                        tap into, and maximize existing skills and resources in key public
                        institutions, private sector groups, civil and professional groups,
                        as well as individuals with vested interests in the development of
                        the economy. The creation of the NECF was thus based on the
                        assumption that no particular sector or a group of individuals has a
                        monopoly of skills or competencies to grow and develop the economy.
                    </p>
                    <div className="flex justify-center">
                        {/* button */}
                        <Link href={'/contact'}>
                            <Button className="bg-green-600 hover:bg-green-500">Contact Us</Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default HeroSection;
