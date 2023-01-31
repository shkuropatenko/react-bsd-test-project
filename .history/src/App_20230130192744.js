import { Routes, Route } from 'react-router-dom';
import { First } from './pages/first-page';
import { Second } from './pages/second-page';
import { Third } from './pages/third-page';

function App() {
  return (
    <Routes>
      <Route path='/' element={<First />}></Route>
      <Route path='second' element={<Second />}></Route>
      <Route path='third' element={<Third />}></Route>
    </Routes>
  );
}

export default App;
