import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../componemts/SectionTitle";
import {Button} from "../../../componemts/Button";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle>I Am Available For Freelance</SectionTitle>
            <Button>Hire me</Button>
        </StyledSlogan>
    );
};
const StyledSlogan = styled.section`
  background-color: #d6ffc8;
  min-height: 30vh;
`