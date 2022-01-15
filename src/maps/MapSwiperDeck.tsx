import React from "react";
import styled from "styled-components";
import BioMap from "./BioMap";
import CollectionMap from "./CollectionMap";
import Map from "./Map";
import MapSwiper from "./MapSwiper";

const SlideContainer = styled.div<{ height: string }>`
  height: ${(props) => props.height};
  text-align: center;
`;

const SlideHeader = styled.div`
  font-size: 2.5em;
  color: #237cbd;
`;

const MapSwiperDeck: React.FC<{ height: string }> = ({ height }): JSX.Element => {
  return (
    <MapSwiper>
      <SlideContainer height={height}>
        <SlideHeader>Sea Temperature Map</SlideHeader>
        <Map />
      </SlideContainer>
      <SlideContainer height={height}>
        <SlideHeader>Biodiversity Map</SlideHeader>
        <BioMap />
      </SlideContainer>
      <SlideContainer height={height}>
        <SlideHeader>Data Collection Map</SlideHeader>
        <CollectionMap />
      </SlideContainer>
    </MapSwiper>
  );
};

export default MapSwiperDeck;
