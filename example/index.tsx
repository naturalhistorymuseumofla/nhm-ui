import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, H1 } from 'nhm-ui';
import { useState } from 'react';
import { Form } from '../src/Form';
import { RadioGroup } from '../src/RadioGroup';
import { Radio } from '../src/Radio';


const App = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div>
      <H1>Example</H1>
      <Button>Submit</Button>
      <Form>
        <RadioGroup title="Radio Group:">
          <Radio label="Radio 1" name="example" />
          <Radio label="Radio 2" name="example" />
          <Radio label="Radio 3" name="example" />
        </RadioGroup>
      </Form>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
