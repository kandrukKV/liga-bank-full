import React from 'react';
import PropTypes from 'prop-types';
import './tab.scss';

const Tab = (props) => {
  const {title, listItems, decorImg, renderLink} = props;
  return (
    <div className="tab">
      <div className="tab__text">
        <h2 className="tab__title">{title}</h2>
        <ul className="tab__list">
          {
            listItems.map((item) => <li key={item} className="tab__item">{item}</li>)
          }
        </ul>
        <div className="tab__bottom">{renderLink}</div>
      </div>
      <div className="tab__img" style={{backgroundImage: `url("${decorImg}")`, height: 290}}>
      </div>
    </div>
  );
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  decorImg: PropTypes.string.isRequired,
  renderLink: PropTypes.object.isRequired
};

export default Tab;
