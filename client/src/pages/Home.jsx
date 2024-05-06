import React from 'react'

// icons
import { IoSearch, IoHomeOutline } from "react-icons/io5"
import { IoMdNotificationsOutline } from "react-icons/io"

// components
import Sidebar from "../components/Sidebar/Sidebar"
import SidebarItem from "../components/Sidebar/SidebarItem"

const Home = () => {
  return (
    <>
        <div className="navbar bg-base-300 md:w-[900px] md:rounded-lg shadow-md fixed md:top-5 left-1/2 -translate-x-1/2 px-6  py-4">
            <div className="flex-1">
                
                <IoSearch className="text-2xl"/>

                <div className="form-control ml-4">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                
            </div>
            <div className="flex-none gap-2">
                {/* NOTIFICATION */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ml-2">
                        <div className="indicator">
                            <IoMdNotificationsOutline className="text-3xl"/>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ml-2">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <Sidebar>
            <SidebarItem icon={<IoHomeOutline className="text-2xl"/>} text="home" active/>
            <SidebarItem icon={<IoHomeOutline className="text-2xl"/>} text="home"/>
            <SidebarItem icon={<IoHomeOutline className="text-2xl"/>} text="home" active alert/>
            <SidebarItem icon={<IoHomeOutline className="text-2xl"/>} text="home" alert/>
        </Sidebar>
    </>
  )
}

export default Home