import SightingBox from "../../components/SightingBox/SightingBox"
import UserProfile from "../../components/UserProfile/UserProfile"
import { useNavigate, useParams } from "react-router-dom"
import { useCallback, useEffect } from "react"
import { useDispatch } from "react-redux"
import { loadUserInfo as loadUserInfoAction } from "../../store/user/actions"
import { ProfileType } from "../../types/user.types"
import { useSelector } from "react-redux"
import { CombinedReducersState } from "../../store/combinedReducers"
import { loadUserSightings as loadUserSightingsAction } from "../../store/sighting/actions"
import { ISighting, ISightingsResponse } from "../../types/sigting.type"
import "./User.scss"

const User:React.FC = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    const userInfo: ProfileType | undefined = useSelector((state: CombinedReducersState) => state.user?.user)
    const sightings: ISightingsResponse | undefined = useSelector((state: CombinedReducersState) => state.sightings?.userSighting)
    const isLoadingUser: boolean | undefined = useSelector((state: CombinedReducersState) => state.user?.isLoading)
    const isLoadingSightings: boolean | undefined = useSelector((state: CombinedReducersState) => state.sightings?.isLoading)
    const setUserInfo = useCallback((state: number) => dispatch(loadUserInfoAction(state)), [dispatch])
    const loadUserSightings = useCallback((state: number) => dispatch(loadUserSightingsAction(state)), [dispatch])

    useEffect(() => {
        setUserInfo(Number(id))
        loadUserSightings(Number(id))
    }, [])

    
    return (
        <div className="user-page">
            <div className="container-fluid default-container">
                <UserProfile 
                    name={`${userInfo?.first_name} ${userInfo?.last_name}`}
                    sightings={`${sightings?.sightings?.length} sightings`}
                    image={userInfo?.profile_picture}
                    isLoading={isLoadingUser} />
                <div className="user-page__container flowers-container">
                    <div className="row">
                        {(sightings?.sightings?.length >= 0 && !isLoadingSightings)
                            ? sightings?.sightings?.map((sighting: ISighting) => {
                                return (
                                    <SightingBox  
                                        key={sighting.id}
                                        item={sighting} 
                                        isLoading={isLoadingSightings}
                                        goToItem={() => navigate(`/sighting/${sighting.id}`)}
                                        className="col-lg-3 col-md-4 col-sm-6 col-12" 
                                    />
                                )
                            })
                            : <h1 className="text-center"><b>This user doesn't have any Sighting</b></h1>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User