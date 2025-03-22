document.addEventListener("DOMContentLoaded", function () {
    const viewer = new PhotoSphereViewer.Viewer({
        container: document.getElementById("viewer"),
        panorama: "./360-wp-plugin.jpg", // Replace with actual 360° image
        navbar: true,
        defaultYaw: 0
    });
});
