import * as Yup from "yup";

export const LOGIN_VALIDATION =  Yup.string()
    .required("Username or email is required field.")

export const NAME_VALIDATION = Yup.string()
    .min(2, "Too Short!")
    .required("Name is too short.");

export const LAST_NAME_VALIDATION = Yup.string()
    .min(2, "Too Short!")
    .required("Last name is too short.");

export const EMAIL_VALIDATION = Yup.string()
    .email()
    .required("Email is required field.");

export const LOGIN_PASSWORD_VALIDATION =  Yup.string()
    .required("Password is required field.");

    
export const BIRTHDAY_VALIDATION =  Yup.string()
    .required("Birthday is required field.")
    
export const SIGNUP_PASSWORD_VALIDATION =  Yup.string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z0-9]/, 'Password can only contain Latin letters and numbers.')
    
export const SIGHTING_TITLE_VALIDATION = Yup.string()
    .required("Sighting Title is required field.");

export const LAT_LONG_VALIDATION = Yup.string()
    .required("Lat and Long is required field.");

export const DESCRIPTION_VALIDATION = Yup.string()
    .required("Description is required field."); 

export const PICTURE_VALIDATION = Yup.string()
    .required("Picture is required field.");

export const COMMENT_VALIDATION = Yup.string()
    .required("Comment is required field.");

export function validationSchemeLogin() {
    return Yup.object({
        username: LOGIN_VALIDATION,
        password: LOGIN_PASSWORD_VALIDATION,
    });
}

export function validationSchemeSignup() {
    return Yup.object().shape({
        first_name: Yup.string()
    .required("Username or email is required field."),
        last_name: LAST_NAME_VALIDATION,
        date_of_birth: BIRTHDAY_VALIDATION,
        email: EMAIL_VALIDATION,
        password: SIGNUP_PASSWORD_VALIDATION
    });
}

export function validationSchemeProfile() {
    return Yup.object().shape({
        first_name: NAME_VALIDATION,
        last_name: LAST_NAME_VALIDATION,
        date_of_birth: BIRTHDAY_VALIDATION,
        email: EMAIL_VALIDATION
    });
}

export function validationSchemeComment() {
    return Yup.object().shape({
        comment: COMMENT_VALIDATION
    });
}

export function validationSchemeNewSighting() {
    return Yup.object().shape({
        name: SIGHTING_TITLE_VALIDATION,
        description: DESCRIPTION_VALIDATION,
        latLong: LAT_LONG_VALIDATION,
        picture: PICTURE_VALIDATION,
    });
}