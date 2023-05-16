import { useState, useEffect } from 'react';

import { ShowInfo } from './ShowInfo';
import { MapContent } from './MapComponent';

import imageButtom from '../assets/icon-arrow.svg';

export const Header = () => {

    const [ip, setIp] = useState()
    const [location, setLocation] = useState({
        ip: "8.8.8.8",
        region: "California",
        timezone: "America/Los_Angeles",
        org: "Google LLC",
        latitude: "37.42301",   
        longitude: "-122.083352"
    })

    function handleSubmit(e) {
        e.preventDefault()
        async function getDatesIp(){
            const response = await fetch(`https://ipapi.co/${ip}/json/`)
            const data = await response.json()
            console.log(data)
            if(data.error){
                alert(`¡¡EORROR!! REASON:${data.reason}`)
            }
            else if(!data.error){
                setLocation(data)
            }
        }
        getDatesIp()
    }

    function lisenChange(e) {
        setIp(e.target.value)
    }

    return(
        <div>
        <header className="header">
            <form className="form-get-ip" onSubmit={handleSubmit}>
                <h2 className='title-get-ip'>IP Address Tracker</h2>
                <div className='get-ip'>
                    <input type='text' placeholder="Enter a your Ip" onChange={lisenChange}></input>
                    <button><img src={imageButtom} alt=""></img></button>
                </div>
            </form>
            <ShowInfo location={location}/>
        </header>
        <MapContent position={location}/>
        </div>
    )
}