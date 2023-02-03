import { DropdownItemTypes } from "../types/types"

export function killActivity(array: Array<DropdownItemTypes>): Array<DropdownItemTypes> {
    const serveArr = [...array];
    return serveArr.map(item => {
        item.active = false
        return item
    })
}

export function changeActive(array: Array<DropdownItemTypes>, id?: number, multiMode?: boolean, isActive?: boolean): Array<DropdownItemTypes> {
    
    if (!multiMode) {
        const counter = [...array].reduce((acc,item) => {
            if(item.active === true) {
                acc = acc + 1
            }
            return acc
        }, 0)
        if (counter > 0) {
            killActivity(array)
        }
    }

    const newArray: any = array.map((item) => {
        if (isActive !== undefined && item.id === id) {
            item.active = isActive
        } else if (item.id === id) {
            item.active = false
        }
        return item
    })

    return newArray
}


export function findCategory(array: Array<DropdownItemTypes>, str: string): Array<DropdownItemTypes> {
    let serveArr = killActivity(array)
    
    return serveArr.map(item => {
        if (item.title.includes(str) && str) {
            item.active = true
        }
        return item
    })
}

