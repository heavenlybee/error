import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import FormLogin from './src/Form'
import { UserContext } from './App'
function RoutesComp() {
  const userContext = useContext(UserContext)
  return (
    <>
      <Routes>
            <Route path = '/form' element={<FormLogin/>}/>
            <Route exact path='/' element={<Home />} />
            <Route path='' element={<div>page not found</div>} />
      </Routes>
    </>
  )
}

export default RoutesComp
