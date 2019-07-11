import React from "react"
import { SubMenuWrapper, SubMenuItem, SubMenuLink } from "./Navigation.style"
import { NavContext } from "./"

const SubMenu = () => {
  return (
    <NavContext.Consumer>
      {value => (
        <SubMenuWrapper>
          <SubMenuItem>
            <SubMenuLink onClick={value.menuTrigger} to="/reklamy-google/">
              Google Ads
            </SubMenuLink>
          </SubMenuItem>

          <SubMenuItem>
            <SubMenuLink onClick={value.menuTrigger} to="/seo/">
              SEO
            </SubMenuLink>
          </SubMenuItem>

          <SubMenuItem>
            <SubMenuLink onClick={value.menuTrigger} to="/analityka/">
              Analityka Web
            </SubMenuLink>
          </SubMenuItem>

          <SubMenuItem>
            <SubMenuLink onClick={value.menuTrigger} to="/kampanie-sm/">
              Kampanie social media
            </SubMenuLink>
          </SubMenuItem>
        </SubMenuWrapper>
      )}
    </NavContext.Consumer>
  )
}

export default SubMenu
