import React, {useState, createContext} from 'react'

// icons
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa"


// Sidebar expand context
export const SidebarExpandContext = createContext()

const Sidebar = ({children}) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <aside className="h-screen">
        <nav className="h-full flex flex-col bg-base-300 shadow-sm w-fit">
            <div className="p-4 pb-2 flex justify-between items-center mb-6">

                {/* LOGO */}
                <img src="https://img.logoipsum.com/243.svg" className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`} alt="log"/>
                
                <button onClick={() => setExpanded(curr => !curr)} className="p-1.5 rounded-lg bg-primary hover:bg-secondary">
                    {expanded ? <FaChevronCircleLeft className="text-3xl text-base-100"/> : <FaChevronCircleRight className="text-3xl text-base-100"/>}
                </button>
            </div>
            <SidebarExpandContext.Provider value={{expanded}}>
              <ul className="flex-1 px-3">{children}</ul>
            </SidebarExpandContext.Provider>
        </nav>
    </aside>
  )
}

export default Sidebar