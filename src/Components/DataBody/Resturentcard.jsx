import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addResData } from '../../Redux/Features/Resturent/ResturentData';

const Resturentcard = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        fetch("http://localhost:5000/alldata").then(res=>res.json())
        .then(data=> dispatch(addResData(data)));
    },[])

    return (
        <div>
            
        </div>
    );
};

export default Resturentcard;