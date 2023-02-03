import React, { FC } from 'react'
import DropdownItem from '../dropdown-item/DropdownItem'
import style from './DropdownMenu.module.css'

type DropdownItem = {
    id: number
    title: string
    icon: string
    active: boolean
}

interface IDropdownMenu {
    selectOpen: boolean
    data: Array<DropdownItem>
}

const DropdownMenu: FC<IDropdownMenu> = ({ selectOpen, data }) => {
    console.log(selectOpen)

    
    return (
        <div className={!selectOpen ? style['select-hide'] : style['select-show']}>
            <input className={style['select-search']} type="text"/>
            <ul className={style.menu}>
                {data.map(item => {
                    return <DropdownItem key={item.id} id={item.id} title={item.title} src={item.icon} active={item.active} change={() => {console.log('changed')}}  />
                })}
            </ul>
        </div>
    )
}

export default DropdownMenu