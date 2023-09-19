import React from 'react';
import styled from "styled-components";
import {Icon} from "../../componemts/icon/Icon";
import {FlexWrapper} from "../../componemts/FlexWrapper";


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
            <Name>Svetlana</Name>
            <SocialList>

                <SocialItem>
                    <SocialLink>
                        <Icon height={"21px"} width={"21px"} vieeBox={"0 0 21px 21px"} iconId={"instagram"}/>
                    </SocialLink>
                </SocialItem>

                <SocialItem>
                    <SocialLink>
                        <Icon height={"21px"} width={"21px"} vieeBox={"0 0 21px 21px"} iconId={"telegram"}/>
                    </SocialLink>
                </SocialItem>

                <SocialItem>
                    <SocialLink>
                        <Icon height={"21px"} width={"21px"} vieeBox={"0 0 21px 21px"} iconId={"vkLogo"}/>
                    </SocialLink>
                </SocialItem>

                <SocialItem>
                    <SocialLink>
                        <Icon height={"21px"} width={"21px"} vieeBox={"0 0 21px 21px"} iconId={"linkedin"}/>
                    </SocialLink>
                </SocialItem>

            </SocialList>
            <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
            </FlexWrapper>
            </StyledFooter>
    )
        ;
};
const StyledFooter = styled.footer`
background-color: #ffe2a3;
  min-height: 20vh;

`
const Name = styled.span`

`
const SocialList = styled.ul`
display: flex;
  gap: 30px;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`

`
const Copyright = styled.small`

`

