import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
    MdDashboard,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
    MdHome,
    MdInfoOutline,
    MdOutlineMic,
    MdOutlineContactPage,
    MdEventNote,
} from "react-icons/md"
import { BsPersonFillAdd } from "react-icons/bs";
import { IoCloudDownload } from "react-icons/io5";
import { IoFootsteps } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import MenuLink from './Menulink'
import { Colors } from '@/constants/colors';



const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Home",
                path: "/dashboard/home",
                icon: <MdHome />,
            },
            {
                title: "About",
                path: "/dashboard/about",
                icon: <MdInfoOutline />,
            },
            {
                title: "Downloads",
                path: "/dashboard/downloads",
                icon: <IoCloudDownload />,
            },
            {
                title: "Programs",
                path: "/dashboard/programs",
                icon: <MdEventNote />,
            },
            {
                title: "Team",
                path: "/dashboard/team",
                icon: < FaUsers />,
            },
            {
                title: "Contact",
                path: "/dashboard/contact",
                icon: <MdOutlineContactPage />,
            },
            {
                title: "Vacancies",
                path: "/dashboard/vacancy",
                icon: <BsPersonFillAdd />,
            },
            {
                title: "Footer",
                path: "/dashboard/footer",
                icon: <IoFootsteps />,
            },
        ],
    },
    // {
    //     title: "Analytics",
    //     list: [
    //         {
    //             title: "Revenue",
    //             path: "/dashboard/revenue",
    //             icon: <MdWork />,
    //         },
    //         {
    //             title: "Reports",
    //             path: "/dashboard/reports",
    //             icon: <MdAnalytics />,
    //         },
    //         {
    //             title: "Teams",
    //             path: "/dashboard/teams",
    //             icon: <MdPeople />,
    //         },
    //     ],
    // },
    // {
    //     title: "User",
    //     list: [
    //         {
    //             title: "Settings",
    //             path: "/dashboard/settings",
    //             icon: <MdOutlineSettings />,
    //         },
    //         {
    //             title: "Help",
    //             path: "/dashboard/help",
    //             icon: <MdHelpCenter />,
    //         },
    //     ],
    // },
]


function Sidebar() {
    return (
        <div className='h-full w-full border-r sticky top-28'>
            <div className="p-4 flex items-center justify-center">
                <Image src={'/logon.png'} alt='logo' width={100} height={100} />
            </div>
            {
                menuItems.map((cat) => (
                    <ul
                        key={cat.title}
                        className="flex items-center  px-4 pt-2 text-green-950 w-full">
                        <li className="font-bold text-lg">{cat.title}
                            <span className="font-normal text-sm w-full">
                                {
                                    cat.list.map((item) => (
                                        <MenuLink
                                            data={item}
                                            key={item.title}
                                        />
                                    ))
                                }
                            </span>
                        </li>
                        {/* <Link href={'/dashboard/home'}>{item.title}</Link> */}
                    </ul>
                ))
            }
        </div>
    )
}

export default Sidebar