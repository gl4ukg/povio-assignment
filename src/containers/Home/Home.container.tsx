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
            <div className="container-fluid">
                <div className="flowers-container">
                    {isLoading 
                        ? <Skeleton count={1} />
                        :   (flowers && flowers?.length > 0) && flowers?.map((flower: ICard) => {
                            return <Card 
                                key={flower.id}
                                item={flower} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home