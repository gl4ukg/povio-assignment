import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import FlowerDetailBackground from "../../../assets/images/flower-detail.jpg"
import Button from "../../../components/Button/Button";
import { CombinedReducersState } from "../../../store/combinedReducers";
import { loadFlowerDetail as loadFlowerDetailAction } from "../../../store/flowers/actions";
import { IFlower } from "../../../types/flowers.types";
import StarIcon from "../../../assets/icons/star.svg"
import BackgroundedStarIcon from "../../../assets/icons/backgrounded-star.svg"
import "./FlowerDetail.scss"
import SightingBox from "../../../components/SightingBox/SightingBox";

interface Props {

}

const FlowerDetail:React.FC<Props> = (props: Props) => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const loadFlowerDetail = useCallback((state: number) => dispatch(loadFlowerDetailAction(state)), [dispatch])
    const flower: IFlower | undefined = useSelector((state: CombinedReducersState) => state.flowers?.flowerDetail)

    useEffect(() => {
        loadFlowerDetail(Number(id))
    }, [])
 
    return (
        <div className="flower-detail">
            <div className="image-slider">
                <img src={FlowerDetailBackground} alt={FlowerDetailBackground} />
            </div>
            <div className="container-fluid defaul-container">
                <div className="flower-detail-container">
                    <div className="row">
                        <div className="col-md-3">
                            <img className="flower-detail__image" src={flower?.profile_picture} alt={flower?.profile_picture} />
                        </div>
                        <div className="col-md-9">
                            <div className="d-flex justify-content-between align-items-end h-75 ms-4">
                                <div className="flower-detail__names">
                                    <div className="d-flex align-items-center">
                                        {flower?.favorite
                                            ? <img src={BackgroundedStarIcon} alt={BackgroundedStarIcon} />
                                            : <img src={StarIcon} alt={StarIcon} />
                                        }
                                        <Button 
                                            isSmall
                                            isRounded
                                            isBlack
                                            text={`${flower?.sightings} sightings`}
                                            />
                                    </div>
                                    <p className="flower-detail__name">{flower?.name}</p>
                                    <p className="flower-detail__latin_name">{flower?.latin_name}</p>
                                </div>
                                <div className="flower-detail__buttons">
                                    <Button
                                        isColored
                                        isSmall
                                        text="+ Add New Sighting" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <ul className="flower-detail__list">
                                <li>Kingdom: Plantae</li>
                                <li>Order: Asterales</li>
                                <li>Family: Campanulaceae</li>
                                <li>Species: P. grandiflorus</li>
                            </ul>
                        </div>
                        <div className="col-md-9">
                            <div className="d-flex ms-4">
                                <p className="flower-detail__description-content">Platycodon grandiflorus (from Ancient Greek πλατύς "wide" and κώδων "bell") is a species of herbaceous flowering perennial plant of the family Campanulaceae, and the only member of the genus Platycodon. It is native to East Asia (China, Korea, Japan, and the Russian Far East).[1] It is commonly known as balloon flower[2][3] (referring to the balloon-shaped flower buds), Chinese bellflower,[2] or platycodon.[2]

Growing to 60 cm (24 in) tall by 30 cm (12 in) wide, it is an herbaceous perennial with dark green leaves and blue flowers in late summer. A notable feature of the plant is the flower bud which swells like a balloon before fully opening.[4] The five petals are fused together into a bell shape at the base, like its relatives, the campanulas. There are varieties with white, pink and purple blooms in cultivation.[5] In Korea, white flowers are more common. This plant[6] together with its cultivars 'Apoyama group'[7] and 'Mariesii'[8] have gained the Royal Horticultural Society's Award of Garden Merit.</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <hr className="my-5" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <SightingBox />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <SightingBox />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <SightingBox />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <SightingBox />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlowerDetail;