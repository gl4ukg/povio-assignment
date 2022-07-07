import { Form, Formik } from "formik";
import { LatLngExpression } from "leaflet"
import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../../components/Button/Button";
import FileInput from "../../../components/Inputs/FileInput/FileInput";
import TextAreaInput from "../../../components/Inputs/TextAreaInput/TextAreaInput";
import TextInput from "../../../components/Inputs/TextInput/TextInput";
import Location from "../../../components/Location/Location"
import { CombinedReducersState } from "../../../store/combinedReducers";
import { FileUpload } from "../../../types/fileUpload.types";
import { ISighting } from "../../../types/sigting.type";
import { validationSchemeNewSighting } from "../../../utils/validations";
import { newSightingInitalValues } from "./constants";
import "./NewSighting.scss"

const NewSighting:React.FC = () => {

    const position = [42.389017, 20.432032];
    const [cordinates, setCordinates] = useState<string>("");
    const [image, setImage] = useState<FileUpload>({} as FileUpload);
    const allSightings: ISighting[] | undefined = useSelector((state: CombinedReducersState) => state.sightings?.sightings?.sightings)


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
                    <p className="new-sighting__subtitle">Explore between more than {allSightings?.length} sightings</p>
                    <Formik
                        initialValues={newSightingInitalValues}
                        validationScheme={validationSchemeNewSighting}
                        onSubmit={{} as () => void}>
                        {(formikProps) => (
                            <Form className="row">
                                <div className="col-md-6">
                                    <TextInput
                                        className={"username-input"}
                                        name={'name'}
                                        labelKey={'Title of the sighting'}/>
                                </div>
                                <div className="col-md-3">
                                    <TextInput
                                        className={"username-input"}
                                        name={'description'}
                                        onClick={getCurrentPosition}
                                        value={cordinates}
                                        labelKey={'Coordinates of the sighting'}/>
                                </div>
                                <div className="col-md-3">
                                    <FileInput 
                                        value={image}
                                        className="change-avatar-input"
                                        labelKey={"Add a Photo"}
                                        setFiles={setImage}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <TextAreaInput
                                        cols="100"
                                        rows="5"
                                        className={"mb-0"}
                                        name={'description'}
                                        labelKey={'Write a description…'}/>
                                </div>
                                <div className="col-md-12 d-flex justify-content-end">
                                    <Button
                                        isSmall
                                        isColored
                                        text="Create New Sighting"
                                        className="mt-4 new-sighting__buttons"
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