import { Routes, Route } from 'react-router-dom';
import { First } from './pages/first-page';

function App() {
  return (
    <Routes>
      <Route path='/' element={<First />}></Route>
    </Routes>
  );
}

export default App;
