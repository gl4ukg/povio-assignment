import "./Home.scss"
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import MainBanner from "../../components/MainBanner/MainBanner";
import { CombinedReducersState } from "../../store/combinedReducers";
import { ICard } from "../../types/card.types";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { loadFavoriteFlower } from "../../store/flowers/actions";

const Home:React.FC = () => {

    const dispatch = useDispatch();
    const isLoading: boolean | undefined = useSelector((state: CombinedReducersState) => state.flowers?.isLoading);
    const flowers: ICard[] | undefined = useSelector((state: CombinedReducersState) => state.flowers?.flowers?.flowers);
    const setFavoriteFlower = useCallback((state: number) => dispatch(loadFavoriteFlower(state)), [dispatch])

    return (
        <div className="home-page">   
            <MainBanner />
            <div className="container-fluid default-container">
                <div className="flowers-container">
                    <div className="row">
                    {(flowers && flowers?.length > 0) && (
                        flowers?.length > 0
                            ? flowers?.map((flower: ICard) => {
                                return (
                                    <div 
                                        key={flower.id}
                                        className="col-lg-3 col-md-4 col-6"> 
                                        <Card 
                                            className={"w-100"}
                                            isLoading={isLoading}
                                            item={flower}
                                            setFavoriteFlower={() => setFavoriteFlower(flower.id)}
                                             />
                                    </div>
                                )})
                            : (<p className="no-flowers text-center">0 Flowers</p>)
                        )
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home