import React from 'react';
import styled from "styled-components";
import {Logo} from "../../componemts/logo/Logo";
import {Menu} from "../../componemts/menu/Menu";

const items = ["Home","Skills","Works","Testimony","Contact"]
export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>
        </StyledHeader>

    );
};

const StyledHeader = styled.header`
  background-color: #80ffce;
  display: flex;
  justify-content: space-between;
`