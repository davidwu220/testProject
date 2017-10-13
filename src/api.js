import axios from "axios";

export const fetchClasAdById = classifiedId => {
    return axios.get(`/api/classifiedAds/*/${classifiedId}`)
        .then(res => res.data);
}

export const fetchClasAdByClass = classifiedClass => {
    return axios.get(`/api/classifiedAds/${classifiedClass}`)
    .then(res => res.data);
}