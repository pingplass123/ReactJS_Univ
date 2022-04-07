import bgImg from '../video/rocket.mp4'
import '../css/Home.css'
import Banner from '../components/Banner'


const Home = () =>{
   
    return(
        <div className='home'>
            <Banner />
            <video src={bgImg} type="video/mp4" autoPlay loop muted />
        </div>

    )
}

export default Home;