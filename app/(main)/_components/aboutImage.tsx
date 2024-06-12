import Image from 'next/image'
import React from 'react'
import { SiDialogflow } from "react-icons/si";
import { MdOutlineJoinFull } from "react-icons/md";
import { HiSpeakerphone } from "react-icons/hi";

function AboutImage() {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <div className="lg:flex lg:items-center">
                        <div className="w-full space-y-12 lg:w-1/2 ">
                            <div>
                                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">explore our <br /> awesome Services</h1>

                                <div className="mt-2">
                                    <span className="inline-block w-40 h-1 bg-green-500 rounded-full"></span>
                                    <span className="inline-block w-3 h-1 ml-1 bg-green-500 rounded-full"></span>
                                    <span className="inline-block w-1 h-1 ml-1 bg-green-500 rounded-full"></span>
                                </div>
                            </div>

                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 text-green-500 bg-green-100 rounded-xl md:mx-4 dark:text-white dark:bg-green-500">
                                    <SiDialogflow />
                                </span>

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Conferences</h1>

                                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                                        We do facilitate and organize dialogues and conferences
                                    </p>
                                </div>
                            </div>

                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 text-green-500 bg-green-100 rounded-xl md:mx-4 dark:text-white dark:bg-green-500">
                                    <MdOutlineJoinFull />
                                </span>

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Union</h1>

                                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                                        We aim to unite and cement the relationship of public-private partnership
                                    </p>
                                </div>
                            </div>

                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 text-green-500 bg-green-100 rounded-xl md:mx-4 dark:text-white dark:bg-green-500">
                                    <HiSpeakerphone />
                                </span>

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Socio-economic</h1>

                                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                                        Highlight and addresses the socio-economic issues in order to workout a viable solution
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                            <Image
                                width={200}
                                height={200}
                                className="w-[26rem] h-[26rem] object-contain xl:w-[30rem] xl:h-[30rem] rounded-full"
                                src="/ibc20.JPG" alt="" />
                        </div>
                    </div>

                    <hr className="my-12 border-gray-200 dark:border-gray-700" />
                    {/* 
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                        <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                            0
                        </div>

                        <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                            1
                        </div>

                        <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                            2
                        </div>

                        <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
                            3
                        </div>

                        <div className="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
                            4
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    )
}

export default AboutImage