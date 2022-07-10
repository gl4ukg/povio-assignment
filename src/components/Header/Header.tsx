import "./Header.scss"
import {ReactComponent as Logo} from "../../assets/icons/logo.svg";
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
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import HamburgerIcon from "../../assets/icons/mm_hamburger.svg"
import XIcon from "../../assets/icons/pl-icon-close.svg"
import HeaderLink from "./HeaderLink/HeaderLink";
import HeaderLogin from "./HeaderLogIn/HeaderLogIn";
import { useIsLoggedIn } from "../../customHooks/auth";

const Header:React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
	const isLoggedIn: boolean = useIsLoggedIn();
    
    const [isNavCollapsed, setIsNavCollapsed] = useState<boolean>(true);

    const isLoggedInModal: boolean | undefined = useSelector((state: CombinedReducersState) => state.app?.isLoggedInModal)
    const isSignUpModal: boolean | undefined = useSelector((state: CombinedReducersState) => state.app?.isSignUpModal)
    const isProfileModal: boolean | undefined = useSelector((state: CombinedReducersState) => state.app?.isProfileModal);

    const setLoginModal = useCallback((state: boolean) => dispatch(setLoginModalAction(state)), [dispatch])
    const setSignUpModal = useCallback((state: boolean) => dispatch(setSignUpModalAction(state)), [dispatch])
    const setProfileModal = useCallback((state: boolean) => dispatch(setProfileModalAction(state)), [dispatch])

    const onNagivate = (navigatioName: string): void =>{
        navigate(navigatioName)
        setIsNavCollapsed(true)
    } 

    return (
        <div className="header">
            <div className="container-fluid default-container">
                <nav className="navbar navbar-expand-lg ">
                    <div 
                        onClick={() => {
                            navigate("/")
                            setIsNavCollapsed(true)
                        }}
                        className="navbar-brand"
                    >
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
                            } 
                        />
                    </button>
                    <div className={classNames('navbar-collapse page-list justify-content-end', {
                            "collapse": isNavCollapsed
                        })} id="menuItems">
                        <ul className="navbar-nav align-items-lg-center align-items-start is-mobile">
                            <HeaderLink
                                onClick={() => onNagivate('flowers')}
                                displayValue="Flowers"
                            />
                            <HeaderLink
                                onClick={() => onNagivate('sighting-list')}
                                displayValue="Latest Sightings"
                            />
                            <HeaderLink
                                onClick={() => onNagivate('favorite-flowers')}
                                displayValue="Favorites"
                            />
                            {!(isLoggedIn) && 
                                <HeaderLink
                                    onClick={() => {
                                        setLoginModal(true)
                                        setIsNavCollapsed(true)
                                    }}
                                    displayValue="Login"
                                />
                            }
                            <HeaderLogin 
                                onNavigate={onNagivate}
                                collapseNav={() => setIsNavCollapsed(true)}
                            />
                        </ul>
                    </div>
                </nav>
            </div>
			{isLoggedInModal  && 
                <ModalComponent
                    isModalHeader
                    isOpen={isLoggedInModal}
                    close={() => setLoginModal(false)}
                >
                    <Login />
                </ModalComponent>
            }
			{isSignUpModal && 
                <ModalComponent
                    isModalHeader
                    isOpen={isSignUpModal}
                    close={() => setSignUpModal(false)}
                >
				    <Signup />
			    </ModalComponent>
            }
			{isProfileModal && 
                <ModalComponent
                    isModalHeader
                    isOpen={isProfileModal}
                    close={() => setProfileModal(false)}
                    classNames="profile-modal"
                >
                    <Profile />
                </ModalComponent>
            }
        </div>
    )
}

export default Header