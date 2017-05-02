import React from 'react';

const PatentsPreview = (patent) => (
    <div className="PatentsPreview">
        <div>
            {patent.patent_title}
        </div>
    </div>
);

export default PatentsPreview;