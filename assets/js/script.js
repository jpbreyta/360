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
            src: "./assets/img/360_2.jpg",
            description: "Use mouse or touch to navigate the 360° view",
            content: `
              <h2>Casa Louella </h2>
              <p>
              Closer to the church stands another captivating American-era mansion called Casa Louella, named after the daughter of its current owners, Custodio Marasigan Ona and Guadalupe Ona. The mansion was originally built by the Treviño-Magtibay family in the early 1900s. The second owner was Vicente Lecaroz, a former mayor of San Juan, and a nephew of Benito Marasigan, owner of the Benito Marasigan Mansion. His family occupied the house during his term as mayor. When his children grew up, the house was often empty, and decided to sell it in 1994.
              </p>
              <p>Rizal St, Poblacion, San Juan, Batangas</p>
            `
        },
        {
            src: "./assets/img/360_1.jpg",
            description: "Use mouse or touch to navigate the 360° view",
            content: `
              <h2>White House San Juan</h2>
              <p>
              Situated at the corner of Marasigan St and Kalayaan St, The White House San Juan is another well-preserved Neoclassical Art Deco house known as the Aguedo Mercado Mansion. Built in 1934, the house miraculously survived the destruction of war. Today, this two-story mansion has been rebranded as The White House San Juan since its acquisition by Neil and Joy Marundan in 2021.
              </p>
              <h2>White House</h2>
              <p>
              The Mercado House, built in 1936 during American colonization, was owned by Aguedo Mercado and his wife, Pilar, and became a favored place for Japanese officials during World War II; it featured a mix of Neo-classical and Art Nouveau styles, with floral decorations, Corinthian and Ionic columns, curving grillwork, and 98% French furniture. Elevated for air circulation and storage, the house had hardwood interiors, Machuka tiles, a white plastered cement exterior, and a "Tejas" roof, which was renovated in 1998.
              </p>
              <h2>Location</h2>
              <p>
              The "White House" in San Juan, Batangas, is located in the Poblacion San Juan, Batangas, Philippines.
              <br><br>
              R9FV+V37, Marasigan St, San Juan, Batangas
              </p>
            `
        },
        {
            src: "./assets/img/360_3.jpg",
            description: "Use mouse or touch to navigate the 360° view",
            content: `
              <p>
The Municipal Building is located along General Luna Street. It is a two storey edifice that stands majestically on approximately 10,000 square meters more or less. It has a wide lawn along its front yard and in both sides of the building. These vacant spaces serves as a parking lots for vehicles. Its construction was initiated by Don Juan Quizon, the 9th President of the Municipality, during his incumbency from 1919 to 1922. It is to be mentioned that the word “President” is synonymous to the word/title Mayor in its literal sense.The building was established as the center of the municipal’s political affairs or government, the official seat of the head of the town where he exercises his powers for the benefit and welfare of his government. It is common knowledge that during the Japanese Era, from 1940 to 1942, the building served as prison cells for the enemies of the Japanese. In 1928, It was claimed that the completion of the Municipal Building as a component structure was when Don Juan Quizon was re-elected as the 11th President of the Municipality. A historical marker posted at the rear entrance of the building is an authentic attestation on it.
              </p>
              <p>Tipas-Poctol-Pinagbayanan Rd, San Juan, Batangas</p>
            `
        },
        {
            src: "./assets/img/360_4.jpg",
            description: "Use mouse or touch to navigate the 360° view",
            content: `
              <p>
The Barangay Pinagbayan was the former town proper of San Juan, Batangas, during the Early Spanish Colonies in 1848. Following the design of the Early Spanish Colonies, Pinagbayanan once had a church and a municipal hall, whose ruins are still present today; the old church is acknowledge as a National Historic Site by the National Historic Institute. In 1890, the town of San Juan was relocated 7 kilometers inland due to flooding. The left behind was called Pinagbayanan.
              </p>
              <p>Tipas-Poctol-Pinagbayanan Rd, San Juan, Batangas</p>
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
