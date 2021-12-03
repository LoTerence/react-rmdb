import React from "react";
//Styles
import { Wrapper, Content, Text } from "./HeroImage.styles.js";

const HeroImage = ({image, title, text}) => {
    return (
        <Wrapper image={image}>
            <Content>
                <Text>
                    <h1>{title}</h1>
                    <p>{text}</p>
                </Text>
            </Content>
        </Wrapper>
    )
}

export default HeroImage;