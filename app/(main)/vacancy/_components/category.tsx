import React from 'react'
import { BsBriefcaseFill } from "react-icons/bs";
import { FaMoneyBillWheat } from "react-icons/fa6";
import { BsPersonFillUp } from "react-icons/bs";
import { GrTechnology } from "react-icons/gr";
import { SiGooglemarketingplatform } from "react-icons/si";


interface CategoryProps {
    children: React.ReactNode,
    text: string
}

const CategoryCard = ({ children, text }: CategoryProps) => {
    return (
        <div className="h-56 w-52 bg-green-100 hover:bg-green-200 shadow-lg bottom-b bottom-red-500 rounded flex flex-col items-center justify-center gap-4">
            <div className="text-7xl text-green-800">
                {children}
            </div>
            <p className="text-sm font-semibold text-green-800">{text}</p>
        </div>
    )
}

function Category() {
    return (
        <div className='flex items-center justify-center'>
            <div className="flex flex-wrap gap-4">
                <CategoryCard text='Business Management'>
                    <BsBriefcaseFill />
                </CategoryCard>
                <CategoryCard text='Accountants'>
                    <FaMoneyBillWheat />
                </CategoryCard>
                <CategoryCard text='Economists'>
                    <BsPersonFillUp />
                </CategoryCard>
                <CategoryCard text='I.C.T'>
                    <GrTechnology />
                </CategoryCard>
                <CategoryCard text='Secretaries'>
                    <SiGooglemarketingplatform />
                </CategoryCard>
            </div>
        </div>
    )
}

export default Category