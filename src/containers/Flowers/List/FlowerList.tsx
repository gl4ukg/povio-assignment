import { ChangeEvent, useCallback, useState } from "react"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Card from "../../../components/Card/Card";
import SearchInput from "../../../components/Inputs/SearchInput/SearchInput"
import { CombinedReducersState } from "../../../store/combinedReducers";
import { searchFlowers as searchFlowersAction } from "../../../store/flowers/actions";
import { ICard } from "../../../types/card.types";

interface Props {

}

const FlowerList:React.FC<Props> = (props: Props) => {

    const dispatch = useDispatch();
    const [searchVal, setSearchVal] = useState<string>("");
    const isLoading: boolean | undefined = useSelector((state: CombinedReducersState) => state.flowers?.isLoading);
    const flowers: ICard[] | undefined = useSelector((state: CombinedReducersState) => state.flowers?.flowers?.flowers);
    const searchFlowers = useCallback((state: string) => dispatch(searchFlowersAction(state)), [dispatch])

    return (
        <div>
            <SearchInput 
                searchValue={searchVal}
                onChangeSearchValue={(e: ChangeEvent<HTMLInputElement>) => setSearchVal(e.target.value)}
                onKeyDown={() => searchFlowers(searchVal)}
                search={() => searchFlowers(searchVal)}
                className="my-5"
            />
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
                            : (<p className="no-flowers text-center">0 Flowers</p>)
                        )
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlowerList