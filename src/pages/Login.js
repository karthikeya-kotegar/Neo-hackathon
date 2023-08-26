import React, { useState } from 'react'
import OTPInput from '../components/OTPInput';

function Login() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted name:', name);
    };

    function verifyNumber() {
        setOtp(true)
    }



    return (
        <div className='bg-[#434343] grid grid-cols-4 justify-center items-center h-screen'>

            {/* Company Logo */}
            <div className='col-span-2'>
                <div className='flex justify-center items-center'>
                    <img src="/logo-neo.png" alt="Company Logo" className="company-logo" />
                </div>
            </div>

            {/* Login Form */}
            <div className='col-span-1'>
                <div>
                    <div className='text-4xl font-bold text-center text-white'>Login</div>

                    <div>
                        <div className='flex gap-4 my-6'>
                            <button className='bg-white text-green-600 p-4 rounded-md font-bold w-full focus:bg-green-500 focus:text-white'
                            >Individual</button>
                            <button className='bg-white text-green-600 p-4 rounded-md font-bold w-full focus:bg-green-500 focus:text-white'>Merchant</button>
                        </div>

                        <form onSubmit={handleSubmit}>
                            {/* name */}
                            <input type="text" className='p-4 bg-gray-300 rounded-md my-3' placeholder='Enter Name' value={name} onChange={handleNameChange} />

                            {/* number */}
                            <div className='flex flex-row gap-4'>
                                <input type="number" className='p-4 bg-gray-300 rounded-md my-3' placeholder='Enter Phone number' value={phone} onChange={handlePhoneChange} />
                                <button className='bg-[#089BAB] my-2  rounded-md font-bold w-full text-white' onClick={verifyNumber}>Verify</button>
                            </div>


                            {otp ? <OTPInput /> : ''}



                            <button type="submit" className='bg-[#089BAB] my-2  p-4 rounded-md font-bold w-full text-white'>Login</button>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Login