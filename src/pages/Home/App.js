import { useRef } from "react";

import {
    Container,
    WrapperContent,
    WrapperCarder,
    HeaderText,
    CaroseulContent,
    ButtonLeft,
    ButtonRigth,
} from "./styles";

import Carder from "../../components/Carder";

import buttonLeft from "../../assets/button-left.svg";
import buttonRigth from "../../assets/button-rigth.svg";

import { data } from "../../utils/data";

function App() {
    const caroseulElement = useRef(null);

    const handleLeft = () => {
        caroseulElement.current.scrollLeft -= caroseulElement.current.offsetWidth;
    };

    const handleRigth = () => {
        caroseulElement.current.scrollLeft += caroseulElement.current.offsetWidth;
    };

    return (
        <div className='App'>
            <Container>
                <WrapperContent>
                    <HeaderText>
                        <h1>Carousel with ReactJS</h1>
                    </HeaderText>
                    <CaroseulContent>
                        <ButtonLeft onClick={() => handleLeft()}>
                            <img src={buttonLeft} alt='icon-arrow-left' />
                        </ButtonLeft>
                        <WrapperCarder ref={caroseulElement}>
                            {data.map((item) => {
                                return <Carder key={item.id} img={item.src} />;
                            })}
                        </WrapperCarder>
                        <ButtonRigth onClick={() => handleRigth()}>
                            <img src={buttonRigth} alt='icon-arrow-rigth' />
                        </ButtonRigth>
                    </CaroseulContent>
                </WrapperContent>
            </Container>
        </div>
    );
}

export default App;
