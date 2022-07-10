import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import FlowerDetailBackground from "../../../assets/images/flower-detail.jpg"
import Button from "../../../components/Button/Button";
import { CombinedReducersState } from "../../../store/combinedReducers";
import { loadFlowerDetail as loadFlowerDetailAction } from "../../../store/flowers/actions";
import { IFlower } from "../../../types/flowers.types";
import StarIcon from "../../../assets/icons/star.svg"
import BackgroundedStarIcon from "../../../assets/icons/backgrounded-star.svg"
import "./FlowerDetail.scss"
import SightingBox from "../../../components/SightingBox/SightingBox";
import { ISighting } from "../../../types/sigting.type";

const FlowerDetail:React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const loadFlowerDetail = useCallback((state: number) => dispatch(loadFlowerDetailAction(state)), [dispatch])

    const flower: IFlower | undefined = useSelector((state: CombinedReducersState) => state.flowers?.flowerDetail)
    const allSightings: ISighting[] | undefined = useSelector((state: CombinedReducersState) => state.sightings?.sightings?.sightings)
    const isLoading: boolean | undefined = useSelector((state: CombinedReducersState) => state.sightings?.isLoading)

    useEffect(() => {
        loadFlowerDetail(Number(id))
    }, [])
 
    return (
        <div className="flower-detail">
            <div className="image-slider">
                <img src={FlowerDetailBackground} alt={FlowerDetailBackground} />
            </div>
            <div className="container-fluid default-container">
                <div className="flower-detail-container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <img className="flower-detail__image" src={flower?.profile_picture} alt={flower?.profile_picture} />
                        </div>
                        <div className="col-lg-9 col-md-8">
                            <div className="d-flex flower-detail__names_buttons flex-column flex-sm-row justify-content-between align-items-start align-items-sm-end h-75 ms-4">
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
                                        text="+ Add New Sighting"
                                        onClick={() => navigate("/new-sighting")} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <ul className="flower-detail__list">
                                {flower?.features?.map((item: string, idx: number) => {
                                    return <li key={idx}>{item}</li>
                                })}
                            </ul>
                        </div>
                        <div className="col-lg-9 col-md-8">
                            <div className="d-flex ms-4">
                                <p className="flower-detail__description-content">{flower?.content}</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <hr className="my-5" />
                        </div>
                    </div>
                    <div className="row">
                    {allSightings?.map((item: ISighting) => {
                        return (
                            <SightingBox 
                                key={item.id}
                                isLoading={isLoading}
                                goToItem={() => navigate(`/sighting/${item.id}`)}
                                item={item} 
                                className="col-lg-3 col-md-4 col-sm-6 col-12" 
                                />
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlowerDetail;