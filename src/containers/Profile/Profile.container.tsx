import { Form, Formik } from "formik"
import { useCallback } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import Button from "../../components/Button/Button"
import TextInput from "../../components/Inputs/TextInput/TextInput"
import { setProfileModal as setProfileModalAction } from "../../store/app/action"
import { CombinedReducersState } from "../../store/combinedReducers"
import { ProfileType } from "../../types/user.types"
import { validationSchemeProfile } from "../../utils/validations"
import { profileInitialValues } from "./constants"

interface Props {

}

const Profile:React.FC<Props> = (props: Props) => {

    const dispatch = useDispatch();
    const isProfileModal: boolean | undefined = useSelector((state: CombinedReducersState) => state.app?.isProfileModal);
    const setProfileModal = useCallback((state: boolean) => dispatch(setProfileModalAction(state)), [dispatch])

    const handleSubmit = (payload: ProfileType) => {
        setProfileModal(false)
    }

    return (
        <div className="profile">
            <Formik
                initialValues={profileInitialValues}
                validationScheme={validationSchemeProfile}
                onSubmit={handleSubmit as () => void}>
                {(formikProps) => (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                        <Form className="">
                            <TextInput
                                className={"username-input"}
                                name={'first_name'}
                                bordered
                                labelKey={'First Name'}/>
                            <TextInput
                                className={"username-input"}
                                name={'last_name'}
                                bordered
                                labelKey={'Last Name'}/>
                            <TextInput
                                className={"username-input"}
                                name={'date_of_birth'}
                                bordered
                                labelKey={'Date of Birth'}
                                type="date"
                            />
                            <TextInput
                                className={"username-input"}
                                name={'email'}
                                bordered
                                labelKey={'Email'}/>
                            <Button
                                isDisabled={!formikProps.dirty}
                                isSubmit
                                isColored
                                isSmall
                                text={'Create Account'}
                                className={"w-100"}
                            />
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default Profile