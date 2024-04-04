### toaster
toaster is a React library that allows you to create toast notifications in your React application.

### Installation
To install toaster, you can use npm. Here is an example of how to install toaster using npm:
```bash
npm install toaster
```
### Usage
To use toaster, you need to import the ToastContainer component from the toaster package. Here is an example of how to use toaster in your React application:
```jsx
import Alert from 'toaster';

const App = () => {
  return (
    <div>
      <Alert message={'alert message here!'} alertType={'type'} />
    </div>
  );
};
```

alertType can be one of the following values: 'success', 'error', 'info'.

