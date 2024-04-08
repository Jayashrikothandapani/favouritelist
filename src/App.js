
import FavouriteStudent from './Components/Favourite';
import ListOfStudents from './Components/ListofStudents';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import ArrContextProvider from './Components/ArrContextProvider';




function App() {


  return (

    <BrowserRouter>
      <nav className="bg-[#BD5A5B] p-10 flex gap-20">
        <Link to={"/"} className='underline'>List of Students</Link>
        <Link to={"/fav"} className='underline'>Favourite Students</Link>
      </nav>
      <ArrContextProvider>
        <Routes>
          <Route path='/' element={<ListOfStudents></ListOfStudents>}></Route>
          <Route path='/fav' element={<FavouriteStudent></FavouriteStudent>}></Route>
        </Routes>
      </ArrContextProvider>


    </BrowserRouter>







  )
}

export default App;
export { App }