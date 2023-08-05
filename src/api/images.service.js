const BASE_URL = "https://pixabay.com";
const API_KEY = "37997663-b81c648a4b06d98762fad9525"

export const getImages = async ({ SearchQuery} ) => {
    const params = new URLSearchParams({
        q: SearchQuery,
        page: 1,
        key: API_KEY,
        image_type: photo,
        orientation: horizontal,
        per_page:12,

    });

const response = await fetch(`${BASE_URL}/api/?${params}`);


if(!response.ok){
throw new Error("Smth went incorrectly");

};

return await response.json();
};