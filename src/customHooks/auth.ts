import { useSelector } from "react-redux";
import { CombinedReducersState } from "../store/combinedReducers";
import { getBearerToken } from "../utils/auth"


export const useIsLoggedIn = (): boolean => {
    const isLoggedIn: boolean | undefined = useSelector((state: CombinedReducersState) => state.user?.isLoggedIn);
    const token = getBearerToken();

    return isLoggedIn || token !== null;
}