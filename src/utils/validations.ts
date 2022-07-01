import * as Yup from "yup";

export const LOGIN_VALIDATION =  Yup.string().required("This is required field.")

export function validationSchemeLogin() {
    return Yup.object().shape({
        username: LOGIN_VALIDATION,
        password: LOGIN_VALIDATION,
    });
}


export function validationSchemeSignup() {
    return Yup.object().shape({
        first_name: LOGIN_VALIDATION,
        last_name: LOGIN_VALIDATION,
        date_of_birth: LOGIN_VALIDATION,
        email: LOGIN_VALIDATION,
        password: LOGIN_VALIDATION
    });
}