import SightingBox from "../../components/SightingBox/SightingBox"
import UserProfile from "../../components/UserProfile/UserProfile"
import Image from "../../assets/images/home-banner.jpg"

interface Props {

}

const User:React.FC<Props> = (props: Props) => {
    return (
        <div className="container-fluid defaul-container">
            <UserProfile 
                name="Adam Moore"
                sightings="47 sightings"
                image={Image} />
            <SightingBox />
        </div>
    )
}

export default User