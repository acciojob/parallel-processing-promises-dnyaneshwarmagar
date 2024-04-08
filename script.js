//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImages(imageUrls) {
  const promises = imageUrls.map(image => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = function() {
        resolve(img);
      };
      img.onerror = function() {
        reject(new Error(`Failed to load image's URL: ${image.url}`));
      };
      img.src = image.url;
    });
  });

  return Promise.all(promises);
}

document.getElementById('download-images-button').addEventListener('click', function() {
  downloadImages(images)
    .then(images => {
      const outputDiv = document.getElementById('output');
      images.forEach(img => {
        outputDiv.appendChild(img);
      });
    })
    .catch(error => {
      console.error(error);
    });
});

