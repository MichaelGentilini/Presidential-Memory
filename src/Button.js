import React from 'react';
import './index.css';
import { Button, Row, Col } from 'reactstrap';

function Buttons({ href, id, pushId, handleIncrement }) {
  // console.log({ href });
  return (
    <div>
      {/* <div className='clickImg'> */}
      <div className='col-6'>
        <img
          className='image-btn m-2'
          // onClick={() => {
          //   pushId(id);
          // }}
          src={href}
          style={{ height: '150px', width: '150px' }}
          id={id}
          role='button'
          alt='presidential image'
          onClick={() => {
            console.log('pressed with id of ' + id);
            // handleIncrement(id);
          }}
        />

        {/* <Button
          onClick={() => console.log({ id } + ' i was clicked')}
          size='xl'
          className='btn btn-lg mb-3 p-5 img-btn'
          id={id}
          // style={{
          //   color: 'success',
          //   background: '"url(' + { href } + ')"',
          //   // backgroundSize: 'cover',
          // }}
        /> */}
      </div>
      {/* </div> */}
    </div>
  );
}
export default Buttons;
