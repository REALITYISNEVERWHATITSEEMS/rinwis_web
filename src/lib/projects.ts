export type Credit = { label: string; value: string };

export type MediaImage = { src: string; width: number; height: number };

export type Hero =
  | { kind: "image"; src: string; width: number; height: number }
  | { kind: "video"; src: string };

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string[];
  credits: Credit[];
  hero: Hero;
  images: MediaImage[];
  color: string;
};

const img = (src: string, width: number, height: number): MediaImage => ({ src, width, height });

const rawProjects: Project[] = [
  {
    slug: "sororam",
    title: "SORORAM",
    category: "Photography",
    year: "2026",
    description: [],
    credits: [{ label: "Role", value: "Photographer" }],
    color: "#979898",
    hero: { kind: "image", src: "/work/sororam/main.jpg", width: 1333, height: 2000 },
    images: [
      img("/work/sororam/01.jpg", 1067, 1600),
      img("/work/sororam/02.jpg", 1067, 1600),
      img("/work/sororam/03.jpg", 1067, 1600),
      img("/work/sororam/04.jpg", 1067, 1600),
      img("/work/sororam/05.jpg", 1067, 1600),
      img("/work/sororam/06.jpg", 1067, 1600),
      img("/work/sororam/07.jpg", 1067, 1600),
      img("/work/sororam/08.jpg", 1067, 1600),
      img("/work/sororam/09.jpg", 1067, 1600),
      img("/work/sororam/10.jpg", 1067, 1600),
      img("/work/sororam/11.jpg", 1067, 1600),
      img("/work/sororam/12.jpg", 1067, 1600),
      img("/work/sororam/13.jpg", 1067, 1600),
      img("/work/sororam/14.jpg", 1067, 1600),
      img("/work/sororam/15.jpg", 1067, 1600),
      img("/work/sororam/16.jpg", 1067, 1600),
      img("/work/sororam/17.jpg", 1067, 1600),
      img("/work/sororam/18.jpg", 1067, 1600),
      img("/work/sororam/19.jpg", 1067, 1600),
      img("/work/sororam/20.jpg", 1067, 1600),
      img("/work/sororam/21.jpg", 1067, 1600),
    ],
  },
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
    color: "#161616",
    hero: { kind: "video", src: "/work/sensora/main.mp4" },
    images: [
      img("/work/sensora/01.jpg", 1280, 1600),
      img("/work/sensora/02.jpg", 1280, 1600),
      img("/work/sensora/03.jpg", 1280, 1600),
      img("/work/sensora/04.jpg", 1280, 1600),
      img("/work/sensora/05.jpg", 1600, 1600),
      img("/work/sensora/06.jpg", 1280, 1600),
      img("/work/sensora/07.jpg", 1208, 1510),
      img("/work/sensora/08.jpg", 1600, 561),
      img("/work/sensora/09.jpg", 1600, 561),
      img("/work/sensora/10.jpg", 1600, 561),
      img("/work/sensora/11.jpg", 1600, 561),
      img("/work/sensora/12.jpg", 1600, 561),
      img("/work/sensora/13.jpg", 1600, 561),
    ],
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
    color: "#FFFFFF",
    hero: { kind: "video", src: "/work/m-simulacre/main.mp4" },
    images: [
      img("/work/m-simulacre/01.jpg", 1600, 900),
      img("/work/m-simulacre/02.jpg", 1280, 1600),
      img("/work/m-simulacre/03.jpg", 1280, 1600),
      img("/work/m-simulacre/04.jpg", 1143, 1600),
      img("/work/m-simulacre/05.jpg", 1280, 1600),
      img("/work/m-simulacre/06.jpg", 1280, 1600),
      img("/work/m-simulacre/07.jpg", 1280, 1600),
      img("/work/m-simulacre/08.jpg", 1600, 1199),
      img("/work/m-simulacre/09.jpg", 1600, 1199),
      img("/work/m-simulacre/10.jpg", 1600, 1200),
      img("/work/m-simulacre/11.jpg", 1080, 1440),
      img("/work/m-simulacre/12.jpg", 1280, 1600),
      img("/work/m-simulacre/13.jpg", 1280, 1600),
      img("/work/m-simulacre/14.jpg", 1280, 1600),
      img("/work/m-simulacre/15.jpg", 1600, 1067),
      img("/work/m-simulacre/16.jpg", 1131, 1600),
      img("/work/m-simulacre/17.jpg", 1600, 1131),
      img("/work/m-simulacre/18.jpg", 1600, 1131),
      img("/work/m-simulacre/19.jpg", 1600, 1131),
      img("/work/m-simulacre/20.jpg", 1600, 1131),
      img("/work/m-simulacre/21.jpg", 750, 1002),
      img("/work/m-simulacre/22.jpg", 1280, 1600),
      img("/work/m-simulacre/23.jpg", 1280, 1600),
      img("/work/m-simulacre/24.jpg", 1280, 1600),
      img("/work/m-simulacre/25.jpg", 1280, 1600),
      img("/work/m-simulacre/26.jpg", 1600, 900),
      img("/work/m-simulacre/27.jpg", 1339, 1600),
    ],
  },
  {
    slug: "chrome-hearts",
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
    color: "#E8E8E8",
    hero: { kind: "video", src: "/work/chrome-hearts/main.mp4" },
    images: [
      img("/work/chrome-hearts/01.jpg", 1440, 810),
      img("/work/chrome-hearts/02.jpg", 918, 1600),
      img("/work/chrome-hearts/03.jpg", 1080, 607),
      img("/work/chrome-hearts/04.jpg", 1080, 607),
      img("/work/chrome-hearts/05.jpg", 1080, 607),
      img("/work/chrome-hearts/06.jpg", 1080, 607),
      img("/work/chrome-hearts/07.jpg", 1600, 1200),
    ],
  },
  {
    slug: "tekla",
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
    color: "#A6A3A2",
    hero: { kind: "video", src: "/work/tekla/main.mp4" },
    images: [
      img("/work/tekla/01.jpg", 775, 775),
      img("/work/tekla/02.jpg", 810, 1440),
      img("/work/tekla/03.jpg", 920, 920),
      img("/work/tekla/04.jpg", 1440, 810),
    ],
  },
  {
    slug: "rick-owens",
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
    color: "#171616",
    hero: { kind: "video", src: "/work/rick-owens/main.mp4" },
    images: [
      img("/work/rick-owens/01.jpg", 1440, 810),
      img("/work/rick-owens/02.jpg", 1440, 810),
      img("/work/rick-owens/03.jpg", 1161, 1161),
      img("/work/rick-owens/04.jpg", 1168, 1169),
    ],
  },
  {
    slug: "oakley",
    title: "Oakley",
    category: "3D Visual",
    year: "2024–2025",
    description: [
      "Oakley의 브랜드 아이덴티티를 탐구하며 제작한 3D 비주얼 콘텐츠다.",
    ],
    credits: [
      { label: "Client", value: "jente" },
      { label: "Role", value: "3D Designer" },
    ],
    color: "#494443",
    hero: { kind: "video", src: "/work/oakley/main.mp4" },
    images: [
      img("/work/oakley/01.jpg", 1600, 900),
      img("/work/oakley/02.jpg", 1564, 880),
      img("/work/oakley/03.jpg", 1600, 1511),
      img("/work/oakley/04.jpg", 1600, 1511),
      img("/work/oakley/05.jpg", 1600, 900),
    ],
  },
  {
    slug: "celine",
    title: "Celine",
    category: "3D Visual",
    year: "2024–2025",
    description: [
      "Celine의 무드를 담아낸 3D 비주얼 콘텐츠다.",
    ],
    credits: [
      { label: "Client", value: "jente" },
      { label: "Role", value: "3D Designer" },
    ],
    color: "#4E4B4A",
    hero: { kind: "video", src: "/work/celine/main.mp4" },
    images: [
      img("/work/celine/01.jpg", 702, 702),
      img("/work/celine/02.jpg", 1600, 900),
      img("/work/celine/03.jpg", 1600, 900),
      img("/work/celine/04.jpg", 1600, 836),
      img("/work/celine/05.jpg", 1600, 921),
      img("/work/celine/06.jpg", 1198, 679),
    ],
  },
  {
    slug: "vivienne-westwood",
    title: "Vivienne Westwood",
    category: "3D Visual",
    year: "2024–2025",
    description: [
      "Vivienne Westwood 특유의 펑크적 태도를 담은 3D 비주얼 콘텐츠다.",
    ],
    credits: [
      { label: "Client", value: "jente" },
      { label: "Role", value: "3D Designer" },
    ],
    color: "#5A5A5A",
    hero: { kind: "video", src: "/work/vivienne-westwood/main.mp4" },
    images: [
      img("/work/vivienne-westwood/01.jpg", 1600, 900),
      img("/work/vivienne-westwood/02.jpg", 1600, 637),
    ],
  },
  {
    slug: "3d-viewer",
    title: "3D Product Viewer",
    category: "3D Visual",
    year: "2024–2025",
    description: [
      "온라인 플랫폼 특성상 제한적이던 제품 경험을 개선하고자 Jente 글로벌 사이트에 3D 제품 뷰어를 구현해, 인터랙티브한 사용자 경험을 제공했다.",
    ],
    credits: [
      { label: "Client", value: "jente" },
      { label: "Role", value: "3D Designer" },
      { label: "Tools", value: "Unreal Engine 5, Blender, 3D CLO, Substance Painter, Sketchfab, Shopify" },
    ],
    color: "#3a3a3a",
    hero: { kind: "image", src: "/work/3d-viewer/main.jpg", width: 1564, height: 880 },
    images: [
      img("/work/3d-viewer/01.jpg", 1600, 900),
      img("/work/3d-viewer/02.jpg", 1600, 1025),
    ],
  },
  {
    slug: "jente-promotion-banner",
    title: "Promotion Banner",
    category: "3D Visual",
    year: "2024–2025",
    description: [
      "Jente의 프로모션 캠페인을 위한 비주얼 배너를 기획·제작했다.",
    ],
    credits: [
      { label: "Client", value: "jente" },
      { label: "Role", value: "3D Designer" },
    ],
    color: "#2e2e2e",
    hero: { kind: "video", src: "/work/jente-promotion-banner/main.mp4" },
    images: [
      img("/work/jente-promotion-banner/01.jpg", 1600, 533),
      img("/work/jente-promotion-banner/02.jpg", 1600, 1067),
      img("/work/jente-promotion-banner/03.jpg", 1067, 1600),
      img("/work/jente-promotion-banner/04.jpg", 1600, 1067),
      img("/work/jente-promotion-banner/05.jpg", 1280, 853),
      img("/work/jente-promotion-banner/06.jpg", 1600, 1067),
    ],
  },
  {
    slug: "jente-trend-report-2025",
    title: "Trend Report 2025",
    category: "Photography",
    year: "2025",
    description: [
      "Jente의 2025 트렌드 리포트 촬영과 프로모션 배너를 위해 촬영 기획, 현장 코디네이션, 촬영 보조를 담당했다.",
    ],
    credits: [
      { label: "Client", value: "jente" },
      { label: "Role", value: "Photo Assistant, Assistant Director (AD)" },
    ],
    color: "#3f3f3f",
    hero: { kind: "image", src: "/work/jente-trend-report-2025/main.jpg", width: 1440, height: 1799 },
    images: [
      img("/work/jente-trend-report-2025/01.jpg", 1440, 900),
      img("/work/jente-trend-report-2025/02.jpg", 1440, 900),
      img("/work/jente-trend-report-2025/03.jpg", 1280, 1600),
      img("/work/jente-trend-report-2025/04.jpg", 1440, 899),
    ],
  },
  {
    slug: "jente-trend-report-2024",
    title: "Trend Report 2024",
    category: "Photography",
    year: "2024",
    description: [
      "Jente의 2024 트렌드 리포트 촬영과 프로모션 배너를 위해 촬영 기획, 현장 코디네이션, 촬영 보조를 담당했다.",
    ],
    credits: [
      { label: "Client", value: "jente" },
      { label: "Role", value: "Photo Assistant, Assistant Director (AD)" },
    ],
    color: "#454545",
    hero: { kind: "image", src: "/work/jente-trend-report-2024/main.jpg", width: 1334, height: 2000 },
    images: [
      img("/work/jente-trend-report-2024/01.jpg", 1600, 1067),
      img("/work/jente-trend-report-2024/02.jpg", 1067, 1600),
      img("/work/jente-trend-report-2024/03.jpg", 1600, 1066),
      img("/work/jente-trend-report-2024/04.jpg", 1600, 1066),
      img("/work/jente-trend-report-2024/05.jpg", 1066, 1600),
      img("/work/jente-trend-report-2024/06.jpg", 1600, 1067),
      img("/work/jente-trend-report-2024/07.jpg", 1600, 1067),
    ],
  },
  {
    slug: "leedaearth",
    title: "다섯 (leedaearth)",
    category: "Photography & AD",
    year: "2024–2025",
    description: [
      "Studio Leedaearth의 어시스턴트 디렉터로서, tinder · DASUIT · Vüssen · JaeDal 등 다양한 아티스트·브랜드의 비주얼 프로젝트 제작에 참여했다.",
    ],
    credits: [
      { label: "Client", value: "Studio Leedaearth" },
      { label: "Role", value: "Photography Assistant, AD" },
    ],
    color: "#4a4a4a",
    hero: { kind: "image", src: "/work/leedaearth/main.jpg", width: 1440, height: 1800 },
    images: [
      img("/work/leedaearth/01.jpg", 1600, 1067),
      img("/work/leedaearth/02.jpg", 1280, 1600),
      img("/work/leedaearth/03.jpg", 1600, 1067),
      img("/work/leedaearth/04.jpg", 1600, 1067),
      img("/work/leedaearth/05.jpg", 1600, 1067),
      img("/work/leedaearth/06.jpg", 1280, 1600),
    ],
  },
  {
    slug: "floyd",
    title: "Floyd",
    category: "3D Animation",
    year: "2023",
    description: [
      "뮌헨 캐리어 브랜드 FLOYD의 브랜드 소셜 채널용 3D 애니메이션 2편을 각 4주간 기획·제작했다.",
    ],
    credits: [
      { label: "Client", value: "FLOYD, Munich" },
      { label: "Role", value: "Creator" },
      { label: "Tools", value: "Unreal Engine 5, Blender, Illustrator, Photoshop, Premiere Pro, Substance Painter" },
    ],
    color: "#3d3d3d",
    hero: { kind: "video", src: "/work/floyd/main.mp4" },
    images: [
      img("/work/floyd/01.jpg", 1311, 789),
      img("/work/floyd/02.jpg", 1524, 857),
      img("/work/floyd/03.jpg", 1143, 857),
      img("/work/floyd/04.jpg", 1600, 1131),
    ],
  },
  {
    slug: "updraft",
    title: "Updraft",
    category: "Photography",
    year: "2023–2025",
    description: [
      "패션 브랜드 UPDRAFT의 무드컷 촬영을 기획하고 진행했다.",
    ],
    credits: [
      { label: "Client", value: "UPDRAFT" },
      { label: "Role", value: "Photographer" },
    ],
    color: "#464646",
    hero: { kind: "image", src: "/work/updraft/main.jpg", width: 1428, height: 2000 },
    images: [
      img("/work/updraft/01.jpg", 1600, 1067),
      img("/work/updraft/02.jpg", 1143, 1600),
      img("/work/updraft/03.jpg", 1143, 1600),
      img("/work/updraft/04.jpg", 1143, 1600),
      img("/work/updraft/05.jpg", 1143, 1600),
      img("/work/updraft/06.jpg", 1600, 1067),
      img("/work/updraft/07.jpg", 1143, 1600),
    ],
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
      { label: "Tools", value: "Unreal Engine 5, Blender, Adobe Illustrator, Photoshop, Premiere Pro, Substance Painter" },
    ],
    color: "#404040",
    hero: { kind: "video", src: "/work/from-hell-to-heaven/main.mp4" },
    images: [
      img("/work/from-hell-to-heaven/01.jpg", 567, 708),
      img("/work/from-hell-to-heaven/02.jpg", 828, 1472),
      img("/work/from-hell-to-heaven/03.jpg", 1080, 1350),
      img("/work/from-hell-to-heaven/04.jpg", 1080, 1440),
      img("/work/from-hell-to-heaven/05.jpg", 1080, 1350),
      img("/work/from-hell-to-heaven/06.jpg", 1080, 1350),
      img("/work/from-hell-to-heaven/07.jpg", 1080, 1440),
      img("/work/from-hell-to-heaven/08.jpg", 1600, 1200),
      img("/work/from-hell-to-heaven/09.jpg", 936, 925),
    ],
  },
  {
    slug: "visuals",
    title: "Visuals",
    category: "3D Visual",
    year: "2023",
    description: [
      "3D를 배우기 시작한 첫해에, 개인적으로 좋아하는 브랜드들의 의류들을 모델링 하며 3D 그래픽 디자인 프로세스를 탐구했다.",
    ],
    credits: [{ label: "Role", value: "Personal Works" }],
    color: "#424242",
    hero: { kind: "image", src: "/work/visuals/main.jpg", width: 1440, height: 1440 },
    images: [
      img("/work/visuals/01.jpg", 1033, 1307),
      img("/work/visuals/02.jpg", 1600, 1200),
      img("/work/visuals/03.jpg", 1600, 1200),
      img("/work/visuals/04.jpg", 1500, 1500),
      img("/work/visuals/05.jpg", 1500, 1500),
      img("/work/visuals/06.jpg", 1500, 1500),
      img("/work/visuals/07.jpg", 1500, 1500),
      img("/work/visuals/08.jpg", 1440, 810),
      img("/work/visuals/09.jpg", 665, 1440),
      img("/work/visuals/10.jpg", 1440, 810),
      img("/work/visuals/11.jpg", 1440, 810),
      img("/work/visuals/12.jpg", 1048, 786),
      img("/work/visuals/13.jpg", 1440, 1159),
    ],
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
    color: "#3a3a3a",
    hero: { kind: "video", src: "/work/dolce-gabbana/main.mp4" },
    images: [
      img("/work/dolce-gabbana/01.jpg", 1504, 845),
      img("/work/dolce-gabbana/02.jpg", 1067, 1600),
      img("/work/dolce-gabbana/03.jpg", 1067, 1600),
      img("/work/dolce-gabbana/04.jpg", 1067, 1600),
      img("/work/dolce-gabbana/05.jpg", 1131, 1600),
      img("/work/dolce-gabbana/06.jpg", 1131, 1600),
      img("/work/dolce-gabbana/07.jpg", 1131, 1600),
      img("/work/dolce-gabbana/08.jpg", 1131, 1600),
      img("/work/dolce-gabbana/09.jpg", 1055, 1600),
      img("/work/dolce-gabbana/10.jpg", 1200, 1600),
      img("/work/dolce-gabbana/11.jpg", 1200, 1600),
      img("/work/dolce-gabbana/12.jpg", 1132, 1600),
      img("/work/dolce-gabbana/13.jpg", 720, 1280),
      img("/work/dolce-gabbana/14.jpg", 1200, 1600),
    ],
  },
  {
    slug: "okayama-denim",
    title: "Okayama Denim Contest",
    category: "Fashion Design",
    year: "2021",
    description: [
      "평소 좋아하던 막사발에서 영감을 받아, '막'이라는 미학적 관점으로 옷을 풀어낸 작업이다. '막'이 지닌 태도와 의미를 전하고자 가봉 과정에서 사용한 광목을 그대로 활용하고, 봉제 후 나온 실은 자르지 않은 채 두었으며, 재단하고 남은 원단으로 단추를 제작해 과정 자체의 흔적을 남겼다.",
      "파리에서 열린 오카야마 데님 콘테스트에서 수상했다 (3RD).",
    ],
    credits: [
      { label: "School", value: "ESMOD Seoul" },
      { label: "Role", value: "Fashion Design" },
      { label: "Award", value: "Okayama Denim Contest 3RD" },
    ],
    color: "#3c3c3c",
    hero: { kind: "image", src: "/work/okayama-denim/main.jpg", width: 1414, height: 2000 },
    images: [
      img("/work/okayama-denim/01.jpg", 1600, 779),
      img("/work/okayama-denim/02.jpg", 1200, 1600),
      img("/work/okayama-denim/03.jpg", 1600, 1200),
      img("/work/okayama-denim/04.jpg", 1600, 1200),
      img("/work/okayama-denim/05.jpg", 1600, 1200),
      img("/work/okayama-denim/06.jpg", 889, 626),
      img("/work/okayama-denim/07.jpg", 889, 630),
      img("/work/okayama-denim/08.jpg", 1067, 1600),
      img("/work/okayama-denim/09.jpg", 1067, 1600),
    ],
  },
  {
    slug: "musinsa-scholarship",
    title: "Musinsa Next Fashion Scholarship",
    category: "Fashion Design & Business",
    year: "2022",
    description: [
      "\"NFT 구매자들은 과연 인스타 프로필만을 바꾸기 위해 큰돈을 쓰는 것에 만족할까?\"라는 질문에서 출발해, 웨어러블 회로를 시그니처 디테일로 삼고 한국적 미감을 존중하는 테크웨어 브랜드 사업계획서를 작성·제출했다.",
      "높은 평가를 받아 무신사 패션 장학생으로 선발됐다.",
    ],
    credits: [
      { label: "School", value: "ESMOD Seoul" },
      { label: "Role", value: "Fashion Design" },
      { label: "Award", value: "1st Musinsa Next Fashion Scholarship" },
    ],
    color: "#383838",
    hero: { kind: "image", src: "/work/musinsa-scholarship/main.jpg", width: 1600, height: 1091 },
    images: [
      img("/work/musinsa-scholarship/01.jpg", 828, 1093),
      img("/work/musinsa-scholarship/02.jpg", 828, 861),
      img("/work/musinsa-scholarship/03.jpg", 890, 1334),
      img("/work/musinsa-scholarship/04.jpg", 888, 1334),
      img("/work/musinsa-scholarship/05.jpg", 1440, 961),
      img("/work/musinsa-scholarship/06.jpg", 1140, 394),
      img("/work/musinsa-scholarship/07.jpg", 894, 625),
    ],
  },
  {
    slug: "kolon-recycle",
    title: "Kolon Recycle Project",
    category: "Photography",
    year: "2023",
    description: [],
    credits: [{ label: "Role", value: "Photographer" }],
    color: "#3e3e3e",
    hero: { kind: "image", src: "/work/kolon-recycle/main.jpg", width: 1414, height: 2000 },
    images: [
      img("/work/kolon-recycle/01.jpg", 1600, 1131),
      img("/work/kolon-recycle/02.jpg", 1600, 1067),
      img("/work/kolon-recycle/03.jpg", 1200, 1600),
    ],
  },
];

function endYear(year: string): number {
  const matches = year.match(/\d{4}/g);
  return matches ? Number(matches[matches.length - 1]) : 0;
}

export const projects: Project[] = [...rawProjects].sort(
  (a, b) => endYear(b.year) - endYear(a.year),
);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
