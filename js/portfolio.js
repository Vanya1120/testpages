document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("portfolio-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalPeriod = document.getElementById("modal-period");
  const modalRole = document.getElementById("modal-role");
  const modalDiff = document.getElementById("modal-diff");
  const modalSolution = document.getElementById("modal-solution");
  const modalStack = document.getElementById("modal-stack"); // 추가됨
  const closeBtn = document.querySelector(".close");

  const projectData = {
    maengle: {
      title: "맹글맹글",
      period: "2025.07 ~ 2025.08",
      role: "AI 챗봇 관리자 페이지 개발",
      diff: "실시간 대화 흐름 제어 및 OpenAI API 최적화",
      solution: "WebSocket 연결 문제를 해결해 메모리 누수 방지",
      stack: "React, Next.js, Styled-Components, OpenAI API, WebSocket", // 기술 스택
    },
    vinllage: {
      title: "vinllage",
      period: "2025.08 ~ 2025.09",
      role: "결과 페이지 및 이미지 분류 로직 구현",
      diff: "AI 이미지 인식과 Spring Boot 통합",
      solution: "대용량 이미지 처리 속도 개선 (Redis 캐싱)",
      stack: "Spring Boot, JPA, MySQL, Redis, AWS EC2, Docker", // 기술 스택
    },
  };

  document.querySelectorAll(".portfolio-info").forEach((info) => {
    info.addEventListener("click", () => {
      const project = info.dataset.project;
      if (projectData[project]) {
        modalTitle.textContent = projectData[project].title;
        modalPeriod.textContent = projectData[project].period;
        modalRole.textContent = projectData[project].role;
        modalDiff.textContent = projectData[project].diff;
        modalSolution.textContent = projectData[project].solution;
        modalStack.textContent = projectData[project].stack; // 기술 스택 반영
        modal.style.display = "block";
      }
    });
  });

  closeBtn.addEventListener("click", () => (modal.style.display = "none"));
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
});
