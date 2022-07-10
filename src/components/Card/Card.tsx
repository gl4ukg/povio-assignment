import styles from "./Card.module.scss"
import {ReactComponent as StarIcon} from "../../assets/icons/star.svg"
import {ReactComponent as BackgroundedStarIcon} from "../../assets/icons/backgrounded-star.svg"
import { ICard } from "../../types/card.types"
import Button from "../Button/Button"
import Skeleton from "react-loading-skeleton"
import classNames from "classnames"
import { useNavigate } from "react-router-dom"
import { useIsLoggedIn } from "../../customHooks/auth"
import { getBearerToken } from "../../utils/auth"

interface Props {
    item?: ICard,
    isLoading: boolean,
    className?: string
    goTo?: () => void;
    setFavoriteFlower?: () => void
}

const Card:React.FC<Props> = (props: Props) => {
    const token = getBearerToken();
    const navigate = useNavigate()
	const isLoggedIn: boolean = useIsLoggedIn();

    if(props.isLoading) {
        return <Skeleton count={1} />
    }

    return (
        <div
            className={classNames(styles.card, {
            [props.className as string]: props.className
        })}>
            <img 
                src={props.item?.profile_picture} 
                alt={props.item?.profile_picture}
                className={styles.card__image}
            />
            <div className={classNames(styles.card__wrapper, {
                    "justify-content-end": !isLoggedIn
                })}
            >
                {(token || props.isLoading) &&
                    <button 
                        onClick={props.setFavoriteFlower}
                        className={styles.card__favoriteButton}>
                        {props.item?.favorite
                            ? <BackgroundedStarIcon />
                            : <StarIcon />
                        }
                    </button>
                }
                <div className={styles.card__description}>
                    <p 
                        onClick={() => navigate(`/flower/${props.item?.id}`)} 
                        className={styles.card__title}>{props.item?.name}</p>
                    <p
                        onClick={() => navigate(`/flower/${props.item?.id}`)} 
                        className={styles.card__subTitle}>{props.item?.latin_name}</p>
                    <Button 
                        isSmall
                        isRounded
                        isBlack
                        text={`${props.item?.sightings} sightings`}
                        />
                </div>
            </div>
        </div>
    )
}

export default Card