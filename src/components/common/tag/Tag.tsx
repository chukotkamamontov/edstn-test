import React, { FC } from 'react'
import style from './Tag.module.css'

interface ITag {
    title: string
    styles: string
}

const Tag: FC<ITag> = ({ title, styles }) => {
    return (
        <div className={style[`${styles}`]}>
            <div>{title}</div>
            <div>x</div>
        </div>
    )
}

export default Tag