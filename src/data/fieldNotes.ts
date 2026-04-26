// src/data/fieldNotes.ts
// All editable copy lives here. Change strings, not components.

export const meta = {
  title: 'Michelangelo OSS Field Notes',
  subtitle:
    "Public-source analysis of Uber's open-source and in-house AI infrastructure strategy.",
  author: 'Jade Melody Walker',
  publishedDate: 'April 2026',
  tags: ['Interview prep', 'AI infrastructure', 'ML platform', 'Open source', 'DevRel / DevEx'],
  disclaimer:
    'Independent field notes based on public engineering materials. Not affiliated with Uber.',
};

export const executiveSummary = [
  'Michelangelo functions as Uber\'s internal AI/ML platform layer — production-tested at scale across classic ML, deep learning, LLMs, and now agents.',
  'Open source accelerates model training, experimentation, and infrastructure development. The platform is built on Ray, Kubernetes, PyTorch, DeepSpeed, Hugging Face, and vLLM.',
  'In-house systems convert open-source components into production-ready platform capability. The strategic value is the conversion, not the components themselves.',
  'The DevRel opportunity is likely about translating this platform story into practitioner trust, adoption, and clear technical education for external ML platform engineers.',
];

export const projects = [
  {
    name: 'Token-estimator',
    role: 'Pre-deployment cost planning',
    summary:
      'CLI that gives ML engineers token count and cost transparency before a single API call ships to production.',
    repo: 'https://github.com/jmelodywalker/Token-estimator',
  },
  {
    name: 'ContextEval',
    role: 'RAG grounding enforcement',
    summary:
      'Returns answers only when information exists in the defined corpus. Closes the hallucination gap in production RAG pipelines.',
    repo: 'https://github.com/jmelodywalker/ContextEval',
  },
  {
    name: 'Trace-bench',
    role: 'Output stability + regression',
    summary:
      'Benchmarks model behavior across versions to surface silent drift and regression in ML serving layers.',
    repo: 'https://github.com/jmelodywalker/Trace-bench',
  },
];

export const objectiveMapping: Array<{
  objective: string;
  function: string;
  ossAngle: string;
  talkingPoint: string;
  confidence: 'Public' | 'Inferred' | 'Needs validation';
}> = [
  {
    objective: 'Leading technology / platform capability',
    function: 'Centralized internal ML platform — training, evaluation, scaling',
    ossAngle: 'Open-source frameworks accelerate frontier-model adoption',
    talkingPoint:
      'Michelangelo strengthens the internal AI/ML layer that lets teams build, deploy, evaluate, and scale faster.',
    confidence: 'Public',
  },
  {
    objective: 'Developer velocity',
    function: 'CLI (mactl), Canvas, notebooks, JobSpec abstraction',
    ossAngle: 'Hugging Face, Ray Train, KubeRay reduce engineering effort',
    talkingPoint:
      'Internal tools wrap proven open-source primitives so teams can prototype and ship without rebuilding orchestration.',
    confidence: 'Public',
  },
  {
    objective: 'Production readiness',
    function: 'Federation across multi-cluster K8s, JobSpec lifecycle',
    ossAngle: 'Kubernetes + Ray + KubeRay as the orchestration backbone',
    talkingPoint:
      'Long-tested cluster management is what lets new OSS components land in production fast.',
    confidence: 'Public',
  },
  {
    objective: 'Cost and throughput optimization',
    function: 'DeepSpeed ZeRO, flash attention, batch tuning, MFU benchmarks',
    ossAngle: 'Industry-standard MFU using OSS optimizers',
    talkingPoint:
      'A 34% GPU memory reduction and 2-3x throughput increase came from disciplined OSS configuration, not custom kernels.',
    confidence: 'Public',
  },
  {
    objective: 'Trust, reliability, evaluation',
    function: 'Offline LLM scorer, vLLM-based batch prediction, throughput benchmarks',
    ossAngle: 'Ray ActorPool + vLLM as the evaluation substrate',
    talkingPoint:
      'Evaluation infrastructure is where practitioner trust is won or lost. This is the layer I work in.',
    confidence: 'Inferred',
  },
  {
    objective: 'Open-source ecosystem credibility',
    function: 'MA OSS public repo, "good first issue" labels, contributor onboarding',
    ossAngle: 'External adoption signals platform durability beyond Uber',
    talkingPoint:
      'The repo is in beta, pre-launch. The DevRel role is to bridge the platform story to external ML platform engineers in real time.',
    confidence: 'Needs validation',
  },
];

export const architectureLayers = [
  {
    title: 'Business use cases',
    items: ['Eats recommendations', 'Search', 'Support chatbots', 'Code development', 'SQL generation'],
  },
  {
    title: 'Model layer',
    items: ['Llama 2 / 3', 'Mixtral', 'Closed-source providers', 'Fine-tuned internal models'],
  },
  {
    title: 'Training stack',
    items: ['PyTorch', 'Ray Train', 'Hugging Face Transformers', 'DeepSpeed', 'NCCL'],
  },
  {
    title: 'Orchestration',
    items: ['Kubernetes', 'Ray', 'KubeRay', 'Federation layer'],
  },
  {
    title: 'Hardware',
    items: ['NVIDIA A100 (on-prem)', 'NVIDIA H100 (Google Cloud)', 'Crane infra stack'],
  },
  {
    title: 'Evaluation / scoring',
    items: ['Offline LLM scorer', 'vLLM', 'Batch prediction', 'MFU benchmarks'],
  },
  {
    title: 'Production decisions',
    items: ['Resource planning', 'Model selection', 'Scalability', 'Cost-performance tradeoffs'],
  },
];

export const ossVsInHouse = {
  oss: [
    'Speed — frontier techniques in days, not quarters',
    'Reusable model ecosystems (Llama, Mixtral, Falcon)',
    'Community-tested frameworks (Ray, DeepSpeed, vLLM)',
    'Lower experimentation friction',
    'Faster access to fine-tuning recipes (PEFT, LoRA, QLoRA)',
  ],
  inHouse: [
    'Production integration at Uber-scale traffic',
    'Multi-cluster federation and resource management',
    'Governance, security, compliance posture',
    'Reliability — 99.99% uptime targets',
    'Domain-specific tuning (Eats menu, search semantics)',
    'Internal business alignment',
  ],
  closer:
    'The strategic value is not open source alone. The value is converting open-source capability into reliable internal platform leverage.',
};

export const publicVsInferred = {
  public: [
    'Uber uses open-source models and frameworks (Llama, Mixtral, Hugging Face, DeepSpeed).',
    'Michelangelo supports internal ML / AI workflows since 2016.',
    'Uber publishes LLM training infrastructure details on the engineering blog.',
    'Uber benchmarks throughput and MFU publicly.',
    'The MA OSS GitHub repository exists in pre-launch beta.',
  ],
  inferred: [
    'MA OSS is part platform adoption, part ecosystem credibility, part developer trust strategy.',
    'DevRel value depends on practitioner adoption and clear technical education, not vendor messaging.',
    'The role likely requires translating platform depth without overstating internal implementation details.',
  ],
  needsValidation: [
    'Exact OSS roadmap and feature priority',
    'Target developer audience definition',
    'Success metrics for the role',
    'Community priorities for the next two quarters',
    'Balance of ML-engineering vs. DevRel work',
  ],
};

export const issueWalkthrough = {
  number: '1075',
  title: 'Support trigger batch rerun and auto flip due to pipeline revision',
  labels: ['good first issue', 'missing-feature'],
  repo: 'https://github.com/michelangelo-ai/michelangelo',
  issueUrl: 'https://github.com/michelangelo-ai/michelangelo/issues/1075',
  docs: 'https://michelangelo-ai.github.io/michelangelo/',
  problem:
    'Trigger runs with failed pipeline runs require manual re-triggering one by one. Triggers also pin to a specific pipeline revision — when a new revision registers, the trigger does not auto-flip. The auto_flip field is already in the YAML schema and protobuf spec. The runtime logic is missing.',
  translation:
    'Anyone who has run mainframe batches knows this shape. A JCL step fails, ops gets the call, the step is skipped so the rest of the batch keeps moving, the failure gets inspected the next morning — usually a vendor file that did not arrive on time. Auto-flip is the same instinct: when a new version registers upstream, the system picks it up without a human recreating the trigger. Different vocabulary, same problem.',
  contributorPath: [
    'Read the issue body — solution shape is already scoped into two parts.',
    'Comment on the issue to scope the work and ask whether to ship batch rerun and auto-flip as one PR or two.',
    'Fork the repo, branch, and locate the trigger runtime in the codebase.',
    'Activate the dormant auto_flip runtime logic; add the batch rerun CLI surface (ma trigger_run rerun).',
    'Write tests, open a PR linking back to #1075 with "Closes #1075".',
    'Iterate on maintainer review. Merge ships in the next release.',
  ],
  cta: 'If you take this issue on, tag me. I want to see this PR closed.',
};

export const talkingPoints = {
  say: [
    "I understand Michelangelo as platform infrastructure for training, evaluating, and scaling AI systems.",
    "My strength is translating complex platform systems into practitioner trust and usable technical content.",
    "I can connect open-source infrastructure to business value, developer adoption, and production readiness.",
    "I would validate the target audience and success metrics before shaping the content strategy.",
    "I think about measurement for a living — Token-estimator, ContextEval, Trace-bench are the proof.",
  ],
  avoid: [
    "I am a hands-on ML training engineer.",
    "Michelangelo OSS is definitely being launched for X reason.",
    "Open source is the goal by itself.",
    "I know Uber's internal roadmap.",
  ],
};

export const questionsToAsk = [
  'Who is the primary developer audience for Michelangelo OSS — solo practitioners, ML platform engineers at scaleups, or enterprise platform teams?',
  'What does success look like for this role in the first 90 days?',
  'Is the priority community growth, technical education, adoption, documentation, demos, or ecosystem credibility?',
  'How much of the role is hands-on ML engineering versus developer communication?',
  'Which parts of the platform story are ready to be externalized today, and which are still internal-only?',
  'What open-source communities or adjacent projects matter most to the team — Ray, Kubeflow, MLflow, vLLM?',
];

export const reusableAngles = [
  {
    format: 'LinkedIn post',
    title: 'Open source is not the whole strategy. Production integration is.',
  },
  {
    format: 'Short video',
    title: 'What Michelangelo teaches about enterprise AI infrastructure.',
  },
  {
    format: 'Technical explainer',
    title: 'Ray + Kubernetes as the orchestration layer for LLM training.',
  },
  {
    format: 'Portfolio artifact',
    title: 'Public-source field notes on AI platform strategy.',
  },
  {
    format: 'Interview prep',
    title: 'How I map corporate objectives to platform infrastructure.',
  },
];

export const sourceArticle = {
  title: 'Open Source and In-House: How Uber Optimizes LLM Training',
  authors: 'Bo Ling, Jiapei Huang, Baojun Liu, Chongxiao Cao, Anant Vyas, Peng Zhang',
  publication: 'Uber Engineering Blog',
  date: 'April 14, 2026',
  url: 'https://www.uber.com/blog/from-predictive-to-generative-ai/',
  relevantPoints: [
    'Llama 3 450B is on the near-term roadmap for fine-tuning support.',
    'Throughput optimization through DeepSpeed ZeRO-stage-3 CPU offload yielded 34% GPU memory reduction.',
    'Flash attention saves 50% GPU memory at the same batch size.',
    'mactl is the named CLI tool, and Canvas + Notebooks complete the developer entry surface.',
    'Comet is the experiment tracking server. TerraBlob is the blob storage layer. HDFS is data ingest.',
    'The conclusion explicitly states open source as ecosystem strategy: "Embracing open source is the key to catching up with generative AI trends."',
  ],
};

export const hashtags = [
  '#MLOps',
  '#DeveloperRelations',
  '#OpenSource',
  '#Michelangelo',
  '#UberEngineering',
];
