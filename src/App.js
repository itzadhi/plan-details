import 'bootstrap/dist/css/bootstrap.min.css';
import CardDetails from './CardDetails';
import './App.css';

function App() {
  const data = [
    {
      details: [
        'Single User',
        '50GB Storage',
        'Unlimited Public Projects',
        'Community Access',
        'Unlimited Private Projects',
        'Dedicated Phone Support',
        'Free Subdomain',
        'Monthly Status Reports',
      ],
      price: '$0/month',
      name: 'Free',
      disable: -4,
    },
    {
      details: [
        '5 Users',
        '50GB Storage',
        'Unlimited Public Projects',
        'Community Access',
        'Unlimited Private Projects',
        'Dedicated Phone Support',
        'Free Subdomain',
        'Monthly Status Reports',
      ],
      price: '$9/month',
      name: 'Plus',
      disable: -1,
    },
    {
      details: [
        'Unlimited Users',
        '50GB Storage',
        'Unlimited Public Projects',
        'Community Access',
        'Unlimited Private Projects',
        'Dedicated Phone Support',
        'Free Subdomain',
        'Monthly Status Reports',
      ],
      price: '$49/month',
      name: 'Pro',
      disable: 8,
    },
  ];

  return (
    <div className='main-container'>
      <div className='d-flex justify-content-between container-style'>
        {data.map((detail) => (
          <CardDetails
            key={detail.disable}
            name={detail.name}
            price={detail.price}
            disable={detail.disable}
            details={detail.details}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
