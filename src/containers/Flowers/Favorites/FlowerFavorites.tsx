import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Card from "../../../components/Card/Card";
import { CombinedReducersState } from "../../../store/combinedReducers";
import { IFavorite } from "../../../types/flowers.types";
import "./FlowerFavorites.scss"
import { loadFavoriteFlowers as loadFavoriteFlowersAction } from '../../../store/flowers/actions';

const FlowerFavorites:React.FC = () => {

	const dispatch = useDispatch();
	const token = localStorage.getItem('bearerToken')
	const isLogin: boolean | undefined = useSelector((state: CombinedReducersState) => state.user?.isLogin)
    const isLoading: boolean | undefined = useSelector((state: CombinedReducersState) => state.flowers?.isLoading);
    const flowers: IFavorite[] | undefined = useSelector((state: CombinedReducersState) => state.flowers?.favoriteFlowers?.fav_flowers);

	const loadFavoriteFlowers = useCallback(() => dispatch(loadFavoriteFlowersAction()), [])

    useEffect(() => {
		if(isLogin || token) {
			loadFavoriteFlowers()
		}
    }, [])

    return (
        <div className="container-fluid default-container">
            {(isLogin || token)
                ? <div className="flowers-favorite-container">
                    <div className="row">
                    {(flowers && flowers?.length > 0) && (
                        flowers?.length > 0
                            ? flowers?.map((flower: IFavorite) => {
                                return (
                                    <div 
                                        key={flower.id}
                                        className="col-lg-3 col-md-4 col-sm-6"> 
                                        <Card
                                            className={"w-100"}
                                            isLoading={isLoading}
                                            item={flower?.flower} />
                                    </div>
                                )})
                            : (<p className="no-flowers text-center">0 Flowers</p>)
                        )
                    }
                    </div>
                </div>
                : <div className="flowers-favorite-container">
                    <h1 className="text-center mt-5"><b>You need to be logged in to see you favorites</b></h1>
                </div>
            }
        </div>
    )
}

export default FlowerFavorites