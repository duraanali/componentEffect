import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col
  } from 'reactstrap';


export default function MovieCard(props) {

    const { description, title, director, release_date } = props.film
    return (
     <Col xs="6">
      <Card>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Director: {director} - Release Date: {release_date}</CardSubtitle>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </Col>
    )
}
