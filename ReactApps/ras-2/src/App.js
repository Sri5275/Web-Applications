
import './App.css';
import Body from './Componenets/Body/Body';
import Navbar from './Componenets/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Componenets/Footer/Footer';

function App() {
  // let array=[
  //   {name:'saketh',age:19},{name:'SRIVASTAV',age:10}
  // ]
  return (
    <div className="App ">
      {/* {array.map((obj,index) =><Child obj={obj} key={index}/>)} */}

   <Navbar/>
   <Body/>
   <Footer/>
    </div>
  );
}

export default App;
