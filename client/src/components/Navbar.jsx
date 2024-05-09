import React, {useContext} from 'react'

// icons
import { IoSearch } from "react-icons/io5"
import { IoMdNotificationsOutline } from "react-icons/io"
import { FiMessageCircle } from "react-icons/fi"

// sidebar expand context
import { SidebarExpandContext } from '../layouts/MainLayout'

const Navbar = () => {
    const {expanded, setExpanded} = useContext(SidebarExpandContext)
    return (
        <div className={`navbar z-[1000] transition-all bg-base-300  md:rounded-lg md:shadow-md px-6 py-4 md:mb-6`}>
            <div className="flex-1">
                
                <IoSearch className="text-2xl"/>

                <div className="form-control ml-4">
                    <input type="text" placeholder="Search" className="input w-72 focus:outline-none focus:border-none text-primary" />
                </div>
                
            </div>
            <div className="flex-none gap-2">
                {/* NOTIFICATION */}
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ml-2">
                        <div className="indicator">
                            <FiMessageCircle className="text-3xl"/>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </div>
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
    )
}

export default Navbar