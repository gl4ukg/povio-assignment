import { ChangeEvent } from "react";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search-icon.svg"
import "./SearchInput.scss"

interface Props {
    searchValue: string,
    onChangeSearchValue: (e: ChangeEvent<HTMLInputElement>) => void,
    search: () => void,
}

const SearchInput:React.FC<Props> = (props: Props) =>  {

    const { searchValue, onChangeSearchValue, search } = props;

    return (
        <div className="search-input-container">
            <input 
                className="search-input"
                type="text"
                value={searchValue}
                onChange={onChangeSearchValue}
                placeholder="Looking for something specific?" />
            <button
                onClick={search}>
                <SearchIcon/>
            </button>
        </div>
    )
}

export default SearchInput