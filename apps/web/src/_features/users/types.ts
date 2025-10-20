export interface User {
    id: string;
    auth_id: string;
    email: string;
    first_name: string;
    last_name: string;
}

export interface CreateUserInput {
    authId: string;
    email: string;
    firstName: string;
    lastName: string;
}
