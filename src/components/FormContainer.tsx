import { Widget } from '@typeform/embed-react';

const Form = () => {
  return (
    <div style={
        {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh',
            backgroundColor: "#f5f5f5"
        }
    }>
      <Widget id="SGKofbao"
              style={{
                  width: '70%',
                  height: '80%',
      }} className="my-form" />
    </div>
  );
};

export default Form;
