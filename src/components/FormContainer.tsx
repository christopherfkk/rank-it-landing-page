import { Widget } from '@typeform/embed-react';

const Form = () => {
  return (
    <div style={
        {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: "#f5f5f5"
        }
    }>
      <Widget id="SGKofbao" style={{ width: '70%', height: '600px' }} className="my-form" />
    </div>
  );
};

export default Form;
