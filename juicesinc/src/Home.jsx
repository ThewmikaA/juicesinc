import './Home.css'
import Header from './Header'
import CardCont from './Cardcont';

function Home(){
    return(
        <div className="homepage">
            <Header/>
            <div className="mainpage"/>
            <div className="title_tab">
                <h1 className='top_heading'><span id='mainpage_span1'>Try out </span><span id='mainpage_span2'>our newly </span><span id='mainpage_span3'>releases</span></h1>
            </div>
            <CardCont/>
            <div className="juiceinc_desc">
                
            </div>
        </div>
    );
}

export default Home