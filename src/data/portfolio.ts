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
    id: "curate",
    number: "01",
    category: "기획하다",
    categoryEn: "CURATE",
    color: "accent-pink",
    role: [
      "연간 사업 기획안 수립 및 예산 구성",
      "전체 일정 관리 및 프로젝트 운영",
      "다양한 이해관계자 협업 조율",
    ],
    details: [
      {
        title: "수림문화재단",
        concept: "1기 서포터즈 → 2기 PM → 3기 사업 담당자",
        story: "수용자의 관점에서 운영을 이해하고, 기획자의 관점에서 프로젝트의 전체 흐름을 조망하는 능력을 쌓았습니다.",
        highlights: ["연간 사업 기획안 수립", "예산 구성 및 일정 관리", "수림미술상·최은정 개인전 운영 보조"],
      },
      {
        title: "아트센터이다",
        concept: "프랑스 작가 에르베 튈레 교육 프로그램 운영",
        story: "국제 예술가와 협업할 때 요구되는 기획 감각과 조율 능력을 체득했습니다.",
        highlights: ["작가 통역 및 의전", "공간 구성 및 참여자 동선 조정", "볼로냐 일러스트 원화전 교육 프로그램 기획"],
      },
      {
        title: "학고재 갤러리",
        concept: "기초 큐레이션 실무",
        story: "전시가 완성되기까지의 뒤편 과정을 몸으로 배웠습니다.",
        highlights: ["작가 리서치 및 자료 정리", "출품작 관리", "갤러리 행정 프로세스 이해"],
      },
    ],
  },
  {
    id: "connect",
    number: "02",
    category: "소통하다",
    categoryEn: "CONNECT",
    color: "accent-blue",
    role: [
      "문화예술 콘텐츠 커뮤니케이션",
      "도슨트 및 교육 프로그램 진행",
      "영어 도슨트 및 국제 행사 운영",
    ],
    details: [
      {
        title: "전시 운영 스태프",
        concept: "<어둠 속의 대화>展 운영",
        story: "언어·비언어적 커뮤니케이션의 균형을 실무에서 체득했습니다.",
        highlights: ["관람객 응대 및 안내", "International Meeting 국내외 내빈 의전 및 통역", "국제적 감각과 상황 대응력 습득"],
      },
      {
        title: "교육 프로그램 보조강사",
        concept: "디뮤지엄 어린이·성인 대상 교육 진행",
        story: "예술 콘텐츠를 관람객의 경험과 연결하는 커뮤니케이션 능력을 키웠습니다.",
        highlights: ["<아홉 개의 빛, 아홉 개의 감성>展", "<헤더윅 스튜디오>展", "예술을 전달하는 감각 체득"],
      },
      {
        title: "도슨트",
        concept: "백범김구기념관·KF갤러리·아뜰리에 에르메스·세종문화회관",
        story: "기획 의도와 수용자의 경험을 이어주는 스토리텔러로서의 역할을 연마했습니다.",
        highlights: ["역사·문화예술 콘텐츠 전달", "영어 도슨트 운영", "2016~2018 다수 기관 활동"],
      },
    ],
  },
  {
    id: "action",
    number: "03",
    category: "실행하다",
    categoryEn: "ACTION",
    color: "accent-orange",
    role: [
      "콘텐츠 기획·제작·운영 전 과정",
      "셀프 브랜딩 및 브랜드 구축",
      "디지털 콘텐츠 전략 수립",
    ],
    details: [
      {
        title: "블로그 운영",
        concept: "문화예술 콘텐츠 브랜드 「아트로그」·「모데라토」",
        story: "콘텐츠 기획–제작–운영까지 아우르는 실행력과 브랜드 구축 역량을 강화했습니다.",
        highlights: ["집필·이미지 제작·업로드 100% 단독 운영", "아스테리 코리아·KCDF 갤러리 협업", "조회수·독자 데이터 기반 전략 조정"],
      },
      {
        title: "문화예술 스터디",
        concept: "「아트디깅클럽」 초기 멤버",
        story: "복잡한 예술 담론을 대중 언어로 재정리하는 능력을 키웠습니다.",
        highlights: ["발레·연극·클래식 등 다분야 스터디", "카드뉴스 형태 아카이빙 및 인스타그램 공유", "커뮤니티 운영 능력 강화"],
      },
      {
        title: "미술계 강의 수강",
        concept: "갤러리신라·글이나그림 아트포럼·널문예 특강",
        story: "현장 감각과 비평적 사고력을 발전시켰습니다.",
        highlights: ["전시 비평·미술사·예술경영 강의 수강", "곰브리치 서양미술사 강의", "현업 종사자 실제 기획·협업 사례 학습"],
      },
    ],
  },
];

export const skills = [
  {
    category: "CURATE 기획하다",
    items: [
      "현장 이해 기반 기획력",
      "연간 사업 기획안 수립",
      "예산 구성 및 일정 관리",
    ],
  },
  {
    category: "CONNECT 소통하다",
    items: [
      "문화예술 콘텐츠 커뮤니케이션",
      "도슨트 및 교육 프로그램 진행",
      "영어 도슨트 및 국제 행사 운영",
    ],
  },
  {
    category: "ACTION 실행하다",
    items: [
      "블로그 콘텐츠 기획 및 운영",
      "문화예술 스터디 기획·진행",
      "브랜드 콘텐츠 자기주도 제작",
    ],
  },
  {
    category: "SENSE AND SENSIBILITY",
    items: [
      "이성과 감성이 균형 잡힌 스토리텔러",
      "엔지니어적 논리력 + 큐레이터적 감성",
      "자기주도적 실행력과 책임감",
    ],
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
];
