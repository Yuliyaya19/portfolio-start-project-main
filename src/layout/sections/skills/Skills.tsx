import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../componemts/FlexWrapper";
import {Icon} from "../../../componemts/icon/Icon";
import {SectionTitle} from "../../../componemts/SectionTitle";
import {Skill} from "./skill/Skill";


export const Skills = () => {
    return (
        <StyledSkills>
          <SectionTitle>My Skills</SectionTitle>
          <FlexWrapper wrap={"wrap"} justify={"space-between"}>
              <Skill iconId={"code"}
                     title={"html5"}
                     description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
              <Skill iconId={"css"}
                     title={"css"}
                     description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
              <Skill iconId={"react"}
                     title={"React"}
                     description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
              <Skill iconId={"typescript"}
                     title={"typescript"}
                     description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
              <Skill iconId={"styledComponents"}
                     title={"styled components"}
                     description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
              <Skill iconId={"figma"}
                     title={"WEB DESIgN"}
                     description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
          </FlexWrapper>
        </StyledSkills>
    );
};
 const StyledSkills = styled.section`
 background-color: #ffd6dc;
   min-height: 100vh;
 `