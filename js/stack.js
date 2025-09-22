document.addEventListener("DOMContentLoaded", () => {
  const sections = [
    { id: "frontend", desc: "desc-frontend" },
    { id: "backend", desc: "desc-backend" },
    { id: "database", desc: "desc-database" },
    { id: "infra", desc: "desc-infra" },
    { id: "collab", desc: "desc-collab" },
  ];

  sections.forEach(({ id, desc }) => {
    const detailsList = document.querySelectorAll(`#grid-${id} details`);
    const descBox = document.getElementById(desc);

    detailsList.forEach((d) => {
      d.addEventListener("toggle", () => {
        if (d.open) {
          detailsList.forEach((other) => {
            if (other !== d) other.open = false;
          });
          descBox.innerHTML = d.dataset.desc || "설명 없음";
        } else {
          const anyOpen = Array.from(detailsList).some((x) => x.open);
          if (!anyOpen) descBox.innerHTML = "";
        }
      });
    });
  });
});
