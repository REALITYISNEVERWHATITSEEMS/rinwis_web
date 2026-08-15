"use client";

import Image from "next/image";
import Link from "next/link";

const WORLD_PARAGRAPHS_EN = [
  "The spark for [M] came after I quit my job.",
  "In a 3D program I use every day, a single STATIC MESH in a virtual space kept confronting me — familiar yet resistant.",
  "In the virtual, static things shouldn't have to stay still.",
  "What matters isn't where or what is \"real,\" but refusing to be static. Through the lights of a brand without an original, that is what I want to say.",
  "To every static being, virtual or otherwise — don't fear \"the real\" or \"the right answer.\" Step out of the old binary. Keep moving. Find your reason not to stop.",
  "And if we're lucky, may this originless light become more than light — someone's new hope.",
];

const WORLD_STATEMENT_EN = [
  "M™ is a lighting brand without an original.",
  "All our light begins as a copy and is completed through copying. Reality and the virtual are merely mirrors imitating each other, and within those mirrors, we multiply without end.",
  "The distinction between real and fake is an outdated language. What matters is that we keep copying. In other words — never be static.",
];

const WORLD_PARAGRAPHS_KO = [
  "조명 브랜드 [M] 을 기획하고 제작하게 된 감정의 계기는",
  "필자가 최근 퇴사를 감행한 후 개인작업을 위해 자주 쓰는 3D 프로그램에서 작업공간, (Level)에 놓인 하나의 에셋(Static Mesh)을 마주친 후, 동질감과 반감을 느꼈기 때문.",
  "'가상에서조차 정적인 존재들은 가만히 있어야 하나?'",
  "라는 괘씸한 반감을 원동력 삼아, 무엇이, 어디가 진짜인지가 중요한 것이 아니라 정적이지 않는 것이 제일 중요하다는 것을, 이 근본 없는 브랜드의 조명을 통해 전달하고자 한다.",
  "가상을 포함하여 세상의 모든 정적인 존재들이여, 진짜와 정답의 구별을 두려워하지 말고, 구시대적 이분법에서 벗어나 멈추지 말아야 하는 이유를 찾기를.",
  "그리고 운이 좋다면 이 근본 없는 밝힘이 단순한 빛을 넘어 누군가에게는 새로운 희망이 되기를 소망하며.",
];

const SIMULACRE_PARAGRAPHS = [
  "M ships dark. There is no switch, no dial, no manual override.",
  "It only comes alive through the M™ Simulacre — a virtual race car built in Unreal Engine 5, tethered to the lamp over a live HTTP link.",
  "Throttle becomes brightness. Speed becomes color temperature. Every corner, every straight, every stall is rendered first in light.",
  "The moment the car stops, the lamp goes dark with it. There is no lit state that exists independent of the drive.",
  "This is not a lamp with a game mode built in. It is a light with no existence outside the race.",
  "Reality and its copy were never meant to be separated — only kept moving.",
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
  "고객님의 변심으로 인한 교환/반품 요청은 제품 수령일로부터 7일 이내에 고객센터(INFO@M-SIMULACRE.COM)로 이메일 접수를 완료하셔야 합니다. 이 경우, 고객님께서 왕복 배송비 6,000을 부담하셔야 합니다.",
  "제품 하자로 인한 교환/반품 요청은 고객센터(INFO@M-SIMULACRE.COM)로 제품 이상 증상에 관한 충분한 설명(사진 또는 영상 첨부 포함)을 포함하여 이메일 접수를 완료하셔야 합니다. 이 경우, 고객님께서는 교환/반품에 소요되는 배송비용을 부담하지 않습니다.",
  "제품의 헤드 부분은 정밀 가공 특성상 미세한 표면 자국이 있을 수 있으며, 이는 제조 공정 및 소재 특성에 따른 자연스러운 현상으로, 제품의 하자에 해당하지 않습니다.",
  "다음의 경우는 반품/교환이 불가합니다. 단, 제품 하자의 경우는 제외하며, 아래 각 목에서 제품이란 겉박스, 부속품, 택라벨, 세트상품 구성의 일부 등 고객님께서 수령한 구성품 전부(M™ Simulacre Link System 포함)를 포함합니다.\n1) 제품을 개봉하거나 개봉 비닐포장(필름지)을 제거한 경우\n2) 제품의 멸실, 훼손 및 오염이 있거나 제품의 가치가 훼손되어 정상 판매가 불가한 경우\n3) 제품을 사용하거나 배선을 변경한 경우\n4) 시간의 경과에 의하여 재판매가 곤란할 정도로 제품의 가치가 감소한 경우",
  "고객님께서 부재중이거나 수취인 주소 불명으로 인해 반송되어 다시 배송되는 경우 해당 배송비는 이용자가 부담합니다.",
  "위 규정 내 사유 또는 절차 외의 방법으로 반품/교환 진행은 불가합니다.",
  "교환/반품 정책은 변경될 수 있습니다.",
];

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <line x1="3" y1="7" x2="21" y2="7" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="17" x2="21" y2="17" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M6 8h12l-1 13H7L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

export default function MShop() {
  return (
    <div className="min-h-screen scroll-smooth bg-white text-black">
      <nav className="sticky top-0 z-40 grid grid-cols-3 items-center border-b border-black/10 bg-white px-5 py-4 sm:px-8">
        <div className="flex items-center gap-5 justify-self-start text-black/80">
          <MenuIcon />
          <SearchIcon />
        </div>
        <Link href="/" className="justify-self-center text-lg font-bold tracking-tight">
          M™
        </Link>
        <div className="flex items-center gap-5 justify-self-end text-black/80">
          <PersonIcon />
          <div className="flex items-center gap-1">
            <BagIcon />
            <span className="text-xs">1</span>
          </div>
        </div>
      </nav>

      <video
        src="/work/m-simulacre/main.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="block w-full h-auto border-b border-black/10"
      />

      <section id="lamp" className="grid grid-cols-1 border-b border-black/10 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <Image
            src="/work/m-simulacre/shop-lamp-1.jpg"
            alt="M — Simulacre lamp, angled view"
            width={2220}
            height={2775}
            sizes="(max-width: 640px) 100vw, 50vw"
            className="block h-auto w-full"
            priority
          />
          <Image
            src="/work/m-simulacre/shop-lamp-2.jpg"
            alt="M — Simulacre lamp, side view"
            width={2792}
            height={3490}
            sizes="(max-width: 640px) 100vw, 50vw"
            className="block h-auto w-full"
          />
          <Image
            src="/work/m-simulacre/shop-lamp-3.jpg"
            alt="M — Simulacre lamp, top view"
            width={2400}
            height={3000}
            sizes="(max-width: 640px) 100vw, 50vw"
            className="block h-auto w-full"
          />
          <Image
            src="/work/m-simulacre/shop-card.jpg"
            alt="M — Simulacre packaging"
            width={1616}
            height={2020}
            sizes="(max-width: 640px) 100vw, 50vw"
            className="block h-auto w-full"
          />
          <Image
            src="/work/m-simulacre/shop-disc.jpg"
            alt="M™ Simulacre Link System disc"
            width={1616}
            height={2020}
            sizes="(max-width: 640px) 100vw, 50vw"
            className="block h-auto w-full"
          />
        </div>

        <div className="self-start px-6 py-16 sm:sticky sm:top-16 sm:px-16">
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
            M™ — SIMULACRE TAIL LAMP
            <br />
            Aluminum, Static-Free Edition
            <br />
            (PERSONAL WORKS 2025)
          </h1>
          <p className="mt-4 text-lg">₩1,280,000</p>
          <p className="mt-2 text-xs uppercase tracking-wide text-black/40">Designer: MYEONGWOOKIM, 2025</p>

          <p className="mt-6 max-w-sm text-sm italic leading-relaxed text-black/70">
            A precision-machined aluminum lamp with no switch, no dial, no manual override. It ships dark, and
            stays that way — until it&apos;s linked to the M™ Simulacre Link System and driven into light.
          </p>

          <div className="mt-6 space-y-1 text-sm text-black/70">
            <p>Body: CNC-machined aluminum, powder-coated black</p>
            <p>Base: Brushed stainless steel</p>
            <p>Control: M™ Simulacre Link System (included)</p>
            <p>Power: Wired, activates on ignition — no manual switch</p>
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

      <section id="world" className="grid grid-cols-1 border-b border-black/10 sm:grid-cols-2">
        <Image
          src="/work/m-simulacre/shop-world.jpg"
          alt="M™ — Drive Till Reality"
          width={2953}
          height={3529}
          sizes="(max-width: 640px) 100vw, 50vw"
          className="block h-auto w-full"
        />
        <div className="flex flex-col justify-center px-6 py-16 sm:px-16">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            M ™
            <br />
            (PERSONAL WORKS 2025)
          </h2>
          <p className="mt-4 text-sm font-semibold tracking-wide">DRIVE TILL REALITY</p>

          <div className="mt-8 max-w-md space-y-5 text-sm leading-relaxed text-black/70">
            {WORLD_PARAGRAPHS_EN.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="space-y-3 border-t border-black/10 pt-5 font-medium text-black">
              {WORLD_STATEMENT_EN.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <details className="mt-8 max-w-md border-t border-black/10 pt-4 text-xs">
            <summary className="cursor-pointer select-none font-semibold tracking-wide text-black/60">
              original / ko
            </summary>
            <div className="mt-4 space-y-3 whitespace-pre-line italic text-black/50">
              {WORLD_PARAGRAPHS_KO.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </details>
        </div>
      </section>

      <section id="simulacre" className="grid grid-cols-1 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <Image
            src="/work/m-simulacre/shop-car-1.jpg"
            alt="M™ Simulacre race car"
            width={1760}
            height={2200}
            sizes="(max-width: 640px) 100vw, 50vw"
            className="block h-auto w-full"
          />
          <Image
            src="/work/m-simulacre/shop-car-3.jpg"
            alt="M™ Simulacre race car, side profile"
            width={1760}
            height={2200}
            sizes="(max-width: 640px) 100vw, 50vw"
            className="block h-auto w-full"
          />
          <Image
            src="/work/m-simulacre/shop-tire.jpg"
            alt="M™ Simulacre wheel detail"
            width={1616}
            height={2020}
            sizes="(max-width: 640px) 100vw, 50vw"
            className="block h-auto w-full"
          />
          <video
            src="/work/m-simulacre/shop-sim.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="block h-auto w-full"
          />
        </div>

        <div className="self-start px-6 py-16 sm:sticky sm:top-16 sm:px-16">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            M™ SIMULACRE LINK SYSTEM
            <br />
            (PERSONAL WORKS 2025)
          </h2>

          <div className="mt-8 max-w-md space-y-5 text-sm leading-relaxed text-black/70">
            {SIMULACRE_PARAGRAPHS.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-10 border-t border-black/10 pt-6 text-xs uppercase tracking-wide text-black/50">
            <p>M™ Simulacre Link System</p>
            <p>Automotive Lighting Object / Real-Time Vehicle Simulation / Personal Works 2025</p>
          </div>
        </div>
      </section>
    </div>
  );
}
