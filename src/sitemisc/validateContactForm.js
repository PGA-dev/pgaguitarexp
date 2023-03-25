export const validateContactForm = (values) => {
    const errors = {};

    // First Name
    const regF = /^[A-Z][a-z]{1,20}$/;
    if (!regF.test(values.firstName)) {
        errors.firstName = 'First name  required (Xxxx)...2-15 chars';
    }

    // Last Name
    const regL = /^[A-Z][a-z]{1,20}$/;
    if (!regL.test(values.lastName)) {
        errors.lastName = 'The Last name required (Xxxx) ...2-15 chars';
    }

    // Country
    const regO = /^[A-Z a-z]{2,}$/;
    if (!regO.test(values.country)) {
        errors.country = 'The Country should be at least 2 chars';
    }

    //Email
    const regE = /^(\w)+([.-]?\w+)*(@)([\w]+)([.-]?\w+)*\.[a-z]{2,3}$/;
    if (!regE.test(values.email)) {
        errors.email = 'Email required: xxxxxx@xxxx.xxx';
    }

    //Feedback
    if (!values.feedback) {
        errors.feedback = 'Feedback Field Required';
    }

    return errors;
};


