import React from 'react'

function PaySuccess() {
    return (
        <div className='bg-[#dddfdd] h-screen'>
            <div className='bg-[#A3A3A3] flex flex-row justify-between px-10'>
                <img src='/ie-logo.png' />
                <img src='/profile.png' className='p-4' />
            </div>

            <div className='px-14 flex flex-col justify-center items-center'>
                <div className='text-4xl font-bold text-[#368D35] my-8'>
                    Your Payment is successfully done
                </div>

                <img src='/success.png' />

                <div className='my-8'>
                    <div className='text-4xl font-bold text-center'>Invoice</div>

                    <div className='my-6'>
                        <div className='font-bold mb-4'>Invoice No.
                            <span className='p-2'> 0x27ad52099662e6736e79 </span>
                        </div>

                        <div className='font-bold mb-4'>Amount Paid:
                            <span className='p-2'> 350.50</span>
                        </div>

                        <div className='font-bold mb-4'>Address:
                            <span className='p-2'> 0x27ad52099662e6736e79</span>
                        </div>

                    </div>

                    <button className='bg-[#089BAB] my-2  p-4 rounded-md font-bold w-full text-white'>Done</button>

                </div>
            </div>
        </div>
    )
}

export default PaySuccess