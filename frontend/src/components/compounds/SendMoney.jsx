import react from 'react';
import { SubHeading, Title } from '../atoms/SubHeading';
import UserLogo from '../atoms/UserLogo';
import { InputBox } from '../atoms/InputBox';
import { Button, GreenButton } from '../atoms/Button';
import { Heading } from '../atoms/Heading';

export default function SendMoney({handleCloseModal, classname, username}){
    console.log("reached username ", username);
    return(
        <div className={` bg-white absolute block w-fit border pl-8 pb-8 bottom-[30%] right-[36%] ${classname}`}>
            <div className='flex justify-center relative'>
                <Heading classname="pt-4">Send Money</Heading>
                <Button onClick={handleCloseModal} classname="absolute px-0 right-0 top-3 rounded-[50%] w-[2rem] mr-0 bg-black text-black font-bold ">X</Button>
            </div>
            

            <div className='mt-8 pr-8'>
                <div className='flex items-center'>
                    <UserLogo color="bg-green-500 text-white">A</UserLogo>
                    <Title>{username}</Title>
                </div>
                
                <p className='font-semibold'>Amount (in Rs)</p>
                <InputBox>Enter Amount</InputBox>
                <GreenButton name="Initiate transfer" classname="px-5"></GreenButton>
            </div>
        </div>
    )
};