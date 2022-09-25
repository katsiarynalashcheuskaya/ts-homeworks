import React, {useState} from 'react'
import Affairs from './Affairs'
import s from "../../../src/p1-main/m1-ui/u1-app/App.module.css"

// types
export type AffairPriorityType = 'high' | 'middle' | 'low' // need to fix any
export type AffairType = {
    _id:number,
    name: string,
    priority: AffairPriorityType}

export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    if (filter === 'high') {
        return affairs.filter(a=>a.priority === 'high')
    }
    if (filter === 'middle') {
        return affairs.filter(a=>a.priority === 'middle')
    }
    if (filter === 'low') {
        return affairs.filter(a=>a.priority === 'low')
    } return affairs;

    // need to fix
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    return affairs.filter((a) => _id !== a._id)// need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    const changeFilter = (filter: FilterType) => {
        setFilter(filter);
    }

    return (
        <div>
            <hr/>
            <span className={s.homework}>homeworks 2:</span>

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={changeFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
        </div>
    )
}

export default HW2
