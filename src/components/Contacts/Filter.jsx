import { changeFindStr } from "./SliceFilter"
import { CssFilterWrrap, ContainerFilter } from "./Filter.styled" 
import { useDispatch } from "react-redux"


export const Filter = () => {
    const dispatch = useDispatch()
    return (
        <ContainerFilter>
        <CssFilterWrrap>
                <input    
                type="text"
                name="filter"
                placeholder="Search contact"
                    onChange={(e) => {
                        e.preventDefault()
                        dispatch(changeFindStr(e.target.value))
                    }}
                />
            </CssFilterWrrap>
        </ContainerFilter>
    )
}
