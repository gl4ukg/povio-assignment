import styles from "./Card.module.scss"
import {ReactComponent as StarIcon} from "../../assets/icons/star.svg"
import {ReactComponent as BackgroundedStarIcon} from "../../assets/icons/backgrounded-star.svg"
import { ICard } from "../../types/card.types"
import Button from "../Button/Button"


interface Props {
    item?: ICard
}

const Card:React.FC<Props> = (props: Props) => {

    const { item } = props;

    return (
        <div className={styles.card}>
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
                        isBllack
                        text={`${item?.sightings} sightings`}
                        />
                </div>
            </div>
        </div>
    )
}

export default Card