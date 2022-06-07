import React from 'react'
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from '../contexts/ContextProvider';
const Chat = () => {
  const { isClicked, setIsClicked, initialState } = useStateContext();
  return (
    <>
      <div className='bg-slate-400 text-white z-30 w-64 p-8 rounded-xl  absolute right-64 top-16 '>
        <div className='flex justify-between border-b-1 border-color mb-5 pb-3'>
          <p className='font-semibold'>Chat</p>
          <button
            type="button"
            onClick={() => setIsClicked(initialState)}
            className="text-xl rounded-full text-black hover:bg-white hover:drop-shadow-xl"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptate!</p>
      </div>
    </>
  )
}

export default Chat