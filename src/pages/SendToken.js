import React, { useState } from 'react'

function SendToken() {
    const [formData, setFormData] = useState({
        address: '',
        amount: '',
        note: ''
    });


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted with data:', formData);
    };



    return (
        <div className='bg-[#dddfdd] h-screen'>
            <div className='bg-[#A3A3A3] flex flex-row justify-between px-10'>
                <img src='/ie-logo.png' />
                <img src='/profile.png' className='p-4' />
            </div>

            <div className='px-14 flex flex-col justify-center items-center'>
                <div className='text-4xl font-bold text-[#368D35] my-8'>
                    Send Money
                </div>

                <form onSubmit={handleSubmit} className='flex flex-col w-1/2 bg-white p-8 rounded-md'>
                    <div className='grid grid-cols-3 w-full mb-4'>
                        <label className='col-span-1 font-bold text-lg py-4'>
                            Enter Wallet Address:
                        </label>
                        <div className='col-span-2'>
                            <input
                                className='  py-2 w-full bg-white  border-b-2 border-b-green-500'
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                            />

                            <button className='bg-[#35688D] p-2 text-white rounded-full my-4 font-bold'>
                                Contacts
                            </button>
                        </div>
                    </div>

                    <div className='grid grid-cols-3 w-full mb-8'>
                        <label className='font-bold text-lg py-4'>
                            Enter Amount:
                        </label>
                        <input
                            className='col-span-2  py-2 w-full bg-white  border-b-2 border-b-green-500'
                            type="text"
                            name="amount"
                            value={formData.amount}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='grid grid-cols-3 w-full mb-8'>
                        <label className='font-bold text-lg py-4'>
                            Add Note:
                        </label>
                        <input
                            className='col-span-2  py-2 w-full bg-white  border-b-2 border-b-green-500'
                            type="text"
                            name="note"
                            value={formData.note}
                            onChange={handleInputChange}
                        />
                    </div>

                    <button type="submit" className='bg-[#089BAB] my-8  p-4 rounded-md font-bold w-full text-white'>Send</button>


                </form>

            </div>
        </div>
    )
}

export default SendToken