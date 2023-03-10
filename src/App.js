import { Routes, Route } from 'react-router-dom';
import { First } from './pages/First-page';
import { Second } from './pages/Second-page';
import Third from './pages/Third-page';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <header className='header'>
        <Navbar />
      </header>
      <main className='main'>
        <Routes>
          <Route path='/' element={<First />}></Route>
          <Route path='second' element={<Second />}></Route>
          <Route path='third' element={<Third />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
