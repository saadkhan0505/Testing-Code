import { message } from 'antd';

export const configureMessage = () => {
  message.config({
    top: 70,
    duration: 3,
  });
};

export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'black',
  color: 'white',
  boxShadow: 24,
  p: 4,
  width: 500
};















