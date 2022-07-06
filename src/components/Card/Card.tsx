import styles from "./Card.module.scss"
import {ReactComponent as StarIcon} from "../../assets/icons/star.svg"
import {ReactComponent as BackgroundedStarIcon} from "../../assets/icons/backgrounded-star.svg"
import { ICard } from "../../types/card.types"
import Button from "../Button/Button"
import Skeleton from "react-loading-skeleton"
import classNames from "classnames"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { CombinedReducersState } from "../../store/combinedReducers"


interface Props {
    item?: ICard,
    isLoading: boolean,
    className?: string
    goTo?: () => void;
    setFavoriteFlower?: () => void
}

const Card:React.FC<Props> = (props: Props) => {

    const navigate = useNavigate()
	const token = localStorage.getItem('bearerToken')
	const isLogin: boolean | undefined = useSelector((state: CombinedReducersState) => state.user?.isLogin)
    const { item, isLoading, className, setFavoriteFlower } = props;

    if(isLoading) return <Skeleton count={1} />

    return (
        <div
            className={classNames(styles.card, {
            [props.className as string]: className
        })}>
            <img 
                src={item?.profile_picture} 
                alt={item?.profile_picture}
                className={styles.card__image}
            />
            <div className={classNames(styles.card__wrapper, {
                "justify-content-end": !isLogin
            })}>
                {(token || isLoading) &&
                    <button 
                        onClick={setFavoriteFlower}
                        className={styles.card__favoriteButton}>
                        {item?.favorite
                            ? <BackgroundedStarIcon />
                            : <StarIcon />
                        }
                    </button>
                }
                <div className={styles.card__description}>
                    <p 
                        onClick={() => navigate(`/flower/${item?.id}`)} 
                        className={styles.card__title}>{item?.name}</p>
                    <p
                        onClick={() => navigate(`/flower/${item?.id}`)} 
                        className={styles.card__subTitle}>{item?.latin_name}</p>
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