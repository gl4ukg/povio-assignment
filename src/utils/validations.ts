export function validateEmail(value:string) {
   let error;
   if (!value) {
     error = 'Field is required!';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
     error = 'Invalid email address';
   }
   return error;
}

export function validateName(value:string) {
   let error;
   if (!value) {
     error = 'Field is required!';
   } else if(value.length < 2) {
    error = 'Name is too short!'
   } 
   return error;
}

export function validateLastName(value:string) {
   let error;
   if (!value) {
     error = 'Field is required!';
   } else if(value.length < 2) {
    error = 'Last name is too short!'
   } 
   return error;
}

export function validateField(value:string) {
   let error;
   if (!value) {
     error = 'Field is required!';
   }
   return error;
}

export function validateCreationPassword(value:string) {
   let error;
   if (!value) {
     error = 'Field is required!';
   } else if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) {
    error = 'Minimum eight characters, at least one letter and one number'
   } 
   return error;
}