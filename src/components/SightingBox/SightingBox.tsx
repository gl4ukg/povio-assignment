import "./SightingBox.scss"
import Button from "../Button/Button";
import LocationIcon from "../../assets/icons/location.svg"
import ChatIcon from "../../assets/icons/chat.svg"
import HeartIcon from "../../assets/icons/heart.svg"
import Image from "../../assets/images/home-banner.jpg"
import NoImage from "../../assets/icons/no-image.webp"

interface Props {
    // item:
}

const SightingBox:React.FC<Props> = (props: Props) => {
    return (
        <div className="sighting-box">
            <img 
                className="sighting-box__image" 
                src={Image 
                    ? Image
                    : NoImage
                }
                alt={Image}
            />
            <Button
                isSmall
                isRounded
                isIcon={LocationIcon}
                text="San Francisco, US"
                className="sighting-box__button" />
            <div className="sighting-box__about">
                <div className="sighting-box__about__icon">
                    <img className="sighting-box__about__icon__img" src={Image} alt={Image} />
                    <div className="d-flex flex-column">
                        <p className="sighting-box__about__name">Balcony Flower</p>
                        <p className="sighting-box__about__username">by Adam Moore</p>
                    </div>
                </div>
                <p className="sighting-box__about__description">
                    Platycodon grandiflorus (from Ancient Greek πλατύς "wide" and κώδων "bell") is a species of herbaceous flowering perennial plant of the …
                </p>
                <hr />
                <div className="d-flex align-items-center sighting-box__about__buttons">
                    <button className="comment">
                        <img src={ChatIcon} alt={ChatIcon} />
                        <p>18 Comments</p>
                    </button>
                    <button className="like">
                        <img src={HeartIcon} alt={HeartIcon} />
                        <p>12 Favorites</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SightingBox;