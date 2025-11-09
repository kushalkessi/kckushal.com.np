document.addEventListener("DOMContentLoaded", () => {

  // ---------------- Typing Effect ----------------
  const text = "My name is Kushal KC";
  const typingElement = document.getElementById("typing");
  if (typingElement) {
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
  }

  // ---------------- Education Timeline ----------------
  const educationData = [
    {
      year: "2025 – 2029",
      institution: "Kathmandu University (KU), Dhulikhel, Nepal",
      degree: "Bachelor of Engineering in Geomatics Engineering (B.E.)",
      link: "https://geom.ku.edu.np/",
      note: "Key Modules: Programming (C)"
    },
    {
      year: "2019 – 2023",
      institution: "Nepal Banepa Polytechnic Institute (NBPI), Banepa, Nepal",
      degree: "Diploma in Geomatics Engineering (DGE) | Aggregate Score: 77.86%",
      link: "https://nbpi.edu.np/",
      note: "Key Modules: Surveying, Remote Sensing, GIS, Photogrammetry, Programming (Python)"
    },
    {
      year: "2006 – 2019",
      institution: "Arunodaya English Secondary School, Panauti, Nepal",
      degree: "Secondary Education Examination (SEE) | Aggregate Grade: 3.85"
    }
  ];

  const education = document.getElementById("education");
  if (education) {
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
  }

  // ---------------- Experience Timeline ----------------
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
  if (experience) {
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
  }

  // ---------------- Projects Section ----------------
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
      // link: "https://antarikchya.org.np/visualization.php",
      image: "image/apn_chair.jpg"
    },
    // {
    //   id: "project4",
    //   title: "",
    //   duration: "",
    //   description: "Utilized Google Earth Engine for LULC mapping and TerrSet 2020 for predicting future LULC changes.",
    //   tools: "ArcGIS Pro, Google Earth Engine, TerrSet 2020",
    //   // link: "https://antarikchya.org.np/visualization.php",
    //   image: "image/apn_chair.jpg"
    // },
    // {
    //   id: "project5",
    //   title: "Land Use/Land Cover Classification and Future Prediction",
    //   duration: "March 2024 – August 2024 | Asian Institute of Technology",
    //   description: "Utilized Google Earth Engine for LULC mapping and TerrSet 2020 for predicting future LULC changes.",
    //   tools: "ArcGIS Pro, Google Earth Engine, TerrSet 2020",
    //   // link: "https://antarikchya.org.np/visualization.php",
    //   image: "image/apn_chair.jpg"
    // }
  ];

  const projectContainer = document.getElementById("projects-container");
  const modalContainer = document.getElementById("modals-container");

  if (projectContainer && modalContainer) {
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
  }

  // ---------------- Skills Section ----------------
  const skillsData = [
    { name: "ArcGIS / ArcGIS Pro", percentage: 90, color: "#04d415" },
    { name: "AutoCAD", percentage: 45, color: "#71d16e" },
    { name: "Differential GPS", percentage: 55, color: "#dbce11" },
    { name: "Django", percentage: 50, color: "#e98007" },
    { name: "ENVI", percentage: 35, color: "#e91a13" },
    { name: "ERDAS Imagine", percentage: 35, color: "#04d415" },
    { name: "Google Earth Engine", percentage: 90, color: "#71d16e" },
    { name: "HEC-HMS / HEC-RAS", percentage: 65, color: "#dbce11" },
    { name: "HTML/CSS/JS", percentage: 75, color: "#e98007" },
    { name: "Microsoft 360", percentage: 80, color: "#e91a13" },
    { name: "Plane Table", percentage: 50, color: "#04d415" },
    { name: "PHP", percentage: 60, color: "#71d16e" },
    { name: "Python", percentage: 70, color: "#dbce11" },
    { name: "QGIS", percentage: 80, color: "#e98007" },
    { name: "SNAP Desktop", percentage: 70, color: "#e91a13" },
    { name: "TerrSet 2020", percentage: 55, color: "#04d415" },
    { name: "Theodolite", percentage: 70, color: "#71d16e" },
    { name: "Total Station", percentage: 75, color: "#dbce11" },
  ];

  const skillsBox = document.getElementById("skills-box");
  if (skillsBox) {
    skillsData.forEach(skill => {
      const skillDiv = document.createElement("div");
      skillDiv.className = "skill";
      skillDiv.innerHTML = `
        <h6>${skill.name}</h6>
        <div class="progress-bar">
          <div style="background: ${skill.color}; width:0%;">
            <span></span>
          </div>
        </div>
      `;
      skillsBox.appendChild(skillDiv);
    });

    // Animate on scroll
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const progressBars = skillsBox.querySelectorAll('.progress-bar div');
        if (entry.isIntersecting) {
          progressBars.forEach((bar, index) => {
            bar.style.width = skillsData[index].percentage + '%';
          });
        } else {
          progressBars.forEach(bar => bar.style.width = '0%');
        }
      });
    }, { threshold: 0.3 });

    observer.observe(skillsBox);
  }

  // ---------------- Gallery Section ----------------
  const galleryData = [
    { src: "../image/pp_size.jpg", title: "Title 1" },
    { src: "../image/apn_chair.jpg", title: "Title 2" },
    { src: "../image/spacecon.jpg", title: "Title 3" },
    // { src: "../image/pp_size.jpg", title: "Title 4" },
    // { src: "../image/spacecon.jpg", title: "Title 5" },
    // { src: "../image/apn_chair.jpg", title: "Title 6" },
    // { src: "../image/pp_size.jpg", title: "Title 7" },
    // { src: "../image/spacecon.jpg", title: "Title 8" },
    // { src: "../image/apn_chair.jpg", title: "Title 9" },
    // { src: "../image/pp_size.jpg", title: "Title 10" }
  ];

  const galleryRow = document.getElementById("gallery-row");
  if (galleryRow) {
    galleryData.forEach(item => {
      const colDiv = document.createElement("div");
      colDiv.className = "col-sm-6 col-md-4 col-lg-3 gallery-item";
      colDiv.innerHTML = `
        <img src="${item.src}" alt="${item.title}" class="gallery-img">
        <div class="gallery-title">${item.title}</div>
      `;
      galleryRow.appendChild(colDiv);
    });
  }

});



//  contact form submission
 // Supabase credentials
    const SUPABASE_URL = "https://dykgtaxikoexmgnrkgtq.supabase.co";
    const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5a2d0YXhpa29leG1nbnJrZ3RxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3MDQwMzksImV4cCI6MjA3ODI4MDAzOX0.2wjTsUi4FYfkcjgkCMILQhEKEOrFZpiOthrz2t-iAEM";
    const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    const form = document.getElementById("contactForm");
    const status = document.getElementById("status");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const comment = document.getElementById("comment").value.trim();

      status.textContent = "Submitting...";

      const { data, error } = await supabase
        .from("Kushal Portfolio Contact")
        .insert([{ name, email, comment }]);

      if (error) {
        console.error("Insert Error:", error);
        status.textContent = "❌ Failed to submit. Check console for details.";
      } else {
        status.textContent = "✅ Submitted successfully!";
        form.reset();
      }
    });