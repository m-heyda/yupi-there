import styled from 'styled-components';
import { rem } from 'polished';
import { variables, utils, colors } from '../../global/helpers';
import { containerStyles } from '../../global/commonStyles';

const { globalSize } = variables;
const { media } = utils;

export const Container = styled.div`
  ${containerStyles}
`;

export const Wrapper = styled.section`
  padding: ${rem(globalSize.paddingSmall)} 0;
  border-bottom: 1px solid ${colors.athensGray};
`;

export const CompaniesWrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: center;
   margin: 0 0 ${rem('40px')};
   
   & > svg {
      width: 100%;
      height: auto;
      max-width: ${rem('130px')};
      margin: ${rem('30px')} 1%;
   }
`;
