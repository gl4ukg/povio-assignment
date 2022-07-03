import Button from "../../../components/Button/Button"
import SightingBox from "../../../components/SightingBox/SightingBox"
import "./SightingList.scss"

interface Props {

}

const SightingList:React.FC<Props> = (props: Props) => {
    return (
        <div className="sighting-list">
            <div className="container-fluid defaul-container">
                <div className="flowers-favorite-container">
                    <div className="d-flex align-items-start justify-content-center position-relative">
                        <div className="sighting-list__text">
                            <p className="sighting-list__text__title">Sighting List</p>
                            <p className="sighting-list__text__subtitle">Explore between more than 8.427 sightings</p>
                        </div>
                        <Button
                            isSmall
                            isColored
                            text="+ Add New Sighting" 
                            className="sighting-list__button"
                        />
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
    )
}

export default SightingList