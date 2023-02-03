import { ReactNode } from "react"

export type ContainerTypes = {
	children: ReactNode
}

export type DropdownItemTypes = {
    id: number
    title: string
    icon: string
    active: boolean
}

export type DropdownMenuTypes = {
    iconMode: boolean
    selectOpen: boolean
    filterCategories: (isActive: boolean, id: number) => void
    getInputText: (str: string) => void
    data: Array<DropdownItemTypes>
}

export type DropdownItemProps = {
    data: DropdownItemTypes
    filterCategories: (isActive: boolean, id: number) => void
    iconMode: boolean
}

export type TagTypes = {
    id: number
    title: string
    styles: string
    removeTag: (id: number) => void
}


