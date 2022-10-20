import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <Main
            saludo="Bienvenid@ a la tienda de Amelie"/>
      <Footer/>
    </>
  );
};

export default App;
