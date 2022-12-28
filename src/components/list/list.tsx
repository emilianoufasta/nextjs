import React from "react"
import { Button, Card } from "react-bootstrap"

import styles from './list.module.css';

export const List = ({ data }) => {

  return data.map((item, index) => (
    <Card key={index} className={'cols-sm-8 mb-4'} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image?.url} className={styles['item-image']}/>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
  ))
}