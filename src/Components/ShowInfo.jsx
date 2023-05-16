import { ItemInfo } from "./ItemInfo"

export const ShowInfo = ({location}) => {
    return(
        <div className="show-info-container">
            <div className="info-sections-content">
                <div className="sections">
                    <ItemInfo title={"IP ADRESS"} info={location.ip}/>
                    <ItemInfo title={"LOCATION"} info={location.region}/>
                    <ItemInfo title={"TIMEZONE"} info={location.timezone}/>
                    <ItemInfo title={"ISP"} info={location.org}/>
                </div>
            </div>
        </div>
    )
}