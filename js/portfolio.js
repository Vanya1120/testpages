document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("portfolio-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalFeature = document.getElementById("modal-feature");
  const modalRole = document.getElementById("modal-role");
  const modalSolution = document.getElementById("modal-solution");
  const modalStack = document.getElementById("modal-stack");
  const modalPeriod = document.getElementById("modal-period");
  const modalGithub = document.getElementById("modal-github");
  const closeBtn = document.querySelector(".close");

  const projectData = {
    maengle: {
      title: "맹글맹글",
      feature: "챗봇과 대화, 게시글 작성, 마이페이지 이용",
      role: "관리자 페이지 - 챗봇 관리",
      solution: "AI 서버의 높은 리소스 요구로 AWS 단독 배포가 어려워 내부 서버 포트포워딩으로 서비스 연결",
      stack: "Spring Boot, HTML5, CSS3, MySQL, JPA/Hibernate, Python, Docker, AWS",
      period: "2025.07 ~ 2025.08",
      github: "https://github.com/Team2-chatBoard/chatboard"
    },
    vinllage: {
      title: "vinllage",
      feature: "AI 이미지 인식 기반 분리배출 가이드 제공",
      role: "결과 페이지 (인식된 쓰레기 종류 및 분리배출 가이드 제공)",
      solution: "",
      stack: "React, Next.js, TypeScript, CSS3, Spring Boot, JPA/Hibernate, REST API, MySQL, Java, Python, Docker, AWS",
      period: "2025.08 ~ 2025.09",
      github: "https://github.com/vinllage"
    },
  };

  document.querySelectorAll(".portfolio-info").forEach((info) => {
    info.addEventListener("click", () => {
      const project = info.dataset.project;
      if (projectData[project]) {
        modalTitle.textContent = projectData[project].title;
        modalFeature.textContent = projectData[project].feature;
        modalRole.textContent = projectData[project].role;
        modalSolution.textContent = projectData[project].solution;
        modalStack.textContent = projectData[project].stack;
        modalPeriod.textContent = projectData[project].period;

        modalGithub.innerHTML = `<a href="${projectData[project].github}" target="_blank">GitHub Repository</a>`;

        modal.style.display = "block";
      }
    });
  });

  closeBtn.addEventListener("click", () => (modal.style.display = "none"));
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
});