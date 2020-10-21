import React from 'react';
import styled from 'styled-components';

const CardsContainer = styled.div`
    border: 2px solid white;
    display: flex;
    flex-direction: column;
`;

const CardsInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;

    p{
     margin: 4px 0;
    }
`;

const AddToCartButton = styled.button`
    align-self: center;
    margin-top: 4px;
`;


class ProductsCards extends React.Component {

    render() {
        return <CardsContainer>
            <img src={'https://img.assinaja.com/assets/tZ/003/img/233918_246x306.png'}/>
            <CardsInfo>
                <p>USS Enterprise</p>
                <p>R$ 149.99</p>
                <button>Adicionar ao Carrinho</button>
            </CardsInfo>
        </CardsContainer>
                }
}

export default ProductsCards
