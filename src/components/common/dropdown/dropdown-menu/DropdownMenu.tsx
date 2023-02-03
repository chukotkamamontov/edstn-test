import React, { FC } from 'react'
import DropdownItem from '../dropdown-item/DropdownItem'
import style from './DropdownMenu.module.css'

export type DropdownItemTypes = {
    id: number
    title: string
    icon: string
    active: boolean
}

interface IDropdownMenu {
    iconMode: boolean
    selectOpen: boolean
    filterCategories: (isActive: boolean, id: number) => void
    data: Array<DropdownItemTypes>
}

const DropdownMenu: FC<IDropdownMenu> = ({ selectOpen, data, iconMode, filterCategories }) => {
    console.log(selectOpen)

    return (
        <div className={!selectOpen ? style['select-hide'] : style['select-show']}>
            <input className={style['select-search']} type="text"/>
            <ul className={style.menu}>
                {data.map(item => {
                    return <DropdownItem 
                        filterCategories={filterCategories}
                        iconMode={iconMode}
                        data={item}
                        key={item.id} 
                        change={() => {console.log('changed')}}  
                        />
                })}
            </ul>
        </div>
    )
}

export default DropdownMenu