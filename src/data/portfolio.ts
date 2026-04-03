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
    bgColor: "#3d6475",
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
          "매거진 아티클 기획안을 작성하고 기획 회의를 거쳐 수정한 뒤, 최종 아티클 발행.",
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
    bgColor: "#9a8fa0",
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
          "기획 의도와 수용자의 경험을 이어주는 스토리텔러로서의 역할을 연마했습니다.",
        highlights: ["역사·문화예술 콘텐츠 전달", "영어 도슨트 운영", "2016~2018 다수 기관 활동"],
      },
      {
        title: "전시 운영 스태프",
        concept: "<어둠 속의 대화>展 운영",
        story:
          "언어·비언어적 커뮤니케이션의 균형을 실무에서 체득했습니다.",
        highlights: ["관람객 응대 및 안내", "International Meeting 국내외 내빈 의전 및 통역", "국제적 감각과 상황 대응력 습득"],
      },
      {
        title: "교육 프로그램 보조강사",
        concept: "디뮤지엄 어린이·성인 대상 교육 진행",
        story:
          "예술 콘텐츠를 관람객의 경험과 연결하는 커뮤니케이션 능력을 키웠습니다.",
        highlights: ["<아홉 개의 빛, 아홉 개의 감성>展", "<헤더윅 스튜디오>展", "예술을 전달하는 감각 체득"],
      },
      {
        title: "서포터즈",
        concept: "씨씨오씨, 우이신설 문화예술철도, 대림미술관",
        story:
          "전시 기획안 발표·토론·피어리뷰를 통해 학문적 소통 역량 강화. 동료들과의 심도 있는 기획 논의를 통해 다양한 시각을 흡수하고 기획 언어를 다듬는 중.",
        highlights: ["전시 기획안 발표 및 피어리뷰", "예술기획 전공 세미나", "기획 언어 심화"],
      },
    ],
  },
  {
    id: "action",
    number: "04",
    category: "실행하다",
    categoryEn: "ACTION",
    color: "accent-orange",
    bgColor: "#4a4540",
    subtitle: "기획과 소통을 현실로 만드는 실행력",
    role: [
      "콘텐츠 기획·제작·운영 전 과정",
      "셀프 브랜딩 및 브랜드 구축",
      "디지털 콘텐츠 전략 수립",
    ],
    details: [
      {
        title: "블로그 운영",
        concept: "문화예술 콘텐츠 브랜드 「아트로그」·「모데라토」",
        story:
          "콘텐츠 기획–제작–운영까지 아우르는 실행력과 브랜드 구축 역량을 강화했습니다.",
        highlights: ["집필·이미지 제작·업로드 100% 단독 운영", "조회수·독자 데이터 기반 전략 조정"],
      },
      {
        title: "문화예술 스터디",
        concept: "아트디깅클럽 초기 멤버",
        story:
          "복잡한 예술 담론을 대중 언어로 재정리하는 능력을 키웠습니다.",
        highlights: ["발레·연극·클래식 등 다분야 스터디", "카드뉴스 형태 아카이빙 및 인스타그램 공유"],
      },
     {
        title: "기관 협업",
        concept: "아스테리 코리아·KCDF 갤러리·아트오앤오",
        story:
          "브랜드 및 문화기관과의 협업을 통해 콘텐츠 제작의 폭을 넓히고, 기관의 방향성과 콘텐츠 목표를 조율하며 실질적인 협업 경험을 쌓았습니다.",
        highlights: ["아스테리 코리아 협업 콘텐츠", "KCDF 갤러리 협업", "아트오앤오 협업"],
      },
      {
        title: "아트바젤 홍콩 취재",
        concept: "2025·2026 연속 참가",
        story:
          "아트바젤 홍콩을 2년 연속 직접 취재하며 글로벌 아트페어의 흐름과 디지털 아트 이니셔티브를 현장에서 기록했습니다.",
        highlights: ["아트바젤 홍콩 25·26 취재", "Zero 10 디지털 아트 이니셔티브 보도", "현장 콘텐츠 제작"],
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
