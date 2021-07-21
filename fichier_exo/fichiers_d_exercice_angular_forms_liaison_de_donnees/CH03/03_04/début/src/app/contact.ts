export class Contact {
    constructor(
        public first_name: string,
        public last_name: string,
        public email: string,
        public gender: string,
        // is optional
        public company?: string,
    ) {}
}

export const contacts: Contact[] = [
    {
        "first_name": "Manny",
        "last_name": "Henri",
        "email": "me@em4.com",
        "gender": "male",
        "company": "Linkedin"
    },
    {
        "first_name": "Madi",
        "last_name": "Myh",
        "email": "me@344.com",
        "gender": "female",
        "company": "Linkedin"
    }
]

export const companies = [ 'Linkedin', 'Manny Designs', 'Apple', 'Other'];
