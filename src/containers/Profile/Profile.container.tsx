import { useCallback, useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import Button from "../../components/Button/Button"
import { setProfileModal as setProfileModalAction } from "../../store/app/action"
import { CombinedReducersState } from "../../store/combinedReducers"
import { ProfileType } from "../../types/user.types"
import "./Profile.scss"
import NoImage from "../../assets/icons/no-image.webp"
import { setLogin as setLoginAction } from "../../store/user/actions"
import { useNavigate } from "react-router-dom"
import { loadUserSightings as loadUserSightingsAction } from "../../store/sighting/actions"
import { ISighting } from "../../types/sigting.type"


const Profile:React.FC = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user: ProfileType | undefined = useSelector((state: CombinedReducersState) => state.user?.userAboutMe);
    const userSighting: ISighting[] | undefined = useSelector((state: CombinedReducersState) => state.sightings?.userSighting?.sightings)

    const setProfileModal = useCallback((state: boolean) => dispatch(setProfileModalAction(state)), [dispatch])
    const setLogin = useCallback((state: boolean) => dispatch(setLoginAction(state)), [dispatch])
    const loadUserSightings = useCallback((state: number) => dispatch(loadUserSightingsAction(state)), [dispatch])

    useEffect(() => {
        if(user?.id){
            loadUserSightings(user.id)
        }
    }, [])

    function logOut() {
        localStorage.removeItem('bearerToken')
        setLogin(false)
        setProfileModal(false)
        navigate("/")
    }

    return (
        <div className="profile">
            <div className="about-profile">
                <div className="d-flex">
                    <img 
                        className="about-profile__profile_picture"
                        src={user?.profile_picture
                            ? user?.profile_picture
                            : NoImage
                        }  
                        alt={user?.profile_picture
                            ? user?.profile_picture
                            : NoImage
                        } />
                    <div className="d-flex flex-column justify-content-center">
                        <p className="about-profile__name">{user?.first_name} {user?.last_name}</p>
                        <p className="about-profile__user_sightings">{userSighting?.length} sightings</p>
                    </div>
                </div>
                <div className="about-profile__info">
                    <div className="d-flex flex-column">
                        <p className="about-profile__info__label">
                            First Name
                        </p>
                        <p className="about-profile__info__value">
                            {user?.first_name}
                        </p>
                    </div>
                    <div className="d-flex flex-column">
                        <p className="about-profile__info__label">
                            Last Name
                        </p>
                        <p className="about-profile__info__value">
                            {user?.last_name}
                        </p>
                    </div>
                    <div className="d-flex flex-column">
                        <p className="about-profile__info__label">
                            Date of birth
                        </p>
                        <p className="about-profile__info__value">
                            {user?.date_of_birth 
                                ? user?.date_of_birth 
                                : "May 20, 1980"
                            }
                        </p>
                    </div>
                    <div className="d-flex flex-column">
                        <p className="about-profile__info__label">
                            Email Address
                        </p>
                        <p className="about-profile__info__value">
                            {user?.email
                                ? user?.email
                                : "johdoe@testemail.com"
                            }
                        </p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Button
                            isSubmit
                            isColored
                            isSmall
                            text={'LogOut'}
                            onClick={logOut}
                            className={"about-profile__info__button"}
                        />
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Profile