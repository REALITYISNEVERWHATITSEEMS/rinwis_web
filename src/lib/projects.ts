export type Credit = { label: string; value: string };

export type ImageSize = { width: number; height: number };

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string[];
  credits: Credit[];
  images: ImageSize[];
};

const size = (width: number, height: number): ImageSize => ({ width, height });

export const projects: Project[] = [
  {
    slug: "sensora",
    title: "SENSORA",
    category: "Brand & Interactive",
    year: "2025",
    description: [
      "SENSORA는 '향이 무기가 된 미래'를 상상한 브랜딩·인터랙티브 프로젝트다.",
      "향수가 지닌 공간감과 뿌리는 행위의 강렬함을 새롭게 제안하기 위해 FPS 게임 형식으로 인터랙티브 프로젝트를 기획했다.",
      "AI · Unreal Engine 5 · Blender로 직접 플레이할 수 있는 FPS 스타일의 비주얼을 제작했으며, 결과물은 3D 비주얼·게임 데모·웹사이트를 결합한 다층 형식으로 완성했다.",
    ],
    credits: [
      { label: "Role", value: "Creator" },
      {
        label: "Scope",
        value: "컨셉/BI, 그래픽/비주얼 제작, 3D 모델링, UE5 블루프린트/레벨 빌드, 인터랙션 설계",
      },
      { label: "Deliverables", value: "3D 비주얼(이미지/영상), 게임 데모, 웹 섹션" },
      { label: "Timeline", value: "4주" },
      { label: "Tools", value: "Unreal Engine 5, Blender, Illustrator, Photoshop, After Effects, Premiere Pro, Midjourney, Cargo" },
    ],
    images: [size(1208, 1510)],
  },
  {
    slug: "m-simulacre",
    title: "M — Simulacre",
    category: "Brand & Interactive",
    year: "2025",
    description: [
      "M은 Automotive Lamp 브랜딩·인터랙티브 프로젝트이다.",
      "가상과 현실의 관계를 단순한 '복사'가 아닌 '공존'으로 재정의하고자, 레이싱 게임으로만 작동하는 조명 오브제를 기획 및 제작했다.",
      "Unreal Engine 5 Vehicle 시스템과 HTTP 블루프린트로 조명을 실시간 연동했고, 조명 오브제는 알루미늄 가공으로 제작했다.",
    ],
    credits: [
      { label: "Role", value: "Creator" },
      { label: "Scope", value: "컨셉/BI, 인터랙션 설계, 3D 모델링, UE5 Vehicle 연동, 조명 제어(HTTP), 오브제 설계·가공" },
      { label: "Deliverables", value: "3D 비주얼, 게임 데모, 오브제" },
      { label: "Timeline", value: "8주" },
      { label: "Tools", value: "Unreal Engine 5, Blender, Illustrator, Photoshop, After Effects, Premiere Pro, Midjourney, Substance Painter" },
    ],
    images: [size(1414, 2000)],
  },
  {
    slug: "jente-chrome-hearts",
    title: "Chrome Hearts",
    category: "3D Visual",
    year: "2024–2025",
    description: [
      "Jente에서 루틴으로 진행한 3D 비주얼 콘텐츠다. 각 브랜드의 아이덴티티를 분석해 [기획·스토리보드(1주) → 제작(1~2주) → 수정(1주)]의 주기로 월 1편의 3D 비주얼을 제작했으며, \"어느 프레임에서도 브랜드 아이덴티티가 느껴졌으면 좋겠다\"라는 요구에 맞춰 룩 중심으로 콘텐츠를 기획 및 제작하였다.",
      "Chrome Hearts의 태도를 반영한 3D 비주얼 콘텐츠를 제작했다. 브랜드 설립자 @laurielynnstark가 콘텐츠를 공유해 준 것은 개인적으로 큰 영광이었다.",
    ],
    credits: [
      { label: "Client", value: "jente" },
      { label: "Role", value: "3D Designer" },
    ],
    images: [size(1080, 607)],
  },
  {
    slug: "jente-tekla",
    title: "Tekla",
    category: "3D Visual",
    year: "2024–2025",
    description: [
      "TEKLA의 홈웨어 아이덴티티를 '각기 다른 방식으로 휴식을 취하는 캐릭터들의 DOLL HOUSE'로 재해석했고, 이를 바탕으로 3D 비주얼 콘텐츠를 제작했다.",
    ],
    credits: [
      { label: "Client", value: "jente" },
      { label: "Role", value: "3D Designer" },
    ],
    images: [size(775, 775)],
  },
  {
    slug: "jente-rick-owens",
    title: "Rick Owens",
    category: "3D Visual",
    year: "2024–2025",
    description: [
      "메가 지오바스켓을 더욱 과장된 실루엣으로 풀어냈고, 레이브를 연상시키는 조명으로 시선을 끄는 3D 비주얼 콘텐츠를 제작했다.",
    ],
    credits: [
      { label: "Client", value: "jente" },
      { label: "Role", value: "3D Designer" },
    ],
    images: [size(1440, 810)],
  },
  {
    slug: "jente-seasonal-visuals",
    title: "Seasonal Visuals",
    category: "3D Visual",
    year: "2024–2025",
    description: [
      "Oakley, Vivienne Westwood, Celine 등 다양한 브랜드의 아이덴티티를 탐구하며 제작한 시즌별 3D 비주얼 콘텐츠 모음이다.",
    ],
    credits: [
      { label: "Client", value: "jente" },
      { label: "Role", value: "3D Designer" },
      { label: "Scope", value: "기획, 3D 모델링/애니메이션, 라이팅/렌더, 편집" },
      { label: "Timeline", value: "각 4주" },
      { label: "Tools", value: "Unreal Engine 5, Blender, 3D Clo, Illustrator, Photoshop, Premiere Pro, Substance Painter" },
    ],
    images: [size(1691, 951), size(1635, 545)],
  },
  {
    slug: "jente-3d-product-viewer",
    title: "3D Product Viewer",
    category: "3D Visual",
    year: "2024–2025",
    description: [
      "온라인 플랫폼 특성상 제한적이던 제품 경험을 개선하고자 Jente 글로벌 사이트에 3D 제품 뷰어를 구현해, 인터랙티브한 사용자 경험을 제공했다.",
      "또한 팀 내 2D 그래픽 팀의 요청 시 프로모션 배너를 제작하였다.",
    ],
    credits: [
      { label: "Client", value: "jente" },
      { label: "Role", value: "3D Designer" },
      { label: "Scope", value: "기획, 콘텐츠 제작" },
      { label: "Timeline", value: "배너: 1주 / 뷰어: 4주" },
      { label: "Tools", value: "Unreal Engine 5, Blender, 3D CLO, Substance Painter, Sketchfab, Shopify, Illustrator, Photoshop" },
    ],
    images: [size(2000, 1281), size(2000, 673), size(1920, 1080)],
  },
  {
    slug: "jente-trend-report",
    title: "Trend Report 2025",
    category: "Photography",
    year: "2024–2025",
    description: [
      "Jente의 2024–2025 트렌드 리포트 촬영과 프로모션 배너를 위해 촬영 기획, 현장 코디네이션, 촬영 보조를 담당했다.",
    ],
    credits: [
      { label: "Client", value: "jente" },
      { label: "Role", value: "Photo Assistant, Assistant Director (AD)" },
      { label: "Scope", value: "촬영 기획, 촬영 보조, 현장 관리" },
      { label: "Timeline", value: "2주~8주" },
    ],
    images: [size(1600, 2000), size(1334, 2000), size(1170, 713)],
  },
  {
    slug: "from-hell-to-heaven",
    title: "From Hell to Heaven",
    category: "Film & 3D",
    year: "2023",
    description: [
      "오랫동안 기다리던 택배가 옥천 HUB에 갇히며 겪었던 개인적인 감정에서 시작된 팀 프로젝트이다. 지옥과 천국을 오가는 듯했던 그 기다림을, 어린아이가 상상했을 법한 SF의 이미지로 풀어 숏 필름으로 제작했다.",
      "2주 동안 콘셉트·스토리보드 기획, 3D 모델링, 버추얼 프로덕션, DMX 라이팅을 통해 구현했으며, 연출·3D 모델링·그래픽 디자인·편집을 담당했다.",
    ],
    credits: [
      { label: "Role", value: "Director" },
      { label: "Scope", value: "기획, 촬영, 3D 모델링, 그래픽 디자인" },
      { label: "Timeline", value: "2주" },
      { label: "Tools", value: "Unreal Engine 5, Blender, Adobe Illustrator, Photoshop, Premiere Pro, Substance Painter" },
    ],
    images: [size(828, 1472)],
  },
  {
    slug: "visuals-2023",
    title: "Visuals",
    category: "3D Visual",
    year: "2023",
    description: [
      "3D를 배우기 시작한 첫해에, 개인적으로 좋아하는 브랜드들의 의류들을 모델링 하며 3D 그래픽 디자인 프로세스를 탐구했다.",
    ],
    credits: [{ label: "Role", value: "Personal Works" }],
    images: [size(1440, 810)],
  },
  {
    slug: "dolce-gabbana",
    title: "Dolce & Gabbana Project",
    category: "Fashion Design",
    year: "2022",
    description: [
      "ESMOD 서울 졸업작품은 Dolce & Gabbana 협업과 병행해 1년간 진행됐다. 이탈리아 네오리얼리즘 영화의 질감을 재현하기 위해, 6개월간 3D 프린팅 업체와 함께 다양한 소재에서 실제 부조 효과를 구현하는 레이어드 프린팅 기법을 연구·개발했다.",
      "이탈리아 성당의 조각을 3D 스캔해 3D 프린팅 액세서리로 구현했으며, 재킷에 맞는 단추를 직접 모델링·제작했다. 컨셉·디자인부터 생산, 촬영 현장 코디네이션, 최종 영상 편집까지 전 과정을 경험했다.",
    ],
    credits: [
      { label: "School", value: "ESMOD Seoul" },
      { label: "Role", value: "Fashion Design" },
    ],
    images: [size(1318, 2000)],
  },
  {
    slug: "sororam",
    title: "SORORAM",
    category: "Photography",
    year: "2026",
    description: [],
    credits: [{ label: "Role", value: "Photographer" }],
    images: [size(1333, 2000)],
  },
  {
    slug: "okayama-musinsa",
    title: "Okayama Denim / Musinsa",
    category: "Fashion Design & Awards",
    year: "2021–2022",
    description: [
      "[Okayama Denim Contest] 평소 좋아하던 막사발에서 영감을 받아, '막'이라는 미학적 관점으로 옷을 풀어낸 작업이다. '막'이 지닌 태도와 의미를 전하고자 가봉 과정에서 사용한 광목을 그대로 활용하고, 봉제 후 나온 실은 자르지 않은 채 두었으며, 재단하고 남은 원단으로 단추를 제작해 과정 자체의 흔적을 남겼다. 파리에서 열린 오카야마 데님 콘테스트에서 수상했다 (3RD).",
      "[1st Musinsa Next Fashion Scholarship] \"NFT 구매자들은 과연 인스타 프로필만을 바꾸기 위해 큰돈을 쓰는 것에 만족할까?\"라는 질문에서 출발해, 웨어러블 회로를 시그니처 디테일로 삼고 한국적 미감을 존중하는 테크웨어 브랜드 사업계획서를 작성·제출했다. 높은 평가를 받아 무신사 패션 장학생으로 선발됐다.",
    ],
    credits: [
      { label: "School", value: "ESMOD Seoul" },
      { label: "Role", value: "Fashion Design" },
      { label: "Award", value: "Okayama Denim Contest 3RD, Musinsa Next Fashion Scholarship" },
    ],
    images: [size(1600, 1091), size(1414, 2000)],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function projectImages(project: Project) {
  return project.images.map((dim, i) => ({
    src: `/work/${project.slug}/${String(i + 1).padStart(2, "0")}.jpg`,
    width: dim.width,
    height: dim.height,
  }));
}
