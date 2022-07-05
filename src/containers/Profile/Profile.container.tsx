import { Form, Formik } from "formik"
import { ChangeEvent, useCallback, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import Button from "../../components/Button/Button"
import FileInput from "../../components/Inputs/FileInput/FileInput"
import TextInput from "../../components/Inputs/TextInput/TextInput"
import { setProfileModal as setProfileModalAction } from "../../store/app/action"
import { CombinedReducersState } from "../../store/combinedReducers"
import { ICard } from "../../types/card.types"
import { FileUpload } from "../../types/fileUpload.types"
import { ProfileType } from "../../types/user.types"
import { validationSchemeProfile } from "../../utils/validations"
import { profileInitialValues } from "./constants"
import "./Profile.scss"
import Avatar from 'react-avatar-edit'
import NoImage from "../../assets/icons/no-image.webp"


interface Props {

}

const Profile:React.FC<Props> = (props: Props) => {

    const dispatch = useDispatch();
    const [userAvatar, setUserAvatar] = useState<ChangeEvent<HTMLInputElement> | File>({} as ChangeEvent<HTMLInputElement> | File)
    const [preview, setPreview] = useState(null)
    const isProfileModal: boolean | undefined = useSelector((state: CombinedReducersState) => state.app?.isProfileModal);
    const user: ProfileType | undefined = useSelector((state: CombinedReducersState) => state.user?.userAboutMe);
    const setProfileModal = useCallback((state: boolean) => dispatch(setProfileModalAction(state)), [dispatch])
    const flowers: ICard[] | undefined = useSelector((state: CombinedReducersState) => state.flowers?.flowers?.flowers);


    const handleSubmit = (payload: ProfileType) => {
        setProfileModal(false)
    }
    

    return (
        <div className="profile">
            <Formik
                initialValues={{
                    first_name: user?.first_name || "",
                    last_name: user?.last_name || "",
                    date_of_birth: user?.date_of_birth || "",
                    email: user?.email || ""
                }}
                validationScheme={validationSchemeProfile}
                onSubmit={handleSubmit as () => void}>
                {(formikProps) => (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                        <Form className="">
                        <div className="avatar">
                            {/* <Avatar
                                width={390}
                                // height={295}
                                // onCrop={onCrop}
                                // onClose={onClose}
                                src={""}
                                onFileLoad={(e: ChangeEvent<HTMLInputElement> | File) => setUserAvatar(e)}
                            /> */}
                        </div>
                        
                            <TextInput
                                disabled
                                className={"username-input"}
                                name={'first_name'}
                                bordered
                                labelKey={'First Name'}/>
                            <TextInput
                                disabled
                                className={"username-input"}
                                name={'last_name'}
                                bordered
                                labelKey={'Last Name'}/>
                            <TextInput
                                disabled
                                className={"username-input"}
                                name={'date_of_birth'}
                                bordered
                                labelKey={'Date of Birth'}
                                type="date"
                            />
                            <TextInput
                                disabled
                                className={"username-input"}
                                name={'email'}
                                bordered
                                labelKey={'Email'}/>
                            <div className="d-flex justify-content-center">
                                <Button
                                    isDisabled={!formikProps.dirty}
                                    isSubmit
                                    isColored
                                    isSmall
                                    text={'LogOut'}
                                />
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default Profile