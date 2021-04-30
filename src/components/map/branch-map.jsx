import React from "react";
import {YMaps, Map, Placemark, ZoomControl} from "react-yandex-maps";
import "./branch-map.scss";
import mark from "../../img/location.svg";
import {BANK_BRANCH_COORDINATES} from "../../const";

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
            modules={[`templateLayoutFactory`]}
          >
            {
              BANK_BRANCH_COORDINATES.map((item, idx) => {
                return (
                  <Placemark
                    key={`label-${idx}`}
                    geometry={item}
                    options={{
                      iconLayout: `default#image`,
                      iconImageHref: mark,
                      iconImageSize: [35, 40],
                      iconContentOffset: [10, 10]
                    }}
                  />
                );
              })
            }
            <ZoomControl options={{
              position: {
                right: 20,
                top: 108
              }
            }} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};

export default BranchMap;
