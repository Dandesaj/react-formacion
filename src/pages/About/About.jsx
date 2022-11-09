import './About.css'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Sidebar from '../../components/Sidebar/Sidebar'
import Main from '../../components/Main/Main'


const About = () => {
  return (
    <div className="about">
        <Header title="About"/>
        <Navbar/>
        <Sidebar/>
        <Main text="The About Page"/>
        <Footer/>
    </div>
  )
}

export default About