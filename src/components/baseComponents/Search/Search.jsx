import { SearchInput, SearchForm, SearchButton, Icon } from "./Search.styled"
import searchPic from "../../../images/icons/search.png";
import xCirlce from "../../../images/icons/x-circle.svg";

export const Search = ({handleChange, handleClick, value, onSubmit}) => {

    return (
        <>
        {onSubmit ? 
        (<SearchForm onSubmit={onSubmit}>
            <SearchInput type="text" value={value} placeholder="Search" onChange={handleChange}/>
            <SearchButton type="submit">
                <Icon src={searchPic} alt='' />
            </SearchButton>
        </SearchForm>) :
        (<SearchForm>
            <SearchInput type="search" value={value} placeholder="Search" onChange={handleChange}/>
            <SearchButton type="button" onClick={handleClick}>{value === '' ? 
            (<Icon src={searchPic} alt='' />) : 
            (<Icon src={xCirlce} alt='' />)}</SearchButton>
        </SearchForm>)
        }
        </>
    )
}