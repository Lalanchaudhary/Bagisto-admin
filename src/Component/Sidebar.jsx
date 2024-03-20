import React from 'react'
import '../AllCss/Sidebar.css'
import { TbGraph } from "react-icons/tb";
import { RiPagesLine } from "react-icons/ri";
import { RiFolderReduceLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { PiMonitorBold } from "react-icons/pi";
import { TbSpeakerphone } from "react-icons/tb";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaWrenchSolid } from "react-icons/lia";
function Sidebar() {
  return (
    <>
      <div className='main-div'>
        <div className='dashboard'>
          <TbGraph className='side-icon1' />
          <p>Dashboard</p>
        </div>
        <div className='inner-dash'>
          <RiPagesLine className='side-icon2' />
          <p>Sales</p>
        </div>
        <div className='inner-dash'>
          <RiFolderReduceLine className='side-icon2' />
          <p>Catalog</p>
        </div>
        <div className='inner-dash'>
          <FaRegUser className='side-icon2' />
          <p>Customers</p>
        </div>
        <div className='inner-dash'>
          <PiMonitorBold className='side-icon2' />
          <p>CMS</p>
        </div>
        <div className='inner-dash'>
          <TbSpeakerphone className='side-icon2' />
          <p>Marketing</p>
        </div>
        <div className='inner-dash'>
          <FaCircleHalfStroke className='side-icon2' />
          <p>Reporting</p>
        </div>
        <div className='inner-dash'>
          <IoSettingsOutline className='side-icon2' />
          <p>Setting</p>
        </div>
        <div className='inner-dash'>
          <LiaWrenchSolid className='side-icon2' />
          <p>Configure</p>
        </div>
      </div>
    </>
  )
}

export default Sidebar
