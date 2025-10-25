export class Contacts {
    static AUTH_PATH = "api/auth";
    static API_CONFIG = {
        AUTH: {
            LOGIN: `${Contacts.AUTH_PATH}/login`,
            REGISTER: `${Contacts.AUTH_PATH}/register`,
            LOGOUT: `${Contacts.AUTH_PATH}/logout`,
            REFRESH_TOKEN: `${Contacts.AUTH_PATH}/refresh-token`,
        },
    };
}
