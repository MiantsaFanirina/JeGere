import React, { useState, createContext } from 'react'

// Router
import {Outlet} from 'react-router-dom'

// components
import Sidebar from "../components/Sidebar/Sidebar"
import Navbar from "../components/Navbar"

// Routes
import NavLink from '../routes/NavLink'

// Sidebar expand context
export const SidebarExpandContext = createContext()

const MainLayout = () => {
    const [expanded, setExpanded] = useState(false)
    return (
        <>
            
            <SidebarExpandContext.Provider value={{expanded, setExpanded}}>
                {/* NAVIGATION */}
                <Sidebar>
                    <NavLink/>
                </Sidebar>


                <div className={`w-full h-full grow-0 shrink fixed top-0 left-0 flex flex-col items-center justify-center ${expanded ? "md:pl-80" : "md:pl-24"} md:p-6 transition-all`}>
                    <Navbar/>
                    <div className="w-full h-full bg-base-300 p-12 rounded-lg shadow-lg overflow-hidden relative"><Outlet/></div>
                </div>
            </SidebarExpandContext.Provider>
        </>
    )
}

export default MainLayout