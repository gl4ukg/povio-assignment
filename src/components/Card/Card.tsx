import styles from "./Card.module.scss"
import {ReactComponent as StarIcon} from "../../assets/icons/star.svg"
import {ReactComponent as BackgroundedStarIcon} from "../../assets/icons/backgrounded-star.svg"
import { ICard } from "../../types/card.types"
import Button from "../Button/Button"
import Skeleton from "react-loading-skeleton"
import classNames from "classnames"
import { useNavigate } from "react-router-dom"


interface Props {
    item?: ICard,
    isLoading: boolean,
    className?: string
    goTo?: () => void;
}

const Card:React.FC<Props> = (props: Props) => {

    const navigate = useNavigate()
    const { item, isLoading, className } = props;

    if(isLoading) return <Skeleton count={1} />
    return (
        <div
            onClick={() => navigate(`/flower/${item?.id}`)} 
            className={classNames(styles.card, {
            [props.className as string]: className
        })}>
            <img 
                src={item?.profile_picture} 
                alt={item?.profile_picture}
                className={styles.card__image}
            />
            <div className={styles.card__wrapper}>
                <button className={styles.card__favoriteButton}>
                    {item?.favorite
                        ? <BackgroundedStarIcon />
                        : <StarIcon />
                    }
                </button>
                <div className={styles.card__description}>
                    <p className={styles.card__title}>{item?.name}</p>
                    <p className={styles.card__subTitle}>{item?.latin_name}</p>
                    <Button 
                        isSmall
                        isRounded
                        isBlack
                        text={`${item?.sightings} sightings`}
                        />
                </div>
            </div>
        </div>
    )
}

export default Card