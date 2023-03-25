import { baseUrl } from "./baseUrl";
//from NuCampsite
export const concatImgURL = (rma) => {
    return rma.map((item) => {
        return {
            ...item,
            image: baseUrl + item.image
        };
    });
};