import { CarderContent, Img, TextContainer } from "./styles";

const Carder = ({ img }) => {
    return (
        <CarderContent>
            <Img src={img} alt='background-image' />
            <TextContainer>
                <h1>Lorem Ipsu</h1>
                <h2>Lorem Ipsu</h2>
            </TextContainer>
        </CarderContent>
    );
};

export default Carder;
