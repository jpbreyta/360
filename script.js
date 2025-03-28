document.addEventListener("DOMContentLoaded", function () {
    const viewer = new PhotoSphereViewer.Viewer({
        container: document.getElementById("viewer"),
        panorama: "360.jpg",
        navbar: [
            'autorotate', 'zoom', 'fullscreen'
        ],
        defaultZoomLvl: 0,
        defaultLat: 0,
        defaultLong: 0,
        minFov: 30,
        maxFov: 90
    });
});