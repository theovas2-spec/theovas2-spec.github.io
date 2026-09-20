/* =========================================================================
   PORTFOLIO RENDERER & INTERACTIONS
   Reads js/data.js and renders the page. You should rarely need to edit this.
   ========================================================================== */
(function () {
  "use strict";

  /* ------------------------------------------------- helpers */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  const escapeHtml = (value) =>
    String(value == null ? "" : value).replace(
      /[&<>"']/g,
      (c) =>
        ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

  const safeHref = (value) => {
    const v = String(value == null ? "" : value).trim();
    // Allow relative paths and normal links; only block script/data schemes.
    if (/^(javascript|vbscript|data):/i.test(v)) return "#";
    return v || "#";
  };

  /* ------------------------------------------------- profile */
  function fillProfile() {
    const p = PROFILE;
    document.title = `${p.name} · ${p.title} | ${p.affiliationShort || "NTUA"}`;

    setText("#brand-mark", p.initials);
    setText("#brand-name", p.name);
    setText("#hero-name", p.name);
    setText("#hero-title", p.title);
    setText("#hero-affiliation", p.affiliation);
    setText("#hero-tagline", p.tagline);
    setText("#hero-location", p.location);
    setText("#hero-focus", (p.focus || []).join(" · "));
    const avatar = $("#hero-avatar");
    if (avatar) {
      avatar.src = p.photo || "";
      avatar.alt = `Portrait of ${p.name}`;
    }
    setText("#footer-year", new Date().getFullYear());
    setText("#footer-name", p.name);
    setText("#contact-location", p.location);

    const resumeHref = p.resumePdf ? p.resumePdf : "#";
    $("#resume-btn").setAttribute("href", resumeHref);
    $("#hero-resume").setAttribute("href", resumeHref);
    $("#hero-resume").setAttribute("download", "");

    const email = $("#contact-email");
    email.textContent = p.email;
    email.setAttribute("href", `mailto:${p.email}`);

    const phone = $("#contact-phone");
    if (phone) {
      if (p.phone) {
        phone.textContent = p.phone;
        phone.setAttribute("href", `tel:${String(p.phone).replace(/[^+\d]/g, "")}`);
        phone.closest("li").hidden = false;
      } else {
        phone.closest("li").hidden = true;
      }
    }

    const gh = $("#contact-github");
    if (gh) {
      if (p.github) {
        gh.textContent = p.github.replace(/^https?:\/\/(www\.)?/, "");
        gh.setAttribute("href", p.github);
        gh.closest("li").hidden = false;
      } else {
        gh.closest("li").hidden = true;
      }
    }

    const li = $("#contact-linkedin");
    if (li) {
      if (p.linkedin) {
        li.textContent = p.linkedin.replace(/^https?:\/\/(www\.)?/, "");
        li.setAttribute("href", p.linkedin);
        li.closest("li").hidden = false;
      } else {
        li.closest("li").hidden = true;
      }
    }

    // About
    const bio = $("#about-bio");
    bio.innerHTML = (p.about || []).map((para) => `<p>${escapeHtml(para)}</p>`).join("");

    const facts = [
      ["Based in", p.location],
      ["Affiliation", p.affiliation],
      ["Focus", (p.focus || []).join(", ")],
      ["Email", p.email],
    ];
    if (p.phone) facts.push(["Phone", p.phone]);
    $("#about-facts").innerHTML = facts
      .map(
        ([label, value]) =>
          `<li><span class="fact-label">${escapeHtml(label)}</span>` +
          `<span class="fact-value">${escapeHtml(value)}</span></li>`
      )
      .join("");
  }

  function setText(sel, value) {
    const el = $(sel);
    if (el) el.textContent = value == null ? "" : value;
  }

  /* ------------------------------------------------- skills */
  function renderSkills() {
    const grid = $("#skills-grid");
    grid.innerHTML = (SKILLS || [])
      .map(
        (group) => `
        <div class="skill-group">
          <h3 class="skill-category">${escapeHtml(group.category)}</h3>
          <ul class="skill-list">
            ${(group.items || [])
              .map((item) => `<li class="skill-chip">${escapeHtml(item)}</li>`)
              .join("")}
          </ul>
        </div>`
      )
      .join("");
  }

  /* ------------------------------------------------- projects */
  function renderProjects() {
    const grid = $("#projects-grid");
    const count = $("#project-count");
    const list = PROJECTS || [];
    const groups = typeof PROJECT_GROUPS !== "undefined" ? PROJECT_GROUPS : [];

    count.textContent = `${list.length} selected project${list.length === 1 ? "" : "s"}. Click a card for the full case study.`;

    const card = (proj) => `
      <article class="project-card" data-reveal>
        <button class="project-cover" type="button" data-open="${escapeHtml(proj.id)}" aria-label="Open ${escapeHtml(proj.title)}">
          <img src="${safeHref(proj.cover)}" alt="${escapeHtml(proj.title)}" loading="lazy">
          <span class="project-category">${escapeHtml(proj.category)}</span>
        </button>
        <div class="project-card-body">
          <div class="project-card-top">
            <span class="project-year">${escapeHtml(proj.year || "")}</span>
            <h3 class="project-title">${escapeHtml(proj.title)}</h3>
          </div>
          <p class="project-summary">${escapeHtml(proj.summary || "")}</p>
          <ul class="project-tags">
            ${(proj.tags || []).map((t) => `<li>${escapeHtml(t)}</li>`).join("")}
          </ul>
          <button class="project-link" type="button" data-open="${escapeHtml(proj.id)}">View case study →</button>
        </div>
      </article>`;

    if (!groups.length) {
      grid.innerHTML = list.map(card).join("");
      return;
    }

    grid.innerHTML = groups
      .map((group) => {
        const groupProjects = list.filter((proj) => proj.group === group.id);
        return `
          <section class="project-group">
            <div class="project-group-head">
              <p class="project-group-kicker">Selected work</p>
              <h3>${escapeHtml(group.title)}</h3>
              <p>${escapeHtml(group.intro || "")}</p>
            </div>
            <div class="project-group-grid">
              ${groupProjects.length ? groupProjects.map(card).join("") : '<p class="project-group-empty">Projects coming next.</p>'}
            </div>
          </section>`;
      })
      .join("");
  }

  /* ------------------------------------------------- timeline */
  function renderTimeline() {
    $("#education-list").innerHTML = (EDUCATION || [])
      .map(
        (item) => `
        <li class="timeline-item">
          <span class="timeline-dot" aria-hidden="true"></span>
          <div class="timeline-card">
            <span class="timeline-period">${escapeHtml(item.period)}</span>
            <h4 class="timeline-role">${escapeHtml(item.degree)}</h4>
            <p class="timeline-org">${escapeHtml(item.school)} · ${escapeHtml(item.location)}</p>
            ${item.note ? `<p class="timeline-note">${escapeHtml(item.note)}</p>` : ""}
            ${(item.bullets || []).map((b) => `<p class="timeline-bullet">${escapeHtml(b)}</p>`).join("")}
          </div>
        </li>`
      )
      .join("");

    $("#experience-list").innerHTML = (EXPERIENCE || [])
      .map(
        (item) => `
        <li class="timeline-item">
          <span class="timeline-dot" aria-hidden="true"></span>
          <div class="timeline-card">
            <span class="timeline-period">${escapeHtml(item.period)}</span>
            <h4 class="timeline-role">${escapeHtml(item.role)}</h4>
            <p class="timeline-org">${escapeHtml(item.org)} · ${escapeHtml(item.location)}</p>
            ${(item.bullets || [])
              .map((b) => `<p class="timeline-bullet">${escapeHtml(b)}</p>`)
              .join("")}
          </div>
        </li>`
      )
      .join("");
  }

  /* ------------------------------------------------- modal */
  let currentImages = [];
  let currentIndex = 0;

  function openProject(id) {
    const proj = (PROJECTS || []).find((p) => p.id === id);
    if (!proj) return;

    const images = proj.images && proj.images.length ? proj.images : [proj.cover];
    currentImages = images;
    currentIndex = 0;

    const body = $("#modal-body");
    body.innerHTML = `
      <div class="modal-head">
        <span class="project-category">${escapeHtml(proj.category)}</span>
        <span class="project-year">${escapeHtml(proj.year || "")}</span>
        <h2 id="modal-title">${escapeHtml(proj.title)}</h2>
        <p class="modal-role">${escapeHtml(proj.role || "")}</p>
      </div>

      <div class="modal-gallery">
        <figure class="gallery-frame">
          <img id="gallery-img" src="${safeHref(images[0])}" alt="${escapeHtml(proj.title)}">
        </figure>
        <div class="gallery-controls">
          <button class="gallery-btn" id="gallery-prev" type="button" aria-label="Previous image">←</button>
          <span class="gallery-count" id="gallery-count">1 / ${images.length}</span>
          <button class="gallery-btn" id="gallery-next" type="button" aria-label="Next image">→</button>
        </div>
        <div class="gallery-thumbs" id="gallery-thumbs">
          ${images
            .map(
              (src, i) =>
                `<button type="button" class="thumb${i === 0 ? " is-active" : ""}" data-index="${i}" aria-label="Image ${i + 1}"><img src="${safeHref(src)}" alt=""></button>`
            )
            .join("")}
        </div>
      </div>

      <div class="modal-desc">
        ${(proj.description || []).map((p) => `<p>${escapeHtml(p)}</p>`).join("")}
      </div>

      ${proj.specs && Object.keys(proj.specs).length ? renderSpecTable(proj.specs) : ""}

      <div class="modal-actions">
        ${proj.pdf ? `<a class="btn btn-primary" href="${safeHref(proj.pdf)}" download>Download report (PDF)</a>` : ""}
        <button class="btn btn-outline" type="button" data-close>Close</button>
      </div>
    `;

    const modal = $("#project-modal");
    modal.hidden = false;
    document.body.classList.add("modal-open");
    $(".modal-close", modal).focus();

    $$("[data-close]", modal).forEach((el) =>
      el.addEventListener("click", closeModal)
    );
    $("#gallery-prev")?.addEventListener("click", () => moveGallery(-1));
    $("#gallery-next")?.addEventListener("click", () => moveGallery(1));
    $$("#gallery-thumbs .thumb").forEach((t) =>
      t.addEventListener("click", () => {
        currentIndex = Number(t.dataset.index);
        renderGallery();
      })
    );
  }

  function renderSpecTable(specs) {
    const rows = Object.entries(specs)
      .map(
        ([k, v]) => `<tr><th scope="row">${escapeHtml(k)}</th><td>${escapeHtml(v)}</td></tr>`
      )
      .join("");
    return `<table class="spec-table"><caption>Key parameters</caption><tbody>${rows}</tbody></table>`;
  }

  function renderGallery() {
    const img = $("#gallery-img");
    if (!img) return;
    img.src = currentImages[currentIndex];
    $("#gallery-count").textContent = `${currentIndex + 1} / ${currentImages.length}`;
    $$("#gallery-thumbs .thumb").forEach((t, i) =>
      t.classList.toggle("is-active", i === currentIndex)
    );
  }

  function moveGallery(step) {
    if (!currentImages.length) return;
    currentIndex = (currentIndex + step + currentImages.length) % currentImages.length;
    renderGallery();
  }

  function closeModal() {
    const modal = $("#project-modal");
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  }

  /* ------------------------------------------------- nav */
  function setupNav() {
    const toggle = $("#nav-toggle");
    const nav = $("#site-nav");
    toggle?.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });

    // Close the mobile menu after choosing a link.
    $$("#primary-nav a").forEach((a) =>
      a.addEventListener("click", () => {
        toggle?.setAttribute("aria-expanded", "false");
        nav?.classList.remove("is-open");
      })
    );

    // Highlight the section currently in view.
    const links = $$(".nav-link");
    const sections = links
      .map((a) => $(a.getAttribute("href")))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((l) =>
              l.classList.toggle("is-active", l.getAttribute("href") === `#${entry.target.id}`)
            );
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
  }

  /* ------------------------------------------------- reveal */
  function setupReveal() {
    const targets = $$(".section-head, .about-grid, .contact-grid, [data-reveal], .skill-group, .timeline-item");
    targets.forEach((el) => el.classList.add("reveal"));
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      targets.forEach((el) => io.observe(el));
    } else {
      targets.forEach((el) => el.classList.add("in-view"));
    }
  }

  /* ------------------------------------------------- key / modal */
  function setupModalGlobal() {
    // Delegate card clicks to open.
    document.addEventListener("click", (e) => {
      const opener = e.target.closest("[data-open]");
      if (opener) openProject(opener.dataset.open);
    });

    document.addEventListener("keydown", (e) => {
      const modal = $("#project-modal");
      if (modal && !modal.hidden) {
        if (e.key === "Escape") closeModal();
        if (e.key === "ArrowLeft") moveGallery(-1);
        if (e.key === "ArrowRight") moveGallery(1);
      }
    });
  }

  /* ------------------------------------------------- boot */
  document.addEventListener("DOMContentLoaded", () => {
    fillProfile();
    renderSkills();
    renderProjects();
    renderTimeline();
    setupNav();
    setupReveal();
    setupModalGlobal();
  });
})();
