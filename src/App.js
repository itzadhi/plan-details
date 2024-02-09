import 'bootstrap/dist/css/bootstrap.min.css';
import CardDetails from './CardDetails';
import './App.css';

function App() {
  //Plan details
  const data = [
    {
      features: [
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
      featureAvailable: -4,
    },
    {
      features: [
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
      featureAvailable: -1,
    },
    {
      features: [
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
      featureAvailable: 8,
    },
  ];

  return (
    <div className='container-md d-flex justify-content-center mt-5'>
      <div className='d-flex justify-content-center flex-wrap align-content-center p-3 container-style'>
        {data.map((detail) => (
          <CardDetails
            key={detail.featureAvailable}
            name={detail.name}
            price={detail.price}
            featureAvailable={detail.featureAvailable}
            features={detail.features}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
