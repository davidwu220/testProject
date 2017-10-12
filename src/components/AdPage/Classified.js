import React from 'react';

const Classified = (classifiedAd) => (
    <div className="">
        <div>
            {classifiedAd.id}
        </div>
        <div>
            {classifiedAd.title}
        </div>
        <div>
            {classifiedAd.discription}
        </div>
    </div>
);

export default Classified;