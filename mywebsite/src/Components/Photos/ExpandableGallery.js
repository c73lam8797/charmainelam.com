import React, { useState, useEffect, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import Gallery from 'react-grid-gallery';
import Jumbotron from 'react-bootstrap/Jumbotron';
import '../../CSS/_photos.css';

const layoutStyles = {margin:'0px', padding: '0px'};
export function ExpandableGallery({ id, photos, title }) {
  const [expanded, setExpanded] = useState(false);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    }
    else {
      expand();
    }
  },[expanded])

  const expand = () => {
    let container = document.getElementById(id);
    let overlay = document.getElementById(`overlay_${id}`);
    if(expanded) {
      container.classList.add("expanded");
      overlay.classList.add("expanded");
      container.classList.remove("not_expanded");
      overlay.classList.remove("not_expanded");
    }
    else { //otherwise, limit
      container.classList.add("not_expanded");
      overlay.classList.add("not_expanded");
      container.classList.remove("expanded");
      overlay.classList.remove("expanded");
    }
    
  }
  
  const handleClickExpand = () => { 
    setExpanded(!expanded);
  }
  
  return (
  <>
   <Jumbotron fluid className="gallery_wrapper not_expanded" id={id}>
      <Row style={layoutStyles} className="justify-content-center">
        <h5 className="gallery_title">{title}</h5>
      </Row>
      <Row className="justify-content-center" style={layoutStyles}>
        <Col style={{position: 'relative'}}>
          <div className="overlay" id={`overlay_${id}`}/>
          <Gallery images={photos} />
        </Col>
      </Row>
    </Jumbotron>
    <Row style={{...layoutStyles, transform: "translateY(-100%)"}} className="justify-content-center">
      <Button className="expand_gallery" onClick={handleClickExpand}>
        {expanded?
        <FontAwesomeIcon style={{color: "white"}} icon={faAngleDoubleUp} size="2x" /> : 
        <FontAwesomeIcon style={{color: "white"}} icon={faAngleDoubleDown} size="2x" /> }
      </Button>
    </Row>
  </>
  );
}