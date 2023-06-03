import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useMenu = () => {

    // REFACTOR
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect( () => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             // const result = data.filter(item => item.category === category);
    //             setMenu(data);
    //             setLoading(false);
    //         })
    //         .catch(err => console.log(err.message))
    // }, []);

    const {data: menu = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/menu');
            return res.json();
        }
    });

    return [menu, loading, refetch];
};

export default useMenu;