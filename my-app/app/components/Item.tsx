import {ItemData} from "@/app/interfaces/Item";
import {memo, MouseEventHandler} from 'react'

const ItemComponent = ({ item, onClick }: { item: ItemData, onClick: MouseEventHandler<HTMLDivElement>}) => {

    console.log('render')

    return <>
        <div onClick={onClick}>{item.id}</div>
        <div>{item.name}</div>
    </>
}

export const Item = memo(ItemComponent)