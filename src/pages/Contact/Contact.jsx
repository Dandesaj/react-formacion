import './Contact.css'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main'
import Sidebar from '../../components/Sidebar/Sidebar'

const Contact = () => {
  return (
    <div className="contact">
        <Header title="Contact"/>
        <Navbar/>
        <Sidebar/>
        <Main text="contacts page"/>
        <Footer/>
    </div>
  )
}

export default Contact