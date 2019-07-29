const dynamicManifest = {
  "name": "IPaidThat - Scanner mobile",
  "short_name": "IPaidThat",
  "display": "standalone",
  "icons": [
    {
        "src": "/icon-192.png",
        "type": "image/png",
        "sizes": "192x192"
    },
    {
        "src": "/icon-512.png",
        "type": "image/png",
        "sizes": "512x512"
    }
  ],
  "start_url": "/",
  "background_color": "#E5E5E5",
  "theme_color": "#F3554C"
};

const stringManifest = JSON.stringify(dynamicManifest);
const blob = new Blob([stringManifest], {type: 'application/json'});
const manifestURL = URL.createObjectURL(blob);
document.querySelector('#manifest-placeholder').setAttribute('href', manifestURL);
