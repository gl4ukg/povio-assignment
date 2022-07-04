import { useSelector } from "react-redux";
import Card from "../../../components/Card/Card";
import { CombinedReducersState } from "../../../store/combinedReducers";
import { ICard } from "../../../types/card.types";
import { IFavorite } from "../../../types/flowers.types";
import "./FlowerFavorites.scss"

interface Props {
    
}

const FlowerFavorites:React.FC<Props> = (props: Props) => {

    const isLoading: boolean | undefined = useSelector((state: CombinedReducersState) => state.flowers?.isLoading);
    // const flowers: IFavorite[] | undefined = useSelector((state: CombinedReducersState) => state.flowers?.favoriteFlowers?.sightings);

    return (
        <div className="container-fluid default-container">
            <div className="flowers-favorite-container">
                <div className="row">
                {/* {(flowers && flowers?.length > 0) && (
                    flowers?.length > 0
                        ? flowers?.map((flower: IFavorite) => {
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
                        : (<p className="no-flowers text-center">0 Flowers</p>)
                    )
                } */}
                </div>
            </div>
        </div>
    )
}

export default FlowerFavorites