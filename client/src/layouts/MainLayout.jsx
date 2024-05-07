import React, { useState, createContext } from 'react'

// Router
import {Outlet} from 'react-router-dom'

// icons
import { IoHomeOutline, IoWalletOutline  } from "react-icons/io5"
import { MdCalendarToday, MdOutlineForum } from "react-icons/md"

// components
import Sidebar from "../components/Sidebar/Sidebar"
import SidebarItem from "../components/Sidebar/SidebarItem"
import Navbar from "../components/Navbar"

// Sidebar expand context
export const SidebarExpandContext = createContext()

const MainLayout = () => {
    const [expanded, setExpanded] = useState(false)
    return (
        <>
            
            <SidebarExpandContext.Provider value={{expanded, setExpanded}}>
                {/* NAVIGATION */}
                <Sidebar>
                    <SidebarItem icon={<IoHomeOutline className="text-2xl"/>} text="Home" active/>
                    <SidebarItem icon={<IoWalletOutline className="text-2xl"/>} text="Wallet" alert/>
                    <SidebarItem icon={<MdCalendarToday className="text-2xl"/>} text="Calendar"/>
                    <SidebarItem icon={<MdOutlineForum className="text-2xl"/>} text="Forum" alert/>
                </Sidebar>


                <div className={`w-full h-full grow-0 shrink fixed top-0 left-0 flex flex-col items-center justify-center ${expanded ? "md:pl-80" : "md:pl-24"} md:p-6 transition-all`}>
                    <Navbar/>
                    <div className="w-full h-full flex items-center justify-center bg-base-300 p-12 rounded-lg shadow-lg overflow-hidden"><Outlet/></div>
                </div>
            </SidebarExpandContext.Provider>
        </>
    )
}

export default MainLayout