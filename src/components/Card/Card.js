
import React from 'react'
import { colors } from '../../constants/backColorsCards'
import { ContainerPoke, ImageContainer, Number, BodyContainer, MainTypeContainer, PokemonName, Button, ButtonContainner, ContainerType } from './Styles'

const color = colors


const Card = (props) => {
    const { name, type } = props
    const colorContainer = color[props.type]

    return (
        <ContainerType >
            <ContainerPoke>
                <ImageContainer>
                    <Number>
                        {props.number}
                    </Number>
                </ImageContainer>
                <BodyContainer >
                    <MainTypeContainer style={{ backgroundColor: colorContainer }} >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </MainTypeContainer>
                    <PokemonName>
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                    </PokemonName>
                </BodyContainer>
                <ButtonContainner>
                    <Button onClick={() => props.functionAddOrRemove()}>{props.text}</Button>
                    <Button onClick={() => props.details()}>Detalhes</Button>
                </ButtonContainner>
            </ContainerPoke>
        </ContainerType>
    )
}
export default Card
