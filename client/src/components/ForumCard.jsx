import React, {Children, useEffect, useRef, useState} from 'react'

// motion
import { motion, useInView, useAnimation } from 'framer-motion'


// icon
import { FaRegComment } from "react-icons/fa"
import { FaRegHeart, FaHeart  } from "react-icons/fa";

const ForumCard = ({username, createdAt, commentNumber, children}) => {
  const [follow, setFollow] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView])

  const handleFollow = () => {
    setFollow(!follow)
  }

  return (
    <motion.div 
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          x: 75
        },
        visible: {
          opacity: 1,
          x: 0
        }
      }}
      initial="hidden"
      animate={mainControls}
      transition={{duration: 0.2, delay: 0.1}}
      className='w-full bg-base-100 rounded-md shadow-lg p-12 flex relative'>
        
      <div className='flex items-center justify-center'>
        <div className="avatar self-start">
          <div className="w-24 mask mask-squircle">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>



        <div className="w-full ml-6 flex flex-col justify-center">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-3">{username} <button onClick={handleFollow}>{follow ? <FaHeart className="text-2xl text-secondary"/> : <FaRegHeart className="text-2xl"/>}</button></h3>
          <p className="text-gray-600 mb-3">{createdAt}</p>
          <p>{children}</p>
        </div>

        <div className='self-end flex flex-col justify-between h-full ml-6 w-1/4'>
          <div className="badge badge-outline self-end p-3 border-gray-500"><span className='w-[10px] h-[10px] rounded-full bg-red-200 mr-3'></span>default</div>
          <div className="avatar-group self-end -space-x-6 rtl:space-x-reverse">
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="avatar placeholder">
              <div className="w-12 bg-neutral text-neutral-content">
                <span>+99</span>
              </div>
            </div>
          </div>
          <a className='flex items-center self-end cursor-pointer' onClick={()=>document.getElementById('CommentModal').showModal()}><FaRegComment className='mr-3 text-3xl'/> {commentNumber} Commentaire</a>
        </div>


      </div>
    </motion.div>
  )
}

export default ForumCard