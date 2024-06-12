"use client";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";

function Footer() {
    return (
        <footer className="text-gray-600 body-font">
            <div className="grid grid-cols-1 md:grid-cols-3 my-auto p-10">
                <div className="flex flex-col items-center justify-center">
                    <Image
                        src="/necf_new.png"
                        width={200}
                        height={100}
                        alt="necf"
                        className="w-48 h-52 object-cover"
                    />
                    <p className="mx-10 -mt-12">
                        A think tank on economic and social policy issues.
                    </p>
                    <div className="flex items-center justify-center gap-12 mx-auto">
                        <FaFacebook size={24} color="green" />
                        <BsTwitterX size={24} color="green" />
                        <FaLinkedin size={24} color="green" />
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center gap-5 text-sm">
                    <h1 className="text-2xl font-semibold">Quick Links</h1>
                    <Link
                        href={"/"}
                        className="hover:text-green-700 text-green-700 active:text-green-700"
                    >
                        Home
                    </Link>
                    <Link
                        href={
                            "https://zim.gov.zw/index.php/en/my-government/government-ministries/opc"
                        }
                        target="_blank"
                        className="hover:text-green-700 focus:text-green-700 active:"
                    >
                        Office of the President and Cabinet
                    </Link>
                    <Link
                        href={"https://veritaszim.net/node/684"}
                        target="_blank"
                        className="hover:text-green-700 focus:text-green-700 active:"
                    >
                        Ministry of Finance, Economic Development and Investment Promotion
                    </Link>
                    <Link
                        href={"https://mic.gov.zw/"}
                        target="_blank"
                        className="hover:text-green-700 focus:text-green-700 active:"
                    >
                        Ministry of Industry and Commerce
                    </Link>
                    <Link
                        href={"https://rbz.co.zw/"}
                        target="_blank"
                        className="hover:text-green-700 focus:text-green-700 active:"
                    >
                        Reserve Bank Zimbabwe
                    </Link>{" "}
                    <Link
                        href={"https://czi.co.zw/"}
                        target="_blank"
                        className="hover:text-green-700 focus:text-green-700 active:"
                    >
                        Confederation of Zimbabwe Industries
                    </Link>{" "}
                    <Link
                        href={"https://tradezimbabwe.com/"}
                        target="_blank"
                        className="hover:text-green-700 focus:text-green-700 active:"
                    >
                        Zim Trade
                    </Link>{" "}
                    <Link
                        href={"https://zncc.co.zw/"}
                        target="_blank"
                        className="hover:text-green-700 focus:text-green-700 active:"
                    >
                        Zimbabwe National Chamber of Commerce
                    </Link>
                    <Link
                        href={"https://nangozim.org/"}
                        target="_blank"
                        className="hover:text-green-700 focus:text-green-700 active:"
                    >
                        National Association of NGOs (NANGO)
                    </Link>
                    <Link
                        href={"/contact"}
                        className="hover:text-green-700 focus:text-green-700 active:"
                    >
                        Contact
                    </Link>
                </div>{" "}
                <div className="flex flex-col items-start justify-center gap-5 ">
                    <h1 className="text-2xl font-semibold">Contact Us</h1>
                    <p>34 Elizabeth Windsor Road, Marlborough</p>
                    <p>Tel:+263 8612 701 094</p>
                    <p>info@necf.org.zw</p>
                    <p>www.necf.org.zw</p>
                </div>
            </div>
            <div className="bg-green-600">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-white text-sm text-center sm:text-left">
                        © 2024 Necf — @
                        <Link href={"http://compulink.co.zw/"} target="_blank">
                            {"  "}Compulink
                        </Link>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <Link
                            className="text-white hover:text-slate-600"
                            href={"/"}
                            target="_blank"
                        >
                            <svg
                                fill="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </Link>
                        <Link
                            href={"/"}
                            target="_blank"
                            className="ml-3 text-white hover:text-slate-600"
                        >
                            <svg
                                fill="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </Link>
                        <Link
                            href={"/"}
                            target="_blank"
                            className="ml-3 text-white hover:text-slate-600"
                        >
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </Link>
                        <Link
                            href={"/"}
                            target="_blank"
                            className="ml-3 text-white hover:text-slate-600"
                        >
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="0"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                ></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </Link>
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
