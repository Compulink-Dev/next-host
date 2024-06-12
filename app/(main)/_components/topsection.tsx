import React from "react";
import { SiSecurityscorecard } from "react-icons/si";
import { MdOutlineManageAccounts, MdAllInclusive } from "react-icons/md";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { RxTransparencyGrid } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";

function TopSection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 w-[90%] h-full py-10 bg-green-600 rounded-lg mx-auto -translate-y-32 ">
            <div className="col-span-1  flex flex-col items-center justify-center">
                <SiSecurityscorecard size={78} color="white" className=" w-32 h-32" />
                <h1 className="text-3xl font-semibold text-white py-4">Core Values</h1>
            </div>
            <div className="col-span-2 ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="flex flex-col items-center justify-center p-4 hover:shadow-2xl">
                        <IoIosPeople size={34} color="white" className="w-14 h-14" />
                        <p className="text-white">Team Work</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 hover:shadow-2xl">
                        <MdOutlineManageAccounts
                            size={34}
                            color="white"
                            className="w-14 h-14"
                        />
                        <p className="text-white">Accountability</p>
                    </div>{" "}
                    <div className="flex flex-col items-center justify-center p-4 hover:shadow-2xl">
                        <MdAllInclusive size={34} color="white" className="w-14 h-14" />
                        <p className="text-white">Inclusively</p>
                    </div>{" "}
                    <div className="flex flex-col items-center justify-center p-4 hover:shadow-2xl">
                        <RxTransparencyGrid size={34} color="white" className="w-14 h-14" />
                        <p className="text-white">Transparency</p>
                    </div>{" "}
                    <div className="flex flex-col items-center justify-center p-4 hover:shadow-2xl">
                        <MdOutlineIntegrationInstructions
                            size={34}
                            color="white"
                            className="w-14 h-14"
                        />
                        <p className="text-white">Integrity</p>
                    </div>{" "}
                    <div className="flex flex-col items-center justify-center p-4 hover:shadow-2xl">
                        <MdAllInclusive size={34} color="white" className="w-14 h-14" />
                        <p className="text-white">Innovativeness</p>
                    </div>{" "}
                </div>
            </div>
        </div>
    );
}

export default TopSection;
