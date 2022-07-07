import "./SightingBox.scss"
import Button from "../Button/Button";
import LocationIcon from "../../assets/icons/location.svg"
import ChatIcon from "../../assets/icons/chat.svg"
import HeartIcon from "../../assets/icons/heart.svg"
import NoImage from "../../assets/icons/no-image.webp"
import { ISighting } from "../../types/sigting.type";
import Skeleton from "react-loading-skeleton";
import classNames from "classnames";

interface Props {
    isLoading?: boolean,
    item?: ISighting,
    goToItem?: () => void,
    className?: string,
}

const SightingBox:React.FC<Props> = (props: Props) => {

    const { item, isLoading, goToItem, className } = props;

    if(isLoading) return <Skeleton count={1} />
   
    return (
        <div 
            className={classNames("sighting-box", {
                [className as string]: className
            })}>
            <img 
                onClick={goToItem}
                className="sighting-box__image" 
                src={item?.picture 
                    ? `https://${item?.picture}`
                    : NoImage
                }
                alt={item?.picture 
                    ? item?.picture
                    : NoImage}
            />
            <Button
                isSmall
                isRounded
                isIcon={LocationIcon}
                text="San Francisco, US"
                className="sighting-box__button" />
            <div className="sighting-box__about">
                <div className="sighting-box__about__icon">
                    <img 
                        className="sighting-box__about__icon__img" 
                        src={item?.user?.profile_picture
                            ? item?.user?.profile_picture
                            : NoImage
                        } 
                        alt={item?.user?.profile_picture
                            ? item?.user?.profile_picture
                            : NoImage
                        }
                    />
                    <div className="d-flex flex-column">
                        <p className="sighting-box__about__name">{item?.name}</p>
                        <p className="sighting-box__about__username">by {item?.user?.full_name}</p>
                    </div>
                </div>
                <p className="sighting-box__about__description">
                    {item?.description}
                </p>
                <hr />
                <div className="d-flex align-items-center justify-content-between sighting-box__about__buttons">
                    <button className="comment">
                        <img src={ChatIcon} alt={ChatIcon} />
                        <p>{item?.comments_count} Comments</p>
                    </button>
                    <button className="like">
                        <img src={HeartIcon} alt={HeartIcon} />
                        <p>{item?.likes_count} Favorites</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SightingBox;