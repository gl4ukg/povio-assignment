import "./Location.scss"
import { LatLngExpression } from "leaflet"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

interface Props {
    position: LatLngExpression
    buttons: any
}

const Location:React.FC<Props> = (props: Props) => {

    const { position, buttons } = props;

    return (
        <div className="location">
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
            <div className="location-layer">
                <div className="container-fluid default-container position-relative h-100">
                    <div className="d-flex location-layer__button">
                        {buttons}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location