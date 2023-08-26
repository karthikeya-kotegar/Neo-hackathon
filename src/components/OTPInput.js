// src/components/OTPInput.js
import React, { useState, useRef } from 'react';

function OTPInput() {
    
  return (
    <div className="my-4">
      {[1,2,3,4].map((index) => (
            <input
            className='w-[60px] h-[50px] text-[20px] border bg-gray-300 border-gray-600 p-[14px] mr-4 text-center rounded-md'
              key={index}
            //   value={value}
              maxLength={1}
              keyboardType="numeric"
            />
          ))}

          <div className='text-white my-4' ><span className='font-bold '>Resend OTP </span> 00:15</div>
    </div>
  );
}

export default OTPInput;

