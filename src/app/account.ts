export class Account {

    constructor(
        public lastName: string,
        public firstName: string,
        public email: string,
        public password: string,
        public gender?: string
    ){}
    
}

export const accounts: Account[] = [
    {
        "lastName" : "Beurre",
        "firstName" : "jambon",
        "email" : "jb@jb.fr",
        "password" : "testotes",
        "gender" : "male"

    },
    {
        "lastName" : "Beurrette",
        "firstName" : "jambonne",
        "email" : "jb@jbne.fr",
        "password" : "testotees",
        "gender" : "female"

    }
]

export const gender = [ 'male' , 'female' , 'other' ];
