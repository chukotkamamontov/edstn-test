import React, { ChangeEvent, FC } from 'react'
import { DropdownItemProps } from '../../../../types/types'
import style from './DropdownItem.module.css'

const DropdownItem: FC<DropdownItemProps> = ({data, iconMode, filterCategories}) => {
    const {id, icon, title, active} = data

    const src = new URL(`./flags/${icon}.svg`, import.meta.url).href

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        filterCategories(e.target.checked, id)
    }

    return (
        <li className={style['menu-item']}>
                {iconMode && <img src={src} alt={title} />}
                <label htmlFor={title} className={style['menu-item-label']}>{title}</label>
                <input type="checkbox" checked={active} id={title} value={id} className={style['menu-item-checkbox']} onChange={changeHandler}/>
        </li>
    )
}

export default DropdownItem