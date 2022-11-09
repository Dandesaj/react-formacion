import './About.css'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Sidebar from '../../components/Sidebar/Sidebar'
import Main from '../../components/Main/Main'


const About = () => {
  const tabData = ["view profile","add as friend","block"];
  const mainData = {
    name: "Sebastian",
    age: 31,
    address: "test"
  }
  return (
    <div className="about">
        <Header title="About"/>
        <Navbar/>
        <Sidebar tabs={tabData}/>
        <Main text="Welcome, " data={mainData}/>
        <Footer/>
    </div>
  )
}

export default About