import { ChangeEvent, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { CombinedReducersState } from "../../store/combinedReducers";
import { searchFlowers as searchFlowersAction } from "../../store/flowers/actions";
import { ISighting } from "../../types/sigting.type";
import SearchInput from "../Inputs/SearchInput/SearchInput";
import "./MainBanner.scss"

const MainBanner:React.FC = () => {
    const dispatch = useDispatch();

    const searchFlowers = useCallback((state: string) => dispatch(searchFlowersAction(state)), [dispatch])

    const allSightings: ISighting[] | undefined = useSelector((state: CombinedReducersState) => state.sightings?.sightings?.sightings)
    
    const [searchInput, setSearchInput] = useState<string>("");

    return (
        <div className="main-banner">
            <h1 className="main-title-banner">Discover flowers around you</h1>
            <p className="main-subtitle-banner">Explore between more than {allSightings?.length ?? 0} sightings</p>
            <SearchInput
                searchValue={searchInput}
                onChangeSearchValue={(e: ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)}
                onKeyDown={() => searchFlowers(searchInput)}
                search={() => searchFlowers(searchInput)}
            />
        </div>
    )
}

export default MainBanner;