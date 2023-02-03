import { DropdownItemTypes } from "../components/common/dropdown/dropdown-menu/DropdownMenu";


export function changeActive(array: Array<DropdownItemTypes>, id: number, isActive: boolean): Array<DropdownItemTypes> {
    const newArray: any = array.map((item) => {
        if (item.id === id) {
            item.active = isActive
        } 
        return item
    })
    return array
  }