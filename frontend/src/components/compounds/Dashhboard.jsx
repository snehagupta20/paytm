import { useState } from "react";
import { Balance } from "../atoms/Balance";
import AppBar from "../molecules/Appbar";
import { Users } from "../molecules/Users";

export default function Dashboard(){
    // showing modal
    const [showModal, setShowModal] = useState({show:false, val:""});
    // const [username, setUsername] = useState(null);

    // handling show modal
    function handleModalChange(name){
        setShowModal({show:true, val:name});
        
    }

    // handling close modal
    function handleCloseModal(){
        setShowModal({show:false, val:""});
    }

    return(
        <div >
            <div className={`${showModal.show ? "opacity-30" : ""}`}>
                <AppBar></AppBar>
                <hr></hr>
                <Balance></Balance>
            </div>
            <Users showModal={showModal} handleCloseModal={handleCloseModal} handleModalChange={handleModalChange}  ></Users>
        </div>
    )
};