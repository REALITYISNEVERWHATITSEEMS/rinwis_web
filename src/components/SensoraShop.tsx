"use client";

import Image from "next/image";
import Link from "next/link";

const BRAND_PARAGRAPHS = [
  "In a world where perception defines reality, SENSORA stands at the frontier of sensory innovation. We have transformed scent from a fleeting emotion into a precise instrument of power — a data stream, a weapon, a language beyond words.",
  "Founded in the shadow between science and art, SENSORA develops technology that translates human sensations into controllable signals. Every fragrance we create is more than aroma — it is a code, an algorithm of memory, engineered to manipulate emotion and space itself.",
  "We believe that the future of control lies not in vision, nor sound, but in the invisible architecture of scent. Through advanced neural diffusion systems, sensory encryption, and emotional calibration, SENSORA redefines what it means to feel, to remember, and to exist.",
];

const TECH_PARAGRAPHS = [
  "The SENSORA™ SCENT RENDERING SYSTEM is a prototype interface designed to explore how scent can redefine the structure of virtual space.",
  "Developed as part of SENSORA's ongoing research into sensory computation, the system translates olfactory data into spatial parameters, treating fragrance not as a peripheral aesthetic element, but as a primary variable of world generation.",
  "In this demo, the player enters a derelict ruin — a fragmented space of concrete, dust, and static. When the trigger is pulled, the act is not purely ballistic. The gunshot becomes an emitter of scent data — a coded signal containing chemical composition, diffusion rate, and emotional metadata.",
  "Once released, this olfactory signal is processed by the Spatial Synthesis Engine, where it is mapped to environmental properties such as color temperature, volumetric density, and texture noise.",
  "Within seconds, the surrounding geometry collapses and reconstitutes into a new terrain: a red desert rendered through scent.",
  "This transformation does not simulate smell itself. It reconstructs how the human mind translates scent into memory, and memory into space. The desert exists as both data and illusion — a computational hallucination generated from olfactory code.",
  "The Scent Rendering System is built upon three integrated modules:",
];

const TECH_MODULES = [
  {
    title: "Scent Input Protocol",
    body: "Captures external or pre-encoded scent stimuli. Converts molecular signatures into readable numerical data streams using a proprietary sensor matrix.",
  },
  {
    title: "Spatial Synthesis Engine",
    body: "Interprets the scent data as environmental variables, correlating chemical intensity with parameters such as light saturation, dust simulation, and atmospheric depth.",
  },
  {
    title: "Perceptual Feedback Loop",
    body: "A real-time adaptive system that aligns the virtual transformation with human perceptual latency. The environment evolves in sync with the player's cognitive response, closing the gap between physical sense and rendered experience.",
  },
];

const TECH_CLOSING_PARAGRAPHS = [
  "Through this architecture, scent operates not as ornamentation, but as architecture — constructing topographies that are responsive to chemical signals and psychological states.",
  "The demo's purpose is not entertainment, but validation: to demonstrate how fragrance can serve as an interactive protocol, capable of shaping virtual geography through affective computation.",
  "SENSORA™ imagines a future where environments are not built from polygons and shaders, but from atmospheres, moods, and invisible traces.",
  "A future where scent is code. Where memory becomes a rendering parameter. And where perception itself is programmable.",
];

const SHIPPING_INTRO = "본 배송 및 교환/반품 규정은 본 스토어에서 구매하신 상품에 대해 적용됩니다.";

const SHIPPING_ITEMS = [
  "주문하신 제품의 진행 상황은 [MY ACCOUNT > ORDER STATUS]에서 확인하실 수 있습니다.",
  "대금 결제일로부터 3영업일 이내에 출고 진행됩니다.",
  "배송은 지역 택배사 사정 또는 상품의 재고 상황에 따라 약간의 지연이 생길 수 있습니다. 특히, 도서·산간 지역은 배송일이 추가적으로 소요될 수 있습니다.",
  "품절 등의 사유로 발송이 불가능한 경우 개별적으로 연락드립니다.",
  "배송이 시작되면 주문자에게 이메일로 배송 정보를 전송해 드립니다. 운송장 번호는 계정 내 '주문조회'에서도 확인 가능합니다.",
  "배송은 CJ대한통운 배송으로 진행됩니다.",
  "전 제품 무료배송 입니다.",
];

const RETURN_ITEMS = [
  "모든 교환/반품은 구매하신 스토어에서만 가능합니다. 온라인 – 오프라인 스토어 간 교환/반품은 불가합니다.",
  "고객님의 변심으로 인한 교환/반품 요청은 제품 수령일로부터 7일 이내에 고객센터(INFO@SENSORA.COM)로 이메일 접수를 완료하셔야 합니다. 이 경우, 고객님께서 왕복 배송비 6,000을 부담하셔야 합니다.",
  "제품 하자로 인한 교환/반품 요청은 고객센터(INFO@SENSORA.COM)로 제품 이상 증상에 관한 충분한 설명(사진 또는 영상 첨부 포함)을 포함하여 이메일 접수를 완료하셔야 합니다. 이 경우, 고객님께서는 교환/반품에 소요되는 배송비용을 부담하지 않습니다. 이메일 접수가 완료되면, 제품 이상 증상 및 교환/반품 가능 여부 확인 후 제품 회수가 이루어지며, 고객님께서 수령한 구성품 전부(판촉행위로 인한 경품 및 사은품 포함) 입고 후 7일 이내에 검수 확인 및 교환/반품에 필요한 조치가 진행됩니다.",
  "제품의 스프레이 부분은 윤활 처리가 되어 있어 소량의 오일이 남아 있을 수 있고, SENSORA 제품 상단에는 자연스러운 마찰에 따른 자국이 있을 수 있으며, 이는 제조 공정 및 소재 특성에 따른 자연스러운 현상으로, 제품의 하자에 해당하지 않습니다.",
  "다음의 경우는 반품/교환이 불가합니다. 단, 제품 하자의 경우는 제외하며, 아래 각 목에서 제품이란 겉박스, 부속품, 택라벨, 세트상품 구성의 일부 등 고객님께서 수령한 구성품 전부(판촉행위로 인한 경품 및 사은품 포함)를 포함합니다.\n1) 제품을 개봉하거나 개봉 비닐포장(필름지)을 제거한 경우\n2) 제품의 멸실, 훼손 및 오염이 있거나 제품의 가치가 훼손되어 정상 판매가 불가한 경우\n3) 제품을 사용하거나 세탁, 수선한 경우\n4) 시간의 경과에 의하여 재판매가 곤란할 정도로 제품의 가치가 감소한 경우",
  "고객님께서 부재중이거나 수취인 주소 불명으로 인해 반송되어 다시 배송되는 경우 해당 배송비는 이용자가 부담합니다.",
  "사전 접수 없이 일방적으로 보낸 제품 또는 교환/반품 처리가 불가한 경우 착불로 반송 처리됩니다.",
  "위 규정 내 사유 또는 절차 외의 방법으로 반품/교환 진행은 불가합니다.",
  "교환/반품 정책은 변경될 수 있습니다.",
];

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="underline decoration-black/30 underline-offset-4 hover:decoration-black">
      {children}
    </a>
  );
}

export default function SensoraShop() {
  return (
    <div className="min-h-screen scroll-smooth bg-white text-black">
      <nav className="sticky top-0 z-40 flex items-center justify-between border-b border-black/10 bg-white px-5 py-4 text-xs font-medium tracking-wide sm:px-8">
        <Link href="/" className="font-serif text-lg font-bold italic tracking-tight">
          SENSORA
        </Link>
        <div className="hidden gap-8 sm:flex">
          <NavLink href="#brand">SENSORA™</NavLink>
          <NavLink href="#perfume">PERFUME</NavLink>
          <NavLink href="#tech-demo">TECH DEMO</NavLink>
        </div>
        <div className="flex gap-6 text-black/70">
          <span>SIGN IN</span>
          <span>CART[1]</span>
        </div>
      </nav>

      <section id="brand" className="grid grid-cols-1 border-b border-black/10 sm:grid-cols-2">
        <Image
          src="/work/sensora/shop-about.jpg"
          alt="SENSORA"
          width={1208}
          height={1510}
          sizes="(max-width: 640px) 100vw, 50vw"
          className="block h-auto w-full"
          priority
        />
        <div className="flex flex-col justify-center px-6 py-16 sm:px-16">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            SENSORA ™
            <br />
            (PERSONAL WORKS 2025)
          </h2>
          <p className="mt-4 text-sm font-semibold tracking-wide">SCENT IS THE **** OF THE FUTURE</p>
          <div className="mt-8 max-w-md space-y-5 text-sm leading-relaxed text-black/70">
            {BRAND_PARAGRAPHS.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="perfume" className="grid grid-cols-1 border-b border-black/10 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <Image
            src="/work/sensora/shop-bottle.jpg"
            alt="RENDERER & BLOOD_RUINS bottle"
            width={768}
            height={960}
            sizes="(max-width: 640px) 100vw, 50vw"
            className="block h-auto w-full"
          />
          <Image
            src="/work/sensora/shop-gun-loaded.jpg"
            alt="RENDERER & BLOOD_RUINS applicator"
            width={768}
            height={960}
            sizes="(max-width: 640px) 100vw, 50vw"
            className="block h-auto w-full"
          />
          <Image
            src="/work/sensora/shop-gun.jpg"
            alt="RENDERER & BLOOD_RUINS applicator detail"
            width={768}
            height={960}
            sizes="(max-width: 640px) 100vw, 50vw"
            className="block h-auto w-full"
          />
          <Image
            src="/work/sensora/shop-box.jpg"
            alt="RENDERER & BLOOD_RUINS packaging"
            width={768}
            height={960}
            sizes="(max-width: 640px) 100vw, 50vw"
            className="block h-auto w-full"
          />
        </div>

        <div className="self-start px-6 py-16 sm:sticky sm:top-16 sm:px-16">
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
            RENDERER &amp;
            <br />
            BLOOD_RUINS- DESERT 10ML
            <br />
            (PERSONAL WORKS 2025)
          </h1>
          <p className="mt-4 text-lg">₩89,000</p>

          <p className="mt-6 max-w-sm text-sm italic leading-relaxed text-black/70">
            This fragrance captures the moment when the last shot touches the sand — when violence turns into
            beauty, and ruin smells like salvation.
          </p>

          <div className="mt-6 space-y-1 text-sm text-black/70">
            <p>Top Notes: Blood Orange, Pink Pepper, Evening primrose</p>
            <p>Middle Notes: Cinnamon, Leather, Smoky Wood</p>
            <p>Base Notes: Vetiver, Amber, Musk, Patchouli</p>
          </div>

          <button
            type="button"
            disabled
            className="mt-8 w-full max-w-sm cursor-not-allowed bg-black py-4 text-xs font-semibold tracking-widest text-white"
          >
            SOLD OUT
          </button>

          <details className="mt-8 max-w-sm border-t border-black/10 pt-4 text-xs">
            <summary className="cursor-pointer select-none font-semibold tracking-wide">shipping &amp; return</summary>
            <div className="mt-4 space-y-4 text-black/60">
              <div>
                <p className="font-semibold text-black">배송 및 교환/반품 안내</p>
                <p className="mt-2 whitespace-pre-line">{SHIPPING_INTRO}</p>
              </div>
              <div>
                <p className="font-semibold text-black">배송</p>
                <ul className="mt-2 space-y-2">
                  {SHIPPING_ITEMS.map((item, i) => (
                    <li key={i} className="whitespace-pre-line">
                      - {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-black">교환/반품</p>
                <ul className="mt-2 space-y-2">
                  {RETURN_ITEMS.map((item, i) => (
                    <li key={i} className="whitespace-pre-line">
                      - {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </details>
        </div>
      </section>

      <section id="tech-demo" className="grid grid-cols-1 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <Image
            src="/work/sensora/shop-tech-render.jpg"
            alt="SENSORA Scent Rendering System"
            width={1200}
            height={1200}
            sizes="(max-width: 640px) 100vw, 50vw"
            className="block h-auto w-full"
          />
          <video
            src="/work/sensora/shop-tech-demo.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="block h-auto w-full"
          />
        </div>

        <div className="self-start px-6 py-16 sm:sticky sm:top-16 sm:px-16">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            SENSORA ™ SCENT RENDERING SYSTEM
            <br />
            TECH DEMO
            <br />
            (PERSONAL WORKS 2025)
          </h2>

          <div className="mt-8 max-w-md space-y-5 text-sm leading-relaxed text-black/70">
            {TECH_PARAGRAPHS.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <ol className="space-y-4">
              {TECH_MODULES.map((mod, i) => (
                <li key={mod.title}>
                  <p className="font-semibold text-black">
                    {i + 1}. {mod.title}
                  </p>
                  <p className="mt-1">{mod.body}</p>
                </li>
              ))}
            </ol>

            {TECH_CLOSING_PARAGRAPHS.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-10 border-t border-black/10 pt-6 text-xs uppercase tracking-wide text-black/50">
            <p>SENSORA™ Scent Rendering System</p>
            <p>Research Prototype / Experimental Environment Simulation / Personal Works 2025</p>
          </div>
        </div>
      </section>
    </div>
  );
}
