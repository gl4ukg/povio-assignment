import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { CombinedReducersState } from "../../../store/combinedReducers"
import { ProfileType } from "../../../types/user.types";
import { getBearerToken } from "../../../utils/auth"
import NoImage from "../../../assets/icons/no-image.webp"
import Button from "../../Button/Button";
import { 
    setProfileModal as setProfileModalAction,
    setSignupModal as setSignUpModalAction
 } from "../../../store/app/action";
import { useIsLoggedIn } from "../../../customHooks/auth";

interface Props{
    onNavigate: (navigationName: string) => void;
    collapseNav: () => void;
}

const HeaderLogin: React.FC<Props> = (props: Props) => {
    const dispatch = useDispatch();
    const isLoggedIn: boolean = useIsLoggedIn();
    
    const user: ProfileType | undefined = useSelector((state: CombinedReducersState) => state.user?.userAboutMe)
    const setSignUpModal = useCallback((state: boolean) => dispatch(setSignUpModalAction(state)), [dispatch])
    const setProfileModal = useCallback((state: boolean) => dispatch(setProfileModalAction(state)), [dispatch])

    return <>
        {(isLoggedIn) 
            ? <div className="d-flex flex-row-reverse flex-lg-row align-items-center  align-items-lg-center">
                <p 
                    onClick={() => props.onNavigate(`/user/${user?.id}`)}
                    className="header-link" 
                >{
                    user?.first_name 
                    ? `${user?.first_name} ${user?.last_name}`
                    : user?.email
                } 
                </p>
                <img 
                    className="header-profile-picture me-3" 
                    alt="profile-picture"
                    onClick={() => {
                        setProfileModal(true)
                        props.collapseNav()
                    }}
                    src={user?.profile_picture 
                            ? user?.profile_picture 
                            : NoImage
                    } 
                />
            </div>
            : <Button 
                isSmall
                isColored
                isRounded
                text="New Account"
                onClick={() => {
                    setSignUpModal(true)
                    props.collapseNav()
                }}
            />}
    </>
}
export default HeaderLogin