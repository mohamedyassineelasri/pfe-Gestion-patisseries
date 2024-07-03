// import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
// import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import IndexAdmin from './Admin/components/IndexAdmin';
import IndexEmpl from './employe/components/IndexEmpl';

function App() {
  return (
    <div>
   <IndexAdmin />
   <IndexEmpl />
    </div>
  );
}

export default App;
