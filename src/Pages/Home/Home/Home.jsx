import Banner from "./Banner/Banner";
import Calculator from "./Calculator/Calculator";
import Faq from "./Faq/Faq";
import Form from "./Form/Form";

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Calculator></Calculator>
            <Form></Form>
            <Faq></Faq>
        </div>
    );
};

export default Home;