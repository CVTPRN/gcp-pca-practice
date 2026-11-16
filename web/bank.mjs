// Original practice scenarios aligned to the current Professional Cloud Architect standard guide.
// Public practice material informs the expanded scenarios; it is never copied verbatim.
import {BASE_ROWS} from './base-questions.mjs';
import {ADVANCED_ROWS} from './advanced-questions.mjs';
export const GUIDE = 'https://services.google.com/fh/files/misc/professional_cloud_architect_exam_guide_english.pdf';
export const CERT = 'https://cloud.google.com/learn/certification/cloud-architect';
export const TOPICS = [
  {id:'design',name:'Design and planning',weight:'~25%',icon:'◈',description:'Requirements, tradeoffs, service selection, availability, and migration.'},
  {id:'infrastructure',name:'Infrastructure and networking',weight:'~17.5%',icon:'⌘',description:'VPC, hybrid connectivity, storage, compute, and AI platforms.'},
  {id:'security',name:'Security and compliance',weight:'~17.5%',icon:'◇',description:'IAM, key management, perimeters, auditing, and data residency.'},
  {id:'process',name:'Technical and business processes',weight:'~15%',icon:'▦',description:'Cost, change management, disaster recovery, and business decisions.'},
  {id:'implementation',name:'Managing implementation',weight:'~12.5%',icon:'↗',description:'CI/CD, Terraform, APIs, and migration tooling.'},
  {id:'operations',name:'Operations excellence',weight:'~12.5%',icon:'◎',description:'Observability, SLOs, incidents, and reliability.'}
];
const D='https://docs.cloud.google.com/';
const SOURCES={
  sql:D+'sql/docs/mysql/high-availability',spanner:D+'spanner/docs/overview',bigquery:D+'bigquery/docs/introduction',
  run:D+'run/docs/overview/what-is-cloud-run',gke:D+'kubernetes-engine/docs/concepts/kubernetes-engine-overview',
  storage:D+'storage/docs/storage-classes',locations:D+'storage/docs/locations',firestore:D+'firestore/native/docs/overview',
  pubsub:D+'pubsub/docs/overview',dataflow:D+'dataflow/docs/overview',mig:D+'compute/docs/instance-groups',
  balancer:D+'load-balancing/docs/load-balancing-overview',vpc:D+'vpc/docs/vpc',shared:D+'vpc/docs/shared-vpc',
  psc:D+'vpc/docs/private-service-connect',psa:D+'vpc/docs/private-services-access',
  pga:D+'vpc/docs/private-google-access',nat:D+'nat/docs/overview',vpn:D+'network-connectivity/docs/vpn/concepts/overview',
  interconnect:D+'network-connectivity/docs/interconnect/concepts/overview',dns:D+'dns/docs/overview',
  iam:D+'iam/docs/overview',hierarchy:D+'resource-manager/docs/cloud-platform-resource-hierarchy',
  wif:D+'iam/docs/workload-identity-federation',iap:D+'iap/docs/concepts-overview',vpcsc:D+'vpc-service-controls/docs/overview',
  kms:D+'kms/docs/key-management-service',secret:D+'secret-manager/docs/overview',orgpolicy:D+'resource-manager/docs/organization-policy/overview',
  audit:D+'logging/docs/audit',scc:D+'security-command-center/docs/concepts-event-threat-detection-overview',
  finops:D+'billing/docs/how-to/budgets',billing:D+'billing/docs/how-to/export-data-bigquery',
  commitments:D+'compute/docs/instances/committed-use-discounts-overview',spot:D+'compute/docs/instances/spot',
  dr:D+'architecture/disaster-recovery',framework:D+'architecture/framework',migration:D+'migration-center/docs/migration-center-overview',
  build:D+'build/docs/overview',deploy:D+'deploy/docs/overview',artifact:D+'artifact-registry/docs/overview',
  terraform:D+'docs/terraform/get-started-with-terraform',apigee:D+'apigee/docs/api-platform/get-started/what-apigee',
  monitoring:D+'monitoring/docs/monitoring-overview',logging:D+'logging/docs/overview',trace:D+'trace/docs/overview',
  slos:D+'stackdriver/docs/solutions/slo-monitoring',errors:D+'monitoring/alerts',
  vertex:D+'vertex-ai/docs/start/introduction-unified-platform',model:D+'gemini-enterprise-agent-platform/models/model-garden/explore-models',
  dataplex:D+'dataplex/docs/introduction',backup:D+'sql/docs/mysql/backup-recovery/backups',
  database:D+'database-migration/docs/overview',transfer:D+'storage-transfer/docs/overview',
  cloudarmor:D+'armor/docs/cloud-armor-overview',scheduler:D+'scheduler/docs/overview',
  functions:D+'functions/docs/concepts/overview',tasks:D+'tasks/docs/overview',
  peering:D+'vpc/docs/vpc-peering',reliability:D+'architecture/framework/reliability',
  modelarmor:D+'model-armor/overview',
  appliance:D+'transfer-appliance/docs/4.0/overview',filestore:D+'filestore/docs/overview',bigtable:D+'bigtable/docs/overview',
  autoclass:D+'storage/docs/autoclass',interconnectbest:D+'network-connectivity/docs/interconnect/concepts/best-practices',
  migmetrics:D+'compute/docs/autoscaler/scaling-cloud-monitoring-metrics',
  gkerequests:D+'kubernetes-engine/docs/how-to/vertical-pod-autoscaling',
  kmsrotation:D+'kms/docs/key-rotation',binauth:D+'binary-authorization/docs/overview',
  sdp:D+'sensitive-data-protection/docs/sensitive-data-protection-overview',sqldr:D+'sql/docs/mysql/intro-to-cloud-sql-disaster-recovery',
  runtraffic:D+'run/docs/rollouts-rollbacks-traffic-migration',sloburn:D+'stackdriver/docs/solutions/slo-monitoring/alerting-on-budget-burn-rate'
};

// [topic, question, options, correct option indices, explanation, documentation key, case-study flag]
const rows = [...BASE_ROWS, ...ADVANCED_ROWS];
export const QUESTIONS = rows.map((r,i)=>{
  const offset=(i*7+1)%4;
  return {id:`PCA-${String(i+1).padStart(3,'0')}`,topic:r[0],prompt:r[1],
    options:r[2].map((_,j)=>r[2][(j-offset+4)%4]),
    answer:r[3].map(j=>(j+offset)%4).sort((a,b)=>a-b),
    explanation:r[4],source:SOURCES[r[5]],caseStudy:!!r[6],research:r[7]||null};
});
export const REFERENCE = [
 {title:'Architecture fundamentals',items:[['PCA','Professional Cloud Architect'],['GCP','Google Cloud Platform'],['VPC','Virtual Private Cloud'],['IAM','Identity and Access Management'],['HA','High Availability'],['DR','Disaster Recovery'],['RTO','Recovery Time Objective'],['RPO','Recovery Point Objective'],['SLI','Service Level Indicator'],['SLO','Service Level Objective'],['SLA','Service Level Agreement'],['KPI','Key Performance Indicator'],['ROI','Return on Investment'],['IaC','Infrastructure as Code'],['CI/CD','Continuous Integration / Continuous Delivery'],['CAPEX','Capital Expenditure'],['OPEX','Operational Expenditure']],source:GUIDE},
 {title:'Networking',items:[['PSC','Private Service Connect'],['PSA','Private Services Access'],['PGA','Private Google Access'],['NAT','Network Address Translation'],['VPN','Virtual Private Network'],['BGP','Border Gateway Protocol'],['DNS','Domain Name System'],['CIDR','Classless Inter-Domain Routing'],['TCP','Transmission Control Protocol'],['UDP','User Datagram Protocol'],['HTTP','Hypertext Transfer Protocol'],['HTTPS','Hypertext Transfer Protocol Secure'],['TLS','Transport Layer Security'],['IP','Internet Protocol'],['LB','Load Balancer'],['CDN','Content Delivery Network'],['IAP','Identity-Aware Proxy']],source:SOURCES.psc},
 {title:'Compute, data, and AI',items:[['GKE','Google Kubernetes Engine'],['GCE','Google Compute Engine'],['MIG','Managed Instance Group'],['VM','Virtual Machine'],['CPU','Central Processing Unit'],['GPU','Graphics Processing Unit'],['TPU','Tensor Processing Unit'],['SQL','Structured Query Language'],['ML','Machine Learning'],['LLM','Large Language Model'],['API','Application Programming Interface'],['SDK','Software Development Kit'],['ETL','Extract, Transform, Load'],['ELT','Extract, Load, Transform'],['OLTP','Online Transaction Processing'],['OLAP','Online Analytical Processing']],source:GUIDE},
 {title:'Security and operations',items:[['KMS','Key Management Service'],['CMEK','Customer-Managed Encryption Key'],['CSEK','Customer-Supplied Encryption Key'],['WIF','Workload Identity Federation'],['VPC SC','VPC Service Controls'],['PII','Personally Identifiable Information'],['DLP','Data Loss Prevention'],['SOC','System and Organization Controls'],['SDLC','Software Development Life Cycle'],['SRE','Site Reliability Engineering'],['SCC','Security Command Center']],source:GUIDE}
];
export const FACTS = [
 {label:'Standard PCA exam',value:'2 hours · 50–60 questions',note:'Multiple choice and multiple select',source:CERT},
 {label:'Case studies on the standard exam',value:'2 cases · 20–30%',note:'Share of questions, not a scoring weight',source:CERT},
 {label:'Certification validity',value:'2 years',note:'After passing the standard exam',source:CERT},
 {label:'Design and planning',value:'~25%',note:'Exam domain weight',source:GUIDE},
 {label:'Infrastructure provisioning',value:'~17.5%',note:'Exam domain weight',source:GUIDE},
 {label:'Security and compliance',value:'~17.5%',note:'Exam domain weight',source:GUIDE},
 {label:'Technical and business processes',value:'~15%',note:'Exam domain weight',source:GUIDE},
 {label:'Managing implementation',value:'~12.5%',note:'Exam domain weight',source:GUIDE},
 {label:'Operations excellence',value:'~12.5%',note:'Exam domain weight',source:GUIDE},
 {label:'Cloud Storage Nearline minimum',value:'30 days',note:'Early deletion charges may apply',source:SOURCES.storage},
 {label:'Cloud Storage Coldline minimum',value:'90 days',note:'Early deletion charges may apply',source:SOURCES.storage},
 {label:'Cloud Storage Archive minimum',value:'365 days',note:'Early deletion charges may apply',source:SOURCES.storage}
];
