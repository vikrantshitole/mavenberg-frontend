export interface AuthState {
    isAuthenticated: boolean;
    user: {
        id: string;
        email: string;
        first_name: string;
        last_name: string;
        role_id: string;
        phone_number: string;
        role: {
            id: string;
            name: string;
        }
    }
    token: string;
}