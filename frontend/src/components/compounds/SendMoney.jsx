import react, { useState } from 'react';
import { SubHeading, Title } from '../atoms/SubHeading';
import UserLogo from '../atoms/UserLogo';
import { InputBox } from '../atoms/InputBox';
import { Button, GreenButton } from '../atoms/Button';
import { Heading } from '../atoms/Heading';
import { BACKEND_URL } from '../../config';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

export default function SendMoney({handleCloseModal, classname, username}){

    const [amount, setAmount] = useState(0);
    const [searchParams] = useSearchParams();
    const userId = searchParams.get("id");
    const name = searchParams.get("name");

    async function handleSendMoney(){

        const data = {
            to : userId,
            amount : amount,
        }

        const header = {
            headers : {
                Authorization : "BEARER " + localStorage.getItem("token"),
            },
        }

        try{
            const res = await axios.post(`${BACKEND_URL}/api/v1/account/transfer`, data, header);

        } catch (error){
            console.log("transfer failed, ", error);
        }

    }

    return(
        <div className={` bg-white absolute block w-fit border pl-8 pb-8 bottom-[30%] right-[36%] ${classname}`}>
            <div className='flex justify-center relative'>
                <Heading classname="pt-4">Send Money</Heading>
                <Button onClick={handleCloseModal} classname="absolute px-0 right-0 top-3 rounded-[50%] w-[2rem] mr-4 bg-black text-black font-bold ">X</Button>
            </div>
            

            <div className='mt-8 pr-8'>
                <div className='flex items-center'>
                    <UserLogo color="bg-green-500 text-white">A</UserLogo>
                    <Title>{username}</Title>
                </div>
                
                <p className='font-semibold'>Amount (in Rs)</p>
                <InputBox onChange={(e) => {setAmount(e.target.value)}} >Enter Amount</InputBox>
                <GreenButton onClick={handleSendMoney}  name="Initiate transfer" classname="px-5"></GreenButton>
            </div>
        </div>
    )
};