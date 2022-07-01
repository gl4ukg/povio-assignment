import "./Home.scss"
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import Card from "../../components/Card/Card";
import MainBanner from "../../components/MainBanner/MainBanner";
import { CombinedReducersState } from "../../store/combinedReducers";
import { loadFlowers as loadFlowersAction } from "../../store/flowers/actions";
import { IPagination } from "../../types/app.types";
import { ICard } from "../../types/card.types";
import Skeleton from 'react-loading-skeleton'

export interface Props {

}

const Home:React.FC<Props> = (props: Props) => {

    const dispatch = useDispatch();
    const isLoading: boolean | undefined = useSelector((state: CombinedReducersState) => state.flowers?.isLoading);
    const flowers: ICard[] | undefined = useSelector((state: CombinedReducersState) => state.flowers?.flowers);
    const pagination: IPagination | undefined = useSelector((state: CombinedReducersState) => state.flowers?.meta);
    const loadFlowers = useCallback(() => dispatch(loadFlowersAction()), [dispatch])

    useEffect(() => {
        loadFlowers()
    }, [])

    return (
        <div className="home-page">   
            <MainBanner />
            <div className="container-fluid defaul-container">
                <div className="flowers-container">
                    <div className="row">
                    {(flowers && flowers?.length > 0) && (
                        flowers?.length > 0
                            ? flowers?.map((flower: ICard) => {
                                return (
                                    <div 
                                        key={flower.id}
                                        className="col-lg-3 col-md-4 col-sm-6"> 
                                        <Card 
                                            className={"w-100"}
                                            isLoading={isLoading}
                                            item={flower} />
                                    </div>
                                )})
                            : (<p>0 Flowers</p>)
                            )
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home