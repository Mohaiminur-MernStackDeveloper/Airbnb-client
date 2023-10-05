import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchresturent } from '../../Redux/Features/Resturent/ResturentData';

const Resturentcard = () => {
    const {resturetrentData} = useSelector((state)=>state.resturentSlice);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchresturent());
    },[])


    console.log(resturetrentData);

    return (
        <div>
            
        </div>
    );
};

export default Resturentcard;