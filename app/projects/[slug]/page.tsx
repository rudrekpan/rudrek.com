import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProjectPageContent } from './ProjectPageContent'

const projects: Record<string, {
  title: string
  description: string
  longDescription: string
  tags: string[]
  status: 'ongoing' | 'completed' | 'archived'
  github?: string
  demo?: string
  features: string[]
  challenges: string[]
}> = {
  'sales-transformation-rtm': {
    title: 'Sales Transformation & RTM Redesign',
    description: 'Comprehensive Route-to-Market overhaul for a leading cement major.',
    longDescription: `This engagement involved architecting a comprehensive RTM overhaul for a leading cement manufacturer facing 4 consecutive quarters of de-growth and high salesforce attrition in a hyper-competitive, regulated landscape.

The strategy focused on three core pillars: Market Reach, Counter Share, and Salesforce Efficacy. We deployed data-driven demand generation initiatives and revamped service levels for dealer networks across multiple states.

The transformation required restructuring incentive and performance management frameworks to stabilize the sales organization while simultaneously driving growth. This involved close collaboration with C-suite leadership and field teams to ensure alignment and execution.`,
    tags: ['RTM Strategy', 'Sales Transformation', 'Demand Generation', 'Cement Industry', 'Incentive Design'],
    status: 'completed',
    features: [
      'Comprehensive market reach analysis and optimization',
      'Counter share improvement strategy for dealer networks',
      'Salesforce efficacy metrics and performance tracking',
      'Data-driven demand generation initiatives',
      'Restructured incentive and performance management frameworks',
      'Service level revamp for dealer networks',
    ],
    challenges: [
      'Reversing 12-month decline in a hyper-competitive market',
      'Stabilizing sales organization with high attrition rates',
      'Aligning field teams with new performance frameworks',
    ],
  },
  'corporate-growth-strategy': {
    title: '5-Year Corporate Growth Strategy',
    description: 'Strategic roadmap to scale a $250M conglomerate 5x to $1.2B by FY29.',
    longDescription: `This engagement involved developing a comprehensive 5-year growth strategy for a highly diversified $250M (INR 2k Cr) multinational industrial conglomerate with 14 business units.

The strategic approach involved creating a prioritization framework using SOM (Serviceable Obtainable Market) analysis to identify the 5 core "Bet" BUs that would drive the majority of growth. For each priority BU, we designed detailed customer acquisition strategies, M&A roadmaps, and financial plans.

The final deliverable was a Board-approved roadmap projecting growth to $1.2B (INR 10k Cr) in revenue with an increase to 10% PBT by FY29. We are currently leading the implementation phase for the focus BUs.`,
    tags: ['Corporate Strategy', 'M&A', 'Growth Planning', 'Board Advisory', 'SOM Analysis'],
    status: 'ongoing',
    features: [
      'Strategic prioritization framework (SOM analysis)',
      'Identification of 5 core "Bet" business units',
      'BU-level customer acquisition strategies',
      'M&A target identification and roadmap',
      'Financial planning and projections to FY29',
      'Board presentation and approval process',
    ],
    challenges: [
      'Managing complexity across 14 diverse business units',
      'Balancing short-term performance with long-term bets',
      'Aligning diverse stakeholders on strategic priorities',
    ],
  },
  'service-transformation-automotive': {
    title: 'Service Transformation & After-Sales Analytics',
    description: '85% reduction in service TAT for a 2-Wheeler Automotive OEM.',
    longDescription: `This engagement addressed a critical service crisis at a 2-Wheeler Automotive OEM where service Turn-Around Time (TAT) had ballooned to 45 days with 5,000+ pending vehicles, causing massive brand erosion.

We led a 3-month "war-room" transformation initiative to completely overhaul service operations. The approach combined Python-based analytics for issue prioritization with optimization of the spare parts distribution network to eliminate bottlenecks.

The team developed custom SARIMA/VARMAX forecasting models for 1,000+ automotive SKUs, achieving 8% accuracy uplift in SKU-level forecasting. This enabled better inventory planning and reduced stockouts across the spare parts network.`,
    tags: ['Service Operations', 'Python Analytics', 'Spare Parts', 'Automotive', 'SARIMA', 'Forecasting'],
    status: 'completed',
    features: [
      'War-room transformation approach over 3 months',
      'Python-based analytics for issue prioritization',
      'Spare parts distribution network optimization',
      'SARIMA/VARMAX forecasting for 1,000+ SKUs',
      '8% accuracy uplift in SKU-level forecasting',
      'Inventory planning and stockout reduction',
    ],
    challenges: [
      'Addressing 5,000+ vehicle backlog causing brand erosion',
      'Compressing 45-day TAT to acceptable levels',
      'Optimizing complex spare parts distribution network',
    ],
  },
  'supply-chain-network-design': {
    title: 'Supply Chain & Network Optimization',
    description: '14-year capacity expansion plan leveraging Blue Yonder optimization.',
    longDescription: `This engagement involved designing a comprehensive 14-year capacity expansion plan (7M tons) for a building materials client to capture shifting market catchment areas.

We leveraged the Blue Yonder SCS Optimizer to model demand versus raw material supply scenarios for clinker and grinding operations. The analysis considered long-term logistics costs, power costs, and regulatory tax stability across potential plant locations.

The final deliverable was a phased execution plan for 2 clinker plants and 5 grinding units, optimizing the client's capital footprint for the next decade while ensuring flexibility to adapt to market changes.`,
    tags: ['Blue Yonder', 'Supply Chain', 'Capacity Planning', 'Building Materials', 'Network Design'],
    status: 'completed',
    features: [
      '14-year capacity expansion modeling',
      'Blue Yonder SCS Optimizer implementation',
      'Demand vs. raw material supply scenario analysis',
      'Long-term logistics and power cost optimization',
      'Regulatory and tax stability assessment',
      'Phased execution plan for 7 facilities',
    ],
    challenges: [
      'Modeling 14-year market catchment shifts',
      'Balancing capital efficiency with operational flexibility',
      'Accounting for regulatory changes across states',
    ],
  },
  'it-cost-optimization-banking': {
    title: 'IT Cost Optimization & P&L Shielding',
    description: '$1M+ savings through strategic IT asset management for a Tier-1 bank.',
    longDescription: `This engagement addressed a critical issue at a Tier-1 Retail Bank where IT asset spend was growing at 2x the rate of revenue, threatening retail segment margins.

We directed a strategic sourcing and capacity management initiative that fundamentally changed how the bank approached IT procurement. This included introducing "alternate device" standards for handhelds and tablets, and streamlining the procurement lifecycle.

The initiative unlocked INR 9 Cr ($1M+) in savings over a 3-year horizon through rigorous demand-side management while maintaining service quality and security standards.`,
    tags: ['IT Strategy', 'Cost Optimization', 'Strategic Sourcing', 'Banking', 'Procurement'],
    status: 'completed',
    features: [
      'Strategic sourcing initiative design',
      'Capacity management framework',
      'Alternate device standards for handhelds/tablets',
      'Procurement lifecycle streamlining',
      'Demand-side management protocols',
      '3-year savings roadmap',
    ],
    challenges: [
      'IT spend growing at 2x revenue rate',
      'Maintaining service quality during optimization',
      'Ensuring security compliance with new device standards',
    ],
  },
  'digital-transformation-crm-dms': {
    title: 'Digital Transformation - CRM & DMS',
    description: '90%+ user adoption in 3 months for Salesforce CRM and DMS implementation.',
    longDescription: `This engagement involved directing the end-to-end implementation of Salesforce CRM and Distributor Management System (DMS) for a furniture fittings major with approximately ₹1,500 Cr in revenue.

The client faced challenges with opaque secondary sales data and inefficient order-to-cash cycles. Our approach focused on both technical implementation and change management to ensure sustainable adoption.

Through a structured rollout and intensive training program, we achieved 90%+ user adoption within 3 months while reducing order processing time by 40%. The system now provides real-time visibility into the entire distribution network.`,
    tags: ['Salesforce CRM', 'DMS', 'Digital Transformation', 'Change Management', 'Furniture Fittings'],
    status: 'completed',
    features: [
      'End-to-end Salesforce CRM implementation',
      'Distributor Management System deployment',
      'Secondary sales data visibility',
      'Order-to-cash cycle optimization',
      'Comprehensive change management program',
      'Real-time distribution network visibility',
    ],
    challenges: [
      'Overcoming resistance to digital adoption',
      'Integrating with legacy systems',
      'Achieving high adoption rates in traditional industry',
    ],
  },
  'trade-promotion-tata-steel': {
    title: 'Trade Promotion Excellence Program',
    description: '₹10 Cr incremental revenue through pre-seasonal dealer reward program.',
    longDescription: `At Tata Steel, I developed a pre-seasonal reward program for dealers and fabricators designed to de-risk seasonal supply constraints. This was part of managing the P&L of ₹2k Cr/month for the Flat Products division.

The program incentivized early order booking, allowing better production planning and inventory management. By aligning dealer incentives with Tata Steel's operational needs, we created a win-win situation.

The result was a doubling of pre-seasonal order booking, generating ₹10 Cr in incremental revenue while reducing supply chain volatility during peak seasons.`,
    tags: ['TPM', 'Dealer Programs', 'Revenue Growth', 'Steel Industry', 'Incentive Design'],
    status: 'completed',
    features: [
      'Pre-seasonal reward program design',
      'Dealer and fabricator incentive structures',
      'Production planning alignment',
      'Inventory management optimization',
      'Supply chain volatility reduction',
      'Performance tracking and analytics',
    ],
    challenges: [
      'De-risking seasonal supply constraints',
      'Aligning dealer behavior with operational needs',
      'Managing complex dealer relationships',
    ],
  },
  'market-mapping-expansion': {
    title: 'Market Mapping & Expansion',
    description: '4,000 tons/year additional volume through density mapping in East India.',
    longDescription: `This project involved a comprehensive 6-month density mapping study for HR/CR sheets across West Bengal and Odisha at Tata Steel. The goal was to identify untapped market potential in underserved districts.

The study combined ground-level intelligence with data analytics to create detailed market heat maps. This revealed significant latent demand in areas where the active dealer footprint was sparse.

Based on the insights, we activated new dealers in target districts and expanded the distribution network, ultimately unlocking 4,000 additional tons of annual volume.`,
    tags: ['Market Entry', 'Density Mapping', 'Channel Development', 'Steel Industry', 'Analytics'],
    status: 'completed',
    features: [
      '6-month comprehensive market study',
      'Density mapping for HR/CR sheets',
      'Ground-level intelligence gathering',
      'Market heat map development',
      'Dealer activation in underserved districts',
      'Distribution network expansion',
    ],
    challenges: [
      'Identifying latent demand in fragmented markets',
      'Expanding into underserved territories',
      'Building new dealer relationships',
    ],
  },
  'digital-sales-activation': {
    title: 'Digital Sales Activation & Dashboards',
    description: '20% improvement in order visibility through interactive dashboards.',
    longDescription: `This initiative at Tata Steel focused on developing interactive sales funnel and logistics dashboards to enable data-driven sales operations across the distribution network.

The dashboards provided real-time visibility into the entire order lifecycle, from lead generation to delivery. This transparency enabled faster decision-making and proactive issue resolution.

The implementation resulted in 20% improvement in order visibility and significant reduction in inventory stock-outs through better demand forecasting and supply planning.`,
    tags: ['Sales Analytics', 'Dashboards', 'Logistics', 'Automation', 'Steel Industry'],
    status: 'completed',
    features: [
      'Interactive sales funnel dashboard',
      'Logistics tracking and visibility',
      'Real-time order lifecycle monitoring',
      'Lead conversion analytics',
      'Demand forecasting integration',
      'Inventory stock-out reduction',
    ],
    challenges: [
      'Integrating data from multiple sources',
      'Ensuring real-time data accuracy',
      'Driving adoption across sales teams',
    ],
  },
  'demand-forecasting-automotive': {
    title: 'SKU-Level Demand Forecasting',
    description: '8% accuracy uplift using SARIMA/VARMAX for 1,000+ automotive SKUs.',
    longDescription: `This project involved developing Python-based forecasting models using SARIMA and VARMAX algorithms for 1,000+ automotive SKUs in the spare parts network.

The challenge was to improve forecasting accuracy for a highly complex SKU portfolio with varying demand patterns, seasonality, and interdependencies. Traditional forecasting methods were proving inadequate.

By implementing advanced time-series algorithms and incorporating external variables, we achieved an 8% accuracy uplift in SKU-level forecasting, enabling better inventory planning and significantly reducing stockouts.`,
    tags: ['Python', 'SARIMA', 'VARMAX', 'Forecasting', 'Automotive', 'Machine Learning'],
    status: 'completed',
    features: [
      'Python-based forecasting implementation',
      'SARIMA algorithm for seasonal patterns',
      'VARMAX for multivariate analysis',
      '1,000+ SKU coverage',
      'External variable integration',
      'Inventory planning optimization',
    ],
    challenges: [
      'Managing highly complex SKU portfolio',
      'Handling varying demand patterns and seasonality',
      'Integrating forecasts into operational planning',
    ],
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects[slug]

  if (!project) {
    return { title: 'Project Not Found' }
  }

  return {
    title: project.title,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = projects[slug]

  if (!project) {
    notFound()
  }

  return <ProjectPageContent project={project} />
}
