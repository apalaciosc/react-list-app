import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Items = (props) => {
  const [filteredMovies, setFilteredMovies] = useState(props.data)
  const filterMovies = (e) => {
    const query = e.target.value;

    const movies = props.data.filter((e) => {
      return e.title.toLowerCase().includes(query.toLowerCase());
    });

    setFilteredMovies(movies);
  }

  return (
    <div className='container'>
      <h1 className='mb-6 justify-content-center'>Movie list</h1>

      <input type="text" onChange={filterMovies} />

      <div className="row">
        {filteredMovies.map((item, index) => {
          return <div className="col-lg-3 justify-content-center" key={index}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{ item.title }</Card.Title>
                <Card.Text>
                  { item.release_date }
                </Card.Text>
                <Button variant="primary" data-target={`#modalDetails${index}`}>
                  Details
                </Button>

                <div className="modal fade" id={`modalDetails${index}`} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        ...
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        })}
      </div>
    </div>
  )
}

export default Items;
