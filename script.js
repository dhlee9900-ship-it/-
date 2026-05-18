const professions = [
  {
    id: "doctor",
    name: "의사",
    icon: "🩺",
    color: "#dff7ff",
    short: "아픈 사람을 진찰하고 치료해요.",
    description:
      "의사는 사람들의 몸 상태를 살피고 병을 치료하는 직업이에요. 청진기와 흰 가운을 사용해 환자의 이야기를 듣고 건강을 지킬 방법을 알려줘요.",
    outfit: `
      <path d="M82 110h96l-16 112H98L82 110Z" fill="#f7fbff" stroke="#d6e6f2" stroke-width="4" />
      <path d="M108 112 130 164l22-52" fill="#dcecff" stroke="#b9d7ef" stroke-width="4" />
      <path d="M130 164v58" stroke="#a9c6db" stroke-width="4" />
      <circle cx="165" cy="157" r="11" fill="#51a7ff" />
      <path d="M95 128 55 183" stroke="#f7fbff" stroke-width="24" stroke-linecap="round" />
      <path d="M165 128 205 183" stroke="#f7fbff" stroke-width="24" stroke-linecap="round" />
      <path d="M111 224v86" stroke="#2f4c7a" stroke-width="26" stroke-linecap="round" />
      <path d="M149 224v86" stroke="#2f4c7a" stroke-width="26" stroke-linecap="round" />
      <path d="M92 37h76v18H92z" fill="#ffffff" stroke="#d6e6f2" stroke-width="4" />
      <path d="M130 41v10M125 46h10" stroke="#f15d5d" stroke-width="4" stroke-linecap="round" />
    `,
  },
  {
    id: "firefighter",
    name: "소방관",
    icon: "🚒",
    color: "#ffe2df",
    short: "불을 끄고 위험한 곳에서 사람을 구해요.",
    description:
      "소방관은 화재를 진압하고 재난 현장에서 사람들을 구조해요. 두꺼운 보호복과 헬멧을 착용하고, 모두가 안전하게 대피할 수 있도록 도와줘요.",
    outfit: `
      <path d="M91 111h78l18 109H73L91 111Z" fill="#ff6b45" stroke="#c73824" stroke-width="4" />
      <path d="M78 162h104M83 198h98" stroke="#ffd34f" stroke-width="10" />
      <path d="M94 128 53 181" stroke="#ff6b45" stroke-width="24" stroke-linecap="round" />
      <path d="M166 128 207 181" stroke="#ff6b45" stroke-width="24" stroke-linecap="round" />
      <path d="M107 222v88" stroke="#333a45" stroke-width="28" stroke-linecap="round" />
      <path d="M153 222v88" stroke="#333a45" stroke-width="28" stroke-linecap="round" />
      <path d="M85 53c8-34 82-34 90 0v17H85V53Z" fill="#ffcc29" stroke="#d64b2a" stroke-width="4" />
      <path d="M106 53h48" stroke="#d64b2a" stroke-width="6" stroke-linecap="round" />
    `,
  },
  {
    id: "chef",
    name: "요리사",
    icon: "👩‍🍳",
    color: "#fff3cf",
    short: "맛있는 음식을 만들고 식재료를 다뤄요.",
    description:
      "요리사는 여러 식재료를 손질하고 조리해 맛있는 음식을 만드는 직업이에요. 위생을 지키며 새로운 맛과 예쁜 담음새를 연구해요.",
    outfit: `
      <path d="M86 110h88l-8 112H94L86 110Z" fill="#fffdf4" stroke="#eadfbf" stroke-width="4" />
      <path d="M130 112v110M103 134h54M103 158h54" stroke="#e7dcc3" stroke-width="4" />
      <circle cx="117" cy="139" r="4" fill="#4f5665" /><circle cx="143" cy="139" r="4" fill="#4f5665" />
      <path d="M94 128 55 177" stroke="#fffdf4" stroke-width="24" stroke-linecap="round" />
      <path d="M166 128 205 177" stroke="#fffdf4" stroke-width="24" stroke-linecap="round" />
      <path d="M108 224v86" stroke="#2d3548" stroke-width="26" stroke-linecap="round" />
      <path d="M152 224v86" stroke="#2d3548" stroke-width="26" stroke-linecap="round" />
      <circle cx="101" cy="37" r="18" fill="#ffffff" stroke="#eadfbf" stroke-width="4" />
      <circle cx="130" cy="29" r="22" fill="#ffffff" stroke="#eadfbf" stroke-width="4" />
      <circle cx="159" cy="37" r="18" fill="#ffffff" stroke="#eadfbf" stroke-width="4" />
      <path d="M92 48h76v24H92z" fill="#ffffff" stroke="#eadfbf" stroke-width="4" />
    `,
  },
  {
    id: "astronaut",
    name: "우주비행사",
    icon: "🚀",
    color: "#e8e6ff",
    short: "우주선을 타고 우주를 탐험해요.",
    description:
      "우주비행사는 우주선과 우주정거장에서 과학 실험을 하고 지구 밖 환경을 탐험해요. 산소와 통신 장치가 있는 우주복으로 몸을 보호해요.",
    outfit: `
      <circle cx="130" cy="62" r="48" fill="rgba(210,235,255,0.45)" stroke="#8fb7ff" stroke-width="5" />
      <path d="M88 112h84l14 112H74L88 112Z" fill="#f4f7ff" stroke="#9fb2df" stroke-width="4" />
      <rect x="105" y="132" width="50" height="34" rx="8" fill="#20223a" />
      <circle cx="119" cy="149" r="5" fill="#58d68d" /><circle cx="140" cy="149" r="5" fill="#ff6b6b" />
      <path d="M91 130 50 178" stroke="#f4f7ff" stroke-width="26" stroke-linecap="round" />
      <path d="M169 130 210 178" stroke="#f4f7ff" stroke-width="26" stroke-linecap="round" />
      <path d="M106 224v86" stroke="#f4f7ff" stroke-width="30" stroke-linecap="round" />
      <path d="M154 224v86" stroke="#f4f7ff" stroke-width="30" stroke-linecap="round" />
      <ellipse cx="107" cy="322" rx="29" ry="13" fill="#7b8bbd" />
      <ellipse cx="153" cy="322" rx="29" ry="13" fill="#7b8bbd" />
      <circle cx="202" cy="82" r="8" fill="#ffd34f" /><circle cx="58" cy="102" r="5" fill="#ffd34f" />
    `,
  },
  {
    id: "scientist",
    name: "과학자",
    icon: "🔬",
    color: "#ddfff4",
    short: "궁금한 것을 실험하고 발견해요.",
    description:
      "과학자는 관찰과 실험으로 세상의 원리를 알아내는 직업이에요. 안전 장비를 착용하고 기록을 꼼꼼히 남기며 새로운 사실을 찾아요.",
    outfit: `
      <path d="M84 112h92l-18 112H102L84 112Z" fill="#ffffff" stroke="#cfe4e7" stroke-width="4" />
      <path d="M112 112 130 164l18-52" fill="#b8f5e5" stroke="#83d8c2" stroke-width="4" />
      <path d="M130 164v60" stroke="#cfe4e7" stroke-width="4" />
      <path d="M94 128 54 180" stroke="#ffffff" stroke-width="24" stroke-linecap="round" />
      <path d="M166 128 206 180" stroke="#ffffff" stroke-width="24" stroke-linecap="round" />
      <path d="M107 224v86" stroke="#25304a" stroke-width="26" stroke-linecap="round" />
      <path d="M153 224v86" stroke="#25304a" stroke-width="26" stroke-linecap="round" />
      <path d="M101 53h58" stroke="#20223a" stroke-width="5" stroke-linecap="round" />
      <circle cx="111" cy="61" r="11" fill="none" stroke="#20223a" stroke-width="4" />
      <circle cx="149" cy="61" r="11" fill="none" stroke="#20223a" stroke-width="4" />
      <path d="M185 177l18-39 16 7-19 40Z" fill="#81e6d9" stroke="#1c8b83" stroke-width="3" />
    `,
  },
];

const costumeList = document.querySelector("#costume-list");
const stage = document.querySelector("#character-stage");
const outfitLayer = document.querySelector("#outfit-layer");
const badge = document.querySelector("#profession-badge");
const title = document.querySelector("#profession-title");
const description = document.querySelector("#profession-description");
let selectedProfessionId = null;

function renderCards() {
  costumeList.innerHTML = professions
    .map(
      (profession) => `
        <button
          class="costume-card"
          type="button"
          draggable="true"
          data-profession-id="${profession.id}"
          style="--card-color: ${profession.color}"
          aria-label="${profession.name} 의상 선택"
        >
          <span class="costume-icon" aria-hidden="true">${profession.icon}</span>
          <span>
            <strong>${profession.name}</strong>
            <span>${profession.short}</span>
          </span>
        </button>
      `,
    )
    .join("");
}

function findProfession(id) {
  return professions.find((profession) => profession.id === id);
}

function selectCard(id) {
  selectedProfessionId = id;
  document.querySelectorAll(".costume-card").forEach((card) => {
    card.classList.toggle("is-selected", card.dataset.professionId === id);
  });
}

function dressCharacter(id) {
  const profession = findProfession(id);
  if (!profession) return;

  outfitLayer.innerHTML = profession.outfit;
  badge.textContent = `${profession.icon} ${profession.name} 변신!`;
  title.textContent = `${profession.name}은 어떤 일을 할까요?`;
  description.textContent = profession.description;
  selectCard(id);
}

renderCards();

costumeList.addEventListener("dragstart", (event) => {
  const card = event.target.closest(".costume-card");
  if (!card) return;

  event.dataTransfer.setData("text/plain", card.dataset.professionId);
  event.dataTransfer.effectAllowed = "copy";
  selectCard(card.dataset.professionId);
});

costumeList.addEventListener("click", (event) => {
  const card = event.target.closest(".costume-card");
  if (!card) return;
  selectCard(card.dataset.professionId);
});

stage.addEventListener("dragover", (event) => {
  event.preventDefault();
  stage.classList.add("is-over");
  event.dataTransfer.dropEffect = "copy";
});

stage.addEventListener("dragleave", () => {
  stage.classList.remove("is-over");
});

stage.addEventListener("drop", (event) => {
  event.preventDefault();
  stage.classList.remove("is-over");
  dressCharacter(event.dataTransfer.getData("text/plain"));
});

stage.addEventListener("click", () => {
  if (selectedProfessionId) dressCharacter(selectedProfessionId);
});

stage.addEventListener("keydown", (event) => {
  if ((event.key === "Enter" || event.key === " ") && selectedProfessionId) {
    event.preventDefault();
    dressCharacter(selectedProfessionId);
  }
});

dressCharacter("doctor");
