import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'

import './Home.css'

const Home = () => {
  return (
    <div className="home">
        <Header title="Home"/>
        <Navbar/>
        <Sidebar/>
        <Main text="Home page"/>
        <Footer/>
    </div>
  )
}

export default Home