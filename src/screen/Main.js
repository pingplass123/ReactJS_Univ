import React from 'react'
import Home from '../components/Home';
import Category from '../components/TestCategory';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AboutUs from '../components/AboutUs';



class Main extends React.Component {
    constructor(props) {
      super(props);
    }

  render(){
    return (
            <div>
                <Navbar />
                <Home />
                <Category />
                <AboutUs />
                <Footer />
           </div>
      )
  }
}
            



export default Main