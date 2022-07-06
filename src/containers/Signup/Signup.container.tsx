import { Form, Formik, FormikValues } from "formik"
import { useCallback } from "react"
import { useDispatch } from "react-redux"
import Button from "../../components/Button/Button"
import PasswordInput from "../../components/Inputs/PasswordInput/PasswordInput"
import TextInput from "../../components/Inputs/TextInput/TextInput"
import { setSignupModal as setSignUpModalAction } from "../../store/app/action"
import { loadSignUp } from "../../store/user/actions"
import { ProfileType } from "../../types/user.types"
import { validationSchemeSignup } from "../../utils/validations"
import { signUpInitialValues } from "./constants"
import "./Signup.scss"


const Signup:React.FC = () => {

    const dispatch = useDispatch();
    const signup = useCallback((state: ProfileType) => dispatch(loadSignUp(state)), [dispatch])
    const setSignUpModal = useCallback((state: boolean) => dispatch(setSignUpModalAction(state)), [dispatch])

    const handleSubmit = (values: ProfileType, formikApi: FormikValues) => {
        signup(values)
        formikApi.resetForm()
        setSignUpModal(false)
    }

    return (
        <div className="signup">
            <p className="signup-title">Create an Account</p>
            <Formik
                initialValues={signUpInitialValues}
                validationScheme={validationSchemeSignup}
                onSubmit={handleSubmit as () => void}>
                {(formikProps) => (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                        <Form className="">
                            <div className="d-flex">
                                <TextInput
                                    className={"username-input me-1"}
                                    name={'first_name'}
                                    bordered
                                    labelKey={'First Name'}/>
                                <TextInput
                                    className={"username-input ms-1"}
                                    name={'last_name'}
                                    bordered
                                    labelKey={'Last Name'}/>
                            </div>
                            <TextInput
                                className={"username-input"}
                                name={'date_of_birth'}
                                bordered
                                labelKey={'Date of Birth'}
                                type="date"
                            />
                            <TextInput
                                autocomplete="email"
                                className={"username-input"}
                                name={'email'}
                                bordered
                                labelKey={'Email'}/>
                            <PasswordInput
                                autocomplete="current-password"
                                name={'password'}
                                className="mb-4"
                                bordered
                                labelKey={'Password'}/>
                            <Button
                                isDisabled={!formikProps.dirty}
                                isSubmit
                                isColored
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

export default Signup