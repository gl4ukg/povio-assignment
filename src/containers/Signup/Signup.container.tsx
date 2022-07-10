import { Form, Formik, FormikValues } from "formik"
import { useCallback } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import Button from "../../components/Button/Button"
import PasswordInput from "../../components/Inputs/PasswordInput/PasswordInput"
import TextInput from "../../components/Inputs/TextInput/TextInput"
import SuccessMessage from "../../components/SuccessMessage/SuccessMessage"
import { 
    setSignupModal as setSignUpModalAction,
    setLoginModal as setLoginModalAction,
    setSuccessSignUpModal as setSuccessSignUpModalAction
} from "../../store/app/action"
import { CombinedReducersState } from "../../store/combinedReducers"
import { loadSignUp } from "../../store/user/actions"
import { ProfileType } from "../../types/user.types"
import { validateCreationPassword, validateEmail, validateField, validateLastName, validateName } from "../../utils/validations"
import { signUpInitialValues } from "./constants"
import "./Signup.scss"

const Signup: React.FC = () => {
    const dispatch = useDispatch();
    
    const isSuccessSignUpModal: boolean | undefined = useSelector((state: CombinedReducersState) => state.app.isSuccessSignUpModal)
    
    const signup = useCallback((state: ProfileType) => dispatch(loadSignUp(state)), [dispatch])
    const setLoginModal = useCallback((state: boolean) => dispatch(setLoginModalAction(state)), [dispatch])
    const setSignUpModal = useCallback((state: boolean) => dispatch(setSignUpModalAction(state)), [dispatch])
    const setSuccessSignUpModal = useCallback((state: boolean) => dispatch(setSuccessSignUpModalAction(state)), [dispatch])

    const handleSubmit = (values: ProfileType, formikApi: FormikValues) => {
        signup(values)
    }
    
    return (
        <div className="signup">
            <p className="signup-title">Create an Account</p>
            <Formik
                initialValues={signUpInitialValues}
                onSubmit={handleSubmit as () => void}>
                {({errors, touched, dirty}) => (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                        <Form className="">
                            <div className="d-flex">
                                <TextInput
                                    className="username-input me-1"
                                    name="first_name"
                                    labelKey="First Name"
                                    errors={errors.first_name}
                                    touched={touched.first_name}
                                    validate={validateName}
                                    />
                                <TextInput
                                    className="username-input ms-1"
                                    name="last_name"
                                    labelKey="Last Name"
                                    errors={errors.last_name}
                                    touched={touched.last_name}
                                    validate={validateLastName}
                                    />
                            </div>
                            <TextInput
                                className="username-input"
                                name="date_of_birth"
                                labelKey="Date of Birth"
                                type="date"
                                errors={errors.date_of_birth}
                                touched={touched.date_of_birth}
                                validate={validateField}
                            />
                            <TextInput
                                autocomplete="email"
                                className="username-input"
                                name="email"
                                labelKey="Email"
                                errors={errors.email}
                                touched={touched.email}
                                validate={validateEmail}
                                />
                            <PasswordInput
                                autocomplete="current-password"
                                name="password"
                                className="mb-4"
                                labelKey="Password"
                                errors={errors.password}
                                touched={touched.password}
                                validate={validateCreationPassword}
                                />
                            <Button
                                isDisabled={!dirty}
                                isSubmit
                                isColored
                                text="Create Account"
                                className="w-100"
                            />
                        </Form>
                    </div>
                )}
            </Formik>
            {isSuccessSignUpModal && <SuccessMessage
                text="Congratulations! You have successfully signed up for FlowrSpot!!" 
                buttons={
                    <Button
                        isColored
                        text="Ok"
                        className="w-100"
                        onClick={() => {
                            setSignUpModal(false)
                            setLoginModal(true)
                            setSuccessSignUpModal(false)
                        }}
                    />
                }
            />
            }
        </div>
    )
}

export default Signup