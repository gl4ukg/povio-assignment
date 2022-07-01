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

interface Props {

}

const Header:React.FC<Props> = (props: Props) => {

    const dispatch = useDispatch();
    const isLoginModal: boolean | undefined = useSelector((state: CombinedReducersState) => state.app?.isLoginModal)
    const isSignUpModal: boolean | undefined = useSelector((state: CombinedReducersState) => state.app?.isSignUpModal)
    const isProfileModal: boolean | undefined = useSelector((state: CombinedReducersState) => state.app?.isProfileModal);
    const isLogin: boolean | undefined = useSelector((state: CombinedReducersState) => state.user?.isLogin);
    const setLoginModal = useCallback((state: boolean) => dispatch(setLoginModalAction(state)), [dispatch])
    const setSignUpModal = useCallback((state: boolean) => dispatch(setSignUpModalAction(state)), [dispatch])
    const setProfileModal = useCallback((state: boolean) => dispatch(setProfileModalAction(state)), [dispatch])

    return (
        <div>
            <nav className="container-fluid defaul-container">
                <div className="header">
                    <div className="logo-nav">
                        <Logo />
                    </div>
                    <div className="page-list">
                        <ul>
                            <li>
                                Flowers
                            </li>
                            <li>
                                Latest Sightings
                            </li>
                            <li>
                                Favorites
                            </li>
                            {!isLogin && <li onClick={() => setLoginModal(true)}>
                                Login
                            </li>}
                        </ul>
                        {
                            isLogin 
                                ? <div>
                                    
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