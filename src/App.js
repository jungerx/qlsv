import Layout from './layout/Layout';
import {BrowserRouter as Router,Navigate,Route,Routes} from 'react-router-dom'
import StudentHomePage from './pages/Student/StudentHomePage';
import StudentCreatePage from './pages/Student/StudentCreatePage';
import NotFoundPage from './pages/NotFoundPage'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Navigate to={"/student"}/>}/>
        <Route path='/student' element={<StudentHomePage/>}/>
        <Route path="/student/create" element={<StudentCreatePage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
