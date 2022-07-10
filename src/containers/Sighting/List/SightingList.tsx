import { useCallback, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Button from "../../../components/Button/Button"
import SightingBox from "../../../components/SightingBox/SightingBox"
import { CombinedReducersState } from "../../../store/combinedReducers"
import { ISighting } from "../../../types/sigting.type"
import "./SightingList.scss"
import { loadAllSightings as loadAllSightingsAction } from '../../../store/sighting/actions';

const SightingList:React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const allSightings: ISighting[] | undefined = useSelector((state: CombinedReducersState) => state.sightings?.sightings?.sightings)
    const isLoading: boolean | undefined = useSelector((state: CombinedReducersState) => state.sightings?.isLoading)
    
	const loadAllSightings = useCallback(() => dispatch(loadAllSightingsAction()), [dispatch])

    useEffect(() => {
        loadAllSightings()
    }, [])

    return (
        <div className="sighting-list">
            <div className="container-fluid default-container">
                <div className="flowers-favorite-container">
                    <div className="d-flex align-items-start justify-content-center position-relative">
                        <div className="sighting-list__text">
                            <p className="sighting-list__text__title">Sighting List</p>
                            <p className="sighting-list__text__subtitle">Explore between more than {allSightings?.length} sightings</p>
                        </div>
                        <Button
                            isSmall
                            isColored
                            text="+ Add New Sighting" 
                            className="sighting-list__button"
                            onClick={() => navigate("/new-sighting")}
                        />
                    </div>
                </div>
                <div className="row">
                    {allSightings?.map((item: ISighting) => {
                        return (
                            <SightingBox 
                                key={item.id}
                                isLoading={isLoading}
                                className="col-lg-3 col-md-4 col-6"
                                goToItem={() => navigate(`/sighting/${item.id}`)}
                                item={item} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SightingList