import "./Header.scss"
import {ReactComponent as Logo} from "../../assets/icons/logo.svg";
import Button from "../Button/Button";
import ModalComponent from "../Modal/ModalComponent";
import { useSelector } from "react-redux";
import { CombinedReducersState } from "../../store/combinedReducers";
import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";
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
import classNames from "classnames";
import HamburgerIcon from "../../assets/icons/mm_hamburger.svg"
import XIcon from "../../assets/icons/pl-icon-close.svg"

const Header:React.FC = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [isNavCollapsed, setIsNavCollapsed] = useState<boolean>(true);
	const token = localStorage.getItem('bearerToken')

	const isLogin: boolean | undefined = useSelector((state: CombinedReducersState) => state.user?.isLogin)
    const isLoginModal: boolean | undefined = useSelector((state: CombinedReducersState) => state.app?.isLoginModal)
    const isSignUpModal: boolean | undefined = useSelector((state: CombinedReducersState) => state.app?.isSignUpModal)
    const isProfileModal: boolean | undefined = useSelector((state: CombinedReducersState) => state.app?.isProfileModal);
    const user: ProfileType | undefined = useSelector((state: CombinedReducersState) => state.user?.userAboutMe)

    const setLoginModal = useCallback((state: boolean) => dispatch(setLoginModalAction(state)), [dispatch])
    const setSignUpModal = useCallback((state: boolean) => dispatch(setSignUpModalAction(state)), [dispatch])
    const setProfileModal = useCallback((state: boolean) => dispatch(setProfileModalAction(state)), [dispatch])

    return (
        <div className="header">
            <div className="container-fluid default-container">
                <nav className="navbar navbar-expand-lg ">
                    <div 
                        onClick={() => {
                            navigate("/")
                            setIsNavCollapsed(true)
                        }}
                        className="navbar-brand">
                        <Logo />
                    </div>
                    <button 
                        onClick={() => setIsNavCollapsed(!isNavCollapsed)}
                        className="navbar-toggler justify-content-end" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#menuItems" 
                        aria-controls="menuItems" 
                        aria-expanded={!isNavCollapsed ? true : false} 
                        aria-label="Toggle Navigation">
                        <img 
                            src={
                            isNavCollapsed 
                                ? HamburgerIcon 
                                : XIcon
                            } 
                            alt={
                            isNavCollapsed 
                                ? HamburgerIcon 
                                : XIcon
                            } />
                    </button>
                    <div className={classNames('navbar-collapse page-list justify-content-end', {
                            "collapse": isNavCollapsed
                        })} id="menuItems">
                        <ul className={"navbar-nav align-items-lg-center align-items-start is-mobile"}>
                            <li 
                                onClick={() => {
                                    navigate("flowers")
                                    setIsNavCollapsed(true)
                                }}
                                className="header-link">
                                Flowers
                            </li>
                            <li 
                                onClick={() => {
                                    navigate("sighting-list")
                                    setIsNavCollapsed(true)
                                }}
                                className="header-link">
                                Latest Sightings
                            </li>
                            <li 
                                onClick={() => {
                                    navigate("favorite-flowers")
                                    setIsNavCollapsed(true)
                                }}
                                className="header-link">
                                Favorites
                            </li>
                            {!(isLogin || token) && <li
                                className="header-link" 
                                onClick={() => {
                                    setLoginModal(true)
                                    setIsNavCollapsed(true)
                                }}>
                                Login
                            </li>}
                        {
                            (isLogin || token) 
                                ? <div className="d-flex flex-row-reverse flex-lg-row align-items-center  align-items-lg-center">
                                    <p 
                                        onClick={() => {
                                            navigate(`/user/${user?.id}`)
                                            setIsNavCollapsed(true)
                                        }}
                                        className="header-link" >{user?.first_name ?
                                        `${user?.first_name} ${user?.last_name}`
                                        : user?.email} </p>
                                    <img 
                                        onClick={() => {
                                            setProfileModal(true)
                                            setIsNavCollapsed(true)
                                        }}
                                        className="header-profile-picture me-3" 
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
                                    onClick={() => {
                                        setSignUpModal(true)
                                        setIsNavCollapsed(true)
                                    }}
                                />
                        }
                        </ul>
                    </div>
                </nav>
            </div>
			<ModalComponent
				isModalHeader
				isOpen={isLoginModal}
				close={() => setLoginModal(false)}
				>
				<Login />
			</ModalComponent>
			<ModalComponent
				isModalHeader
				isOpen={isSignUpModal}
				close={() => setSignUpModal(false)}
				>
				<Signup />
			</ModalComponent>
			<ModalComponent
				isModalHeader
				isOpen={isProfileModal}
				close={() => setProfileModal(false)}
				classNames={"profile-modal"}
				>
				<Profile />
			</ModalComponent>
        </div>
    )
}

export default Header