import axios from "axios";

const exctractClassifiedCats = (arrayOfObjs) =>  {
    let tempCatList = [];
    let clasCat = [];
    let catTitle = [];

    // put all categories in temp
    arrayOfObjs.map(classifiedAds => {

        tempCatList.push(classifiedAds.class);
    });

    // trim duplicate categories
    for (let uniqCat of tempCatList) {
        if (clasCat.includes(uniqCat) == false) {
            switch (uniqCat) {
                case "101_102": case "106": case "103_104": case "105":
                    catTitle.push(1);
                    break;

                case "301": case "302": case "303": case "304": case "305": case "306" :case "307":
                case "501": case "502": case "503": case "504": case "505": case "506": case "507":
                    catTitle.push(2);
                    break;

                case "200": case "700":
                    catTitle.push(3);
                    break;

                case "400": case "600": case "818": case "801":
                    catTitle.push(4);
                    break;

                case "804": case "805": case "802_803":
                    catTitle.push(5);
                    break;

                case "810": case "808": case "816": case "809": case "814":
                    catTitle.push(6);
                    break;

                case "813": case "812": case "817": case "815":
                    catTitle.push(7);
                    break;

                case "811":
                    catTitle.push(8);
                    break;

                case "900": case "807": case "806":
                    catTitle.push(9);
                    break;

                case "1000": case "1201": case "1200": case "1300":
                    catTitle.push(10);
                    break;
            
                default:
                    console.error("Class not matched when creating Menu, class: " + uniqCat);
                    break;
            }

            clasCat.push(uniqCat);
        }
    }
    
    return { clasCat, catTitle };
}

export const fetchClasMenu = () => {
    return axios.get(`/api/classifiedAds`)
        .then(res => {
            return {
                allAds: res.data,
                ...exctractClassifiedCats(res.data)
            };
        });
}

export const fetchClasAdById = classifiedId => {
    return axios.get(`/api/classifiedAds/*/${classifiedId}`)
        .then(res => res.data);
}

export const fetchClasAdByClass = classifiedClass => {
    return axios.get(`/api/classifiedAds/${classifiedClass}`)
    .then(res => res.data);
}

export const fetchComAdByClass = commercialClass => {
    return axios.get(`/api/commercialAds/${commercialClass}`)
    .then(res => res.data);
}