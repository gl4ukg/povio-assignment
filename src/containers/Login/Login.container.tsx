import "./Login.scss";
import { Form, Formik, FormikValues } from "formik"
import Button from "../../components/Button/Button"
import PasswordInput from "../../components/Inputs/PasswordInput/PasswordInput"
import TextInput from "../../components/Inputs/TextInput/TextInput"
import { LoginType } from "../../types/user.types"
import { validateEmail, validateField } from "../../utils/validations.util"
import { loginInitialValues } from "./constants"
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { loadLogin } from "../../store/user/actions";
import { 
    setLoginModal as setLoginModalAction,
    setProfileModal as setProfileModalAction,
    setSuccessLoginModal as setSuccessLoginModalAction
} from "../../store/app/action"
import { useSelector } from "react-redux";
import { CombinedReducersState } from "../../store/combinedReducers";
import SuccessMessage from "../../components/SuccessMessage/SuccessMessage";


const Login:React.FC = () => {
    const dispatch = useDispatch();

    const isSuccessLoginModal: boolean | undefined = useSelector((state: CombinedReducersState) => state.app.isSuccessLoginModal)

    const login = useCallback((state: LoginType) => dispatch(loadLogin(state)), [dispatch])
    const setLoginModal = useCallback((state: boolean) => dispatch(setLoginModalAction(state)), [dispatch])
    const setProfileModal = useCallback((state: boolean) => dispatch(setProfileModalAction(state)), [dispatch])
    const setSuccessLoginModal = useCallback((state: boolean) => dispatch(setSuccessLoginModalAction(state)), [dispatch])

    const handleSubmit = (values: LoginType, formikApi: FormikValues) => {
        login(values)
    } 

    return (
        <div className="login">
            <p className="login-title">Welcome Back</p>
            <Formik
                initialValues={loginInitialValues}
                onSubmit={handleSubmit as () => void}>
                {({errors, touched, dirty }) => {
                    return(
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                        <Form className="">
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
                                className="mb-4"
                                name="password"
                                labelKey="Password"
                                errors={errors.password}
                                touched={touched.password}
                                validate={validateField}
                                />
                            <Button
                                isDisabled={!dirty}
                                isSubmit
                                isColored
                                className="w-100"
                                text="Login to your Account"
                            />
                        </Form>
                    </div>
                )}}
            </Formik>
            {isSuccessLoginModal &&  <SuccessMessage
                text="Congratulations! You have successfully logged into FlowrSpot!" 
                buttons={
                    <div className="row">
                        <Button
                            isSmall
                            isColored
                            text="Ok"
                            className="col-md-6"
                            onClick={() => {
                                setLoginModal(false)
                                setSuccessLoginModal(false)
                            }}
                                />
                        <Button
                            isSmall
                            text="Profile"
                            className="col-md-6"
                            onClick={() => {
                                setLoginModal(false)
                                setProfileModal(true)
                                setSuccessLoginModal(false)
                            }} />
                    </div>
                }
            />
            }
        </div>
    )
}

export default Login