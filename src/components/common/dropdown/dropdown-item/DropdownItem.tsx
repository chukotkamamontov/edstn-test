import React, { FC } from 'react'
import style from './DropdownItem.module.css'

interface IDropdownItem {
    id: number
    src: string
    title: string
    active: boolean
    change: (id: number) => void
}

const DropdownItem: FC<IDropdownItem> = (props) => {
    const {id, src, title, active} = props

    console.log(src)

    const icon = new URL(`./flags/${src}.svg`, import.meta.url).href

    return (
        <li className={style['menu-item']}>
            <img src={icon} alt={title} />
            <label htmlFor={title} className={style['menu-item-label']}>{title}</label>
            {/* <input type="checkbox" name="my-input" id="Русский" value="yes" className={style['menu-item-checkbox']} onChange={changeHandler}/> */}
            <input type="checkbox" name="my-input" id={title} value="yes" className={style['menu-item-checkbox']}/>
        </li>
    )
}

export default DropdownItem