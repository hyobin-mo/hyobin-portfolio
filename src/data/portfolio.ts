export const siteConfig = {
  name: "효빈",
  nameEn: "HYOBIN",
  title: "Art Communicator",
  tagline: "당신에게 닿을 문화예술을 전합니다",
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
  bgColor: string;
  subtitle?: string;
  thumbnail?: string;
  role: string[];
  details: ProjectDetail[];
}

export const projects: Project[] = [
  {
    id: "curate",
    number: "02",
    category: "기획하다",
    categoryEn: "CURATE",
    color: "accent-pink",
    bgColor: "#FFF5CC",
    subtitle: "현장을 이해하고 실행가능한 방향으로 기획하다",
    role: [
      "연간 사업 기획안 수립 및 예산 구성",
      "전체 일정 관리 및 프로젝트 운영",
      "다양한 이해관계자 협업 조율",
    ],
    details: [
      {
        title: "안티에그",
        concept: "매거진 파트너 에디터",
        story:
          "매거진 아티클 기획안을 작성하고 기획 회의를 거쳐 최종 아티클 발행.",
        highlights: ["아티클 기획안 및 원고 작성", "기획회의 참여 및 피드백", "큐레이토리얼 방향 설정"],
      },
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
    number: "03",
    category: "소통하다",
    categoryEn: "CONNECT",
    color: "accent-blue",
    bgColor: "#C7E0F4",
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
        highlights: ["역사·문화예술 콘텐츠 전달", "영어 도슨트 운영", "2016~2018 다수 기관 활동"],
      },
      {
        title: "전시 운영 스태프",
        concept: "《어둠 속의 대화》展",
        story:
          "다양한 계층의 관람객 응대, 글로벌 워크숍 International Meeting 운영 보조.",
        highlights: ["관람객 응대 및 안내", "IM 국내외 내빈 의전 및 통역", "국제적 감각과 상황 대응력 습득"],
      },
      {
        title: "교육 프로그램 보조강사",
        concept: "디뮤지엄 어린이·성인 대상 교육 프로그램 운영 보조",
        story:
          "예술 콘텐츠를 관람객의 경험과 연결하는 교육 및 커뮤니케이션 능력 체득.",
        highlights: ["《아홉 개의 빛, 아홉 개의 감성》展", "《헤더윅 스튜디오》展", "커뮤니케이션 능력 체득"],
      },
      {
        title: "서포터즈",
        concept: "씨씨오씨, 우이신설 문화예술철도, 대림미술관",
        story:
          "수용자의 시선에 맞춘 창의적이고 효과적인 홍보 방안 모색.",
        highlights: ["인터랙티브 프로그램 기획 ", "관람평 로드 이벤트 진행", "이벤트 운영 보조"],
      },
    ],
  },
  {
    id: "action",
    number: "04",
    category: "실행하다",
    categoryEn: "ACTION",
    color: "accent-orange",
    bgColor: "#FFF5CC",
    subtitle: "기획과 소통을 현실로 만들며 실행하다",
    role: [
      "콘텐츠 기획·제작·운영 전 과정",
      "셀프 브랜딩 및 브랜드 구축",
      "디지털 콘텐츠 전략 수립",
    ],
    details: [
      {
        title: "블로그 운영",
        concept: "문화예술 콘텐츠 셀프 브랜딩 「아트로그」·「모데라토」",
        story:
          "콘텐츠 기획–제작–운영까지 아우르는 실행력과 브랜드 구축 역량 강화.",
        highlights: ["현장 취재 및 원고 집필 전 과정 운영", "조회수·독자 데이터 기반 전략 조정"],
      },
      {
        title: "문화예술 스터디",
        concept: "아트디깅클럽, 글이나그림 아트포럼, 널 위한 달항아리",
        story:
          "미술에만 국한되지 않고 클래식 등 다분야 스터디 및 현업 종사자와의 커뮤니티 형성.",
        highlights: ["발레·연극·클래식 등 다분야 스터디", "예술 비지니스의 구조와 트렌드 파악"],
      },
     {
        title: "SNS 기관 협업",
        concept: "아스테리 코리아, KCDF 갤러리, 아트오앤오",
        story:
          "브랜드 및 문화기관과의 협업을 통해 콘텐츠 제작의 폭 확장, 기관의 방향성과 콘텐츠 목표 논의.",
        highlights: ["협업 기관과의 커뮤니케이션", "낯선 주제에 대한 취재 경험"],
      },
      {
        title: "해외 문화 행사 취재",
        concept: "아트바젤 홍콩, 아트센트럴 홍콩, 서퍼클럽 홍콩",
        story:
          "홍콩 아트위크 기간 2년 연속 직접 취재, 글로벌 아트페어 흐름 기록.",
        highlights: ["아트바젤 홍콩 25·26 취재", "아트 센트럴 홍콩 도슨트 참여"],
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

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
];
