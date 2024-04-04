### react-alert-toaster
react-alert-toaster is a React library that allows you to create toast notifications in your React application.

### Installation
To install react-alert-toaster, you can use npm. Here is an example of how to install react-alert-toaster using npm:
```bash
npm install react-alert-toaster
```
### Usage
To use react-alert-toaster, you need to import the ToastContainer component from the react-alert-toaster package. Here is an example of how to use react-alert-toaster in your React application:
```jsx
import Alert from 'react-alert-toaster';

const App = () => {
  return (
    <div>
      <Alert message={'alert message here!'} alertType={'type'} />
    </div>
  );
};
```

alertType can be one of the following values: 'success', 'error', 'info'.

