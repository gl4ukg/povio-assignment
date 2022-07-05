import Button from "../Button/Button"
import "./UserProfile.scss"
import NoImage from "../../assets/icons/no-image.webp"

interface Props {
    image?: string,
    name: string,
    sightings: string
}

const UserProfile:React.FC<Props> = (props: Props) => {

    const { image, name, sightings } = props;

    return (
        <div className="user-profile d-flex justify-content-between">
            <div className="col d-flex">
                <img className="user-profile__image" 
                    src={image 
                        ? image
                        : NoImage
                    } 
                    alt={image 
                        ? image
                        : NoImage
                    } />
                <div className="d-flex flex-column justify-content-center">
                    <p className="user-profile__name">{name}</p>
                    <p className="user-profile__sightings">{sightings}</p>
                </div>
            </div>
            <div className="col d-flex align-items-center justify-content-end">
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