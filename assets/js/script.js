document.addEventListener("DOMContentLoaded", function () {
    const images = [
        {
            src: "./assets/img/360.jpg",
            description: "Use mouse or touch to navigate the 360° view",
            content: `
              <h2>Church History</h2>
              <p>
                The San Juan Nepomuceno Church, standing on Padre Burgos Street,
                traces its origins to San Juan de Bolboc, which separated from
                Rosario, Batangas, in 1874 due to flooding in its original location.
                The present church, inaugurated on January 24, 1894, has undergone
                renovations, with support from affluent families and parishioners,
                and was dedicated in 1996 by the National Historical Commission.
              </p>
              <p>
                A legend tells of St. John Nepomucene's image being found in a
                bubbling spring, which stopped bubbling when the icon was retrieved,
                while wartime stories recall divine interventions, including an
                attempt by Japanese soldiers to burn the church, which miraculously
                failed. Captain Takano, a Japanese officer, reportedly saw the
                saint walking through their camp and later became a regular
                churchgoer, convinced of the saint's presence.
              </p>
            `
        },
        {
            src: "./assets/img/360_1.jpg",
            description: "Use mouse or touch to navigate the 360° view",
            content: `
              <h2>Church Facade</h2>
              <p>
                The facade of the San Juan Nepomuceno Church features classic
                baroque architecture with intricate stone carvings and a prominent
                bell tower that has stood the test of time.
              </p>
            `
        },
        {
            src: "./assets/img/360_2.jpg",
            description: "Use mouse or touch to navigate the 360° view",
            content: `
              <h2>Church Interior</h2>
              <p>
                The interior boasts beautifully preserved wooden pews, stained glass
                windows, and religious artworks that tell the story of the church's
                rich heritage.
              </p>
            `
        },
        {
            src: "./assets/img/360_3.jpg",
            description: "Use mouse or touch to navigate the 360° view",
            content: `
              <h2>Altar and Sanctuary</h2>
              <p>
                The altar is the focal point of the church, adorned with religious
                icons and intricate designs that inspire reverence and awe.
              </p>
            `
        },
        {
            src: "./assets/img/360_4.jpg",
            description: "Use mouse or touch to navigate the 360° view",
            content: `
              <h2>Church Grounds</h2>
              <p>
                The church grounds include a peaceful garden and pathways that invite
                visitors to reflect and enjoy the serene environment.
              </p>
            `
        },
        {
            src: "./assets/img/360_5.jpg",
            description: "Use mouse or touch to navigate the 360° view",
            content: `
              <h2>Historical Markers</h2>
              <p>
                Various historical markers and plaques around the church provide
                insights into its significance and the events that shaped its history.
              </p>
            `
        }
    ];

    let currentIndex = 0;

    const viewer = new PhotoSphereViewer.Viewer({
        container: document.getElementById("viewer"),
        panorama: images[currentIndex].src,
        navbar: [
            'autorotate', 'zoom', 'fullscreen'
        ],
        defaultZoomLvl: 0,
        defaultLat: 0,
        defaultLong: 0,
        minFov: 30,
        maxFov: 90
    });

    const descriptionElement = document.getElementById("image-description");
    const contentCard = document.querySelector(".content-card");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    function updateViewer(index) {
        viewer.setPanorama(images[index].src);
        descriptionElement.textContent = images[index].description;
        contentCard.innerHTML = images[index].content;
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateViewer(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateViewer(currentIndex);
    });

    // Initialize content-card on page load
    contentCard.innerHTML = images[currentIndex].content;
});
