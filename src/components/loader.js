import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <div className='container'>
      <div className='row position-absolute bottom-50 end-50'>
        <Spinner animation="grow" />
      </div>
    </div>
  )
}

export default Loader;
