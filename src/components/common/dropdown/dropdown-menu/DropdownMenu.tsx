import React, { FC, useState } from 'react'
import { DropdownMenuTypes } from '../../../../types/types';
import DropdownItem from '../dropdown-item/DropdownItem'
import style from './DropdownMenu.module.css'

const DropdownMenu: FC<DropdownMenuTypes> = ({ selectOpen, data, iconMode, filterCategories,  getInputText}) => {
    const [text, setText] = useState('');

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
        getInputText(e.target.value)
    }

    return (
        <div className={!selectOpen ? style['select-hide'] : style['select-show']}>
            <input className={style['select-search']} type="text" value={text} onChange={changeHandler} placeholder='Поиск'/>
            <ul className={style.menu}>
                {data.map(item => {
                    return <DropdownItem 
                                filterCategories={filterCategories}
                                iconMode={iconMode}
                                data={item}
                                key={item.id} 
                            />
                })}
            </ul>
        </div>
    )
}

export default DropdownMenu