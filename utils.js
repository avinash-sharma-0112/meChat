require('dotenv').config();

async function uploadImage(img) {
    var apiKey = process.env.IMGBB_API_KEY;
    var uri = "https://api.imgbb.com/1/upload?key="+apiKey+"&expiration=600";
    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    const urlencoded = new URLSearchParams();
    urlencoded.append("image", img);

    const requestOptions = {
        method: "POST",
        headers: headers,
        body: urlencoded,
        redirect: "follow"
    };

    try {
        const response = await fetch(uri, requestOptions); 
        const data = await response.json();
        return data.data.url;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

module.exports = uploadImage;