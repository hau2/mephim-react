import http from "../utils/http";
import Constant from "../shared/constants";

export const signIn = (username: string, password: string): Promise<any> => {
    return http.post(Constant.API_URL.SIGN_IN, {username, password});
};
