
import NavbarMain from '../../components/Nabvar/NavbarMain'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

function LayoutInicio() {
  return (
    <><NavbarMain/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default LayoutInicio