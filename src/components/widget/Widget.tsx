import React, { useState } from 'react'
import Container from '../../container/Container'
import DropdownMenu from '../common/dropdown/dropdown-menu/DropdownMenu';
import Tag from '../common/tag/Tag';
import style from './Widget.module.css'

const Widget = () => {
    const [selectOpen, setSelectOpen] = useState(false);
    const [multiMode, setMultiMode] = useState(false);
    const [iconMode, setIconMode] = useState();
    const [categories, setCategories] = useState([
		{id: 1, title: 'Английский', icon: 'uk', active: false},
		{id: 2, title: 'Немецкий', icon: 'de', active: false},
		{id: 3, title: 'Русский', icon: 'ru', active: false},
		{id: 4, title: 'Итальянский', icon: 'it', active: false},
		{id: 5, title: 'Испанский', icon: 'es', active: false},
		{id: 6, title: 'Польский', icon: 'pl', active: false},
	]);

    console.log(selectOpen)

    const toggleDropdown = () => {
        setSelectOpen(!selectOpen);
    }

    return (
        <Container>
            <div className={style.widget}>
                <div className={style.input}>
                    <div className={style['tag-block']}>
                        {categories.map(item => <Tag key={item.id} title={item.title} styles='simple'></Tag>)}
                    </div>
                    <div onClick={toggleDropdown} className={selectOpen ? style['arrow-up'] : style['arrow-down']}/>
                </div>
                <DropdownMenu selectOpen={selectOpen} data={categories} />
            </div>
        </Container>
  )
}

export default Widget
