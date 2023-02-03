import React, { FC } from 'react'
import { TagTypes } from '../../../types/types'
import style from './Tag.module.css'

const Tag: FC<TagTypes> = ({ title, styles, id, removeTag }) => {
    return (
        <div className={style[`${styles}`]}>
            <div>{title}</div>
            <div className={style.close} onClick={() => removeTag(id)}>x</div>
        </div>
    )
}

export default Tag