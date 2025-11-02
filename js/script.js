const text = "My name is Kushal KC";
const typingElement = document.getElementById("typing");
let index = 0;
let forward = true;

function typeEffect() {
  if (forward) {
    typingElement.textContent = text.substring(0, index + 1) + ".";
    index++;
    if (index === text.length) forward = false;
  } else {
    typingElement.textContent = text.substring(0, index - 1) + ".";
    index--;
    if (index === 0) forward = true;
  }
  setTimeout(typeEffect, 200);
}

typeEffect();

// education data
// 🎓 Education Data
const educationData = [
  {
    year: "2025 – Expected 2029",
    institution: "Kathmandu University (KU), Dhulikhel, Nepal",
    degree: "Bachelor of Engineering in Geomatics Engineering",
    link: "https://geom.ku.edu.np/",
    note: "geom.ku.edu.np"
  },
  {
    year: "2019 – 2023",
    institution: "Nepal Banepa Polytechnic Institute (NBPI), Banepa, Nepal",
    degree: "Diploma in Geomatics Engineering | Aggregate Score: 77.86%",
    note: "Key Modules: Surveying, Remote Sensing, GIS, Photogrammetry"
  },
  {
    year: "2006 – 2019",
    institution: "Arunodaya English Secondary School, Panauti, Nepal",
    degree: "Secondary Education Examination (SEE) | Aggregate Grade: 3.85"
  }
];

const education = document.getElementById("education");

// 🧩 Generate timeline dynamically
educationData.forEach(edu => {
  const item = document.createElement("div");
  item.className = "timeline-item d-flex align-items-center";

  item.innerHTML = `
        <div class="timeline-date">${edu.year}</div>
        <div class="timeline-icon">
          <i class="fas fa-circle text-success"></i>
        </div>
        <div class="timeline-content">
          <h3>${edu.institution}</h3>
          <p class="fw-bold">${edu.degree}</p>
          ${edu.note ? `<p class="fst-italic">${edu.note}</p>` : ""}
          ${edu.link ? `<p><a href="${edu.link}" class="text-blue" target="_blank">${edu.link}</a></p>` : ""}
        </div>
      `;

  education.appendChild(item);
});


// experience data

const experiencesdata = [
  {
    date: "August 2023 – September 2025",
    organization: "Antarikchya Pratisthan Nepal",
    role: "Satellite Data Analyst | GIS Mapping",
    description: "Collaborative projects with Kathmandu Metropolitan City (KMC).",
    link: "https://antarikchya.org.np/"
  },
  {
    date: "March 2024 – August 2024",
    organization: "Asian Institute of Technology, Thailand (Remote)",
    role: "Remote Sensing Analyst | GIS Mapping",
    description: "Collaborative projects with Dr. Ranadheer Mandadi."
  },
  {
    date: "June 2023 – July 2023",
    organization: "NAXA, Kathmandu, Nepal",
    role: "GIS Analyst",
    description: "Collaborative projects with Changunarayan Municipality and NDRRMA.",
    link: "https://naxa.com.np/"
  }
];

const experience = document.getElementById("experience");

experiencesdata.forEach(exp => {
  const item = document.createElement("div");
  item.className = "timeline-item d-flex align-items-center";

  item.innerHTML = `
        <div class="timeline-date">${exp.date}</div>
        <div class="timeline-icon">
          <i class="fas fa-circle text-success"></i>
        </div>
        <div class="timeline-content">
          <h3>${exp.organization}</h3>
          <p class="fw-bold">${exp.role}</p>
          <p class="fst-italic">${exp.description}</p>
          ${exp.link ? `<p><a href="${exp.link}" class="text-blue">${new URL(exp.link).hostname}</a></p>` : ""}
        </div>
      `;

  experience.appendChild(item);
});


// project data
const projects = [
  {
    id: "project1",
    title: "Satellite Data Analytics Project (SDAP)",
    duration: "August 2023 – September 2025 | Antarikchya Pratisthan Nepal",
    description: "Leveraged satellite data and GIS mapping for flood damage assessment in Sapta Koshi, environmental monitoring in Chure region, earthquake and forest fire visualization, and dynamic population density mapping.",
    tools: "ArcGIS Pro, QGIS, HEC-HMS, Google Earth Engine, WebGIS, PHP",
    link: "https://antarikchya.org.np/visualization.php",
    image: "image/apn_chair.jpg"
  },
  {
    id: "project2",
    title: "Space-enabled Urban Solutions in Nepal (SUSN)",
    duration: "August 2023 – July 2024 | Kathmandu Metropolitan City",
    description: "Collaborated with KMC departments for land use classification and GIS mapping to support urban development and disaster risk management.",
    tools: "ArcGIS Pro, QGIS, AutoCAD, Google Earth Engine, Python",
    link: "https://antarikchya.org.np/visualization.php",
    image: "image/apn_chair.jpg"
  },
  {
    id: "project3",
    title: "Land Use/Land Cover Classification and Future Prediction",
    duration: "March 2024 – August 2024 | Asian Institute of Technology",
    description: "Utilized Google Earth Engine for LULC mapping and TerrSet 2020 for predicting future LULC changes.",
    tools: "ArcGIS Pro, Google Earth Engine, TerrSet 2020",
    link: "https://antarikchya.org.np/visualization.php",
    image: "image/apn_chair.jpg"
  }
];

const projectContainer = document.getElementById("projects-container");
const modalContainer = document.getElementById("modals-container");

// 🔁 Generate project cards dynamically
projects.forEach(p => {
  const col = document.createElement("div");
  col.className = "col-md-4";

  const imgTag = p.image
    ? `<img src="${p.image}" alt="${p.title}" class="project-img mb-3 rounded-3">`
    : "";

  col.innerHTML = `
        <div class="project-card h-100 p-3 shadow-sm border rounded-4">
          ${imgTag}
          <h5 class="fw-bold">${p.title}</h5>
          <p class="text-muted small mb-2">${p.duration}</p>
          <p>${p.description.substring(0, 150)}...</p>
          <a href="#" data-bs-toggle="modal" data-bs-target="#${p.id}Modal" class="text-reset">Read More</a>
        </div>
      `;
  projectContainer.appendChild(col);

  // 🪄 Create corresponding modal dynamically
  modalContainer.innerHTML += `
        <div class="modal fade" id="${p.id}Modal" tabindex="-1" aria-labelledby="${p.id}Label" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title text-center fw-bold w-100" id="${p.id}Label">${p.title}</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div class="modal-body">
                <p><strong>Duration:</strong> ${p.duration}</p>
                <p><strong>Description:</strong> ${p.description}</p>
                <p><strong>Tools:</strong> ${p.tools}</p>
                <p><strong>Links:</strong> 
                  <a href="${p.link}" class="fst-italic small" target="_blank" rel="noopener noreferrer">${p.link}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      `;
});




// Skills Data
const skills = [
  { name: "ArcGIS", level: 80 },
  { name: "QGIS", level: 75 },
  { name: "ArcGIS Pro", level: 90 },
  { name: "WebGIS", level: 65 },
  { name: "PHP", level: 60 },
  { name: "Python", level: 70 },
  { name: "Google Earth Engine", level: 85 },
  { name: "Remote Sensing", level: 88 }
];

const container = document.getElementById("skills-box");

// 🔁 Generate each skill dynamically
skills.forEach(skill => {
  const col = document.createElement("div");
  col.className = "col-md-4 skill-box";

  col.innerHTML = `
        <h6>${skill.name}</h6>
        <div class="progress">
          <div class="progress-bar" style="width: ${skill.level}%; --progress: ${skill.level};">
            <div class="dot"></div>
          </div>
        </div>
      `;

  container.appendChild(col);
});