import './App.css';
import React from 'react'
const LazyLoad = React.lazy(
  () => import('LazyLoad/LazyLoad')
);
const Routing = React.lazy(
  () => import('Routing/Routing')
);
function App() {
  return (
    <div className="App">
      <div className='header'>This is Home</div>
      <div className='section w-50'>
        <React.Suspense fallback='Loading Lazy form'>
          <LazyLoad name="this is props value from home"/>
        </React.Suspense>
      </div>
      <div className='section w-50'>
        <React.Suspense fallback='Loading component with route'>
          <Routing />
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
