import { Balance } from "../atoms/Balance";
import AppBar from "../molecules/Appbar";
import { Users } from "../molecules/Users";

export default function Dashboard(){
    return(
        <>
            <AppBar></AppBar>
            <hr></hr>
            <Balance></Balance>
            <Users></Users>
        </>
    )
};