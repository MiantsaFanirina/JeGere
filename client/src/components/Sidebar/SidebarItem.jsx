import React, { useContext } from 'react'

// navbar expand context
import { SidebarExpandContext } from './Sidebar'

const SidebarItem = ({icon, text, active, alert}) => {
  const {expanded} = useContext(SidebarExpandContext)
  return (
    <li className={`
      relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer
      transition-colors
      ${active ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}
    `}>
        {icon}
        <span className={`text-lg overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
        {alert && <div className={`absolute right-2 w-2 h-2 rounded-full transition-all ${active ? "bg-secondary" : "bg-primary"} ${expanded ? "" : "top-2"}`}></div>}
    </li>
  )
}

export default SidebarItem