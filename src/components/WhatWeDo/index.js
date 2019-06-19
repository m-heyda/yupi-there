import React from 'react';
import Typography from '../Typography';
import SeoIcon from '../Icons/SeoIcon';
import CampaignIcon from '../Icons/CampaignIcon';
import AnalysisIcon from '../Icons/AnalysisIcon';
import ConsultingIcon from '../Icons/ConsultingIcon';
import GraphicsIcon from '../Icons/GraphicsIcon';
import ContentIcon from '../Icons/ContentIcon';
import RightArrow from '../Icons/RightArrow';
import Button from '../../components/Button';
import { Paragraph } from '../../global/commonStyles';
import { variables } from '../../global/helpers';
import {
  Wrapper,
  Container,
  TilesWrapper,
  Tile,
  TileContent,
  TileIcon,
} from './WhatWeDo.style';

const { fontSize } = variables;

const tilesData = [
  {
    icon: <SeoIcon />,
    title: 'Pozycjonowanie i optymalizacja SEO',
    content: 'Odkryj wzrost liczby transakcji z Google o 1030 % w ciągu roku',
    href: '/oferta-seo/',
  },
  {
    icon: <CampaignIcon />,
    title: 'Kampanie reklamowe',
    content: 'Odkryj jak zdobyć klientów z Google, YouTube, Facebook, Mobile.',
    href: '/kampanie-sm/',
  },
  {
    icon: <AnalysisIcon />,
    title: 'Analityka internetowa',
    content: 'Dowiedz się jak skutecznie pozyskać nowego klienta.',
    href: '/analityka/',
  },
  {
    icon: <ConsultingIcon />,
    title: 'Konsultacje i szkolenia',
    content: 'Skup się na biznesie. Doradzimy ci, jak osiągnąć sukces.',
    href: '/',
  },
  {
    icon: <GraphicsIcon />,
    title: 'Grafika online',
    content: 'Zaproponujemy Ci grafikę nowoczesną i skuteczną',
    href: '/',
  },
  {
    icon: <ContentIcon />,
    title: 'Content marketing',
    content: 'My wiemy, jakie treści czytają Twoi klienci',
    href: '/',
  },
];

const WhatWeDo = () => {
  return (
    <Wrapper>
      <Container>
        <Typography component='h2' headingVariant='heading'>
          Czym się zajmujemy?
        </Typography>

        <Paragraph margin={36} maxWidth={580}>
          Świadczymy usługi z zakresu marketingu internetowego. Tworzymy i
          prowadzimy kampanie w Google Ads i w social mediach. Oferujemy pełny
          wachlarz działań SEO, analitykę webową oraz usługi graficzne.
        </Paragraph>

        <TilesWrapper>
          {tilesData.map((tile, i) => (
            <Tile key={i}>
              <TileContent>
                <TileIcon>{tile.icon}</TileIcon>

                <Typography component='h3' headingVariant='staticHeading'>
                  {tile.title}
                </Typography>

                <Paragraph size={fontSize.regular} margin={16}>
                  {tile.content}
                </Paragraph>

                <Button centered link withIcon={RightArrow} component="a" href={ tile.href }>
                  Dowiedz się więcej
                </Button>
              </TileContent>
            </Tile>
          ))}
        </TilesWrapper>
      </Container>
    </Wrapper>
  );
};

export default WhatWeDo;
