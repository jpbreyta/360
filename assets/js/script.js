document.addEventListener("DOMContentLoaded", function () {
  const images = [
    {
      name: "Church History",
      views: [{ src: "./assets/img/360.jpg" }],
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
      `,
    },
    {
      name: "Casa Louella",
      views: [{ src: "./assets/img/360_2.jpg" }],
      description: "Use mouse or touch to navigate the 360° view",
      content: `
        <h2>Casa Louella</h2>
        <p>
        Closer to the church stands another captivating American-era mansion called Casa Louella, named after the daughter of its current owners, Custodio Marasigan Ona and Guadalupe Ona. The mansion was originally built by the Treviño-Magtibay family in the early 1900s. The second owner was Vicente Lecaroz, a former mayor of San Juan, and a nephew of Benito Marasigan, owner of the Benito Marasigan Mansion. His family occupied the house during his term as mayor. When his children grew up, the house was often empty, and decided to sell it in 1994.
        </p>
        <p>Rizal St, Poblacion, San Juan, Batangas</p>
      `,
    },
    {
      name: "White House San Juan",
      views: [{ src: "./assets/img/360_1.jpg" }],
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
      `,
    },
    {
      name: "Municipal Building",
      views: [{ src: "./assets/img/360_3.jpg" }],
      description: "Use mouse or touch to navigate the 360° view",
      content: `
        <p>
        The Municipal Building is located along General Luna Street. It is a two storey edifice that stands majestically on approximately 10,000 square meters more or less. It has a wide lawn along its front yard and in both sides of the building. These vacant spaces serves as a parking lots for vehicles. Its construction was initiated by Don Juan Quizon, the 9th President of the Municipality, during his incumbency from 1919 to 1922. It is to be mentioned that the word “President” is synonymous to the word/title Mayor in its literal sense.
        </p>
        <p>Tipas-Poctol-Pinagbayanan Rd, San Juan, Batangas</p>
      `,
    },
    {
      name: "Pinagbayanan",
      views: [{ src: "./assets/img/360_4.jpg" }],
      description: "Use mouse or touch to navigate the 360° view",
      content: `
        <p>
        The Barangay Pinagbayan was the former town proper of San Juan, Batangas, during the Early Spanish Colonies in 1848. Following the design of the Early Spanish Colonies, Pinagbayanan once had a church and a municipal hall, whose ruins are still present today; the old church is acknowledge as a National Historic Site by the National Historic Institute. In 1890, the town of San Juan was relocated 7 kilometers inland due to flooding. The left behind was called Pinagbayanan.
        </p>
        <p>Tipas-Poctol-Pinagbayanan Rd, San Juan, Batangas</p>
      `,
    },
    {
      name: "Casa Soledad",
      views: [{ src: "./assets/img/360_5.jpg" }],
      description: "Use mouse or touch to navigate the 360° view",
      content: `
        <h2>Casa Soledad</h2>
        <p>
        Found at the corner of Mojica St and De Villa St, Casa Soledad is one of the grand heritage houses that has retained its traditional “bahay na bato” Spanish architecture.
        </p>
        <h2>Location</h2>
        <p>
        Casa Soledad is located at the corner of Mojica Street and De Villa Street in San Juan, Batangas. 
        <br><br>
        R9GV+CFC, Mojica St, Corner De Villa St, San Juan, Batangas
        </p>
      `,
    },
    {
      name: "Moon Palace",
      views: [
        { src: "./assets/img/moon-palace-1.jpg" },
        { src: "./assets/img/moon-palace-2.jpg" },
      ],
      description: "Use mouse or touch to navigate the 360° view",
      content: `
        <h2>Moon Palace</h2>
        <p><b>CONTACT:</b> 0938-391-0264<br><b>LOCATION:</b> Laiya Aplaya, San Juan, Batangas</p>
        <h2><b>ROOM ACCOMMODATIONS</b></h2>
        <ul>
          <li>6 pax – PHP 3,500.00</li>
          <li>8 pax – PHP 4,500.00</li>
          <li>2 pax – PHP 2,500.00</li>
        </ul>
        <h2><b>SWIMMING POOL</b></h2>
        <ul><li>6:00 AM - 6:00 PM ONLY</li></ul>
        <h2><b>ENTRANCE FEE PER HEAD</b></h2>
        <ul><li>PHP 100.00</li></ul>
      `,
    },
    {
      name: "Laiya Grande Beach Resort",
      views: [
        { src: "./assets/img/laiya-grande-1.jpg" }, // only 1 360
      ],
      description: "Use mouse or touch to navigate the 360° view",
      content: `
    <h2>Laiya Grande Beach Resort</h2>
    <p><b>Contact number:</b> 0963-033-7629<br>
    <b>Location:</b> Laiya Aplaya, San Juan, Batangas</p>
    <p><b>Entrance Fee:</b> ₱300.00</p>

    <h2><b>TERMS AND CONDITIONS</b></h2>
    <ul>
      <li><b>Overnight:</b> Check-in 2:00 PM / Check-out 12:00 NN</li>
      <li><b>Daytour:</b> Check-in 8:00 AM / Check-out 5:00 PM</li>
      <li>Guest must present a copy of their booking confirmation before check-in.</li>
      <li>Confirmed bookings are <b>non-refundable and non-cancellable</b> unless due to typhoon or quarantine restrictions.</li>
      <li>Failure to arrive = <b>No Show (100% charge)</b>.</li>
    </ul>

    <h2><b>HOUSE RULES</b></h2>
    <ul>
      <li>Electrical appliances (rice cooker, induction, etc.) charged ₱500 each.</li>
      <li>Lost key charge ₱500.</li>
      <li>Swimming time: 6:00 AM – 6:00 PM.</li>
      <li>Swimming under alcohol influence is prohibited.</li>
      <li>Children under 10 must be supervised by an adult.</li>
      <li>Loud noise/sounds prohibited from 10:00 PM – 8:00 AM.</li>
      <li>Extended hours: ₱500/hour.</li>
      <li>Beachfront gate closes at 10:00 PM.</li>
      <li>Water sports are not directly owned by the resort; management not liable for related incidents.</li>
    </ul>

    <h2><b>ISLAND HOPPING WITH SNORKELING</b></h2>
    <ul>
      <li>2-hour boat ride</li>
      <li>1 hr Rock Formation</li>
      <li>1 hr Snorkeling</li>
    </ul>
    <p><b>For inquiries and reservation:</b> 0963-033-7629</p>

    <h2><b>WATER SPORTS</b></h2>
    <ul>
      <li>Hurricane Boat – ₱400/head (min. 6 pax, 15 mins)</li>
      <li>Banana Boat – ₱300/head (min. 5 pax, 15 mins)</li>
      <li>Flying Fish – ₱400/head (min. 6 pax, 15 mins)</li>
      <li>Jetski – ₱4,500/hr or ₱2,500/30 mins</li>
      <li>Kayak – ₱500/hr</li>
      <li>Crystal Kayak – ₱800/hr</li>
    </ul>
  `,
    },
    {
      name: "Sigayan Bay Beach Resort",
      views: [
        { src: "./assets/img/sigayan-bay-1.jpg" },
        { src: "./assets/img/sigayan-bay-2.jpg" },
      ],
      description: "Use mouse or touch to navigate the 360° view",
      content: `
    <h2>Sigayan Bay Beach Resort</h2>
    <p>
      <b>Contact:</b> 0920-952-9517<br>
      <b>Email:</b> sigayanbayresort@gmail.com<br>
      <b>Location:</b> Laiya Aplaya, San Juan, Batangas
    </p>

    <h2><b>OVERNIGHT ACCOMMODATIONS</b></h2>
    <ul>
      <li>SIGAY (10 pax) – ₱9,500</li>
      <li>TACLOBO (16 pax) – ₱13,400</li>
      <li>SUNGAYAN (18 pax) – ₱14,500</li>
      <li>EXTRA ROOM (8 pax, no kitchen) – ₱5,500</li>
      <li>HALAAN (8 pax) – ₱8,400</li>
      <li>TALABA (8 pax) – ₱7,900</li>
      <li>TULYA (6 pax) – ₱6,700</li>
      <li>TAMBULI (14 pax) – ₱12,500</li>
      <li>KABIBE (2 pax, no kitchen) – ₱4,000</li>
      <li>MAHARLIKA (4 pax) – ₱5,500</li>
      <li>CORALS (15 pax) – ₱13,900</li>
      <li>PERLAS (10 pax) – ₱8,800</li>
      <li>BLUE MARLIN (4 pax) – ₱5,500</li>
      <li>YELLOW FIN (10 pax) – ₱9,000</li>
      <li>DOLPHIN (10 pax) – ₱9,500</li>
      <li>STARFISH (10 pax) – ₱9,500</li>
      <li>MERMAID (6 pax) – ₱6,500</li>
      <li>KUBO (6 pax) – ₱6,500</li>
    </ul>

    <h2><b>INCLUSIONS</b></h2>
    <ul>
      <li>Airconditioned room (except KABIBE & EXTRA ROOM)</li>
      <li>Private toilet & bath</li>
      <li>Stove with gas</li>
      <li>Refrigerator</li>
      <li>Water dispenser with free 5-gallon water</li>
      <li>Basic cooking utensils</li>
    </ul>

    <h2><b>SWIMMING POOL</b></h2>
    <ul>
      <li>Entrance fee: ₱100/head</li>
      <li>Open: 8:00 AM – 10:00 PM</li>
      <li>Proper swimming attire required</li>
    </ul>

    <h2><b>WATER ACTIVITIES</b></h2>
    <ul>
      <li>Jetski – ₱4,500/hr</li>
      <li>Banana Boat – ₱300/head (5–10 pax)</li>
      <li>Flying Fish – ₱2,400/15 mins (6 pax)</li>
      <li>Kayak – ₱400/hr</li>
      <li>Boating – ₱300/head (min. 10 pax)</li>
      <li>Snorkeling Gear – ₱100/set</li>
      <li>Hurricane – ₱400/head (min. 6 pax)</li>
    </ul>

    <h2><b>DAYTOUR ACCOMMODATION</b></h2>
    <ul>
      <li>Cabana good for 20 pax – ₱3,000</li>
      <li>Entrance Fee – ₱100/head</li>
      <li>Check-in: 8:00 AM / Check-out: 5:00 PM</li>
      <li>Swimming allowed 6:00 AM – 6:00 PM (Municipal Ordinance)</li>
      <li>Ecological Fee – ₱50/head (Municipal Tourism Area)</li>
    </ul>
  `,
    },
    {
      name: "Mamay Tino Beach Resort",
      views: [{ src: "./assets/img/mamay-tino-1.jpg" }],
      description: "Use mouse or touch to navigate the 360° view",
      content: `
    <h2>Mamay Tino Beach Resort</h2>
    <p>
      <b>Facebook:</b> @hugombeachresort<br>
      <b>Contact:</b> 0919-681-8083 / 0939-393-8751 / 0969-311-4966<br>
      <b>Location:</b> Hugom, San Juan, Batangas
    </p>

    <h2><b>COTTAGE ACCOMMODATION</b></h2>
    <ul>
      <li>₱2,500 – Open cottage (10 pax)</li>
    </ul>

    <h2><b>WATER SPORTS</b></h2>
    <ul>
      <li>Banana Boat – ₱2,000</li>
      <li>Flying Fish – ₱2,500</li>
      <li>Disco Boat – ₱2,500</li>
      <li>Snorkeling – ₱3,500</li>
    </ul>
  `,
    },
  ];

   // Load saved location
  let currentIndex = parseInt(localStorage.getItem("currentIndex")) || 0;
  let currentImageIndex = 0;

  const viewer = new PhotoSphereViewer.Viewer({
    container: document.getElementById("viewer"),
    panorama: images[currentIndex].views[currentImageIndex].src,
    navbar: ["autorotate", "zoom", "fullscreen"],
    defaultZoomLvl: 0,
  });

  const descriptionElement = document.getElementById("image-description");
  const contentCard = document.querySelector(".content-card");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  // Load current 360 image
  function loadCurrentImage() {
    const current = images[currentIndex];
    viewer.setPanorama(current.views[currentImageIndex].src);
  }

  // Update entire viewer when switching location
  function updateViewer(index) {
    const location = images[index];
    currentImageIndex = 0;
    viewer.setPanorama(location.views[currentImageIndex].src);
    descriptionElement.textContent = location.description;
    contentCard.innerHTML = location.content;
    localStorage.setItem("currentIndex", index);
    renderPaginationButtons();
  }

  // Pagination for multiple 360 views
  function renderPaginationButtons() {
    const paginationContainer = document.getElementById("pagination");
    if (!paginationContainer) return;
    paginationContainer.innerHTML = "";

    const current = images[currentIndex];

    if (current.views.length <= 1) return; // only show pagination if multiple views

    current.views.forEach((_, index) => {
      const btn = document.createElement("button");
      btn.textContent = index + 1;
      btn.classList.add("btn");

      // Inline styling override
      btn.style.backgroundColor = index === currentImageIndex ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.6)";
      btn.style.color = "#000";
      btn.style.border = "1px solid rgba(0,0,0,0.1)";
      btn.style.margin = "0 6px";
      btn.style.borderRadius = "8px";
      btn.style.padding = "6px 12px";
      btn.style.backdropFilter = "blur(4px)";
      btn.style.boxShadow = "0 2px 6px rgba(0,0,0,0.15)";
      btn.style.transition = "all 0.3s ease";

      btn.addEventListener("mouseenter", () => {
        btn.style.backgroundColor = "rgba(255,255,255,0.9)";
        btn.style.transform = "scale(1.05)";
      });

      btn.addEventListener("mouseleave", () => {
        btn.style.backgroundColor =
          index === currentImageIndex ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.6)";
        btn.style.transform = "scale(1)";
      });

      btn.addEventListener("click", () => {
        currentImageIndex = index;
        loadCurrentImage();
        renderPaginationButtons();
      });

      paginationContainer.appendChild(btn);
    });
  }

  // Navigation buttons
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateViewer(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateViewer(currentIndex);
  });

  // Initialize viewer
  updateViewer(currentIndex);
});