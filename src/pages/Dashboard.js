import React from 'react'
import { Link } from 'react-router-dom'
import { addToScript, getBalance, getProvider, initDapi, invokeMint, invokeMintNew, send, sendToken } from '../utils/Neo';

function Dashboard() {

    const initialiseNeo = async () => {
        // setTimeout( initDapi, 5000);
        initDapi();
        // getProvider();
        // getBalance();
        // send("Ne6szxHuvk2LCHBTBJLf4XHXP4n1bmGSPf", "NPgmskezbTsjLgQ9Czy1VGQ7cNDM5KcPWH", "1")

        // invokeMintNew("Ne6szxHuvk2LCHBTBJLf4XHXP4n1bmGSPf");
        // addToScript()
        // sendToken()
    }

    return (
        <div className='bg-[#dddfdd] h-full'>
            <div className='bg-[#A3A3A3] flex flex-row justify-between px-10'>
                <Link to='/'>
                    <img src='/ie-logo.png' />
                </Link>

                <Link to='/login'>
                    <img src='/profile.png' className='p-4' />
                </Link>

                <div>
                    <button className='bg-[#089BAB] my-2  p-4 rounded-md font-bold w-full text-white' onClick={initialiseNeo}>Connect Wallet</button>
                </div>

            </div>

            <div className='px-14'>
                <div className='text-xl font-bold p-4 '>
                    Your Dashboard {'>'}
                </div>


                <div className='flex flex-row gap-8 my-4'>
                    <Link to='/send'>
                        <div className='flex flex-col gap-2 justify-center items-center'>
                            <img src='/send.png' />
                            <div className='font-bold text-lg'>Send money</div>
                        </div>
                    </Link>


                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <img src='/points.png' />
                        <div className='font-bold text-lg'>IE points</div>
                    </div>


                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <img src='/vouchers.png' className='' />
                        <div className='font-bold text-lg'>Vouchers</div>
                    </div>
                </div>

                {/* trans detail */}
                <div className='grid grid-cols-4 gap-8 mt-8'>
                    <div className='col-span-2'>
                        <img src='/card.png' />
                    </div>

                    <div className='col-span-2'>
                        <div className='flex flex-row justify-between ml-8'>
                            <div className='text-[#368D35] font-bold text-[24px]'>Recent Transactions</div>
                            <div className='text-[#368D35] font-bold text-[24px]'>View All</div>
                        </div>

                        <div className='bg-white p-4 rounded-md shadow-md flex flex-row justify-around items-center mt-4'>
                            <div className='text-[#368D35] font-bold'>01:12 pm</div>
                            <div className='text-[#368D35] font-bold'>0x27ad52099662e6736e79...</div>
                            <div className='flex gap-2'>
                                <img src='/token.png' className='p-1' />
                                <div className='text-[#368D35] font-bold'>200</div>
                            </div>
                        </div>

                        <div className='bg-white p-4 rounded-md shadow-md flex flex-row justify-around items-center mt-4'>
                            <div className='text-[#368D35] font-bold'>05:30 pm</div>
                            <div className='text-[#368D35] font-bold'>0x27ad52099662e6736e79...</div>
                            <div className='flex gap-2'>
                                <img src='/token.png' className='p-1' />
                                <div className='text-[#368D35] font-bold'>400</div>
                            </div>
                        </div>

                        <div className='bg-white p-4 rounded-md shadow-md flex flex-row justify-around items-center mt-4'>
                            <div className='text-[#368D35] font-bold'>12:00 am</div>
                            <div className='text-[#368D35] font-bold'>0x27ad52099662e6736e79...</div>
                            <div className='flex gap-2'>
                                <img src='/token.png' className='p-1' />
                                <div className='text-[#368D35] font-bold'>350</div>
                            </div>
                        </div>


                    </div>

                </div>

                {/* merchant */}
                <div className='my-8'>

                    <div className='text-[#368D35] font-bold text-[28px]'>Our partner merchants</div>

                    <div>Buy products from our trusted partners for all your faming activities</div>


                    <div className='my-8 flex gap-8'>
                        <div className='mb-20'>
                            <div className='flex justify-center items-center'>
                                <img src='/madur.png' />
                            </div>
                            <div className='flex justify-center items-center'>
                                <button type="submit" className='bg-white  p-4 rounded-md font-bold w-full text-[#368D35]'>Buy</button>
                            </div>
                        </div>

                        <div className=''>
                            <img src='/madur.png' />
                            <button type="submit" className='bg-white  p-4 rounded-md font-bold w-full text-[#368D35]'>Buy</button>
                        </div>

                        <div className=''>
                            <img src='/madur.png' />
                            <button type="submit" className='bg-white  p-4 rounded-md font-bold w-full text-[#368D35] mb-8'>Buy</button>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Dashboard