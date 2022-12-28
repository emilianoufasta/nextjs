import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCatsFetch } from "../../redux/catsState";

import { Button, Spinner } from 'react-bootstrap';
import { List } from "../list/list";
import { catsSelector } from "../../redux/catsSelector";

export const CatsList = () => {
  const dispatch = useDispatch();

  const [ color, setColor ] = useState('green');

  useEffect(()=>{
    dispatch(getCatsFetch());
  }, [dispatch])

  const { isLoading, data } = useSelector(catsSelector);

  const miBoton = <Button onClick={() => { setColor('blue'); } } />;

  return (
    <div className='p-4 row d-flex align-item-center justify-content-between'>
      { isLoading && <Spinner animation="grow" variant="primary" /> }
      { !isLoading && <List data={data} /> }
      { color }
      { miBoton }
    </div>
  )
};
