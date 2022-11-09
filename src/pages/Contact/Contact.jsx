import './Contact.css'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main'
import Sidebar from '../../components/Sidebar/Sidebar'

const Contact = () => {
    var data= ["email","text","phone"];
  return (
    <div className="contact">
        <Header title="Contact"/>
        <Navbar/>
        <Sidebar tabs={data}/>
        <Main text="contacts page"/>
        <Footer/>
    </div>
  )
}

export default Contact