import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { send } from '../utils/Neo';
import { useNavigate } from "react-router-dom";

function SendToken() {
    const [formData, setFormData] = useState({
        address: '',
        amount: '',
        note: ''
    });

    const navigate = useNavigate();

    // const send = async (from, to, amount) => {
    //     // Implement your send logic here
    //     // This is just a placeholder for the sake of example
    //     // You might have an API call or other async operations
    //     await new Promise(resolve => setTimeout(resolve, 1000));
    // };


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
        send("Ne6szxHuvk2LCHBTBJLf4XHXP4n1bmGSPf", "NPgmskezbTsjLgQ9Czy1VGQ7cNDM5KcPWH", "1")

        setTimeout(() => {
            navigate("/success");
          }, 10000);
    };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     console.log('Form submitted with data:', formData);
        
    //     await send("NPgmskezbTsjLgQ9Czy1VGQ7cNDM5KcPWH", "Ne6szxHuvk2LCHBTBJLf4XHXP4n1bmGSPf", "1");
        
    //     // After the send function completes, navigate to another screen
    //     // history.push('/another-screen'); // Replace '/another-screen' with your desired route

    //     navigate("/success");
    // };



    return (
        <div className='bg-[#dddfdd] h-screen'>
            <div className='bg-[#A3A3A3] flex flex-row justify-between px-10'>
                <Link to='/'>
                    <img src='/ie-logo.png' />
                </Link>

                <Link to='/login'>
                    <img src='/profile.png' className='p-4' />
                </Link>
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

                    {/* <Link to='/success'> */}
                        <button type="submit" className='bg-[#089BAB] my-8  p-4 rounded-md font-bold w-full text-white' >Send</button>
                    {/* </Link> */}

                </form>

            </div>
        </div>
    )
}

export default SendToken