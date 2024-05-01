let imageContainer = document.querySelector("#imageContainer");
let numberOfPhotos ;
let imageUrls = [
    'https://cdn.theatlantic.com/thumbor/vDZCdxF7pRXmZIc5vpB4pFrWHKs=/559x0:2259x1700/1080x1080/media/img/mt/2017/06/shutterstock_319985324/original.jpg',
    'https://www.purina.co.uk/sites/default/files/styles/ttt_image_510/public/2020-11/Hero-Small-Mobile-cats.jpg?itok=hEnG1ehe',
    'https://www.pawschicago.org/fileadmin/_processed_/8/c/csm_garden1-1024x685_0438a114ad.jpg',
    'https://media-be.chewy.com/wp-content/uploads/2016/12/09165949/cat-looking-at-apples.jpg'
];

for (let url of imageUrls) {
    let img = "<img src=" + url + ">";

imageContainer.insertAdjacentHTML("beforeend", img);
}
// Select the add button using a query selector
let addButton = document.querySelector(".addButton");
// Click the button to add a new photo. Uncomment the code below! 
addButton.onclick = function() {
// go get the url the user pasted
    let newUrl = 
        document.querySelector("input").value;
    console.log(newUrl);
imageUrls.push(newUrl);
    // one more thing!
    let img = "<img src=" + newUrl + ">";
    imageContainer.insertAdjacentHTML("beforeend",
img);
};

// Show the number of photos in the gallery
