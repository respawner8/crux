import type { User, Meeting } from "./types";

export const users: User[] = [
  { id: "u1", name: "Priya Raman",  initials: "PR", color: "#8b5cf6" },
  { id: "u2", name: "Marc Hansen",  initials: "MH", color: "#f59e0b" },
  { id: "u3", name: "Ana Ferreira", initials: "AF", color: "#06b6d4" },
  { id: "u4", name: "Daniel Cho",   initials: "DC", color: "#10b981" },
  { id: "u5", name: "Sofia Reyes",  initials: "SR", color: "#f43f5e" },
];

const [priya, marc, ana, daniel, sofia] = users;

const today     = new Date();
const iso = (d: Date) => d.toISOString();
const hoursAgo  = (h: number) => iso(new Date(today.getTime() - h * 3_600_000));
const daysAgo   = (d: number) => iso(new Date(today.getTime() - d * 86_400_000));

export const meetings: Meeting[] = [
  {
    id: "m1",
    title: "Q2 Roadmap Review",
    date: hoursAgo(2),
    durationMinutes: 32,
    participants: [priya, marc, ana, daniel, sofia],
    summary:
      "The team aligned on three Q2 priorities: payments v2, AI copilot launch, and onboarding overhaul. Engineering capacity was flagged as tight; the group agreed to move the launch target from April 30 to May 15.",
    keyPoints: [
      "Three priorities locked in: payments v2, AI copilot launch, onboarding overhaul.",
      "Engineering capacity is the bottleneck — Marc to run a capacity review.",
      "Launch date moved to May 15 to reduce risk.",
    ],
    actionItems: [
      { id: "a1", text: "Finalize payments v2 spec",   owner: priya,  dueDate: "Fri", done: false },
      { id: "a2", text: "Run eng capacity review",     owner: marc,   dueDate: "Mon", done: false },
      { id: "a3", text: "Draft onboarding flows",      owner: ana,    dueDate: "Wed", done: false },
      { id: "a4", text: "Update roadmap doc",          owner: priya,                   done: true  },
    ],
    transcript: [
      { timestamp: "00:00", speaker: priya,  text: "Let's start with the payments piece. Where are we?" },
      { timestamp: "00:14", speaker: marc,   text: "We're two sprints behind. Eng is split between migration and the new flows." },
      { timestamp: "00:41", speaker: ana,    text: "Do we want to push the launch out, then?" },
      { timestamp: "01:03", speaker: priya,  text: "I think we have to. Let's target May 15." },
      { timestamp: "01:22", speaker: daniel, text: "Agreed. I'll make sure design isn't on the critical path." },
      { timestamp: "01:58", speaker: sofia,  text: "What do we tell exec team?" },
      { timestamp: "02:30", speaker: priya,  text: "I'll draft the note. Capacity is the real story." },
    ],
  },
  {
    id: "m2",
    title: "Acme Co. Discovery Call",
    date: daysAgo(1),
    durationMinutes: 45,
    participants: [priya, sofia],
    summary:
      "Strong interest from Acme's VP of Operations. Pain points centered on onboarding time (avg 3 weeks per new hire) and fragmented docs. Budget confirmed at $40K. Next step: demo for their CTO next Tuesday.",
    keyPoints: [
      "Primary pain: 3-week onboarding time for new hires.",
      "Budget confirmed: $40K.",
      "CTO demo scheduled for Tuesday.",
    ],
    actionItems: [
      { id: "a5", text: "Send demo calendar invite to Acme CTO", owner: sofia, dueDate: "Today", done: false },
      { id: "a6", text: "Prepare onboarding-focused demo script", owner: priya, dueDate: "Mon",  done: false },
    ],
    transcript: [
      { timestamp: "00:00", speaker: sofia, text: "Thanks for making time. Where's onboarding breaking down for you today?" },
      { timestamp: "00:22", speaker: priya, text: "We budgeted around $40K for this — does that fit your pricing?" },
      { timestamp: "00:51", speaker: sofia, text: "Yes, that lines up with our Team tier. Let me walk you through it." },
    ],
  },
  {
    id: "m3",
    title: "Design Crit — Payments v2",
    date: daysAgo(2),
    durationMinutes: 28,
    participants: [daniel, ana, priya],
    summary:
      "Walked through the new checkout flow. Three revisions agreed: clearer error states on card decline, inline validation on expiry, and a condensed mobile summary. Second crit scheduled for Thursday.",
    keyPoints: [
      "Error states on card decline need clearer messaging.",
      "Inline validation needed for the expiry field.",
      "Mobile summary should condense to two lines.",
    ],
    actionItems: [
      { id: "a7", text: "Redo card-decline error screen", owner: daniel, dueDate: "Thu", done: false },
      { id: "a8", text: "Add inline expiry validation",   owner: ana,    dueDate: "Wed", done: false },
    ],
    transcript: [
      { timestamp: "00:00", speaker: daniel, text: "I'll walk through the revised flow." },
      { timestamp: "01:12", speaker: priya,  text: "The decline state is still pretty generic — can we be specific?" },
    ],
  },
  {
    id: "m4",
    title: "1:1 with Priya",
    date: daysAgo(3),
    durationMinutes: 30,
    participants: [priya, marc],
    summary:
      "Career development check-in. Priya wants stretch work on platform architecture in Q3. Agreed she'll lead the data model refactor next quarter. Feedback on delegation — going well.",
    keyPoints: [
      "Q3 stretch goal: lead data-model refactor.",
      "Delegation is improving — keep it up.",
    ],
    actionItems: [
      { id: "a9", text: "Draft Q3 goals doc", owner: priya, dueDate: "Mon", done: false },
    ],
    transcript: [
      { timestamp: "00:00", speaker: marc,  text: "What's feeling most energizing right now?" },
      { timestamp: "00:30", speaker: priya, text: "Honestly, the architecture work. I'd like more of that." },
    ],
  },
  {
    id: "m5",
    title: "Weekly Growth Sync",
    date: daysAgo(4),
    durationMinutes: 22,
    participants: [sofia, ana, daniel],
    summary:
      "Signup conversion up 12% week-over-week after the new hero copy. Churn flat. Plan: run a pricing-page A/B in the next two weeks.",
    keyPoints: [
      "Signup conversion +12% after hero-copy change.",
      "Churn flat at 3.2%.",
      "Pricing A/B test in 2 weeks.",
    ],
    actionItems: [
      { id: "a10", text: "Write pricing A/B brief", owner: sofia, dueDate: "Fri", done: false },
    ],
    transcript: [
      { timestamp: "00:00", speaker: sofia, text: "Conversion is up 12% — the new hero is working." },
    ],
  },
  {
    id: "m6",
    title: "Engineering All-Hands",
    date: daysAgo(5),
    durationMinutes: 55,
    participants: [marc, ana, daniel, priya],
    summary:
      "Quarterly engineering all-hands. Highlights: incident post-mortem takeaways, hiring plan update, and intro of the new observability tooling rolling out next month.",
    keyPoints: [
      "Three incident takeaways adopted as team policy.",
      "Two open roles — backend and SRE.",
      "Observability rollout begins May 1.",
    ],
    actionItems: [
      { id: "a11", text: "Post hiring roles to careers page", owner: marc, dueDate: "Mon", done: false },
    ],
    transcript: [
      { timestamp: "00:00", speaker: marc, text: "Welcome, everyone. Big quarter ahead." },
    ],
  },
  {
    id: "m7",
    title: "Customer Interview — Lumen Labs",
    date: daysAgo(6),
    durationMinutes: 40,
    participants: [sofia, priya],
    summary:
      "Lumen Labs loves the product but struggles with multi-workspace switching. They'd pay more for proper workspace isolation. Enterprise interest confirmed.",
    keyPoints: [
      "Workspace isolation is a paid feature request.",
      "Enterprise interest — budget > $100K.",
    ],
    actionItems: [
      { id: "a12", text: "Scope workspace-isolation epic", owner: priya, dueDate: "Next week", done: false },
    ],
    transcript: [
      { timestamp: "00:00", speaker: sofia, text: "Walk us through how your team uses Crux today." },
    ],
  },
  {
    id: "m8",
    title: "Marketing Planning — May",
    date: daysAgo(7),
    durationMinutes: 35,
    participants: [sofia, daniel],
    summary:
      "May plan locked: one case study, one webinar, two product-led pieces. Webinar topic: 'Running async meetings with AI.'",
    keyPoints: [
      "Webinar: 'Running async meetings with AI.'",
      "Case study: Lumen Labs.",
      "Two product-led blog pieces.",
    ],
    actionItems: [
      { id: "a13", text: "Book webinar speaker", owner: sofia, dueDate: "Fri", done: false },
    ],
    transcript: [
      { timestamp: "00:00", speaker: sofia, text: "Let's lock May." },
    ],
  },
];

export const meetingById = (id: string) => meetings.find(m => m.id === id);
