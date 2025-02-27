import React from 'react'
import { getInitials } from '../../utils/helper'

const ProfileInfo = ({onLogout}) => {


  return ( <>
  <div className='flex items-center gap-3'>
    <div className='w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100 '>
      {getInitials("Syed Zeshan Ahmed")}
    </div>

      <div>
      <p className='text-sm font-small h-4'><b>Syed Zeshan Ahmed</b></p>
      <button className='text-xs text-slate-700 underline' onClick={onLogout}>
         Logout
      </button>
   </div>
</div>
    </>
   )
}

export default ProfileInfo