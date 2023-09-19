import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../componemts/SectionTitle";
import {Menu} from "../../../componemts/menu/Menu";
import {FlexWrapper} from "../../../componemts/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from '../../../assets/images/proj-1.png'
import timerlImg from '../../../assets/images/proj-2.png'

const workItems = ["All","landing page","React","spa"]
export const Works = () => {
    return (
        <StyledWorks>
          <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={workItems}/>
            <FlexWrapper justify={"space-around"}>
                <Work title={"Social Network"}
                      src={socialImg}
                      text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>

                <Work title={"Timer"}
                      src={timerlImg}
                      text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
            </FlexWrapper>
        </StyledWorks>
    );
};
const StyledWorks = styled.section`
min-height: 100vh;
  background-color: #c3d7ff;
`
