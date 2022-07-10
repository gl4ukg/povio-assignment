import classNames from "classnames";
import { ChangeEvent, KeyboardEvent } from "react";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search-icon.svg"
import "./SearchInput.scss"

interface Props {
    searchValue: string,
    onChangeSearchValue: (e: ChangeEvent<HTMLInputElement>) => void,
    search: () => void,
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void,
    className?: string
}

const SearchInput:React.FC<Props> = (props: Props) =>  {

    return (
        <div className={classNames("search-input-container", {
            [props.className as string]: props.className
        })}>
            <input 
                className="search-input"
                type="text"
                value={props.searchValue}
                onChange={props.onChangeSearchValue}
                onKeyDown={props.onKeyDown}
                placeholder="Looking for something specific?" />
            <button
                onClick={props.search}>
                <SearchIcon/>
            </button>
        </div>
    )
}

export default SearchInput