import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCatsFetch } from "../../redux/catsState";

import { Spinner } from 'react-bootstrap';
import { List } from "../list/list";
import { catsSelector } from "../../redux/catsSelector";

export const CatsList = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCatsFetch());
  }, [dispatch])

  const { isLoading, data } = useSelector(catsSelector);
  return (
    <div className='p-4 row d-flex align-item-center justify-content-between'>
      { isLoading && <Spinner animation="grow" variant="primary" />}
      { !isLoading && <List data={data} /> }
    </div>
  )
}