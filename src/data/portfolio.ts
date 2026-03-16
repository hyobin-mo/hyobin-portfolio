export const siteConfig = {
  name: "효빈",
  nameEn: "HYOBIN",
  title: "Art Communicator",
  tagline: "당신이 사랑할 문화예술을 전하는",
  subtitle: "이성과 감성이 균형 잡힌 아트 커뮤니케이터",
  email: "hyobin_mo@naver.com",
  phone: "010-9852-0892",
};

export interface ProjectDetail {
  title: string;
  concept?: string;
  story?: string;
  highlights: string[];
  images?: string[];
}

export interface Project {
  id: string;
  number: string;
  category: string;
  categoryEn: string;
  color: string;
  thumbnail?: string;
  role: string[];
  details: ProjectDetail[];
}

export const projects: Project[] = [
  {
    id: "album",
    number: "01",
    category: "앨범 기획",
    categoryEn: "Album Planning",
    color: "accent-pink",
    thumbnail: "/images/album/up10tion-moment/01.jpg",
    role: [
      "아티스트 비주얼 컨셉 기획 및 제작",
      "제작 스텝 구성 및 촬영 현장 진행",
      "피지컬 앨범 제작 진행 실무 전반",
    ],
    details: [
      {
        title: 'UP10TION — "The Moment of Illusion"',
        concept: "한 여름밤, 소년들이 꾸는 꿈",
        story:
          "다 함께 여행을 떠난 소년들이 꿈인지 환상인지 모를 숲속으로 향해 아주 특별한 '휴가'를 보내게 됨",
        highlights: ["비주얼 컨셉 기획", "촬영 현장 진행", "2019 TOP Media"],
        images: [
          "/images/album/up10tion-moment/01.jpg",
          "/images/album/up10tion-moment/02.jpg",
          "/images/album/up10tion-moment/03.jpg",
          "/images/album/up10tion-moment/04.jpg",
        ],
      },
      {
        title: '백퍼센트 — "RE:tro"',
        concept: "복고풍 뉴트로 컨셉",
        story:
          "데뷔 이래 처음으로 2종의 앨범 시도 — HIP 버전(스포티) + NEW 버전(차분하고 어른스러운)",
        highlights: ["2종 앨범 기획", "컨셉 차별화", "파스텔 톤 비주얼"],
        images: [
          "/images/album/100percent-retro/01.jpg",
          "/images/album/100percent-retro/02.jpg",
          "/images/album/100percent-retro/03.jpg",
        ],
      },
      {
        title: 'UP10TION — "Laberinto"',
        concept: "시작과 끝을 알 수 없는 미궁",
        story:
          "갑자기 나타난 알 수 없는 미궁 속에서 서로를 쫓고 쫓기며 헤매는 도망자와 추격자",
        highlights: ["미스터리 컨셉", "스토리라인 기획", "다크 톤 비주얼"],
        images: [
          "/images/album/up10tion-laberinto/01.jpg",
          "/images/album/up10tion-laberinto/02.jpg",
          "/images/album/up10tion-laberinto/03.jpg",
          "/images/album/up10tion-laberinto/04.jpg",
          "/images/album/up10tion-laberinto/05.jpg",
        ],
      },
      {
        title: 'TEEN TOP — "DEAR. N9NE"',
        concept: "나를 찾아서 떠나는 여행",
        story:
          "떠나고 싶은 청춘의 한 페이지, 아름다운 일탈의 찰나를 찾아 소년과 남자, 그 경계선을 따라 걷는다",
        highlights: ["청춘 내러티브", "자연광 촬영", "밝은 톤 비주얼"],
        images: [
          "/images/album/teentop-dear-n9ne/01.jpg",
          "/images/album/teentop-dear-n9ne/02.jpg",
          "/images/album/teentop-dear-n9ne/03.jpg",
        ],
      },
    ],
  },
  {
    id: "brand",
    number: "02",
    category: "브랜드 기획",
    categoryEn: "Brand Planning",
    color: "accent-blue",
    thumbnail: "/images/brand/tsang/01.jpg",
    role: [
      "브랜딩 작업 및 컨셉 리뉴얼",
      "제안서 구성 및 내부 카피라이팅",
      "갤러리 초대장 및 기타 카피 작업",
    ],
    details: [
      {
        title: "TSANG 리브랜딩",
        concept: "비즈니스의 흐름을 바꾸다",
        highlights: [
          "메인 컨셉 도출",
          "회사 소개서 구성",
          "내부 카피라이팅 전체",
          '슬로건: "to do different tsang"',
        ],
        images: [
          "/images/brand/tsang/01.jpg",
          "/images/brand/tsang/02.jpg",
          "/images/brand/tsang/03.jpg",
          "/images/brand/tsang/04.jpg",
        ],
      },
      {
        title: "아트 사월 — 아트 에이전시 브랜딩",
        concept: "신인 작가 발굴 프로젝트",
        highlights: [
          "브랜드 이미지 구축",
          "홈페이지 메인 카피 전체",
          "제안서 컨셉 도출 및 구성",
          "Online/Offline/Collaboration 서비스 기획",
        ],
        images: [
          "/images/brand/art-sawol/01.jpg",
          "/images/brand/art-sawol/02.jpg",
          "/images/brand/art-sawol/03.jpg",
          "/images/brand/art-sawol/04.jpg",
        ],
      },
    ],
  },
  {
    id: "audio-drama",
    number: "03",
    category: "오디오 드라마 기획",
    categoryEn: "Audio Drama",
    color: "accent-orange",
    thumbnail: "/images/audio-drama/title-bg.jpg",
    role: [
      "여성향 오디오 드라마 기획",
      "시리즈 작품 및 프로모션 기획",
      "BL IP 작품 제작 (웹소설/웹툰)",
      "웹소설 공모전 기획 및 진행",
    ],
    details: [
      {
        title: '소재의 다각화 — "새로운 시도"',
        concept: "새로운 롤플레잉 드라마 영역 개척",
        highlights: [
          "불륜, 쓰리썸, 사극 등 다양한 소재 도입",
          "유저들의 호평 획득",
          "매출 상승에 크게 기여",
        ],
        images: [
          "/images/audio-drama/diversification/01.jpg",
          "/images/audio-drama/diversification/02.jpg",
          "/images/audio-drama/diversification/03.jpg",
          "/images/audio-drama/diversification/04.jpg",
          "/images/audio-drama/diversification/05.jpg",
        ],
      },
      {
        title: '시리즈 작품 도입 — "경험의 확장"',
        concept: "유저가 직접 캐릭터를 선택하는 시리즈물",
        highlights: [
          "캐릭터 선택형 시리즈물 최초 기획",
          "앤솔로지 구조 도입",
          "장르적 경험의 새로운 패러다임 제안",
        ],
        images: [
          "/images/audio-drama/series/01.jpg",
          "/images/audio-drama/series/02.jpg",
          "/images/audio-drama/series/03.jpg",
          "/images/audio-drama/series/04.jpg",
          "/images/audio-drama/series/05.jpg",
          "/images/audio-drama/series/06.jpg",
        ],
      },
      {
        title: "BL IP 작품 제작",
        concept: "웹소설/웹툰 오디오 드라마화",
        highlights: [
          "원작 검토부터 계약까지 전체 프로세스",
          "각색 작가 컨택 및 시나리오 기획",
          "약 20편 계약 완료 (2025-26 제작예정)",
        ],
        images: [
          "/images/audio-drama/bl-ip/01.jpg",
          "/images/audio-drama/bl-ip/02.jpg",
          "/images/audio-drama/bl-ip/03.jpg",
          "/images/audio-drama/bl-ip/04.jpg",
          "/images/audio-drama/bl-ip/05.jpg",
          "/images/audio-drama/bl-ip/06.jpg",
        ],
      },
      {
        title: "플링 오리지널 웹소설 공모전",
        concept: "공모전 진행 및 신인 개발",
        highlights: [
          "웹소설 공모전 기획 및 진행",
          "수상작 선정 및 기획 PD 역할",
          "로맨스 2편 + BL 3편 작업 완료",
        ],
        images: [
          "/images/audio-drama/webnovel-contest/01.jpg",
          "/images/audio-drama/webnovel-contest/02.jpg",
          "/images/audio-drama/webnovel-contest/03.jpg",
          "/images/audio-drama/webnovel-contest/04.jpg",
          "/images/audio-drama/webnovel-contest/05.jpg",
          "/images/audio-drama/webnovel-contest/06.jpg",
        ],
      },
    ],
  },
  {
    id: "scenario",
    number: "04",
    category: "시나리오",
    categoryEn: "Scenario",
    color: "accent-purple",
    thumbnail: "/images/scenario/01.jpg",
    role: ["오디오 드라마 각색", "오디오 시나리오 작업"],
    details: [
      {
        title: "컬러제닉 캔디드 샷",
        concept: "웹소설 원작 (원작자: 그루)",
        highlights: ["33화 완결 (외전 포함)", "단독 시나리오 작업"],
        images: ["/images/scenario/01.jpg"],
      },
      {
        title: "노 베팅 존",
        concept: "웹소설 원작 (원작자: 낙울)",
        highlights: ["22화 완결 (외전 포함)", "단독 시나리오 작업"],
        images: ["/images/scenario/02.jpg"],
      },
      {
        title: "러브 카운트다운",
        concept: "웹소설 원작 (원작자: 진램)",
        highlights: ["8화 완결 (외전 포함)", "단독 시나리오 작업"],
        images: ["/images/scenario/03.jpg"],
      },
      {
        title: "소년을 위로해줘",
        concept: "웹툰 원작 (원작자: 동물)",
        highlights: ["10화 완결 (외전 포함)", "공동 시나리오 작업 (메인 작가)"],
        images: ["/images/scenario/04.jpg"],
      },
      {
        title: "썸머 나잇 루팡!",
        concept: "웹툰 원작 (원작자: 토유)",
        highlights: ["7화 완결 (외전 포함)", "단독 시나리오 작업"],
        images: ["/images/scenario/05.jpg"],
      },
    ],
  },
];

export const skills = [
  {
    category: "기획",
    items: [
      "스토리 기획 및 컨셉 개발",
      "브랜딩 및 리브랜딩",
      "프로젝트 기획 및 실행",
    ],
  },
  {
    category: "콘텐츠 제작",
    items: [
      "앨범 기획 및 제작 진행",
      "오디오 드라마 기획",
      "시나리오 작성 및 각색",
    ],
  },
  {
    category: "운영 및 관리",
    items: [
      "제작 스텝 구성 및 현장 진행",
      "프리프로덕션 업무",
      "녹음 현장 서포트",
    ],
  },
  {
    category: "커뮤니케이션",
    items: [
      "카피라이팅",
      "제안서 구성",
      "작가/성우 컨택 및 협업",
    ],
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
];
