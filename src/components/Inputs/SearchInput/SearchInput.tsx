import { ChangeEvent, KeyboardEvent } from "react";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search-icon.svg"
import "./SearchInput.scss"

interface Props {
    searchValue: string,
    onChangeSearchValue: (e: ChangeEvent<HTMLInputElement>) => void,
    search: () => void,
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
}

const SearchInput:React.FC<Props> = (props: Props) =>  {

    const { searchValue, onChangeSearchValue, search,  onKeyDown } = props;

    return (
        <div className="search-input-container">
            <input 
                className="search-input"
                type="text"
                value={searchValue}
                onChange={onChangeSearchValue}
                onKeyDown={onKeyDown}
                placeholder="Looking for something specific?" />
            <button
                onClick={search}>
                <SearchIcon/>
            </button>
        </div>
    )
}

export default SearchInput