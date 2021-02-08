import { useEffect, useState } from "react"
import { getRocketById } from "../service"

const RocketInfo = ({ rocket }) => {



    // useEffect(()=>{
    //     getRocketById(launch.rocket).then(res =>{
    //         setRocket(res.data)
    //     })
    // },[])

    return (
        <>
            <p>{rocket.name}</p>
            <p>{rocket.active}</p>
        </>
    )
}

export default RocketInfo