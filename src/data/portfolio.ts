export const siteConfig = {
  name: "효빈",
  nameEn: "HYOBIN",
  title: "Art Communicator",
  tagline: "당신이에게 닿을 문화예술을 전합니다",
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
    subtitle: "현장을 이해하고, 실행가능한 방향으로 기획하다",
    role: [
      "연간 사업 기획안 수립 및 예산 구성",
      "전체 일정 관리 및 프로젝트 운영",
      "다양한 이해관계자 협업 조율",
    ],
    details: [
      {
        title: "안티에그 매거진",
        concept: "에디터 / 아트 커뮤니케이터",
        story:
          "문화예술 콘텐츠를 기획하고 편집하며 독자와의 접점을 만드는 에디터로 활동 중. 기획안 작성부터 원고 편집, 큐레이토리얼 방향 설정까지 매거진 콘텐츠 전반을 담당합니다.",
        highlights: ["콘텐츠 기획안 작성", "원고 편집", "큐레이토리얼 방향 설정"],
      },
      {
        title: "수림문화재단",
        concept: "수림 문화예술 서포터즈 1기 → 2기 PM → 3기 사업담당자",
        story:
          "1기 서포터즈로 수용자의 관점에서 운영을 이해하고, 2기 PM으로 프로젝트를 조율하며, 3기 사업담당자로 성장한 수림 문화예술 서포터즈 활동을 통해 기획의 전 과정을 주체적으로 경험했습니다.",
        highlights: ["연간 사업 기획안 수립", "예산 구성 및 일정 관리", "수림미술상·최은정 개인전 운영 보조"],
      },
      {
        title: "아트센터이다",
        concept: "프랑스 작가 에르베 튈레 교육 프로그램 운영",
        story:
          "국제 예술가와 협업할 때 요구되는 기획 감각과 조율 능력을 체득했습니다.",
        highlights: ["작가 통역 및 의전", "공간 구성 및 참여자 동선 조정", "전시 연계 교육 프로그램 기획"],
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
        concept: "백범김구기념관·KF갤러리·아뜰리에 에르메스·세종문화회관",
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
        title: "홍익대 미술대학원 전시기획세미나",
        concept: "예술기획 전공 대학원 과정",
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
        title: "블로그 운영 「아트로그」",
        concept: "문화예술 콘텐츠 브랜드 「아트로그」·「모데라토」",
        story:
          "콘텐츠 기획–제작–운영까지 아우르는 실행력과 브랜드 구축 역량을 강화했습니다.",
        highlights: ["집필·이미지 제작·업로드 100% 단독 운영", "조회수·독자 데이터 기반 전략 조정"],
      },
      {
        title: "아트디깅클럽",
        concept: "문화예술 스터디 초기 멤버",
        story:
          "복잡한 예술 담론을 대중 언어로 재정리하는 능력을 키웠습니다.",
        highlights: ["발레·연극·클래식 등 다분야 스터디", "카드뉴스 형태 아카이빙 및 인스타그램 공유"],
      },
      {
        title: "아트바젤 홍콩 취재",
        concept: "2025·2026 연속 참가",
        story:
          "아트바젤 홍콩을 2년 연속 직접 취재하며 글로벌 아트페어의 흐름과 디지털 아트 이니셔티브를 현장에서 기록했습니다.",
        highlights: ["아트바젤 홍콩 25·26 취재", "Zero 10 디지털 아트 이니셔티브 보도", "현장 콘텐츠 제작"],
      },
      {
        title: "기관 협업",
        concept: "아스테리 코리아·KCDF 갤러리·아트오앤오",
        story:
          "브랜드 및 문화기관과의 협업을 통해 콘텐츠 제작의 폭을 넓히고, 기관의 방향성과 콘텐츠 목표를 조율하며 실질적인 협업 경험을 쌓았습니다.",
        highlights: ["아스테리 코리아 협업 콘텐츠", "KCDF 갤러리 협업", "아트오앤오 협업"],
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
  { label: "Curate", href: "#curate" },
  { label: "Connect", href: "#connect" },
  { label: "Action", href: "#action" },
  { label: "Blog", href: "#blog" },
];
