import { useState } from 'react'
import Container from '../../container/Container'
import { changeActive, findCategory, killActivity } from '../../tools/helpers';
import { DropdownItemTypes } from '../../types/types';
import DropdownMenu from '../common/dropdown/dropdown-menu/DropdownMenu';
import Tag from '../common/tag/Tag';
import style from './Widget.module.css'

const Widget = () => {
    const [selectOpen, setSelectOpen] = useState(false);
    const [multiMode, setMultiMode] = useState(false);
    const [iconMode, setIconMode] = useState(true);
    const [categories, setCategories] = useState<DropdownItemTypes[]>([
		{id: 1, title: 'Английский', icon: 'uk', active: false},
		{id: 2, title: 'Немецкий', icon: 'de', active: false},
		{id: 3, title: 'Русский', icon: 'ru', active: false},
		{id: 4, title: 'Итальянский', icon: 'it', active: false},
		{id: 5, title: 'Испанский', icon: 'es', active: false},
		{id: 6, title: 'Польский', icon: 'pl', active: false},
	]);

    const toggleDropdown = () => {
        setSelectOpen(!selectOpen);
    }

    const toggleIconMode = () => {
        setIconMode(!iconMode);
    }

    const toggleMultiMode = () => {
        setCategories(killActivity(categories))
        setMultiMode(!multiMode);
    }

    const filterCategories = (isActive: boolean, id: number) => {
        setCategories(() => changeActive(categories, id, multiMode, isActive));
    }

    const removeTag = (id: number) => {
        setCategories(() => changeActive(categories, id, multiMode));
    }

    const getInputText = (str: string) => {
        setCategories(findCategory(categories, str))
    }

    return (
        <Container>
            <div className={style.widget}>
                <div className={style['tag-wrapper']}>
                    <div className={style['tag-block']}>
                        {categories.map(item => {
                            if (item.active) return <Tag key={item.id} id={item.id} title={item.title} styles='simple' removeTag={removeTag}/>
                        })}
                    </div>
                    <div onClick={toggleDropdown} className={selectOpen ? style['arrow-up'] : style['arrow-down']}/>
                </div>
                <DropdownMenu 
                    iconMode={iconMode} 
                    selectOpen={selectOpen} 
                    data={categories}
                    filterCategories={filterCategories}
                    getInputText={getInputText}
                />
                <br />
                <button onClick={toggleIconMode}>icon: {String(iconMode)}</button>
                <br />
                <button onClick={toggleMultiMode}>multi: {String(multiMode)}</button>
            </div>
        </Container>
  )
}

export default Widget
