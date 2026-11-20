// ============================================================
//  Skills Bars
//  Single source of truth for the skill bars on the Resume
//  section. To add, remove, reorder, or re-rate a skill,
//  edit only the SKILLS data below — the bars in
//  index.html (containers with [data-skills]) are rendered
//  from this script, so no HTML/CSS changes are needed.
// ============================================================
(function () {
  "use strict";

  var SKILLS = {
    core: [
      { name: "Agentic Systems", level: 95 },
      { name: "MCP", level: 95 },
      { name: "LoRA Fine-tunning", level: 90 },
      { name: "TensorFlow", level: 90 },
      { name: "PyTorch", level: 90 },
      { name: "OpenCV", level: 95 },
      { name: "Transformers", level: 85 },
    ],
    frameworks: [
      { name: "Tauri", level: 90 },
      { name: "DSPy", level: 80 },
      { name: "Crawl4AI", level: 95 },
      { name: "MAF", level: 80 },
      { name: "Haystack", level: 85 },
      { name: "LangChain", level: 80 },
      { name: "Flask", level: 95 },
      { name: "FastAPI", level: 90 },
      { name: "CustomTkinter", level: 90 },
      { name: "Flutter", level: 85 },
      { name: "React", level: 85 },
      { name: "Tailwind CSS", level: 80 },
    ],
    coding: [
      { name: "Python", level: 95 },
      { name: "Rust", level: 75 },
      { name: "C/C++", level: 85 },
      { name: "C#", level: 90 },
      { name: "Dart", level: 85 },
      { name: "R", level: 75 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
    ],
  };

  // How long (ms) each bar takes to fill, and the stagger between bars.
  var FILL_DURATION_MS = 1000;
  var FILL_STAGGER_MS = 120;

  function clampLevel(level) {
    var n = parseInt(level, 10);
    if (isNaN(n)) n = 0;
    return Math.max(0, Math.min(100, n));
  }

  function buildSkillRow(skill) {
    var level = clampLevel(skill.level);

    var row = document.createElement("div");
    row.className = "skill clearfix";

    var name = document.createElement("h4");
    name.textContent = skill.name;

    var value = document.createElement("div");
    value.className = "skill-value";
    value.textContent = level + "%";

    var container = document.createElement("div");
    container.className = "skill-container";

    var bar = document.createElement("div");
    bar.className = "skill-percentage";
    bar.style.transition = "width " + FILL_DURATION_MS + "ms ease-in-out";
    bar.style.width = "0%";

    container.appendChild(bar);
    row.appendChild(name);
    row.appendChild(value);

    var fragment = document.createDocumentFragment();
    fragment.appendChild(row);
    fragment.appendChild(container);

    return { fragment: fragment, bar: bar, level: level };
  }

  // Reset every bar to 0% and stagger-fill from 0 again.
  // Disable the transition, snap each bar to 0%, force a reflow, then
  // re-enable the transition so the subsequent width change sweeps from
  // 0 -> level instead of collapsing from wherever it was left.
  function fillBars(allBars) {
    allBars.forEach(function (bar, index) {
      var level = bar.getAttribute("data-level") || 0;
      var prevTransition = bar.style.transition;

      bar.style.transition = "none";
      bar.style.width = "0%";
      // Force a reflow so the 0% state is committed without animating.
      bar.getBoundingClientRect();

      bar.style.transition =
        prevTransition || "width " + FILL_DURATION_MS + "ms ease-in-out";

      setTimeout(function () {
        bar.style.width = level + "%";
      }, index * FILL_STAGGER_MS);
    });
  }

  function renderGroup(container, skills) {
    container.textContent = "";
    var rows = [];
    for (var i = 0; i < skills.length; i++) {
      var skill = skills[i];
      var row = buildSkillRow(skill);
      var bar = row.bar;
      bar.setAttribute("data-level", skill.level);
      container.appendChild(row.fragment);
      rows.push(row);
    }
    return rows;
  }

  // Reset every bar to 0% and stagger-fill from 0 again.
  // Rebuild once on init; here we only re-run the fill animation by
  // resetting widths so there's no DOM flicker on repeated visits.
  function animate() {
    var allBars = [].slice.call(
      document.querySelectorAll("[data-skills] .skill-percentage"),
    );
    fillBars(allBars);
  }

  // Build the bars once on load so the layout exists, but leave them
  // empty until the Resume section actually comes into view (see animate).
  function init() {
    var groups = document.querySelectorAll("[data-skills]");
    for (var i = 0; i < groups.length; i++) {
      var key = groups[i].getAttribute("data-skills");
      if (SKILLS[key]) {
        renderGroup(groups[i], SKILLS[key]);
      }
    }
  }

  // Expose so animating.js can trigger a fresh fill when the Resume
  // section becomes active (page load is too early to see this).
  window.SkillsBar = { animate: animate };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
