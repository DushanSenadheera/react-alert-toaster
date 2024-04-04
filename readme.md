### React Toastify
React Toastify is a React library that allows you to create toast notifications in your React application.

### Installation
To install React Toastify, you can use npm. Here is an example of how to install React Toastify using npm:
```bash
npm install react-toastify
```
### Usage
To use React Toastify, you need to import the ToastContainer component from the react-toastify package. Here is an example of how to use React Toastify in your React application:
```jsx
import Alert from 'react-toastify';

const App = () => {
  return (
    <div>
      <Alert message={'alert message here!'} alertType={'type'} />
    </div>
  );
};
```

alertType can be one of the following values: 'success', 'error', 'info'.

