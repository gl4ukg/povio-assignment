import "./Login.scss";
import { Form, Formik, FormikValues } from "formik"
import Button from "../../components/Button/Button"
import PasswordInput from "../../components/Inputs/PasswordInput/PasswordInput"
import TextInput from "../../components/Inputs/TextInput/TextInput"
import { LoginType } from "../../types/user.types"
import { validationSchemeLogin } from "../../utils/validations"
import { loginInitialValues } from "./constants"
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { loadLogin } from "../../store/user/actions";
import { setLoginModal as setLoginModalAction } from "../../store/app/action"

interface Props {

}

const Login:React.FC<Props> = (props: Props) => {

    const dispatch = useDispatch();
    const login = useCallback((state: LoginType) => dispatch(loadLogin(state)), [dispatch])
    const setLoginModal = useCallback((state: boolean) => dispatch(setLoginModalAction(state)), [dispatch])

    const handleSubmit = (values: LoginType, formikApi: FormikValues) => {
        login(values)
        formikApi.resetForm()
        setLoginModal(false)
    }
    return (
        <div className="login">
            <p className="login-title">Welcome Back</p>
            <Formik
                initialValues={loginInitialValues}
                validationScheme={validationSchemeLogin}
                onSubmit={handleSubmit as () => void}>
                {(formikProps) => (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                        <Form className="">
                            <TextInput
                                className={"username-input"}
                                name={'email'}
                                bordered
                                labelKey={'Email'}/>
                            <PasswordInput
                                className="mb-4"
                                name={'password'}
                                bordered
                                labelKey={'Password'}/>
                            <Button
                                isDisabled={!formikProps.dirty}
                                isSubmit
                                isColored
                                className="w-100"
                                text={'Login to your Account'}
                            />
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default Login