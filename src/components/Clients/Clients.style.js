import styled from "styled-components"
import { rem } from "polished"
import { variables, colors } from "../../global/helpers"
import { containerStyles } from "../../global/commonStyles"

const { globalSize } = variables

export const Container = styled.div`
  ${containerStyles}

  display: flex;
  flex-direction: column;
`

export const Wrapper = styled.section`
  padding: ${rem(globalSize.paddingSmall)} 0;
  border-bottom: 1px solid ${colors.athensGray};
  background-color: ${colors.whiteLilca};
`

export const CompaniesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 0 ${rem(40)};

  & > svg,
  & > img {
    width: ${rem(110)};
    height: ${rem(110)};
    margin: 0 ${rem(10)};
  }

  & > img {
    width: auto;
  }
`
