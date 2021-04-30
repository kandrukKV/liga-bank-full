import React from "react";
import {YMaps, Map, Placemark, ZoomControl} from "react-yandex-maps";
import "./branch-map.scss";

const BranchMap = () => {

  return (
    <div className="map theme-container">
      <h2 className="map__header">Отделения Лига Банка</h2>
      <div className="map__container">
        <YMaps>
          <Map
            defaultState={{
              center: [56.753186, 61.647057],
              zoom: 5,
            }}
            width="100%"
            height="462px"
          >
            <Placemark geometry={[55.755814, 37.617635]} />
            <Placemark geometry={[51.533557, 46.034257]} />
            <Placemark geometry={[55.796127, 49.106405]} />
            <Placemark geometry={[57.152985, 65.541227]} />
            <ZoomControl options={
              {
                position: {left: 10, top: `auto`}
              }
            } />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};

export default BranchMap;
