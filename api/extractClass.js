export const exctractClassifiedCats = (arrayOfObjs, classifiedAds) =>  {
    this.tempCatList = [];
    this.categories = [];
    this.catTitle = [];

    // put all categories in temp
    arrayOfObjs.map(classifiedAds => {

        this.tempCatList.push(classifiedAds.class);
    });

    // trim duplicate categories
    for (let uniqCat of this.tempCatList) {
        if (this.categories.includes(uniqCat) == false) {
            // WIll do this when importing the data
            // if (uniqCat == "103" || uniqCat == "104") {
            //     uniqCat = "103_104";
            // } else if (uniqCat == "802" || uniqCat == "803") {
            //     uniqCat = "802_803";
            // }
            switch (uniqCat) {
                case "101": case "106": case "103_104": case "105":
                    this.catTitle.push(1);
                    break;

                case "300": case "500":
                    this.catTitle.push(2);
                    break;

                case "200": case "700":
                    this.catTitle.push(3);
                    break;

                case "400": case "600": case "818": case "801":
                    this.catTitle.push(4);
                    break;

                case "804": case "805": case "802_803":
                    this.catTitle.push(5);
                    break;

                case "810": case "808": case "816": case "809": case "814":
                    this.catTitle.push(6);
                    break;

                case "813": case "812": case "817": case "815":
                    this.catTitle.push(7);
                    break;

                case "811":
                    this.catTitle.push(8);
                    break;

                case "900": case "807": case "806":
                    this.catTitle.push(9);
                    break;

                case "1000": case "1201": case "1200": case "1300":
                    this.catTitle.push(10);
                    break;
            
                default:
                    console.error("Class not matched when creating Menu, class: " + uniqCat);
                    break;
            }

            this.categories.push(uniqCat);
        }
    }
    
    return { categories, catTitle };
    // this.findAdsByClass = function(ad) {
    //     return ad.class === this;
    // }

    // this.handleClick = (cls) => {
    //     // need to search for specific content
    //     if (cls == "103_104") {
    //         //return 103 and 104 ads
    //         props.onMenuClick(cls);
    //         console.log(props.classifiedAds.filter(this.findAdsByClass, cls));

    //     } else if (cls == "802_803") {
    //         // return 802 and 803 ads

    //     } else {
    //         // just search for class match
    //         props.onMenuClick(cls);
    //         console.log(props.classifiedAds.filter(this.findAdsByClass, cls));
    //     }

    // }
}

function compareClass(ad) {
    return ad.class === this;
}

export const findObjsByClass = (cls, arrayOfObjs) => {
    return arrayOfObjs.filter(compareClass, cls);
}