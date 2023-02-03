import React, { FC } from 'react'
import style from './Tag.module.css'

interface ITag {
    id: number
    title: string
    styles: string
    removeTag: (id: number) => void
}

const Tag: FC<ITag> = ({ title, styles, id, removeTag }) => {
    return (
        <div className={style[`${styles}`]}>
            <div>{title}</div>
            <div onClick={() => removeTag(id)}>x</div>
        </div>
    )
}

export default Tag