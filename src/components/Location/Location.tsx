import "./Location.scss"
import { LatLngExpression } from "leaflet"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { ReactElement } from "react"
import L from 'leaflet';

interface Props {
    position: LatLngExpression
    buttons: ReactElement
}

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const Location:React.FC<Props> = (props: Props) => {
    return (
        <div className="location">
            <MapContainer center={props.position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={props.position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
            <div className="location-layer">
                <div className="container-fluid default-container position-relative h-100">
                    <div className="d-flex location-layer__button">
                        {props.buttons}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location