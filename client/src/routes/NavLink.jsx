import React from 'react'

// icons
import { IoHomeOutline, IoWalletOutline  } from "react-icons/io5"
import { MdCalendarToday, MdOutlineForum } from "react-icons/md"

// components
import SidebarItem from "../components/Sidebar/SidebarItem"

const NavLink = () => {
  return (
    <>
        <SidebarItem icon={<IoHomeOutline className="text-2xl"/>} text="Home" link="/home"/>
        <SidebarItem icon={<IoWalletOutline className="text-2xl"/>} text="Wallet" link="/wallet"/>
        <SidebarItem icon={<MdCalendarToday className="text-2xl"/>} text="Calendar" link="/calendar"/>
        <SidebarItem icon={<MdOutlineForum className="text-2xl"/>} text="Forum" link="/forum" alert/>
    </>
  )
}

export default NavLink