import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, H1, Cart } from 'nhm-ui';

const App = () => {
  const groups: any =[
    {
      description: 'Ages 13+',
      name: 'Adult',
      price: 10
    },
    {
      description: 'Ages 65+',
      name: 'Senior',
      price: 7
    },
    {
      description: 'Ages 3-12',
      name: 'Child',
      price: 5
    },
    {
      description: 'Ages 0-2',
      name: 'Infant',
      price: 0
    }
  ];
  return (  
    <div style={{display:'flex', flexDirection:'column', gap:'1rem', margin:'2rem'}}>
      <H1>Example</H1>
      <Cart groups={groups}/>
      <Button>Submit</Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
