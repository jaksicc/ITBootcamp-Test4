import { useEffect, useState } from "react"
import { getRocketById } from "../service"
import RocketInfo from "./RocketInfo"

const Launch = ({ launch }) => {

    useEffect(() => {
        getRocketById(launch.rocket).then(res => {
            setRocket(res.data)
        })
    }, [])


    const [rocket, setRocket] = useState([])
    // console.log(rocket)

    return (
        <>
            <p>{launch.name}</p>
            <img src={launch.links.patch.small} alt="" />
            <p>{new Date(launch.static_fire_date_unix * 1000).toLocaleDateString()}</p>
            <button onClick={() => {

                <RocketInfo rocket={rocket} />
                console.log(rocket);

                // getRocketById(launch.rocket).then(res => {
                //     setRocket(res.data)
                // })
            }}>More Info</button>

            <hr />
        </>
    )
}

export default Launch