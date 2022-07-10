export const validateEmail = (value:string): string | undefined => {
   let error;
   if (!value) {
     error = 'Field is required!';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
     error = 'Invalid email address';
   }
   return error;
}

export const validateName = (value:string): string | undefined => {
   let error;
   if (!value) {
     error = 'Field is required!';
   } else if(value.length < 2) {
    error = 'Name is too short!'
   } 
   return error;
}

export const validateLastName = (value:string): string | undefined => {
   let error;
   if (!value) {
     error = 'Field is required!';
   } else if(value.length < 2) {
    error = 'Last name is too short!'
   } 
   return error;
}

export const validateField = (value:string): string | undefined => {
   let error;
   if (!value) {
     error = 'Field is required!';
   }
   return error;
}

export const validateCreationPassword = (value:string): string | undefined => {
   let error;
   if (!value) {
     error = 'Field is required!';
   } else if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) {
    error = 'Minimum eight characters, at least one letter and one number'
   } 
   return error;
}