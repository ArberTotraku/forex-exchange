import './scss/App.scss';
import './App.css';

import { BrowserRouter ,Routes, Route } from 'react-router-dom';

import Layout from './components/Layout.jsx';
import Header from './components/Header.jsx';
import ConvertForm from './components/ConvertForm.jsx';
import News from './components/News.jsx';
import Help from './components/Help.jsx';
import Contact from './components/Components.jsx';
import LoginForm from './components/LoginForm.jsx';
import NotFound from './components/NotFound.jsx';
import ContextContainer from './context/Context.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <ContextContainer>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<ConvertForm />} />
            <Route path='news' element={<News />} />
            <Route path='help' element={<Help />} />
            <Route path='contact' element={<Contact />} />
            <Route path='loginForm' element={<LoginForm />} />
            <Route path='footer' element={<Footer />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
        </BrowserRouter>
      </div>
    </ContextContainer>
  );
}

export default App;
