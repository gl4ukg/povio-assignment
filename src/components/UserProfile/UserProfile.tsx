import Button from "../Button/Button"
import "./UserProfile.scss"
import NoImage from "../../assets/icons/no-image.webp"
import Skeleton from "react-loading-skeleton"

interface Props {
    image?: string,
    name: string,
    sightings: string
    isLoading?: boolean
}

const UserProfile:React.FC<Props> = (props: Props) => {
    if(props.isLoading) {
        return <Skeleton count={1} />
    }
    return (
        <div className="user-profile d-flex justify-content-between">
            <div className="col d-flex flex-column flex-sm-row">
                <img className="user-profile__image" 
                    src={props.image 
                        ? props.image
                        : NoImage
                    } 
                    alt={props.image 
                        ? props.image
                        : NoImage
                    } />
                <div className="d-flex flex-column justify-content-center mt-2 mt-sm-0">
                    <p className="user-profile__name">{props.name}</p>
                    <p className="user-profile__sightings">{props.sightings}</p>
                </div>
            </div>
            <div className="col d-flex align-items-start align-items-sm-center justify-content-end">
                <Button 
                    isColored
                    isSmall
                    text="Report"
                />
            </div>
        </div>
    )
}

export default UserProfile