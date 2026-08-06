import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import PopupImg from '../../assets/images/popup.webp'
import useOutSideClick from '../../hooks/OutSideClick'
import { IoMdClose } from "react-icons/io";


const Popup = () => {
  const [show, setShow] = useState(false)
  const [dontShow, setDontShow] = useState(false)
  const popupRef = useRef(null)

  useEffect(() => {
    const hidden = localStorage.getItem('hideNewsletterPopup')
    if (!hidden) {
      setShow(true)
    }
  }, [])

  const handleClose = () => {
    if (dontShow) {
      localStorage.setItem('hideNewsletterPopup', 'true')
    }
    setShow(false)
  }

  useOutSideClick(popupRef, handleClose, show)

  if (!show) return null

  return createPortal(
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 font-pop">
      <div
        ref={popupRef}
        className="relative flex w-[900px] max-w-[95%] overflow-hidden rounded-xl bg-white shadow-2xl p-2.5"
      >
        <button
          onClick={handleClose}
          className="absolute right-5 top-5 text-2xl leading-none text-gray-800 hover:text-black"
        >
          <IoMdClose size={22} />
        </button>

        <div className="w-1/2">
          <img
            src={PopupImg}
            alt="Subscribe"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex w-1/2 flex-col items-center justify-center px-10 py-16 text-center">
          <h2 className="text-[40px] font-semibold leading-tight text-[#1A1A1A]">
            Subcribe to Our Newsletter
          </h2>

          <p className="mt-4 text-[#999999]">
            Subscribe to our newlletter and Save your{' '}
            <span className="font-bold text-[#FF8A00]">20% money</span> with
            discount code today.
          </p>

          <div className="mt-8 flex w-full items-center overflow-hidden rounded-full border border-gray-200 pl-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full py-3 text-sm text-[#666666] outline-none placeholder:text-gray-400"
            />
            <button className="whitespace-nowrap rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white">
              Subscribe
            </button>
          </div>

          <label className="mt-6 flex items-center gap-2 font-normal text-sm text-[#666666]">
            <input
              type="checkbox"
              checked={dontShow}
              onChange={(e) => setDontShow(e.target.checked)}
              className="h-5 w-5 border-gray-300 rounded-sm"
            />
            Do not show this window
          </label>
        </div>
      </div>
    </section>,
    document.body
  )
}

export default Popup