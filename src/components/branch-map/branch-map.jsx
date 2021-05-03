import React from "react";
import {YMaps, Map, Placemark, ZoomControl} from "react-yandex-maps";
import "./branch-map.scss";
import mark from "../../img/location.svg";
import {BANK_BRANCH_COORDINATES} from "../../const";

const BranchMap = () => {

  return (
    <section id="map" className="branch-map">
      <h2 className="branch-map__header theme-container">Отделения Лига Банка</h2>
      <div className="branch-map__container">
        <YMaps>
          <Map
            defaultState={{
              center: [56.753186, 61.647057],
              zoom: 5,
            }}
            className="branch-map__wrapper"
            width="100%"
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
    </section>
  );
};

export default BranchMap;
