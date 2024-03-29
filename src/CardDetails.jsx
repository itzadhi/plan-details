import { CheckIcon, XIcon } from '@primer/octicons-react';
import React from 'react';
import { Card, Button } from 'react-bootstrap';

//Each feature availablility in each plan details
function FeatureDetails({ info, customStyle = 'text-dark' }) {
  return (
    <div className='d-flex align-items-center p-2'>
      {customStyle === 'text-dark' ? (
        <CheckIcon size={16} />
      ) : (
        <XIcon fill='rgb(150, 150, 141)' size={16} />
      )}

      <span className={customStyle} style={{ color: 'rgb(150, 150, 141)' }}>
        {info}
      </span>
    </div>
  );
}

function CardDetails({ name, price, featureAvailable, features }) {
  //How many features are available on each plan
  const featureAvailableTracker = features.length - featureAvailable;

  return (
    <Card style={{ width: '18rem' }} className='m-3 rounded'>
      <Card.Body>
        <Card.Title className='custom-text text-uppercase text-muted text-center'>
          {name}
        </Card.Title>
        <Card.Title className='fs-1 fw-semibold border-bottom text-center pb-3 mb-2'>
          {price}
        </Card.Title>

        {features.slice(0, featureAvailable).map((info, index) => {
          return <FeatureDetails key={index} info={info} />;
        })}

        {featureAvailableTracker !== features.length &&
          features.slice(featureAvailable).map((info, index) => {
            return (
              <FeatureDetails
                key={index}
                info={info}
                customStyle='custom-color'
              />
            );
          })}

        <div className='d-grid gap-2 mt-1'>
          <Button variant='primary rounded-pill custom-button' size='lg'>
            Button
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardDetails;
