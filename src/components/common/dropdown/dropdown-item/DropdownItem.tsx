import React, { ChangeEvent, FC } from 'react'
import style from './DropdownItem.module.css'
import {DropdownItemTypes} from '../dropdown-menu/DropdownMenu'

interface IDropdownItem {
    data: DropdownItemTypes
    filterCategories: (isActive: boolean, id: number) => void
    change: (id: number) => void
    iconMode: boolean
}

const DropdownItem: FC<IDropdownItem> = ({data, change, iconMode, filterCategories}) => {
    const {id, icon, title, active} = data

    const src = new URL(`./flags/${icon}.svg`, import.meta.url).href

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        filterCategories(e.target.checked, id)
    }

    return (
        <li className={style['menu-item']}>
            {iconMode && <img src={src} alt={title} />}
            <label htmlFor={title} className={style['menu-item-label']}>{title}</label>
            <input type="checkbox" name="my-input" checked={active} id={title} value={id} className={style['menu-item-checkbox']} onChange={changeHandler}/>
        </li>
    )
}

export default DropdownItem