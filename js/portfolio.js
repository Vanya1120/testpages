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
      feature: "회원: 챗봇과 대화, 게시글 작성, 마이페이지 이용 관리자: 회원 관리, 게시판 관리, 모델(상품) 관리 마이페이지에서 본인 게시글 확인 및 최근 작성글 5개 열람 가능 개발자가 등록한 챗봇 모델을 기반으로, 관리자는 이미지를 추가해 서비스 형태로 제공 가능",
      role: "마이페이지, 챗봇도메인",
      solution: "프로필 이미지 삭제 후 재등록이 되지 않던 문제를 JS로 버튼/상태를 동적으로 관리해 해결(등록·삭제 토글, 유효성 처리) AI 서버의 높은 리소스 요구로 AWS 단독 배포가 어려워 내부 서버 포트포워딩(리버스 프록시)으로 서비스 연결",
      stack: "React, Next.js, Styled-Components, OpenAI API, WebSocket",
      period: "2025.07 ~ 2025.08",
      github: "maengle-front"
    },
    vinllage: {
      title: "vinllage",
      feature: "AI 이미지 인식 기반 분리배출 가이드 제공",
      role: "결과 페이지 및 이미지 분류 로직 구현",
      solution: "대용량 이미지 처리 속도 개선 (Redis 캐싱)",
      stack: "Spring Boot, JPA, MySQL, Redis, AWS EC2, Docker",
      period: "2025.08 ~ 2025.09",
      github: "Vinllage"
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