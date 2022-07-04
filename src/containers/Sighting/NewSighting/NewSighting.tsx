import { Form, Formik, FormikValues } from "formik";
import { LatLngExpression } from "leaflet"
import { useState } from "react";
import Button from "../../../components/Button/Button";
import TextAreaInput from "../../../components/Inputs/TextAreaInput/TextAreaInput";
import TextInput from "../../../components/Inputs/TextInput/TextInput";
import Location from "../../../components/Location/Location"
import { validationSchemeNewSighting } from "../../../utils/validations";
import { newSightingInitalValues } from "./constants";
import "./NewSighting.scss"

interface Props {

}

const NewSighting:React.FC<Props> = (props: Props) => {

    const position = [42.389017, 20.432032];
    const [cordinates, setCordinates] = useState<string>("");
    const handleSubmit = (values: any, formikApi: FormikValues) => {

    }

    function getCurrentPosition() {
        let currentLocation = ''

        navigator.geolocation.getCurrentPosition(function (position) {
            currentLocation = `${position.coords.latitude},${position.coords.longitude}`
            setCordinates(currentLocation)
        });
    }

    return (
        <div className="new-sighting">
            <Location
                position={position as LatLngExpression}
                buttons={
                    <>
                        <Button
                            isSmall
                            isColored
                            text="View on Google Maps"
                            className="me-3"
                            onClick={() => console.log("button")}
                        />
                    </>
                }
            />
            <div className="container-fluid default-container">
                <div className="form-container">
                    <p className="new-sighting__title">Add New Sighting</p>
                    <p className="new-sighting__subtitle">Explore between more than 8.427 sightings</p>
                    <Formik
                        initialValues={newSightingInitalValues}
                        validationScheme={validationSchemeNewSighting}
                        onSubmit={handleSubmit as () => void}>
                        {(formikProps) => (
                            <Form className="row">
                                <div className="col-md-6">
                                    <TextInput
                                        className={"username-input"}
                                        name={'name'}
                                        bordered
                                        labelKey={'Title of the sighting'}/>
                                </div>
                                <div className="col-md-3">
                                    <TextInput
                                        className={"username-input"}
                                        name={'description'}
                                        bordered
                                        onClick={getCurrentPosition}
                                        value={cordinates}
                                        labelKey={'Coordinates of the sighting'}/>
                                </div>
                                <div className="col-md-3"></div>
                                <div className="col-md-12">
                                    <TextAreaInput
                                        cols="100"
                                        rows="5"
                                        className={"mb-0"}
                                        name={'description'}
                                        bordered
                                        labelKey={'Write a description…'}/>
                                </div>
                                <div className="col-md-12 d-flex justify-content-end">
                                    <Button
                                        isSmall
                                        isColored
                                        text="Create New Sighting"
                                        className="mt-4"
                                        isSubmit
                                    />
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default NewSighting