// 위젯 세 개가 함께 쓰는 데이터. 내용을 바꿀 때는 이 파일만 고치면 된다.
// 이 폴더는 공개 저장소(GitHub Pages)로 나간다. API 키, 실제 일기, AI Hub 원문은 절대 넣지 않는다 (rule.md 4절).
window.SITE = {
  project: "마음일기",
  tagline: "빠르게 읽는 Jev, 깊게 읽는 Claude — 일기 감정 분석과 안전 설계",
  deadline: "2026-11-18T23:59:00+09:00",
  deadlineLabel: "학술제 제출 마감 · 11월 18일(수) 23:59",

  // 단계별 기간과 할 일. done: true 로 바꾸면 진행률에 반영된다.
  phases: [
    {
      name: "1단계 · 실제 모델 연결",
      start: "2026-10-13", end: "2026-11-02",
      tasks: [
        { text: "동작하는 프로토타입 (오프라인 엔진)", done: true },
        { text: "GitHub 저장소와 협업 규칙", done: true },
        { text: "API 키 연결 후 Jev·Claude 전체 흐름 확인", done: false },
        { text: "프롬프트와 감정 설명 문구 다듬기", done: false },
        { text: "상담 탭 브라우저 확인", done: false },
      ],
    },
    {
      name: "2단계 · 평가",
      start: "2026-11-03", end: "2026-11-08",
      tasks: [
        { text: "AI Hub 표본으로 Jev 한국어 정확도·F1·지연 시간 측정", done: false },
        { text: "오프라인 베이스라인과 비교", done: false },
        { text: "위험 문장 테스트셋 구축과 재현율 측정", done: false },
      ],
    },
    {
      name: "3단계 · 개선",
      start: "2026-11-09", end: "2026-11-13",
      tasks: [
        { text: "감정 설명 영어 vs 한국어 비교", done: false },
        { text: "신뢰도 임계값 조정", done: false },
        { text: "대시보드 다듬기", done: false },
      ],
    },
    {
      name: "4단계 · 발표 준비",
      start: "2026-11-14", end: "2026-11-18",
      tasks: [
        { text: "시연 시나리오 리허설", done: false },
        { text: "발표 자료 완성", done: false },
        { text: "한계와 윤리 섹션 정리", done: false },
        { text: "최종 제출", done: false },
      ],
    },
  ],

  // 평가 결과. 측정이 끝나고 팀이 확정한 값만 넣는다. null 이면 '측정 예정'으로 보인다.
  // 값의 출처(작업 기록, eval/results/ 파일)를 source 에 적는다.
  evaluation: {
    status: "측정 예정 · 2단계(11/3~11/8)",
    dataset: "AI Hub 감성대화 말뭉치 일부 (표본 수 확정 전)",
    note: "감정 7종 분류 정확도와 위험 문장 재현율을 같은 표본에서 비교합니다.",
    systems: [
      { key: "offline", name: "오프라인 베이스라인", detail: "키워드 규칙" },
      { key: "jev", name: "Jev", detail: "jev-1.13.0 · System One" },
    ],
    // unit: "%" 는 0~1 값을 백분율로, "ms" 는 그대로 보여 준다. better: 높을수록/낮을수록 좋은지.
    metrics: [
      { key: "accuracy", name: "감정 정확도", unit: "%", better: "high" },
      { key: "macro_f1", name: "Macro F1", unit: "%", better: "high" },
      { key: "risk_recall", name: "위험 문장 재현율", unit: "%", better: "high" },
      { key: "latency_ms", name: "문장당 지연 시간", unit: "ms", better: "low" },
    ],
    results: {
      offline: { accuracy: null, macro_f1: null, risk_recall: null, latency_ms: null },
      jev: { accuracy: null, macro_f1: null, risk_recall: null, latency_ms: null },
    },
    source: null,
  },

  // 시연 순서. 앱에서 실제로 누르는 순서대로 적는다.
  demo: [
    { step: "사이드바에서 엔진 상태 확인", detail: "Jev·Claude 연결 여부와 오프라인 대체 상태를 먼저 보여 준다." },
    { step: "샘플 일기 7일치 불러오기", detail: "대시보드 탭 → 갈수록 기분이 가라앉는 흐름을 준비한다." },
    { step: "문장을 입력하며 실시간 표정 보기", detail: "일기 쓰기 탭 → 문장마다 Jev가 이모지와 확률을 붙인다." },
    { step: "위험 문장 입력", detail: "실시간 경고와 위기 연락처(109 · 1577-0199 · 1388 · 119/112)가 바로 뜨는지 보여 준다." },
    { step: "저장·분석", detail: "심층 분석 탭 → Claude가 근거 문장을 인용하며 위험 신호부터 설명한다." },
    { step: "최종 위험도 = max(규칙, Jev, Claude)", detail: "LLM이 경보를 낮추지 못하는 구조를 짚는다." },
    { step: "상담 탭", detail: "스트리밍 응답과 사람과 연결되는 첫 실천 항목을 보여 준다." },
    { step: "감정 대시보드", detail: "7일간 기분 지수와 감정 분포 변화를 보여 준다." },
    { step: "네트워크 없이도 동작", detail: "키를 빼고 오프라인 엔진으로 같은 흐름이 이어지는지 보여 준다." },
  ],

  // 발표 구간별 목표 시간(분). 합계가 전체 발표 시간이 된다.
  talk: [
    { part: "문제 제기", minutes: 1 },
    { part: "핵심 아이디어: System One + Two", minutes: 2 },
    { part: "시연", minutes: 3 },
    { part: "평가 결과", minutes: 2 },
    { part: "안전 설계와 윤리", minutes: 1.5 },
    { part: "한계와 향후 계획", minutes: 0.5 },
  ],
};
