import React from 'react'
import Sidebar from './_components/Sidebar'
import Navbar from './_components/Navbar'



async function DashboardLayout
    ({ children }: { children: React.ReactNode }) {
    // const session = await getServerSession(options)

    // if (!session) {
    //     redirect('/api/auth/signin?callbackUrl=/dashboard')
    // }

    return (
        <div>
            <div className="flex">
                <div className="" style={{ flex: 1 }}>
                    <Sidebar />
                </div>
                <div className="" style={{ flex: 5 }}>
                    <Navbar />
                    <div className="p-2">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
