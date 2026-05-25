export type Lang = "ko" | "en" | "zh-TW"

export const LANG_LABELS: Record<Lang, string> = {
  ko: "한국어",
  en: "English",
  "zh-TW": "繁體",
}

export type Translations = typeof ko

const ko = {
  nav: {
    about: "회사소개",
    services: "서비스",
    newsroom: "뉴스룸",
    careers: "채용",
    sub: {
      mission: "비전 & 미션",
      team: "경영진",
      history: "연혁",
    },
    cta: "Google Play",
  },
  hero: {
    badge: "ScamLens AI 한국 우선 출시",
    line1: "다양한 채널로 들어오는 스미싱 위험",
    line2: "SMS는 기본,\n다양한 메신저로 들어오는\n위험까지 모두 알려드려요.",
    desc: "메시지가 들어오는 순간 즉시분석완료,\nAI로 더욱 똑똑해진 위험알림으로 새로운 패턴의 스미싱까지\n위험을 사전에 알려드립니다.",
    features: ["실시간 보호", "다양한 메신저 체크", "AI 상세 위험알림 분석", "URL 심도분석", "다양한 테마 앱 체크 기능"],
    cta1: "Google Play 다운로드",
    cta2: "회사소개",
    free: "지원 메신저: 카카오톡, 라인, 페이스북 메신저, 페이스북 메신저 라이트, 왓츠앱",
  },
  problem: {
    badge: "실제 피해 유형",
    heading: "이런 문자,\n받아보셨나요?",
    desc: "스미싱·피싱 문자는 점점 정교해지고 있습니다. 은행·택배·정부기관을 완벽하게 사칭합니다.",
    messages: [
      { sender: "[국민은행]", text: "고객님 계좌 이상거래 감지. 즉시 본인인증 필요합니다 → bit.ly/kb-verify", label: "피싱" },
      { sender: "CJ대한통운", text: "고객님 택배 주소 불일치로 반송 예정. 확인 클릭 → cutt.ly/delivery99", label: "스미싱" },
      { sender: "건강보험공단", text: "환급금 32,400원 발생. 24시간 내 신청 안 할 시 소멸 → hpn.kr/refund", label: "사기" },
    ],
    blocked: "ScamLens AI가 차단",
  },
  features: {
    badge: "핵심 기능",
    heading: "ScamLens AI가\n다르게 탐지하는 이유",
    items: [
      { icon: "🤖", title: "온디바이스 AI", desc: "인터넷 없이도 실시간 분석. 문자 내용은 내 폰 밖으로 나가지 않습니다." },
      { icon: "🔗", title: "URL 위험도 검사", desc: "단축 URL을 펼쳐 Google Safe Browsing으로 피싱 사이트를 즉시 확인합니다." },
      { icon: "👨‍👩‍👧", title: "가족 보호", desc: "부모님·자녀 폰도 함께 보호. 위험 문자 수신 시 내 폰으로 즉시 알림." },
      { icon: "🌏", title: "3개국 동시 지원", desc: "한국·미국·대만의 스미싱 패턴을 각국 언어로 분석합니다." },
    ],
  },
  howItWorks: {
    badge: "작동 방식",
    heading: "3초 안에\n위험을 판단합니다",
    steps: [
      { n: "1", title: "문자 수신", desc: "SMS, 카카오톡, WhatsApp 등 모든 채널의 메시지를 자동 감지합니다." },
      { n: "2", title: "AI 즉시 분석", desc: "온디바이스 AI가 발신자·URL·문맥을 동시에 분석해 위험도를 산출합니다." },
      { n: "3", title: "즉시 알림", desc: "위험 문자는 즉각 알림. 안전한 문자는 방해 없이 통과합니다." },
    ],
  },
  stats: [
    { v: "99%+", l: "AI 탐지 정확도" },
    { v: "3개국", l: "동시 출시" },
    { v: "24/7", l: "실시간 보호" },
    { v: "무료", l: "기본 탐지 영구 무료" },
  ],
  download: {
    badge: "지금 무료로 시작",
    heading: "내 가족을 지키는\nAI 스팸 방패",
    desc: "기본 탐지는 영구 무료입니다. 지금 바로 설치하세요.",
    storeNote: "Google Play에서 다운로드",
    countries: "한국 · 미국 · 대만 출시",
    free: "기본 탐지 영구 무료",
  },
  // kept for other pages
  services: {
    label: "Our Services",
    heading: "하나씩, 세상을 바꾼다",
    scamlens: { category: "보안", desc: "온디바이스 AI와 글로벌 집단지성으로 스미싱·피싱 문자를 실시간 탐지합니다.", more: "자세히 보기", soon: "출시 예정" },
    newsquiz: { desc: "오늘의 뉴스를 재미있는 퀴즈로 즐기는 엔터테인먼트 앱." },
    projecta: { desc: "온디맨드 카테고리의 새로운 혁신." },
    projectb: { desc: "게임 카테고리의 새로운 도전." },
  },
  mission: {
    label: "Mission",
    heading: "전 세계인의 삶을\n더 안전하고 즐겁게",
    desc: "기술이 복잡할수록 사람이 중심이어야 합니다.",
    values: [
      { icon: "🌍", title: "글로벌 퍼스트", desc: "처음부터 다수 국가를 동시 타깃으로 설계합니다." },
      { icon: "⚡", title: "AI 네이티브", desc: "모든 서비스는 AI를 핵심 인프라로 활용합니다." },
      { icon: "🔒", title: "신뢰가 먼저", desc: "개인정보는 기기에서 처리합니다." },
      { icon: "🎯", title: "실질적 임팩트", desc: "멋진 기술이 아닌 실제 문제를 해결합니다." },
      { icon: "🚀", title: "빠른 실행", desc: "기획부터 출시까지 빠르게 움직입니다." },
      { icon: "🌱", title: "지속 가능한 성장", desc: "각 서비스가 독립적으로 성장합니다." },
    ],
  },
  vision: {
    label: "Vision",
    heading: "AI로 가능한\n세상의 새 기준",
    desc: "최신 AI 기술을 통해 기존에는 불가능했던 서비스들을 현실로 만드는 것.",
    items: [
      { n: "01", t: "보안의 민주화", d: "AI 보안 기술을 누구나 무료로 접근할 수 있게 합니다" },
      { n: "02", t: "카테고리 확장", d: "검증된 AI 파이프라인으로 새로운 카테고리에 진입합니다" },
      { n: "03", t: "글로벌 임팩트", d: "첫 출시부터 3개국, 최종 목표는 전 세계입니다" },
    ],
  },
  team: { label: "Leadership", heading: "각 분야를 이끄는 전문가", viewAll: "팀 전체 보기" },
  cta: {
    label: "지금 시작하세요",
    heading1: "AI가 지키는 더 안전한 세상,",
    heading2: "지금 경험하세요",
    desc: "ScamLens AI로 스미싱·피싱으로부터 내 가족을 지키세요.",
    btn: "Google Play 다운로드",
  },
  visionCards: [
    { sub: "한국·미국·대만 동시 출시", flags: "🇰🇷 🇺🇸 🇹🇼" },
    { sub: "엔터테인먼트 · 출시 예정" },
    { sub: "온디맨드 · 출시 예정" },
    { sub: "게임 · 출시 예정" },
  ],
}

const en: Translations = {
  nav: {
    about: "About",
    services: "Services",
    newsroom: "Newsroom",
    careers: "Careers",
    sub: { mission: "Vision & Mission", team: "Leadership", history: "History" },
    cta: "Google Play",
  },
  hero: {
    badge: "ScamLens AI — Now Live",
    line1: "Smishing threats coming through multiple channels",
    line2: "Now protected beyond messaging apps",
    desc: "Message scanning completed in just 3 seconds,\nsmarter AI-powered risk alerts\nthat help block even future threats before they happen.",
    features: ["Real-time Protection", "Multi-messenger Support", "AI Detailed Risk Analysis", "In-depth URL Analysis", "Multi-category App Check"],
    cta1: "Download on Google Play",
    cta2: "About Us",
    free: "Basic detection free forever",
  },
  problem: {
    badge: "Real Scam Cases",
    heading: "Have You Ever\nReceived This?",
    desc: "Smishing and phishing messages are becoming increasingly sophisticated — perfectly impersonating banks, couriers, and government agencies.",
    messages: [
      { sender: "[Chase Bank]", text: "Unusual activity detected on your account. Immediate verification required → bit.ly/chase-verify", label: "Phishing" },
      { sender: "FedEx", text: "Your package has an address issue and is pending return. Click to confirm → cutt.ly/fedex99", label: "Smishing" },
      { sender: "IRS", text: "You have a $324 tax refund pending. Claim within 24 hours or it expires → irs-refund.co", label: "Scam" },
    ],
    blocked: "Blocked by ScamLens AI",
  },
  features: {
    badge: "Features",
    heading: "Why ScamLens AI\nDetects Differently",
    items: [
      { icon: "🤖", title: "On-Device AI", desc: "Real-time analysis without internet. Your messages never leave your phone." },
      { icon: "🔗", title: "URL Risk Check", desc: "Expands shortened URLs and checks against Google Safe Browsing instantly." },
      { icon: "👨‍👩‍👧", title: "Family Protection", desc: "Protect your parents and children too. Get instant alerts when they receive dangerous messages." },
      { icon: "🌏", title: "3-Country Support", desc: "Analyzes smishing patterns in Korea, US, and Taiwan in each local language." },
    ],
  },
  howItWorks: {
    badge: "How It Works",
    heading: "Danger Detected\nin Under 3 Seconds",
    steps: [
      { n: "1", title: "Message Received", desc: "Automatically monitors SMS, KakaoTalk, WhatsApp, and all major messaging channels." },
      { n: "2", title: "Instant AI Analysis", desc: "On-device AI simultaneously analyzes sender, URL, and context to calculate risk level." },
      { n: "3", title: "Immediate Alert", desc: "Dangerous messages trigger instant alerts. Safe messages pass through without interruption." },
    ],
  },
  stats: [
    { v: "99%+", l: "AI Detection Accuracy" },
    { v: "3", l: "Countries" },
    { v: "24/7", l: "Real-Time Protection" },
    { v: "Free", l: "Basic Forever Free" },
  ],
  download: {
    badge: "Start Free Today",
    heading: "The AI Shield\nProtecting Your Family",
    desc: "Basic detection is free forever. Install now.",
    storeNote: "Download on Google Play",
    countries: "Korea · USA · Taiwan",
    free: "Basic detection free forever",
  },
  services: {
    label: "Our Services",
    heading: "Changing the World, One Service at a Time",
    scamlens: { category: "Security", desc: "Real-time smishing & phishing detection powered by on-device AI.", more: "Learn More", soon: "Coming Soon" },
    newsquiz: { desc: "An entertainment app that turns today's news into fun quizzes." },
    projecta: { desc: "A new innovation in the on-demand category." },
    projectb: { desc: "A bold new challenge in gaming." },
  },
  mission: {
    label: "Mission",
    heading: "Making Everyone's Life\nSafer and More Joyful",
    desc: "The more complex the technology, the more people must be at the center.",
    values: [
      { icon: "🌍", title: "Global First", desc: "Designed from day one to target multiple countries simultaneously." },
      { icon: "⚡", title: "AI Native", desc: "Every service is built with AI as its core infrastructure." },
      { icon: "🔒", title: "Trust First", desc: "Personal data is processed on-device. Privacy by design." },
      { icon: "🎯", title: "Real Impact", desc: "We solve real problems, not just build impressive technology." },
      { icon: "🚀", title: "Fast Execution", desc: "From concept to launch, we move quickly." },
      { icon: "🌱", title: "Sustainable Growth", desc: "Each service grows independently while sharing learnings." },
    ],
  },
  vision: {
    label: "Vision",
    heading: "A New Standard for\nWhat AI Makes Possible",
    desc: "Use the latest AI to make previously impossible services a reality.",
    items: [
      { n: "01", t: "Democratizing Security", d: "Making AI security freely accessible to everyone" },
      { n: "02", t: "Category Expansion", d: "Rapidly entering new categories with a proven AI pipeline" },
      { n: "03", t: "Global Impact", d: "Starting with 3 countries — the ultimate goal is worldwide" },
    ],
  },
  team: { label: "Leadership", heading: "Experts Leading Each Domain", viewAll: "View Full Team" },
  cta: {
    label: "Get Started Today",
    heading1: "A Safer World Protected by AI —",
    heading2: "Experience It Now",
    desc: "Protect your family from smishing and phishing with ScamLens AI.",
    btn: "Download on Google Play",
  },
  visionCards: [
    { sub: "Korea · US · Taiwan — Live", flags: "🇰🇷 🇺🇸 🇹🇼" },
    { sub: "Entertainment · Coming Soon" },
    { sub: "On-Demand · Coming Soon" },
    { sub: "Gaming · Coming Soon" },
  ],
}

const zhTW: Translations = {
  nav: {
    about: "關於我們",
    services: "服務",
    newsroom: "新聞室",
    careers: "招募",
    sub: { mission: "願景 & 使命", team: "領導團隊", history: "歷史沿革" },
    cta: "Google Play",
  },
  hero: {
    badge: "ScamLens AI — 台灣上線",
    line1: "來自各種渠道的簡訊詐騙風險",
    line2: "現在連即時通訊也能一併防護",
    desc: "3 秒內完成訊息檢測，\n透過更智慧的 AI 風險提醒，\n連未來可能發生的風險也提前防範。",
    features: ["即時防護", "多平台通訊支援", "AI 詳細風險分析", "URL 深度分析", "多類別應用程式檢測"],
    cta1: "在 Google Play 下載",
    cta2: "關於我們",
    free: "基本偵測永久免費",
  },
  problem: {
    badge: "真實詐騙案例",
    heading: "您曾收過\n這樣的簡訊嗎？",
    desc: "詐騙簡訊越來越精緻，完美模仿銀行、快遞和政府機構的訊息。",
    messages: [
      { sender: "[台灣銀行]", text: "您的帳戶偵測到異常交易，請立即驗證身份 → bit.ly/twb-verify", label: "網路釣魚" },
      { sender: "黑貓宅急便", text: "您的包裹因地址問題即將退回，請點擊確認 → cutt.ly/delivery99", label: "詐騙簡訊" },
      { sender: "健保署", text: "您有新台幣 960 元退費，請於 24 小時內申請，逾期失效 → nhi-refund.tw", label: "詐騙" },
    ],
    blocked: "ScamLens AI 已攔截",
  },
  features: {
    badge: "核心功能",
    heading: "ScamLens AI\n與眾不同的偵測方式",
    items: [
      { icon: "🤖", title: "裝置端 AI", desc: "無需網路即可即時分析。您的簡訊內容絕不離開您的手機。" },
      { icon: "🔗", title: "URL 風險檢測", desc: "展開短網址並透過 Google 安全瀏覽即時確認釣魚網站。" },
      { icon: "👨‍👩‍👧", title: "家人守護", desc: "同時保護父母和子女。當他們收到危險訊息時，立即通知您的手機。" },
      { icon: "🌏", title: "三國同步支援", desc: "以各國語言分析韓國、美國和台灣的詐騙簡訊模式。" },
    ],
  },
  howItWorks: {
    badge: "運作方式",
    heading: "3 秒內\n判斷危險",
    steps: [
      { n: "1", title: "訊息接收", desc: "自動監控 SMS、LINE、WhatsApp 等所有主要訊息管道。" },
      { n: "2", title: "AI 即時分析", desc: "裝置端 AI 同時分析發件人、URL 和上下文，計算風險等級。" },
      { n: "3", title: "立即通知", desc: "危險訊息立即發出警報。安全訊息不受干擾地通過。" },
    ],
  },
  stats: [
    { v: "99%+", l: "AI 偵測準確率" },
    { v: "3 國", l: "同步上線" },
    { v: "24/7", l: "即時防護" },
    { v: "免費", l: "基本偵測永久免費" },
  ],
  download: {
    badge: "立即免費開始",
    heading: "保護您家人的\nAI 防詐盾",
    desc: "基本偵測永久免費。立即安裝。",
    storeNote: "在 Google Play 下載",
    countries: "韓國 · 美國 · 台灣",
    free: "基本偵測永久免費",
  },
  services: {
    label: "Our Services",
    heading: "一步一步，改變世界",
    scamlens: { category: "資安", desc: "透過裝置端 AI 即時偵測詐騙簡訊與釣魚訊息。", more: "了解更多", soon: "即將推出" },
    newsquiz: { desc: "將今日新聞化為趣味測驗的娛樂應用。" },
    projecta: { desc: "隨選服務類別的全新革新。" },
    projectb: { desc: "遊戲類別的全新挑戰。" },
  },
  mission: {
    label: "使命",
    heading: "讓全球每個人的生活\n更安全、更美好",
    desc: "技術越複雜，越要以人為本。",
    values: [
      { icon: "🌍", title: "全球優先", desc: "從一開始就以多國市場為目標設計。" },
      { icon: "⚡", title: "AI 原生", desc: "所有服務均以 AI 作為核心基礎設施。" },
      { icon: "🔒", title: "信任優先", desc: "個人資料在裝置端處理。隱私設計。" },
      { icon: "🎯", title: "實質影響", desc: "我們解決真實問題，而非僅打造技術。" },
      { icon: "🚀", title: "快速執行", desc: "從概念到上線，我們快速行動。" },
      { icon: "🌱", title: "永續成長", desc: "每項服務獨立成長，同時共享學習成果。" },
    ],
  },
  vision: {
    label: "願景",
    heading: "AI 讓可能的\n世界新標準",
    desc: "運用最新 AI 技術，將以往不可能的服務化為現實。",
    items: [
      { n: "01", t: "資安民主化", d: "讓所有人都能免費使用 AI 資安技術" },
      { n: "02", t: "類別擴展", d: "以驗證的 AI 管線快速進入新類別" },
      { n: "03", t: "全球影響力", d: "從 3 個國家開始，最終目標是觸及全球用戶" },
    ],
  },
  team: { label: "領導團隊", heading: "引領各領域的專家", viewAll: "查看完整團隊" },
  cta: {
    label: "立即開始",
    heading1: "AI 守護的更安全世界，",
    heading2: "立即體驗",
    desc: "使用 ScamLens AI 保護您的家人免受詐騙簡訊攻擊。",
    btn: "在 Google Play 下載",
  },
  visionCards: [
    { sub: "韓國・美國・台灣 同步上線", flags: "🇰🇷 🇺🇸 🇹🇼" },
    { sub: "娛樂 · 即將推出" },
    { sub: "隨選服務 · 即將推出" },
    { sub: "遊戲 · 即將推出" },
  ],
}

export const translations: Record<Lang, Translations> = { ko, en, "zh-TW": zhTW }
