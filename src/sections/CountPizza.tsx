import React, { useEffect, useState } from 'react'
import { Pizza } from '../models/pizza.model';

type Props = {
    count: number;
    setCount: (count: number) => void;
};

const CountPiza = ({ count, setCount }: Props) => {
    useEffect(() => {
        return () => {
            setCount(0);
        }
    }, [])
    return (
        <button onClick={() => setCount(count + 1)}>Increase</button>
    );
};

export default CountPiza;