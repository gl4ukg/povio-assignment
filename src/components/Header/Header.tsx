import "./Header.scss"
import {ReactComponent as Logo} from "../../assets/icons/logo.svg";
import Button from "../Button/Button";
import ModalComponent from "../Modal/ModalComponent";
import { useSelector } from "react-redux";
import { CombinedReducersState } from "../../store/combinedReducers";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { 
    setLoginModal as setLoginModalAction,
    setProfileModal as setProfileModalAction,
    setSignupModal as setSignUpModalAction
 } from "../../store/app/action";
import Login from "../../containers/Login/Login.container";
import Signup from "../../containers/Signup/Signup.container";
import Profile from "../../containers/Profile/Profile.container";
import { ProfileType } from "../../types/user.types";
import NoImage from "../../assets/icons/no-image.webp"
import { useNavigate } from "react-router-dom";

interface Props {

}

const Header:React.FC<Props> = (props: Props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
	const token = localStorage.getItem('bearerToken')
	const isLogin: boolean | undefined = useSelector((state: CombinedReducersState) => state.user?.isLogin)
    const isLoginModal: boolean | undefined = useSelector((state: CombinedReducersState) => state.app?.isLoginModal)
    const isSignUpModal: boolean | undefined = useSelector((state: CombinedReducersState) => state.app?.isSignUpModal)
    const isProfileModal: boolean | undefined = useSelector((state: CombinedReducersState) => state.app?.isProfileModal);
    const user: ProfileType | undefined = useSelector((state: CombinedReducersState) => state.user?.user)
    const setLoginModal = useCallback((state: boolean) => dispatch(setLoginModalAction(state)), [dispatch])
    const setSignUpModal = useCallback((state: boolean) => dispatch(setSignUpModalAction(state)), [dispatch])
    const setProfileModal = useCallback((state: boolean) => dispatch(setProfileModalAction(state)), [dispatch])

    return (
        <div>
            <nav className="container-fluid default-container">
                <div className="header">
                    <div 
                        onClick={() => navigate("/")}
                        className="logo-nav">
                        <Logo />
                    </div>
                    <div className="page-list">
                        <ul>
                            <li 
                                onClick={() => navigate("flowers")}
                                className="header-link">
                                Flowers
                            </li>
                            <li 
                                onClick={() => navigate("sighting-list")}
                                className="header-link">
                                Latest Sightings
                            </li>
                            <li 
                                onClick={() => navigate("favorite-flowers")}
                                className="header-link">
                                Favorites
                            </li>
                            {!(isLogin || token) && <li
                                className="header-link" 
                                onClick={() => setLoginModal(true)}>
                                Login
                            </li>}
                        </ul>
                        {
                            (isLogin || token) 
                                ? <div className="d-flex align-items-center">
                                    <p className="header-link" >{user.first_name ?
                                        `${user.first_name} ${user.last_name}`
                                        : user.email} </p>
                                    <img 
                                        onClick={() => setProfileModal(true)}
                                        className="header-profile-picture" 
                                        src={user?.profile_picture 
                                                ? user?.profile_picture 
                                                : NoImage
                                        } 
                                        alt="profile-picture"
                                     />
                                </div>
                                : <Button 
                                    isSmall
                                    isColored
                                    isRounded
                                    text="New Account"
                                    onClick={() => setSignUpModal(true)}
                                />
                        }
                    </div>
                </div>
            </nav>
			<ModalComponent
				isModalHeader
				isOpen={isLoginModal}
				close={() => setLoginModal(false)}
				// classNames={styles.loginWidth}
				>
				<Login />
			</ModalComponent>
			<ModalComponent
				isModalHeader
				isOpen={isSignUpModal}
				close={() => setSignUpModal(false)}
				// classNames={styles.loginWidth}
				>
				<Signup />
			</ModalComponent>
			<ModalComponent
				isModalHeader
				isOpen={isProfileModal}
				close={() => setProfileModal(false)}
				// classNames={styles.loginWidth}
				>
				<Profile />
			</ModalComponent>
        </div>
    )
}

export default Header