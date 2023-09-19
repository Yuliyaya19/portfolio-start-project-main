import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../componemts/SectionTitle";
import {Icon} from "../../../componemts/icon/Icon";
import {Slider} from "../../../componemts/slider/Slider";
import {FlexWrapper} from "../../../componemts/FlexWrapper";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId={"quoteAltRight"}/>
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>
    );
};
const StyledTestimony = styled.section`
  background-color: #eac8ff;
  min-height: 50vh;
`