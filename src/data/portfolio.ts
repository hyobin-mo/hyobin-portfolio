export const siteConfig = {
  name: "효빈",
  nameEn: "HYOBIN",
  title: "Art Messenger",
  tagline: "당신에게 닿은 예술 이야기를 전합니다",
  subtitle: "예술을 당신의 언어로 옮기는 아트 메신저",
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
  bgColor: string;
  highlightColor?: string;
  subtitle?: string;
  thumbnail?: string;
  role: string[];
  details: ProjectDetail[];
}

export const projects: Project[] = [
  {
    id: "curate",
    number: "01",
    category: "기획하다",
    categoryEn: "CURATE",
    color: "accent-pink",
    bgColor: "#C9D3C0",
    subtitle: "현장을 이해하고 실행가능한 방향으로 기획하다",
    role: [
      "연간 사업 기획안 수립 및 예산 구성",
      "전체 일정 관리 및 프로젝트 운영",
      "다양한 이해관계자 협업 조율",
    ],
    details: [
      {
        title: "수림문화재단",
        concept: "전략기획부 사원",
        story:
          "1기에서는 서포터즈로, 2기에서는 프로젝트 매니저(PM)로, 3기에선 수림문화예술 서포터즈 사업담당자로 총괄하며, 기획의 전 과정 담당.",
        highlights: ["연간 사업 기획안 수립", "예산 구성 및 일정 관리", "문화예술 사업 운영 보조"],
      },
      {
        title: "아트센터이다",
        concept: "교육팀 에듀케이터",
        story:
          "프랑스 작가 에르베 튈레의 교육 프로그램을 운영하며, 국제 예술가와 협업 시 요구되는 기획 감각과 조율 능력 체득.",
        highlights: ["어린이 교육 프로그램 기획", "작가 통역 및 의전", "전시 연계 교육 프로그램 기획"],
      },
      {
        title: "학고재갤러리",
        concept: "인턴",
        story:
          "작가 리서치와 자료정리, 작품 관리 등 전시를 구성하는 기초 큐레이션 실무 경험.",
        highlights: ["자료·아카이브 관리", "리서치·조사 보조", "행정 프로세스 이해"],
      },
    ],
  },
  {
    id: "connect",
    number: "02",
    category: "소통하다",
    categoryEn: "CONNECT",
    color: "accent-blue",
    bgColor: "#F5EBC8",
    highlightColor: "#C9D3C0",
    subtitle: "기획의 의도를 수용자의 언어로 풀어내며 소통하다",
    role: [
      "문화예술 콘텐츠 커뮤니케이션",
      "도슨트 및 교육 프로그램 진행",
      "영어 도슨트 및 국제 행사 운영",
    ],
    details: [
      {
        title: "도슨트",
        concept: "백범김구기념관, KF갤러리, 아뜰리에 에르메스, 세종문화회관",
        story:
          "기획 의도와 수용자의 경험을 이어주는 스토리텔로서 전시 해설 담당.",
        highlights: ["역사·문화예술 콘텐츠 전달", "영어 도슨트 운영"],
      },
      {
        title: "전시 운영 스태프",
        concept: "《어둠 속의 대화》展",
        story:
          "다양한 계층의 관람객 응대, 글로벌 워크숍 International Meeting 운영 보조.",
        highlights: ["관람객 응대 및 안내", "IM 국내외 내빈 의전 및 통역"],
      },
      {
        title: "교육 프로그램 보조강사",
        concept: "디뮤지엄 어린이·성인 대상 교육 프로그램 운영 보조",
        story:
          "예술 콘텐츠를 관람객의 경험과 연결하는 교육 및 커뮤니케이션 능력 체득.",
        highlights: ["《아홉 개의 빛, 아홉 개의 감성》展", "《헤더윅 스튜디오》展"],
      },
    ],
  },
  {
    id: "action",
    number: "03",
    category: "협업하다",
    categoryEn: "COOPERATE",
    color: "accent-orange",
    bgColor: "#C9D3C0",
    subtitle: "혼자 쓰는 글에서 함께 만드는 콘텐츠로 협업하다",
    role: [
      "콘텐츠 기획·제작·운영 전 과정",
      "셀프 브랜딩 및 브랜드 구축",
      "디지털 콘텐츠 전략 수립",
    ],
    details: [
      {
        title: "블로그 운영",
        concept: "문화예술 콘텐츠 블로그 시리즈\n「아트로그」·「모데라토」",
        story: "콘텐츠 기획·제작·운영까지 독자적으로 진행하며 브랜드 채널 강화.",
        highlights: ["현장 취재 및 원고 집필 전 과정 운영", "조회수·독자 데이터 기반 전략 조정"],
      },
      {
        title: "안티에그 매거진",
        concept: "프리랜서 에디터 공동체,\n안티에그 파트너 에디터",
        story: "매달 아젠다에 맞춰 기획안을 작성하고 회의를 거쳐 아티클 발행.",
        highlights: ["에디토리얼 사이클 참여", "아티클 기획안 작성 및 발행"],
      },
      {
        title: "B2B 협업",
        concept: "프로젝트 아스테리 코리아, 국민일보 아트브뤼 미술상, 아트오앤오 등",
        story: "브랜드 및 기관, 매체의 인바운드 제안에서 시작된 협업.",
        highlights: ["협업 기관과의 커뮤니케이션", "낯선 주제에 대한 취재 경험"],
      },
    ],
  },
];

export const skills = [
  {
    category: "CURATE 기획하다",
    items: ["현장 이해 기반 기획력", "연간 사업 기획안 수립", "예산 구성 및 일정 관리"],
  },
  {
    category: "CONNECT 소통하다",
    items: ["문화예술 콘텐츠 커뮤니케이션", "도슨트 및 교육 프로그램 진행", "영어 도슨트 및 국제 행사 운영"],
  },
  {
    category: "ACTION 실행하다",
    items: ["블로그 콘텐츠 기획 및 운영", "문화예술 스터디 기획·진행", "브랜드 콘텐츠 자기주도 제작"],
  },
  {
    category: "SENSE AND SENSIBILITY",
    items: ["이성과 감성이 균형 잡힌 스토리텔러", "엔지니어적 논리력 + 큐레이터적 감성", "자기주도적 실행력과 책임감"],
  },
];

export interface Article {
  title: string;
  description: string;
  date: string;
  tags: string[];
  source: "Blog" | "Antiegg";
  href: string;
  external: boolean;
}

export const articles: Article[] = [
  {
    title: "디지털 시대의 예술",
    description: "아트바젤 홍콩 2026 Zero 10",
    date: "2026.4.",
    tags: ["아트로그", "해외전시"],
    source: "Blog",
    href: "https://blog.naver.com/hyo_bm/224238309015",
    external: true,
  },
  {
    title: "국립현대미술관이 선택한 퀴어 불화",
    description: "호랑이와 불교 미술, 박그림",
    date: "2026.3.",
    tags: ["아트로그", "작가소개"],
    source: "Blog",
    href: "https://blog.naver.com/hyo_bm/224210003030",
    external: true,
  },
  {
    title: "야너두 들어봤을 거야",
    description: "빌보드 싱어송라이터 줄리아 마이클스 Julia Michaels",
    date: "2025.5.",
    tags: ["모데라토", "아티스트"],
    source: "Blog",
    href: "https://blog.naver.com/hyo_bm/223877581334",
    external: true,
  },
  {
    title: "네임드부터 라이징까지",
    description: "2026 화랑미술제 감상 가이드",
    date: "2026.4.",
    tags: ["아트로그", "국내전시"],
    source: "Blog",
    href: "https://blog.naver.com/hyo_bm/224247896059",
    external: true,
  },
  {
    title: "여론을 뒤집는 힘",
    description: "자크 루이 다비드 〈마라의 죽음 La Mort de Marat〉",
    date: "2025.4.",
    tags: ["아트로그", "작품소개"],
    source: "Blog",
    href: "https://blog.naver.com/hyo_bm/223842397888",
    external: true,
  },
  {
    title: "그것이 나의 제국이었네",
    description: "Coldplay(콜드플레이) — Viva La Vida",
    date: "2025.4.",
    tags: ["모데라토", "곡소개"],
    source: "Blog",
    href: "https://blog.naver.com/hyo_bm/223828666800",
    external: true,
  },
  {
    title: "슬로우 블링크, 본질을 마주하다",
    description: "존 버거로 읽는 데미안 허스트의 상어와 늑구",
    date: "2026.5.",
    tags: ["컬쳐", "동물권"],
    source: "Antiegg",
    href: "https://antiegg.kr/34721/",
    external: true,
  },
  {
    title: "타인의 관계를 훔쳐보는 시선들",
    description: "호퍼부터 뒤샹까지 예술이 포착한 관음의 경계",
    date: "2026.4.",
    tags: ["아트", "근현대미술"],
    source: "Antiegg",
    href: "https://antiegg.kr/34177/",
    external: true,
  },
  {
    title: "내 인생을 망치러 온 나의 구원자",
    description: "인간과 동물 사이, 의존의 경계가 허물어지는 순간",
    date: "2026.2.",
    tags: ["컬쳐", "반려동물"],
    source: "Antiegg",
    href: "https://antiegg.kr/32383/",
    external: true,
  },
];

export const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "PORTFOLIO", href: "#curate" },
];
