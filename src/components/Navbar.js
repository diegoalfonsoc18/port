import React, { useState } from "react";

import {
  Container,
  LogoContainer,
  Menu,
  MenuItem,
  MenuItemLink,
  Wrapper,
  DropdownContact,
  DropdownContactUl,
  DropdownContactli,
  ContainerMenu,
  LogoCode,
  ResponsiveIcon,
} from "./Navbar.elements";
import { GrLinkedin, GrGithub, GrMail } from "react-icons/gr";
import code from "../code(1).png";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [openContact, setOpenContact] = useState(false);
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <LogoCode>
            <img src={code} alt="code" className="logo" />
          </LogoCode>
        </LogoContainer>
        <ResponsiveIcon>
          <BiMenu
            style={{
              color: "rgba(0, 157, 35, 1)",
              height: "30px",
              width: "30px",
            }}
          />
        </ResponsiveIcon>
        <ContainerMenu>
          <Menu>
            <MenuItem>
              <MenuItemLink>About me</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink href="#porfolio">Portfolio</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink
                onClick={() => setOpenContact(!openContact)}
                className="li-contact"
              >
                Contact
              </MenuItemLink>
              {openContact && (
                <DropdownContact>
                  <DropdownContactUl>
                    <DropdownContactli>
                      <MenuItemLink
                        href="https://github.com/diegoalfonsoc18"
                        target="_blank"
                        className="icon-gitHub"
                      >
                        <GrGithub />
                      </MenuItemLink>
                    </DropdownContactli>
                    <DropdownContactli>
                      <MenuItemLink
                        href="https://www.linkedin.com/in/diego-alfonso-castillo/"
                        target="_blank"
                        className="icon-linkedin"
                      >
                        <GrLinkedin />
                      </MenuItemLink>
                    </DropdownContactli>
                    <DropdownContactli>
                      <MenuItemLink
                        href=""
                        target="_blank"
                        className="icon-gmail"
                      >
                        <GrMail />
                      </MenuItemLink>
                    </DropdownContactli>
                  </DropdownContactUl>
                </DropdownContact>
              )}
            </MenuItem>
          </Menu>
        </ContainerMenu>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
