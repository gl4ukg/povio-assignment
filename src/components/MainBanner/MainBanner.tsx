import { ChangeEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { searchFlowers as searchFlowersAction } from "../../store/flowers/actions";
import SearchInput from "../Inputs/SearchInput/SearchInput";
import "./MainBanner.scss"

interface Props {

}

const MainBanner:React.FC<Props> = (props: Props) => {

    const dispatch = useDispatch();
    const searchFlowers = useCallback((state: string) => dispatch(searchFlowersAction(state)), [dispatch])
    const [searchInput, setSearchInput] = useState<string>("");

    
    return (
        <div className="main-banner">
            
            <h1 className="main-title-banner">Discover flowers around you</h1>
            <p className="main-subtitle-banner">Explore between more than 8.427 sightings</p>

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