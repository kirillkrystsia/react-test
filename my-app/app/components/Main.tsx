'use client'
import {MouseEvent, useCallback, useState} from "react";
import { ItemData} from "@/app/interfaces/Item";
import {Item} from "@/app/components/Item";

export const Main = () => {
    const [data, setData] = useState<ItemData[]>();
    const [count, setCount] = useState(0);

    const updateData = () => {
        if (!data) {
            const newData = Array.from({ length: 200} ).map((item, idx) => ({
                name:  `name ${idx}`,
                id: idx,
            }))
            setData(newData);
        }

        setCount(count + 1)
    }

    const onItemClick = (event: MouseEvent) => {
        console.log(event);
    }

    const onItemClickWithUseCallback = useCallback((event: MouseEvent) => {
        console.log(event);
    }, []);


    return <>
        <div>Count: {count}</div>
        {data?.map(item => <Item item={item} key={item.id} onClick={onItemClick} />)}
        <button onClick={updateData}>Update Data</button>
    </>
}