const EXPLORE_NEARBY = [
    {
        "img": "kawaguchihotel",
        "location": "Kawaguchi",
        "distance": "",
        "google": "https://www.google.com/maps/place/Smile+Hotel+Kawaguchi/@35.804751,139.7166017,3a,75y,90t/data=!3m8!1e2!3m6!1shttps:%2F%2Fcdn.worldota.net%2Ft%2F1024x768%2Fcontent%2Ff5%2F0a%2Ff50a1849dc90c2f3672072bac91eac2dfc603f67.jpeg!2e7!3e27!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-proxy%2FALm4wwnp12ZZ0sAay48PDKDCUH_shqJ5IrWHD-FkgRsUT6OcPnEEn5njMf1MHndgrJzZwv3BjWEOKZ37ektXgBSGmHIHILCnpWei2Dk3LoIstanuHmLelRdaTafFldY53Dum-Hb7fGDjtV7_OP-J3xmK_lYi91RjwS_F7EJNiFlo4fzqZ4W-zQ0Om-o%3Dw203-h152-k-no!7i1024!8i768!4m15!1m2!2m1!1sHotels!3m11!1s0x60189366755addaf:0x75dabde41609fdb6!5m2!4m1!1i2!8m2!3d35.8049522!4d139.7166317!10e5!14m1!1BCgIgAQ!16s%2Fg%2F1tj1mj8h"
    },
    {
        "img": "",
        "location": "Hachioji",
        "distance": ""
    },
    {
        "img": "",
        "location": "Sagamihara",
        "distance": ""
    },
    {
        "img": "",
        "location": "Adachi",
        "distance": ""
    },
    {
        "img": "",
        "location": "Nakano",
        "distance": ""
    },
    {
        "img": "",
        "location": "Minato",
        "distance": ""
    },
    {
        "img": "",
        "location": "Shibuya",
        "distance": ""
    },
    {
        "img": "",
        "location": "Shibuya",
        "distance": ""
    },
]


export default function handler(req, res) {
    res.status(200).json(EXPLORE_NEARBY)
  }
  