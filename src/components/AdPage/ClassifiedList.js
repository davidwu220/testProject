import React from "react";
import PropTypes from 'prop-types';

import Classified from './Classified';

const ClassifiedList = ({ classifiedAds }) => (
    <div className="ClassifiedList">
        {classifiedAds.map(classified => 
            <Classified key={classified.id} {...classified} />
        )}
    </div>
);

ClassifiedList.propTypes = {
    classifiedAds: PropTypes.array
}

export default ClassifiedList;