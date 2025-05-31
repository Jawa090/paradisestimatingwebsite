import React from 'react';
import { 
  Building2, 
  HardHat, 
  Hammer, 
  PaintBucket, 
  Home, 
  Wrench,
  FileText,
  Calculator,
  BarChart3,
  Settings,
  Monitor,
  Package,
  ClipboardList,
  TrendingUp,
  Users,
  CheckCircle,
  DollarSign,
  Activity
} from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  icon: React.ReactElement;
  shortDescription: string;
  description: string;
  bannerImage: string;
  features: string[];
  processSteps: Array<{
    title: string;
    description: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedServices: string[];
}

export const quantityTakeoffServices: Service[] = [
  {
    id: 'concrete-takeoff',
    title: 'Concrete (Footings, Slabs, Columns)',
    icon: <Building2 size={40} />,
    shortDescription: 'Precise concrete quantity calculations for footings, slabs, columns, and all concrete elements.',
    description: 'Our concrete takeoff service provides detailed quantity calculations for all concrete elements in your project including footings, slabs, columns, beams, and walls. We ensure accurate material estimates to optimize your concrete procurement and reduce waste.',
    bannerImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Foundation and footing calculations',
      'Slab-on-grade and elevated slab takeoffs',
      'Column and beam quantity analysis',
      'Concrete wall measurements',
      'Rebar and reinforcement calculations',
      'Formwork requirements',
      'Concrete mix design considerations',
      'Waste factor calculations'
    ],
    processSteps: [
      {
        title: 'Plan Analysis',
        description: 'We review structural drawings and specifications to understand concrete requirements.'
      },
      {
        title: 'Quantity Calculation',
        description: 'Using advanced software, we calculate precise volumes for all concrete elements.'
      },
      {
        title: 'Material Optimization',
        description: 'We optimize concrete orders and identify potential cost savings.'
      },
      {
        title: 'Final Report',
        description: 'We deliver detailed reports with quantities, specifications, and procurement recommendations.'
      }
    ],
    faqs: [
      {
        question: 'What concrete elements do you include in takeoffs?',
        answer: 'We include all concrete elements: footings, slabs, columns, beams, walls, stairs, and specialty concrete work.'
      },
      {
        question: 'Do you calculate reinforcement requirements?',
        answer: 'Yes, we provide detailed rebar takeoffs including sizes, lengths, and placement requirements.'
      }
    ],
    relatedServices: ['masonry-takeoff', 'structural-steel']
  },
  {
    id: 'masonry-takeoff',
    title: 'Masonry (Brickwork, Blockwork)',
    icon: <HardHat size={40} />,
    shortDescription: 'Comprehensive masonry quantity calculations for brick and block construction.',
    description: 'Our masonry takeoff service covers all aspects of brick and block construction including material quantities, mortar calculations, and installation requirements for both structural and veneer applications.',
    bannerImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Brick and block quantity calculations',
      'Mortar and grout requirements',
      'Reinforcement and tie calculations',
      'Insulation and cavity requirements',
      'Flashing and waterproofing',
      'Specialty masonry units',
      'Restoration and repair quantities',
      'Labor productivity analysis'
    ],
    processSteps: [
      {
        title: 'Drawing Review',
        description: 'We analyze architectural and structural plans for masonry requirements.'
      },
      {
        title: 'Unit Calculations',
        description: 'We calculate precise quantities of bricks, blocks, and related materials.'
      },
      {
        title: 'Installation Analysis',
        description: 'We assess installation requirements and productivity factors.'
      },
      {
        title: 'Complete Takeoff',
        description: 'We provide comprehensive material lists and cost estimates.'
      }
    ],
    faqs: [
      {
        question: 'Do you handle specialty masonry units?',
        answer: 'Yes, we work with all types of masonry including specialty units, natural stone, and architectural masonry.'
      },
      {
        question: 'Can you estimate restoration projects?',
        answer: 'Yes, we provide detailed takeoffs for masonry restoration, repair, and historic preservation projects.'
      }
    ],
    relatedServices: ['concrete-takeoff', 'structural-steel']
  },
  {
    id: 'structural-steel',
    title: 'Structural & Reinforcing Steel',
    icon: <Settings size={40} />,
    shortDescription: 'Detailed steel quantity takeoffs for structural and reinforcing applications.',
    description: 'Our structural steel takeoff service provides comprehensive quantity calculations for all steel elements including beams, columns, connections, and reinforcing steel with detailed specifications and fabrication requirements.',
    bannerImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Structural steel member calculations',
      'Connection details and hardware',
      'Reinforcing steel takeoffs',
      'Fabrication and erection planning',
      'Shop drawing coordination',
      'Material specifications',
      'Weight and tonnage calculations',
      'Delivery and handling requirements'
    ],
    processSteps: [
      {
        title: 'Structural Analysis',
        description: 'We review structural drawings and specifications for steel requirements.'
      },
      {
        title: 'Member Calculations',
        description: 'We calculate quantities for all structural steel members and connections.'
      },
      {
        title: 'Fabrication Planning',
        description: 'We analyze fabrication requirements and delivery schedules.'
      },
      {
        title: 'Final Documentation',
        description: 'We provide detailed material lists and fabrication specifications.'
      }
    ],
    faqs: [
      {
        question: 'Do you coordinate with steel fabricators?',
        answer: 'Yes, we work closely with fabricators to ensure accurate quantities and specifications.'
      },
      {
        question: 'Can you handle complex steel structures?',
        answer: 'Yes, we have experience with complex steel structures including high-rise, industrial, and specialty applications.'
      }
    ],
    relatedServices: ['concrete-takeoff', 'carpentry-millwork']
  },
  {
    id: 'carpentry-millwork',
    title: 'Carpentry, Millwork & Cabinetry',
    icon: <Hammer size={40} />,
    shortDescription: 'Comprehensive takeoffs for all carpentry, millwork, and cabinetry components.',
    description: 'Our carpentry and millwork takeoff service covers all wood construction elements from rough framing to finish carpentry, including custom millwork and cabinetry with detailed material specifications.',
    bannerImage: 'https://images.unsplash.com/photo-1421217336522-861978fdf33a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Rough framing lumber calculations',
      'Finish carpentry materials',
      'Custom millwork specifications',
      'Cabinetry and built-ins',
      'Hardware and fasteners',
      'Trim and molding quantities',
      'Stairs and railings',
      'Specialty woodwork'
    ],
    processSteps: [
      {
        title: 'Plan Analysis',
        description: 'We review architectural plans for all carpentry and millwork requirements.'
      },
      {
        title: 'Material Calculations',
        description: 'We calculate precise quantities for lumber, hardware, and specialty items.'
      },
      {
        title: 'Quality Specifications',
        description: 'We specify appropriate grades and species for each application.'
      },
      {
        title: 'Complete Package',
        description: 'We deliver comprehensive material lists with cut lists and specifications.'
      }
    ],
    faqs: [
      {
        question: 'Do you provide cut lists for framing?',
        answer: 'Yes, we can provide detailed cut lists and framing layouts for efficient construction.'
      },
      {
        question: 'Can you handle custom millwork?',
        answer: 'Yes, we work with custom millwork shops to provide accurate quantities and specifications.'
      }
    ],
    relatedServices: ['drywall-insulation', 'flooring-takeoff']
  },
  {
    id: 'drywall-insulation',
    title: 'Drywall & Insulation',
    icon: <Package size={40} />,
    shortDescription: 'Accurate drywall and insulation quantity calculations for interior finishing.',
    description: 'Our drywall and insulation takeoff service provides detailed calculations for all interior wall and ceiling finishes including drywall, insulation, joint compound, and related materials.',
    bannerImage: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Drywall sheet calculations',
      'Insulation quantity analysis',
      'Joint compound and tape',
      'Metal framing and accessories',
      'Specialty ceiling systems',
      'Vapor barriers and sealants',
      'Fasteners and hardware',
      'Labor productivity factors'
    ],
    processSteps: [
      {
        title: 'Area Calculations',
        description: 'We calculate wall and ceiling areas for drywall and insulation coverage.'
      },
      {
        title: 'Material Selection',
        description: 'We specify appropriate materials for each application and climate zone.'
      },
      {
        title: 'Installation Planning',
        description: 'We analyze installation requirements and productivity factors.'
      },
      {
        title: 'Final Estimates',
        description: 'We provide detailed material quantities and installation estimates.'
      }
    ],
    faqs: [
      {
        question: 'Do you account for different drywall thicknesses?',
        answer: 'Yes, we specify appropriate drywall thickness based on application and building codes.'
      },
      {
        question: 'Can you estimate specialty ceiling systems?',
        answer: 'Yes, we handle all types of ceiling systems including suspended, coffered, and specialty finishes.'
      }
    ],
    relatedServices: ['carpentry-millwork', 'painting-finishes']
  },
  {
    id: 'roofing-waterproofing',
    title: 'Roofing & Waterproofing',
    icon: <Home size={40} />,
    shortDescription: 'Complete roofing and waterproofing system quantity calculations.',
    description: 'Our roofing and waterproofing takeoff service covers all roofing systems and waterproofing applications including materials, accessories, and installation requirements for lasting protection.',
    bannerImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Roofing material calculations',
      'Underlayment and accessories',
      'Flashing and trim details',
      'Gutter and downspout systems',
      'Waterproofing membranes',
      'Insulation and ventilation',
      'Specialty roofing systems',
      'Maintenance and warranty considerations'
    ],
    processSteps: [
      {
        title: 'Roof Analysis',
        description: 'We analyze roof plans and details for material and system requirements.'
      },
      {
        title: 'System Selection',
        description: 'We specify appropriate roofing systems based on climate and application.'
      },
      {
        title: 'Quantity Calculations',
        description: 'We calculate precise quantities for all roofing and waterproofing materials.'
      },
      {
        title: 'Installation Guide',
        description: 'We provide installation guidelines and warranty requirements.'
      }
    ],
    faqs: [
      {
        question: 'Do you handle all roofing systems?',
        answer: 'Yes, we work with all roofing systems including asphalt, metal, tile, membrane, and specialty systems.'
      },
      {
        question: 'Can you estimate green roof systems?',
        answer: 'Yes, we provide takeoffs for green roofs, solar installations, and other sustainable roofing systems.'
      }
    ],
    relatedServices: ['flooring-takeoff', 'windows-glazing']
  },
  {
    id: 'flooring-takeoff',
    title: 'Flooring (Tile, Wood, Carpet)',
    icon: <PaintBucket size={40} />,
    shortDescription: 'Comprehensive flooring material calculations for all flooring types.',
    description: 'Our flooring takeoff service provides detailed quantity calculations for all flooring materials including tile, hardwood, carpet, luxury vinyl, and specialty flooring with underlayment and installation requirements.',
    bannerImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Flooring material calculations',
      'Underlayment and subfloor prep',
      'Transition strips and moldings',
      'Adhesives and fasteners',
      'Pattern and layout optimization',
      'Waste factor calculations',
      'Installation accessories',
      'Maintenance and warranty specs'
    ],
    processSteps: [
      {
        title: 'Area Calculations',
        description: 'We calculate precise floor areas and identify different flooring zones.'
      },
      {
        title: 'Material Selection',
        description: 'We specify appropriate flooring materials for each area and use.'
      },
      {
        title: 'Layout Planning',
        description: 'We optimize layouts to minimize waste and maximize appearance.'
      },
      {
        title: 'Complete Package',
        description: 'We provide detailed material lists and installation specifications.'
      }
    ],
    faqs: [
      {
        question: 'Do you optimize layouts to reduce waste?',
        answer: 'Yes, we analyze layouts and patterns to minimize material waste and optimize appearance.'
      },
      {
        question: 'Can you handle luxury and specialty flooring?',
        answer: 'Yes, we work with all flooring types including luxury materials and custom installations.'
      }
    ],
    relatedServices: ['drywall-insulation', 'windows-glazing']
  },
  {
    id: 'windows-glazing',
    title: 'Doors, Windows & Glazing',
    icon: <Monitor size={40} />,
    shortDescription: 'Detailed takeoffs for all door, window, and glazing systems.',
    description: 'Our doors, windows, and glazing takeoff service covers all openings including residential and commercial doors, windows, storefront systems, and specialty glazing with hardware and installation requirements.',
    bannerImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Door and window schedules',
      'Hardware and accessories',
      'Glazing and glass specifications',
      'Frame and installation materials',
      'Weather sealing systems',
      'Security and access control',
      'Energy efficiency ratings',
      'Specialty glazing systems'
    ],
    processSteps: [
      {
        title: 'Schedule Review',
        description: 'We review door and window schedules for all opening requirements.'
      },
      {
        title: 'Specification Analysis',
        description: 'We analyze specifications for performance and compliance requirements.'
      },
      {
        title: 'Hardware Selection',
        description: 'We specify appropriate hardware for security, accessibility, and function.'
      },
      {
        title: 'Complete Systems',
        description: 'We provide complete system takeoffs including installation requirements.'
      }
    ],
    faqs: [
      {
        question: 'Do you handle commercial glazing systems?',
        answer: 'Yes, we work with all glazing systems including storefront, curtain wall, and specialty systems.'
      },
      {
        question: 'Can you specify energy-efficient systems?',
        answer: 'Yes, we help select systems that meet energy codes and sustainability requirements.'
      }
    ],
    relatedServices: ['roofing-waterproofing', 'mep-systems']
  },
  {
    id: 'mep-systems',
    title: 'MEP Systems (Mechanical, Electrical, Plumbing)',
    icon: <Wrench size={40} />,
    shortDescription: 'Comprehensive MEP system quantity takeoffs and cost analysis.',
    description: 'Our MEP takeoff service provides detailed quantity calculations for mechanical, electrical, and plumbing systems including equipment, piping, ductwork, wiring, and all related components.',
    bannerImage: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'HVAC equipment and ductwork',
      'Electrical panels and wiring',
      'Plumbing fixtures and piping',
      'Control systems and automation',
      'Fire protection systems',
      'Low voltage and data systems',
      'Energy management systems',
      'Commissioning requirements'
    ],
    processSteps: [
      {
        title: 'System Analysis',
        description: 'We review MEP drawings and specifications for all system requirements.'
      },
      {
        title: 'Equipment Selection',
        description: 'We specify appropriate equipment based on load calculations and codes.'
      },
      {
        title: 'Distribution Systems',
        description: 'We calculate quantities for all distribution piping, ductwork, and wiring.'
      },
      {
        title: 'Complete Systems',
        description: 'We provide integrated takeoffs for all MEP systems and coordination.'
      }
    ],
    faqs: [
      {
        question: 'Do you coordinate between MEP trades?',
        answer: 'Yes, we ensure proper coordination between mechanical, electrical, and plumbing systems.'
      },
      {
        question: 'Can you handle smart building systems?',
        answer: 'Yes, we work with advanced control systems, automation, and smart building technologies.'
      }
    ],
    relatedServices: ['sitework-earthworks', 'concrete-takeoff']
  },
  {
    id: 'sitework-earthworks',
    title: 'Sitework, Earthworks, Landscaping, Utilities',
    icon: <Activity size={40} />,
    shortDescription: 'Complete site development quantity calculations and planning.',
    description: 'Our sitework and earthworks service covers all site development aspects including excavation, utilities, landscaping, paving, and site improvements with environmental considerations.',
    bannerImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Excavation and grading calculations',
      'Utility installation planning',
      'Landscaping and irrigation',
      'Paving and hardscaping',
      'Drainage and stormwater management',
      'Site lighting and signage',
      'Environmental compliance',
      'Site security and fencing'
    ],
    processSteps: [
      {
        title: 'Site Analysis',
        description: 'We analyze site conditions, topography, and development requirements.'
      },
      {
        title: 'Utility Planning',
        description: 'We plan utility routing and calculate installation requirements.'
      },
      {
        title: 'Earthwork Optimization',
        description: 'We optimize cut and fill to minimize material movement and costs.'
      },
      {
        title: 'Complete Development',
        description: 'We provide comprehensive site development plans and quantities.'
      }
    ],
    faqs: [
      {
        question: 'Do you handle environmental permitting?',
        answer: 'We assist with environmental compliance and can coordinate with permitting consultants.'
      },
      {
        question: 'Can you optimize earthwork for cost savings?',
        answer: 'Yes, we analyze cut and fill to balance earthwork and minimize import/export costs.'
      }
    ],
    relatedServices: ['concrete-takeoff', 'masonry-takeoff']
  }
];

export const costEstimationServices: Service[] = [
  {
    id: 'preliminary-estimates',
    title: 'Preliminary / Budget Estimates',
    icon: <Calculator size={40} />,
    shortDescription: 'Early-stage cost estimates for project planning and budgeting.',
    description: 'Our preliminary estimation service provides early-stage cost estimates based on conceptual designs and basic project parameters, helping you make informed decisions during the planning phase.',
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Conceptual cost modeling',
      'Budget range development',
      'Comparative analysis',
      'Market factor adjustments',
      'Feasibility assessments',
      'Risk factor evaluation',
      'Alternative concept costs',
      'Funding requirement planning'
    ],
    processSteps: [
      {
        title: 'Project Overview',
        description: 'We gather basic project information and requirements.'
      },
      {
        title: 'Conceptual Analysis',
        description: 'We develop cost models based on similar projects and market data.'
      },
      {
        title: 'Range Development',
        description: 'We establish cost ranges with appropriate contingencies.'
      },
      {
        title: 'Budget Recommendations',
        description: 'We provide budget recommendations for project planning.'
      }
    ],
    faqs: [
      {
        question: 'How accurate are preliminary estimates?',
        answer: 'Preliminary estimates typically range from -25% to +50% accuracy, depending on available information.'
      },
      {
        question: 'What information do you need for preliminary estimates?',
        answer: 'We need basic project scope, size, location, quality level, and any available conceptual drawings.'
      }
    ],
    relatedServices: ['detailed-estimates', 'conceptual-estimating']
  },
  {
    id: 'detailed-estimates',
    title: 'Detailed Estimates (Schematic, DD, CD)',
    icon: <FileText size={40} />,
    shortDescription: 'Comprehensive detailed estimates at various design development stages.',
    description: 'Our detailed estimation service provides comprehensive cost analysis at schematic design, design development, and construction document phases with increasing levels of accuracy and detail.',
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Schematic design estimates',
      'Design development estimates',
      'Construction document estimates',
      'Progressive accuracy improvement',
      'Detailed quantity takeoffs',
      'Material and labor analysis',
      'Subcontractor scope definition',
      'Cost reconciliation tracking'
    ],
    processSteps: [
      {
        title: 'Design Review',
        description: 'We analyze drawings and specifications at the current design phase.'
      },
      {
        title: 'Detailed Takeoffs',
        description: 'We perform comprehensive quantity takeoffs for all project elements.'
      },
      {
        title: 'Cost Development',
        description: 'We apply current pricing to develop detailed cost estimates.'
      },
      {
        title: 'Progressive Refinement',
        description: 'We refine estimates as design develops and provide cost tracking.'
      }
    ],
    faqs: [
      {
        question: 'How does accuracy improve through design phases?',
        answer: 'Accuracy improves from ±15% at schematic to ±10% at DD to ±5% at construction documents.'
      },
      {
        question: 'Do you track cost changes between phases?',
        answer: 'Yes, we provide cost reconciliation reports showing changes between design phases.'
      }
    ],
    relatedServices: ['preliminary-estimates', 'bid-estimates']
  },
  {
    id: 'bid-estimates',
    title: 'Bid Estimates (Tendering)',
    icon: <TrendingUp size={40} />,
    shortDescription: 'Competitive bid estimates for contractor selection and tendering.',
    description: 'Our bid estimation service provides detailed competitive estimates for contractor tendering processes, ensuring accurate and competitive pricing for successful project procurement.',
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Competitive bid preparation',
      'Market rate analysis',
      'Subcontractor coordination',
      'Risk assessment and pricing',
      'Value engineering opportunities',
      'Bid strategy development',
      'Schedule impact analysis',
      'Contract term evaluation'
    ],
    processSteps: [
      {
        title: 'Bid Document Review',
        description: 'We thoroughly review all bid documents and requirements.'
      },
      {
        title: 'Competitive Analysis',
        description: 'We analyze market conditions and competitive positioning.'
      },
      {
        title: 'Detailed Pricing',
        description: 'We develop detailed pricing with current market rates.'
      },
      {
        title: 'Bid Finalization',
        description: 'We finalize competitive bids with appropriate risk factors.'
      }
    ],
    faqs: [
      {
        question: 'How do you ensure competitive pricing?',
        answer: 'We use current market data, subcontractor quotes, and competitive analysis to ensure realistic pricing.'
      },
      {
        question: 'Do you help with bid strategy?',
        answer: 'Yes, we provide bid strategy recommendations based on project requirements and market conditions.'
      }
    ],
    relatedServices: ['detailed-estimates', 'value-engineering']
  },
  {
    id: 'conceptual-estimating',
    title: 'Conceptual Estimating',
    icon: <BarChart3 size={40} />,
    shortDescription: 'High-level conceptual cost estimates for early project evaluation.',
    description: 'Our conceptual estimating service provides high-level cost estimates based on basic project parameters and historical data, perfect for feasibility studies and early project evaluation.',
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Parameter-based estimating',
      'Historical cost data analysis',
      'Feasibility study support',
      'Multiple scenario analysis',
      'Order of magnitude pricing',
      'Market trend incorporation',
      'Risk and contingency planning',
      'Investment planning support'
    ],
    processSteps: [
      {
        title: 'Parameter Definition',
        description: 'We define key project parameters and requirements.'
      },
      {
        title: 'Historical Analysis',
        description: 'We analyze historical data from similar projects.'
      },
      {
        title: 'Cost Modeling',
        description: 'We develop parametric cost models for the project.'
      },
      {
        title: 'Scenario Development',
        description: 'We provide multiple scenarios for project evaluation.'
      }
    ],
    faqs: [
      {
        question: 'When is conceptual estimating most useful?',
        answer: 'Conceptual estimating is most valuable during feasibility studies and early project planning.'
      },
      {
        question: 'What level of detail is available at this stage?',
        answer: 'Conceptual estimates provide order of magnitude costs with broad categories and significant contingencies.'
      }
    ],
    relatedServices: ['preliminary-estimates', 'life-cycle-analysis']
  },
  {
    id: 'labor-equipment-analysis',
    title: 'Labor & Equipment Rate Analysis',
    icon: <Users size={40} />,
    shortDescription: 'Detailed labor and equipment cost analysis and rate development.',
    description: 'Our labor and equipment analysis service provides detailed cost analysis for labor rates, productivity factors, and equipment costs to ensure accurate project pricing.',
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Local labor rate research',
      'Productivity factor analysis',
      'Equipment cost evaluation',
      'Union vs. non-union analysis',
      'Seasonal rate adjustments',
      'Skill level requirements',
      'Overtime and premium time',
      'Benefit and burden calculations'
    ],
    processSteps: [
      {
        title: 'Market Research',
        description: 'We research current labor and equipment rates in your market.'
      },
      {
        title: 'Productivity Analysis',
        description: 'We analyze productivity factors for different work types and conditions.'
      },
      {
        title: 'Rate Development',
        description: 'We develop comprehensive rate structures for estimating.'
      },
      {
        title: 'Ongoing Updates',
        description: 'We provide ongoing rate updates and market monitoring.'
      }
    ],
    faqs: [
      {
        question: 'How often are rates updated?',
        answer: 'We update rates quarterly or as market conditions change significantly.'
      },
      {
        question: 'Do you account for regional differences?',
        answer: 'Yes, we provide location-specific rates adjusted for local market conditions.'
      }
    ],
    relatedServices: ['detailed-estimates', 'bid-estimates']
  },
  {
    id: 'life-cycle-analysis',
    title: 'Life-Cycle Cost Analysis',
    icon: <Activity size={40} />,
    shortDescription: 'Comprehensive life-cycle cost analysis for long-term value assessment.',
    description: 'Our life-cycle cost analysis evaluates total ownership costs including initial construction, operations, maintenance, and end-of-life considerations for informed decision-making.',
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Initial cost analysis',
      'Operating cost projections',
      'Maintenance cost planning',
      'Energy cost evaluation',
      'Replacement cost scheduling',
      'End-of-life considerations',
      'Net present value calculations',
      'Alternative comparison analysis'
    ],
    processSteps: [
      {
        title: 'Cost Category Definition',
        description: 'We define all cost categories for the analysis period.'
      },
      {
        title: 'Data Collection',
        description: 'We gather cost data for all life-cycle phases.'
      },
      {
        title: 'Analysis Development',
        description: 'We develop comprehensive life-cycle cost models.'
      },
      {
        title: 'Decision Support',
        description: 'We provide clear recommendations for optimal value decisions.'
      }
    ],
    faqs: [
      {
        question: 'What time period do you typically analyze?',
        answer: 'We typically analyze 20-50 year periods depending on the facility type and purpose.'
      },
      {
        question: 'How do you account for inflation and escalation?',
        answer: 'We use appropriate escalation factors and present value calculations for accurate comparison.'
      }
    ],
    relatedServices: ['value-engineering', 'conceptual-estimating']
  },
  {
    id: 'value-engineering',
    title: 'Value Engineering Support',
    icon: <CheckCircle size={40} />,
    shortDescription: 'Strategic value engineering analysis to optimize cost and performance.',
    description: 'Our value engineering service analyzes project elements to identify cost reduction opportunities while maintaining or improving functionality and quality.',
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Function analysis workshops',
      'Alternative solution development',
      'Cost-benefit analysis',
      'Performance impact assessment',
      'Implementation planning',
      'Risk evaluation',
      'Life-cycle cost comparison',
      'Stakeholder collaboration'
    ],
    processSteps: [
      {
        title: 'Function Analysis',
        description: 'We analyze project functions and performance requirements.'
      },
      {
        title: 'Alternative Development',
        description: 'We develop creative alternatives that maintain functionality.'
      },
      {
        title: 'Cost Analysis',
        description: 'We analyze costs and benefits of each alternative.'
      },
      {
        title: 'Implementation Plan',
        description: 'We develop implementation plans for selected alternatives.'
      }
    ],
    faqs: [
      {
        question: 'When is the best time for value engineering?',
        answer: 'Value engineering is most effective during design development when changes have minimal impact.'
      },
      {
        question: 'What cost savings can typically be achieved?',
        answer: 'Value engineering typically identifies 5-15% potential savings while maintaining quality.'
      }
    ],
    relatedServices: ['life-cycle-analysis', 'detailed-estimates']
  },
  {
    id: 'change-order-estimates',
    title: 'Change Order Estimates',
    icon: <DollarSign size={40} />,
    shortDescription: 'Accurate change order pricing and impact analysis.',
    description: 'Our change order estimation service provides accurate pricing for project changes including cost and schedule impacts to support informed decision-making during construction.',
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Change order pricing',
      'Schedule impact analysis',
      'Cost vs. benefit evaluation',
      'Alternative solution pricing',
      'Contract compliance review',
      'Documentation support',
      'Negotiation assistance',
      'Budget impact tracking'
    ],
    processSteps: [
      {
        title: 'Change Analysis',
        description: 'We analyze the scope and impact of proposed changes.'
      },
      {
        title: 'Cost Development',
        description: 'We develop accurate pricing for labor, materials, and equipment.'
      },
      {
        title: 'Impact Assessment',
        description: 'We assess schedule and cost impacts on the overall project.'
      },
      {
        title: 'Documentation',
        description: 'We provide complete documentation for change order processing.'
      }
    ],
    faqs: [
      {
        question: 'How quickly can you provide change order estimates?',
        answer: 'We typically provide change order estimates within 24-48 hours depending on complexity.'
      },
      {
        question: 'Do you help with change order negotiations?',
        answer: 'Yes, we provide cost analysis and documentation to support fair change order negotiations.'
      }
    ],
    relatedServices: ['detailed-estimates', 'value-engineering']
  }
];

export const specializedServices: Service[] = [
  {
    id: 'trade-specific-hvac',
    title: 'Trade-Specific (HVAC, Electrical, Plumbing)',
    icon: <Wrench size={40} />,
    shortDescription: 'Specialized estimating for individual trade contractors.',
    description: 'Our trade-specific estimating service provides detailed cost analysis for individual trades including HVAC, electrical, and plumbing contractors with trade-specific expertise.',
    bannerImage: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'HVAC system estimating',
      'Electrical system takeoffs',
      'Plumbing system analysis',
      'Trade-specific material pricing',
      'Installation method analysis',
      'Code compliance verification',
      'Coordination requirements',
      'Specialty equipment pricing'
    ],
    processSteps: [
      {
        title: 'Trade Analysis',
        description: 'We analyze trade-specific drawings and specifications.'
      },
      {
        title: 'System Calculations',
        description: 'We perform detailed calculations for each trade system.'
      },
      {
        title: 'Material Pricing',
        description: 'We apply current trade-specific material and labor pricing.'
      },
      {
        title: 'Coordination Review',
        description: 'We review coordination requirements between trades.'
      }
    ],
    faqs: [
      {
        question: 'Do you work with trade contractors directly?',
        answer: 'Yes, we work closely with trade contractors to ensure accurate pricing and specifications.'
      },
      {
        question: 'Can you estimate complex MEP systems?',
        answer: 'Yes, we have expertise in complex mechanical, electrical, and plumbing systems.'
      }
    ],
    relatedServices: ['mep-systems', 'detailed-estimates']
  },
  {
    id: 'civil-infrastructure',
    title: 'Civil & Infrastructure Projects',
    icon: <Building2 size={40} />,
    shortDescription: 'Comprehensive estimating for civil and infrastructure projects.',
    description: 'Our civil and infrastructure estimating service covers roads, bridges, utilities, and public works projects with specialized knowledge of civil construction methods and materials.',
    bannerImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Road and highway construction',
      'Bridge and structure estimating',
      'Utility installation analysis',
      'Environmental compliance costs',
      'Traffic control planning',
      'Materials testing requirements',
      'Right-of-way considerations',
      'Public works specifications'
    ],
    processSteps: [
      {
        title: 'Project Scope Analysis',
        description: 'We analyze civil drawings and project specifications.'
      },
      {
        title: 'Quantity Calculations',
        description: 'We calculate quantities for earthwork, materials, and construction.'
      },
      {
        title: 'Specialized Pricing',
        description: 'We apply civil construction pricing and methods.'
      },
      {
        title: 'Compliance Review',
        description: 'We ensure compliance with public works and environmental requirements.'
      }
    ],
    faqs: [
      {
        question: 'Do you handle environmental compliance costs?',
        answer: 'Yes, we include environmental monitoring, permitting, and compliance costs.'
      },
      {
        question: 'Can you estimate complex infrastructure projects?',
        answer: 'Yes, we have experience with bridges, highways, utilities, and major infrastructure.'
      }
    ],
    relatedServices: ['sitework-earthworks', 'specialized-estimating']
  },
  {
    id: 'residential-commercial-industrial',
    title: 'Residential / Commercial / Industrial',
    icon: <Home size={40} />,
    shortDescription: 'Sector-specific estimating expertise for different project types.',
    description: 'Our sector-specific estimating service provides specialized knowledge and pricing for residential, commercial, and industrial projects with appropriate methods and standards for each sector.',
    bannerImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Residential construction estimating',
      'Commercial building analysis',
      'Industrial facility estimating',
      'Sector-specific codes and standards',
      'Market-appropriate pricing',
      'Quality level adjustments',
      'Regulatory compliance costs',
      'Sector-specific scheduling'
    ],
    processSteps: [
      {
        title: 'Sector Analysis',
        description: 'We analyze project requirements specific to the building sector.'
      },
      {
        title: 'Standards Application',
        description: 'We apply appropriate codes, standards, and quality levels.'
      },
      {
        title: 'Market Pricing',
        description: 'We use sector-appropriate pricing and construction methods.'
      },
      {
        title: 'Compliance Verification',
        description: 'We verify compliance with sector-specific requirements.'
      }
    ],
    faqs: [
      {
        question: 'How do you adjust for different quality levels?',
        answer: 'We adjust pricing based on finish quality, materials, and construction standards for each sector.'
      },
      {
        question: 'Do you understand sector-specific codes?',
        answer: 'Yes, we maintain current knowledge of residential, commercial, and industrial building codes.'
      }
    ],
    relatedServices: ['detailed-estimates', 'preliminary-estimates']
  },
  {
    id: 'green-building-leed',
    title: 'Green Building / LEED Estimating',
    icon: <Activity size={40} />,
    shortDescription: 'Specialized estimating for sustainable and LEED-certified projects.',
    description: 'Our green building estimating service provides cost analysis for sustainable construction including LEED certification requirements, green materials, and energy-efficient systems.',
    bannerImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'LEED certification cost analysis',
      'Sustainable material pricing',
      'Energy-efficient system costs',
      'Green roof and wall systems',
      'Renewable energy integration',
      'Water conservation systems',
      'Indoor air quality measures',
      'Commissioning requirements'
    ],
    processSteps: [
      {
        title: 'Sustainability Goals',
        description: 'We analyze sustainability goals and certification requirements.'
      },
      {
        title: 'Green Systems Analysis',
        description: 'We evaluate green building systems and materials.'
      },
      {
        title: 'Premium Cost Analysis',
        description: 'We analyze cost premiums for sustainable features.'
      },
      {
        title: 'Certification Support',
        description: 'We provide cost analysis for certification processes.'
      }
    ],
    faqs: [
      {
        question: 'What is the typical cost premium for LEED certification?',
        answer: 'LEED premiums typically range from 2-8% depending on certification level and project type.'
      },
      {
        question: 'Do you include certification and commissioning costs?',
        answer: 'Yes, we include all costs related to certification, commissioning, and documentation.'
      }
    ],
    relatedServices: ['life-cycle-analysis', 'value-engineering']
  }
];

export const softwareBasedServices: Service[] = [
  {
    id: 'on-screen-takeoff',
    title: 'On-Screen Takeoff (OST)',
    icon: <Monitor size={40} />,
    shortDescription: 'Digital takeoff services using On-Screen Takeoff software.',
    description: 'Our On-Screen Takeoff service utilizes advanced digital measurement tools to provide accurate quantity takeoffs directly from electronic drawings with enhanced speed and precision.',
    bannerImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Digital plan measurement',
      'Automated quantity calculations',
      'Scale verification and adjustment',
      'Multiple measurement tools',
      'Database integration',
      'Report generation',
      'Version control tracking',
      'Collaborative markup tools'
    ],
    processSteps: [
      {
        title: 'Plan Import',
        description: 'We import digital plans and verify scales and dimensions.'
      },
      {
        title: 'Digital Takeoff',
        description: 'We perform precise measurements using digital tools.'
      },
      {
        title: 'Quantity Compilation',
        description: 'We compile quantities into organized databases.'
      },
      {
        title: 'Report Generation',
        description: 'We generate detailed quantity reports and documentation.'
      }
    ],
    faqs: [
      {
        question: 'What file formats do you accept?',
        answer: 'We work with PDF, CAD files, image formats, and most common plan formats.'
      },
      {
        question: 'How accurate are digital takeoffs?',
        answer: 'Digital takeoffs are typically more accurate than manual methods with consistent precision.'
      }
    ],
    relatedServices: ['bluebeam-revu', 'planswift-estimation']
  },
  {
    id: 'bluebeam-revu',
    title: 'Bluebeam Revu',
    icon: <FileText size={40} />,
    shortDescription: 'Professional takeoff and markup services using Bluebeam Revu.',
    description: 'Our Bluebeam Revu service provides comprehensive digital takeoff, markup, and collaboration capabilities with industry-leading PDF and plan management tools.',
    bannerImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Advanced PDF markup tools',
      'Precise measurement capabilities',
      'Collaborative review processes',
      'Custom tool development',
      'Quantity database integration',
      'Report automation',
      'Version comparison',
      'Cloud-based collaboration'
    ],
    processSteps: [
      {
        title: 'Document Setup',
        description: 'We set up documents with appropriate scales and measurement tools.'
      },
      {
        title: 'Markup and Measurement',
        description: 'We perform detailed markup and measurements using Bluebeam tools.'
      },
      {
        title: 'Collaboration',
        description: 'We facilitate collaborative review and comment processes.'
      },
      {
        title: 'Final Documentation',
        description: 'We compile final measurements and generate comprehensive reports.'
      }
    ],
    faqs: [
      {
        question: 'Can you set up collaborative review sessions?',
        answer: 'Yes, we can facilitate collaborative markup sessions and coordinate multi-party reviews.'
      },
      {
        question: 'Do you provide custom tool development?',
        answer: 'Yes, we can develop custom tools and templates for specific project requirements.'
      }
    ],
    relatedServices: ['on-screen-takeoff', 'planswift-estimation']
  },
  {
    id: 'planswift-estimation',
    title: 'Planswift',
    icon: <Calculator size={40} />,
    shortDescription: 'Comprehensive takeoff and estimating using Planswift software.',
    description: 'Our Planswift service combines digital takeoff capabilities with integrated estimating tools to provide complete quantity takeoff and cost estimation solutions.',
    bannerImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Integrated takeoff and estimating',
      'Custom assembly development',
      'Database-driven pricing',
      'Automated calculations',
      'Professional reporting',
      'Multi-format plan support',
      'Template standardization',
      'Export capabilities'
    ],
    processSteps: [
      {
        title: 'Plan Analysis',
        description: 'We analyze plans and set up appropriate measurement parameters.'
      },
      {
        title: 'Takeoff Execution',
        description: 'We perform comprehensive takeoffs using Planswift tools.'
      },
      {
        title: 'Cost Integration',
        description: 'We integrate quantity data with current pricing databases.'
      },
      {
        title: 'Report Generation',
        description: 'We generate detailed quantity and cost reports.'
      }
    ],
    faqs: [
      {
        question: 'Can you create custom assemblies?',
        answer: 'Yes, we develop custom assemblies and templates for specific construction methods.'
      },
      {
        question: 'How do you integrate current pricing?',
        answer: 'We maintain updated pricing databases and integrate with industry cost sources.'
      }
    ],
    relatedServices: ['rsmeans-integration', 'excel-estimating']
  },
  {
    id: 'rsmeans-integration',
    title: 'RSMeans Integration',
    icon: <BarChart3 size={40} />,
    shortDescription: 'Cost estimating integrated with RSMeans cost data.',
    description: 'Our RSMeans integration service combines detailed quantity takeoffs with industry-standard RSMeans cost data to provide reliable and current construction cost estimates.',
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Current RSMeans cost data',
      'Location factor adjustments',
      'Productivity factor integration',
      'Material and labor separation',
      'Equipment cost inclusion',
      'Market condition adjustments',
      'Historical cost trending',
      'Comparative analysis tools'
    ],
    processSteps: [
      {
        title: 'Data Selection',
        description: 'We select appropriate RSMeans cost data for project elements.'
      },
      {
        title: 'Location Adjustment',
        description: 'We apply location factors and market adjustments.'
      },
      {
        title: 'Cost Development',
        description: 'We develop comprehensive costs using current RSMeans data.'
      },
      {
        title: 'Market Validation',
        description: 'We validate costs against local market conditions.'
      }
    ],
    faqs: [
      {
        question: 'How current is the RSMeans data you use?',
        answer: 'We use the most current RSMeans data available and apply appropriate escalation factors.'
      },
      {
        question: 'Do you adjust for local market conditions?',
        answer: 'Yes, we apply location factors and adjust for local market variations.'
      }
    ],
    relatedServices: ['excel-estimating', 'detailed-estimates']
  },
  {
    id: 'excel-estimating',
    title: 'Microsoft Excel Estimating Models',
    icon: <FileText size={40} />,
    shortDescription: 'Custom Excel-based estimating models and templates.',
    description: 'Our Excel estimating service develops custom spreadsheet models and templates for construction cost estimation with advanced formulas, databases, and reporting capabilities.',
    bannerImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Custom spreadsheet development',
      'Advanced formula integration',
      'Database connectivity',
      'Automated calculations',
      'Professional formatting',
      'Template standardization',
      'Version control systems',
      'User training and support'
    ],
    processSteps: [
      {
        title: 'Requirements Analysis',
        description: 'We analyze your estimating requirements and workflow.'
      },
      {
        title: 'Model Development',
        description: 'We develop custom Excel models with appropriate functionality.'
      },
      {
        title: 'Testing and Validation',
        description: 'We test models thoroughly and validate calculations.'
      },
      {
        title: 'Training and Support',
        description: 'We provide training and ongoing support for model usage.'
      }
    ],
    faqs: [
      {
        question: 'Can you integrate with external databases?',
        answer: 'Yes, we can connect Excel models to external cost databases and pricing sources.'
      },
      {
        question: 'Do you provide ongoing model updates?',
        answer: 'Yes, we can provide ongoing maintenance and updates to keep models current.'
      }
    ],
    relatedServices: ['costx-trimble', 'planswift-estimation']
  },
  {
    id: 'costx-trimble',
    title: 'CostX / Trimble / STACK',
    icon: <Settings size={40} />,
    shortDescription: 'Advanced estimating using CostX, Trimble, and STACK platforms.',
    description: 'Our advanced software service utilizes industry-leading platforms like CostX, Trimble, and STACK to provide sophisticated takeoff and estimating capabilities with cloud-based collaboration.',
    bannerImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Advanced takeoff capabilities',
      'Cloud-based collaboration',
      'Integrated cost databases',
      'Real-time project sharing',
      'Mobile accessibility',
      'Advanced reporting tools',
      'API integrations',
      'Enterprise-level security'
    ],
    processSteps: [
      {
        title: 'Platform Setup',
        description: 'We configure the appropriate platform for your project needs.'
      },
      {
        title: 'Advanced Takeoff',
        description: 'We perform sophisticated takeoffs using platform-specific tools.'
      },
      {
        title: 'Collaboration Setup',
        description: 'We set up collaborative workflows for team access.'
      },
      {
        title: 'Advanced Reporting',
        description: 'We generate comprehensive reports with advanced analytics.'
      }
    ],
    faqs: [
      {
        question: 'Which platform is best for my project type?',
        answer: 'We recommend platforms based on project complexity, team size, and collaboration requirements.'
      },
      {
        question: 'Can you provide platform training?',
        answer: 'Yes, we provide comprehensive training on platform usage and best practices.'
      }
    ],
    relatedServices: ['proest-buildertrend', 'excel-estimating']
  },
  {
    id: 'proest-buildertrend',
    title: 'ProEst / CoConstruct / Buildertrend',
    icon: <Package size={40} />,
    shortDescription: 'Comprehensive project management and estimating integration.',
    description: 'Our integrated platform service combines estimating with project management using ProEst, CoConstruct, and Buildertrend for complete project lifecycle management.',
    bannerImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Integrated estimating and PM',
      'Client portal access',
      'Change order management',
      'Progress tracking',
      'Document management',
      'Communication tools',
      'Financial integration',
      'Mobile functionality'
    ],
    processSteps: [
      {
        title: 'Platform Integration',
        description: 'We integrate estimating with project management workflows.'
      },
      {
        title: 'Process Setup',
        description: 'We establish processes for estimate-to-project handoff.'
      },
      {
        title: 'Training Implementation',
        description: 'We train teams on integrated platform usage.'
      },
      {
        title: 'Ongoing Support',
        description: 'We provide ongoing support for platform optimization.'
      }
    ],
    faqs: [
      {
        question: 'How do estimates transfer to project management?',
        answer: 'Estimates seamlessly transfer to create project budgets and tracking systems.'
      },
      {
        question: 'Can clients access estimates and projects?',
        answer: 'Yes, these platforms provide client portals for estimate review and project tracking.'
      }
    ],
    relatedServices: ['costx-trimble', 'excel-estimating']
  }
];

export const documentationServices: Service[] = [
  {
    id: 'bill-of-quantities',
    title: 'Bill of Quantities (BOQ) Preparation',
    icon: <ClipboardList size={40} />,
    shortDescription: 'Professional BOQ preparation with detailed quantity breakdowns.',
    description: 'Our BOQ preparation service provides comprehensive bill of quantities documents with detailed item descriptions, specifications, and quantities organized according to industry standards.',
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Standardized BOQ format',
      'Detailed item descriptions',
      'Quantity calculations',
      'Unit specifications',
      'Trade organization',
      'Pricing integration capability',
      'Professional formatting',
      'Quality assurance review'
    ],
    processSteps: [
      {
        title: 'Document Analysis',
        description: 'We analyze all project documents for BOQ development.'
      },
      {
        title: 'Item Development',
        description: 'We develop detailed items with specifications and descriptions.'
      },
      {
        title: 'Quantity Integration',
        description: 'We integrate accurate quantities for each BOQ item.'
      },
      {
        title: 'Final Documentation',
        description: 'We produce professional BOQ documents ready for tendering.'
      }
    ],
    faqs: [
      {
        question: 'What BOQ standards do you follow?',
        answer: 'We follow industry standards including RICS, CSI, and other recognized BOQ formats.'
      },
      {
        question: 'Can you integrate pricing into BOQs?',
        answer: 'Yes, we can prepare priced BOQs with current market rates when required.'
      }
    ],
    relatedServices: ['material-cost-reports', 'bid-package-prep']
  },
  {
    id: 'material-cost-reports',
    title: 'Material Cost Reports',
    icon: <DollarSign size={40} />,
    shortDescription: 'Detailed material cost analysis and reporting.',
    description: 'Our material cost reporting service provides comprehensive analysis of material costs including current pricing, market trends, and cost optimization recommendations.',
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Current material pricing',
      'Market trend analysis',
      'Cost comparison studies',
      'Alternative material options',
      'Supplier cost analysis',
      'Volume discount evaluation',
      'Timing recommendations',
      'Cost optimization strategies'
    ],
    processSteps: [
      {
        title: 'Material Identification',
        description: 'We identify all materials required for the project.'
      },
      {
        title: 'Market Research',
        description: 'We research current pricing and market conditions.'
      },
      {
        title: 'Analysis Development',
        description: 'We develop comprehensive cost analysis and comparisons.'
      },
      {
        title: 'Report Generation',
        description: 'We generate detailed reports with recommendations.'
      }
    ],
    faqs: [
      {
        question: 'How current is your material pricing?',
        answer: 'We maintain current pricing databases and update regularly with market conditions.'
      },
      {
        question: 'Do you recommend alternative materials?',
        answer: 'Yes, we analyze alternatives that could provide cost savings while maintaining quality.'
      }
    ],
    relatedServices: ['vendor-comparison', 'cost-breakdown-structure']
  },
  {
    id: 'vendor-comparison',
    title: 'Vendor Comparison Reports',
    icon: <BarChart3 size={40} />,
    shortDescription: 'Comprehensive vendor analysis and comparison studies.',
    description: 'Our vendor comparison service evaluates suppliers and contractors across multiple criteria including cost, quality, delivery, and performance to support procurement decisions.',
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Multi-criteria vendor analysis',
      'Cost comparison matrices',
      'Quality assessment',
      'Delivery capability evaluation',
      'Performance history review',
      'Risk assessment',
      'Recommendation development',
      'Decision support tools'
    ],
    processSteps: [
      {
        title: 'Criteria Development',
        description: 'We establish evaluation criteria based on project requirements.'
      },
      {
        title: 'Vendor Research',
        description: 'We research and gather information on potential vendors.'
      },
      {
        title: 'Comparative Analysis',
        description: 'We perform detailed analysis across all evaluation criteria.'
      },
      {
        title: 'Recommendation Report',
        description: 'We provide recommendations with supporting analysis.'
      }
    ],
    faqs: [
      {
        question: 'What criteria do you use for vendor evaluation?',
        answer: 'We evaluate cost, quality, delivery, experience, capacity, and financial stability.'
      },
      {
        question: 'Can you help with vendor prequalification?',
        answer: 'Yes, we can develop prequalification criteria and evaluate vendor capabilities.'
      }
    ],
    relatedServices: ['material-cost-reports', 'bid-package-prep']
  },
  {
    id: 'bid-package-prep',
    title: 'Bid Package Preparation',
    icon: <Package size={40} />,
    shortDescription: 'Complete bid package development for contractor procurement.',
    description: 'Our bid package preparation service develops comprehensive tender documents including scope definitions, specifications, terms, and evaluation criteria for successful contractor procurement.',
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Scope of work definition',
      'Technical specifications',
      'Contract terms and conditions',
      'Bid form development',
      'Evaluation criteria',
      'Pre-qualification requirements',
      'Schedule requirements',
      'Documentation organization'
    ],
    processSteps: [
      {
        title: 'Scope Definition',
        description: 'We clearly define the scope of work and requirements.'
      },
      {
        title: 'Document Development',
        description: 'We develop comprehensive bid documents and specifications.'
      },
      {
        title: 'Review and Coordination',
        description: 'We coordinate reviews and finalize bid packages.'
      },
      {
        title: 'Distribution Support',
        description: 'We support bid package distribution and contractor communications.'
      }
    ],
    faqs: [
      {
        question: 'What documents are included in bid packages?',
        answer: 'Bid packages include drawings, specifications, scope of work, contract terms, and bid forms.'
      },
      {
        question: 'Do you help with bid evaluation criteria?',
        answer: 'Yes, we develop fair and comprehensive evaluation criteria for contractor selection.'
      }
    ],
    relatedServices: ['cost-breakdown-structure', 'bill-of-quantities']
  },
  {
    id: 'cost-breakdown-structure',
    title: 'Cost Breakdown Structure (CBS) Reports',
    icon: <TrendingUp size={40} />,
    shortDescription: 'Hierarchical cost breakdown and organization systems.',
    description: 'Our CBS reporting service organizes project costs into logical hierarchies enabling better cost control, analysis, and reporting throughout the project lifecycle.',
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Hierarchical cost organization',
      'Standard cost coding systems',
      'Multi-level cost rollups',
      'Integration with project phases',
      'Cost control facilitation',
      'Reporting standardization',
      'Budget tracking support',
      'Variance analysis capability'
    ],
    processSteps: [
      {
        title: 'Structure Development',
        description: 'We develop appropriate cost breakdown structures for the project.'
      },
      {
        title: 'Cost Allocation',
        description: 'We allocate costs to appropriate CBS categories.'
      },
      {
        title: 'System Implementation',
        description: 'We implement CBS systems for ongoing cost management.'
      },
      {
        title: 'Reporting Framework',
        description: 'We establish reporting frameworks using the CBS structure.'
      }
    ],
    faqs: [
      {
        question: 'What cost coding systems do you use?',
        answer: 'We use industry-standard systems like CSI MasterFormat, UNIFORMAT, and custom coding systems.'
      },
      {
        question: 'How does CBS help with cost control?',
        answer: 'CBS provides organized structure for tracking, reporting, and controlling costs at multiple levels.'
      }
    ],
    relatedServices: ['historical-cost-database', 'vendor-comparison']
  },
  {
    id: 'historical-cost-database',
    title: 'Historical Cost Database',
    icon: <Activity size={40} />,
    shortDescription: 'Development and maintenance of historical cost databases.',
    description: 'Our historical cost database service develops and maintains comprehensive databases of historical project costs to support accurate estimating and benchmarking for future projects.',
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Cost data collection and organization',
      'Trend analysis capabilities',
      'Inflation adjustment factors',
      'Project similarity matching',
      'Benchmarking tools',
      'Data quality assurance',
      'Regular database updates',
      'Reporting and analytics'
    ],
    processSteps: [
      {
        title: 'Data Collection',
        description: 'We collect and organize historical cost data from completed projects.'
      },
      {
        title: 'Database Development',
        description: 'We develop structured databases with search and analysis capabilities.'
      },
      {
        title: 'Analysis Tools',
        description: 'We create tools for cost analysis and trend identification.'
      },
      {
        title: 'Ongoing Maintenance',
        description: 'We maintain and update databases with new project data.'
      }
    ],
    faqs: [
      {
        question: 'How do you ensure data quality?',
        answer: 'We implement quality control processes and validation procedures for all cost data.'
      },
      {
        question: 'Can you develop custom databases?',
        answer: 'Yes, we can develop custom databases tailored to specific company or project types.'
      }
    ],
    relatedServices: ['cost-breakdown-structure', 'material-cost-reports']
  }
];

export const projectSupportServices: Service[] = [
  {
    id: 'scope-gap-analysis',
    title: 'Scope Gap Analysis',
    icon: <CheckCircle size={40} />,
    shortDescription: 'Identification and analysis of project scope gaps and omissions.',
    description: 'Our scope gap analysis service identifies missing elements, inconsistencies, and potential issues in project scope to prevent costly surprises during construction.',
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Comprehensive scope review',
      'Gap identification',
      'Risk assessment',
      'Cost impact analysis',
      'Recommendation development',
      'Documentation of findings',
      'Priority ranking',
      'Resolution tracking'
    ],
    processSteps: [
      {
        title: 'Scope Review',
        description: 'We thoroughly review all project documents and scope definitions.'
      },
      {
        title: 'Gap Identification',
        description: 'We identify missing elements and potential scope gaps.'
      },
      {
        title: 'Impact Analysis',
        description: 'We analyze the cost and schedule impact of identified gaps.'
      },
      {
        title: 'Resolution Plan',
        description: 'We develop plans for addressing identified scope issues.'
      }
    ],
    faqs: [
      {
        question: 'When should scope gap analysis be performed?',
        answer: 'Scope gap analysis is most valuable before finalizing contracts and during design development.'
      },
      {
        question: 'What types of gaps do you typically find?',
        answer: 'Common gaps include missing specifications, unclear responsibilities, and coordination issues between trades.'
      }
    ],
    relatedServices: ['subcontractor-quote-review', 'estimate-validation']
  },
  {
    id: 'subcontractor-quote-review',
    title: 'Subcontractor Quote Review',
    icon: <Users size={40} />,
    shortDescription: 'Professional review and analysis of subcontractor quotations.',
    description: 'Our subcontractor quote review service provides comprehensive analysis of subcontractor proposals including scope verification, pricing validation, and risk assessment.',
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Quote completeness review',
      'Scope verification',
      'Pricing validation',
      'Terms and conditions analysis',
      'Risk identification',
      'Comparative analysis',
      'Negotiation support',
      'Documentation review'
    ],
    processSteps: [
      {
        title: 'Quote Collection',
        description: 'We collect and organize all subcontractor quotations.'
      },
      {
        title: 'Scope Analysis',
        description: 'We verify that quotes cover all required scope elements.'
      },
      {
        title: 'Pricing Review',
        description: 'We validate pricing against market rates and project requirements.'
      },
      {
        title: 'Recommendation Report',
        description: 'We provide detailed analysis and selection recommendations.'
      }
    ],
    faqs: [
      {
        question: 'What do you look for in subcontractor quotes?',
        answer: 'We verify scope completeness, pricing reasonableness, terms compliance, and risk factors.'
      },
      {
        question: 'Can you help with subcontractor negotiations?',
        answer: 'Yes, we provide analysis and support for subcontractor negotiations.'
      }
    ],
    relatedServices: ['estimate-validation', 'cost-benchmarking']
  },
  {
    id: 'estimate-validation',
    title: 'Estimate Validation & Peer Review',
    icon: <CheckCircle size={40} />,
    shortDescription: 'Independent validation and peer review of construction estimates.',
    description: 'Our estimate validation service provides independent review of construction estimates to verify accuracy, completeness, and reasonableness before project commitment.',
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Independent estimate review',
      'Accuracy verification',
      'Completeness assessment',
      'Market rate validation',
      'Risk factor evaluation',
      'Methodology review',
      'Quality assurance',
      'Peer review process'
    ],
    processSteps: [
      {
        title: 'Estimate Review',
        description: 'We thoroughly review the estimate methodology and calculations.'
      },
      {
        title: 'Validation Testing',
        description: 'We test key quantities and pricing against independent sources.'
      },
      {
        title: 'Risk Assessment',
        description: 'We assess estimate risks and contingency adequacy.'
      },
      {
        title: 'Validation Report',
        description: 'We provide detailed validation findings and recommendations.'
      }
    ],
    faqs: [
      {
        question: 'Who should perform estimate validation?',
        answer: 'Validation should be performed by independent estimators not involved in the original estimate.'
      },
      {
        question: 'What level of accuracy can validation achieve?',
        answer: 'Validation can identify significant errors and improve estimate confidence levels.'
      }
    ],
    relatedServices: ['cost-benchmarking', 'scope-gap-analysis']
  },
  {
    id: 'cost-benchmarking',
    title: 'Project Cost Benchmarking',
    icon: <BarChart3 size={40} />,
    shortDescription: 'Comparative cost analysis against industry benchmarks.',
    description: 'Our cost benchmarking service compares project costs against industry standards and similar projects to validate pricing and identify potential cost optimization opportunities.',
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Industry benchmark comparison',
      'Similar project analysis',
      'Cost per unit calculations',
      'Performance metrics',
      'Market position analysis',
      'Optimization identification',
      'Trend analysis',
      'Reporting dashboards'
    ],
    processSteps: [
      {
        title: 'Benchmark Development',
        description: 'We develop appropriate benchmarks for the project type and market.'
      },
      {
        title: 'Comparative Analysis',
        description: 'We compare project costs against established benchmarks.'
      },
      {
        title: 'Variance Analysis',
        description: 'We analyze significant variances and identify causes.'
      },
      {
        title: 'Optimization Plan',
        description: 'We develop recommendations for cost optimization.'
      }
    ],
    faqs: [
      {
        question: 'What benchmarks do you use for comparison?',
        answer: 'We use industry databases, similar projects, and market standards for benchmarking.'
      },
      {
        question: 'How do you account for project uniqueness?',
        answer: 'We adjust benchmarks for project-specific factors and unique requirements.'
      }
    ],
    relatedServices: ['cash-flow-forecasting', 'estimate-validation']
  },
  {
    id: 'cash-flow-forecasting',
    title: 'Cash Flow Forecasting',
    icon: <Activity size={40} />,
    shortDescription: 'Project cash flow analysis and forecasting services.',
    description: 'Our cash flow forecasting service develops detailed cash flow projections for construction projects including expenditure timing, payment schedules, and working capital requirements.',
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Expenditure timing analysis',
      'Payment schedule integration',
      'Working capital requirements',
      'Retention impact analysis',
      'Contingency cash planning',
      'Scenario modeling',
      'Financial milestone tracking',
      'Risk factor assessment'
    ],
    processSteps: [
      {
        title: 'Schedule Integration',
        description: 'We integrate project schedules with cost estimates for timing.'
      },
      {
        title: 'Payment Modeling',
        description: 'We model payment schedules and retention impacts.'
      },
      {
        title: 'Cash Flow Development',
        description: 'We develop detailed cash flow projections by period.'
      },
      {
        title: 'Scenario Analysis',
        description: 'We analyze different scenarios and their cash flow impacts.'
      }
    ],
    faqs: [
      {
        question: 'How detailed are your cash flow projections?',
        answer: 'We provide monthly or weekly cash flow projections depending on project needs.'
      },
      {
        question: 'Do you account for change orders in cash flow?',
        answer: 'Yes, we can model the impact of potential change orders on cash flow.'
      }
    ],
    relatedServices: ['cost-benchmarking', 'scope-gap-analysis']
  }
];

export const constructionManagementServices: Service[] = [
  {
    id: 'project-execution',
    title: 'Project Execution',
    icon: <Activity size={40} />,
    shortDescription: 'Comprehensive project execution and delivery management services.',
    description: 'Our project execution service ensures seamless delivery of construction projects through effective planning, coordination, and control of all project activities from initiation to completion.',
    bannerImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Project delivery strategy development',
      'Resource allocation and management',
      'Quality control implementation',
      'Progress monitoring and reporting',
      'Risk management and mitigation',
      'Change order management',
      'Project documentation control',
      'Stakeholder communication'
    ],
    processSteps: [
      {
        title: 'Project Planning',
        description: 'We develop comprehensive execution plans aligned with project objectives.'
      },
      {
        title: 'Implementation',
        description: 'We execute project activities according to established plans and procedures.'
      },
      {
        title: 'Monitoring',
        description: 'We track progress and performance against project baselines.'
      },
      {
        title: 'Control',
        description: 'We implement corrective actions to maintain project alignment.'
      }
    ],
    faqs: [
      {
        question: 'How do you ensure project success?',
        answer: 'We implement proven project management methodologies, maintain clear communication, and proactively address potential issues.'
      },
      {
        question: 'What types of projects do you handle?',
        answer: 'We manage projects of all sizes and complexities, from small renovations to large-scale commercial developments.'
      }
    ],
    relatedServices: ['planning-scheduling', 'site-supervision', 'subcontractor-coordination']
  },
  {
    id: 'planning-scheduling',
    title: 'Planning & Scheduling',
    icon: <ClipboardList size={40} />,
    shortDescription: 'Strategic project planning and detailed scheduling services.',
    description: 'Our planning and scheduling services provide comprehensive project timelines and resource allocation strategies to ensure efficient project delivery and optimal resource utilization.',
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Master schedule development',
      'Resource-loaded scheduling',
      'Critical path analysis',
      'Milestone tracking',
      'Schedule risk assessment',
      'Progress monitoring',
      'Recovery planning',
      'Schedule optimization'
    ],
    processSteps: [
      {
        title: 'Requirements Analysis',
        description: 'We analyze project requirements and constraints to develop realistic schedules.'
      },
      {
        title: 'Schedule Development',
        description: 'We create detailed schedules with appropriate activities and dependencies.'
      },
      {
        title: 'Resource Planning',
        description: 'We optimize resource allocation across project activities.'
      },
      {
        title: 'Schedule Control',
        description: 'We monitor progress and update schedules to maintain project alignment.'
      }
    ],
    faqs: [
      {
        question: 'What scheduling tools do you use?',
        answer: 'We use industry-standard scheduling software like Primavera P6 and Microsoft Project.'
      },
      {
        question: 'How do you handle schedule delays?',
        answer: 'We identify delay impacts, develop recovery strategies, and implement acceleration measures when needed.'
      }
    ],
    relatedServices: ['project-execution', 'site-supervision', 'subcontractor-coordination']
  },
  {
    id: 'site-supervision',
    title: 'Site Supervision',
    icon: <HardHat size={40} />,
    shortDescription: 'Professional construction site supervision and management.',
    description: 'Our site supervision service provides experienced construction professionals to oversee daily site operations, ensure quality standards, and maintain safe working conditions.',
    bannerImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Quality control oversight',
      'Safety program implementation',
      'Schedule compliance monitoring',
      'Subcontractor coordination',
      'Site logistics management',
      'Progress documentation',
      'Issue resolution',
      'Regulatory compliance'
    ],
    processSteps: [
      {
        title: 'Site Setup',
        description: 'We establish site protocols and management systems.'
      },
      {
        title: 'Daily Operations',
        description: 'We oversee construction activities and coordinate work crews.'
      },
      {
        title: 'Quality Control',
        description: 'We inspect work and ensure compliance with specifications.'
      },
      {
        title: 'Documentation',
        description: 'We maintain detailed records of site activities and progress.'
      }
    ],
    faqs: [
      {
        question: 'What are your supervisors\' qualifications?',
        answer: 'Our supervisors have extensive construction experience and relevant certifications in safety and quality control.'
      },
      {
        question: 'How do you handle site emergencies?',
        answer: 'We have established emergency response procedures and maintain 24/7 availability for critical situations.'
      }
    ],
    relatedServices: ['safety-compliance', 'subcontractor-coordination', 'project-execution']
  },
  {
    id: 'subcontractor-coordination',
    title: 'Subcontractor Coordination',
    icon: <Users size={40} />,
    shortDescription: 'Effective management and coordination of subcontractors.',
    description: 'Our subcontractor coordination service ensures efficient integration of multiple trades, optimizing workflow and maintaining quality standards across all subcontracted work.',
    bannerImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Trade coordination meetings',
      'Schedule integration',
      'Quality control oversight',
      'Payment processing',
      'Change order management',
      'Performance monitoring',
      'Conflict resolution',
      'Documentation control'
    ],
    processSteps: [
      {
        title: 'Subcontractor Selection',
        description: 'We assist in evaluating and selecting qualified subcontractors.'
      },
      {
        title: 'Coordination',
        description: 'We coordinate work sequences and resolve conflicts between trades.'
      },
      {
        title: 'Performance Monitoring',
        description: 'We track subcontractor progress and quality compliance.'
      },
      {
        title: 'Issue Resolution',
        description: 'We address and resolve subcontractor-related issues promptly.'
      }
    ],
    faqs: [
      {
        question: 'How do you prevent trade conflicts?',
        answer: 'We use detailed scheduling, regular coordination meetings, and proactive communication to minimize conflicts.'
      },
      {
        question: 'What if a subcontractor underperforms?',
        answer: 'We have established procedures for performance improvement and, if necessary, subcontractor replacement.'
      }
    ],
    relatedServices: ['project-execution', 'site-supervision', 'planning-scheduling']
  },
  {
    id: 'technology-innovation',
    title: 'Technology & Innovation',
    icon: <Monitor size={40} />,
    shortDescription: 'Implementation of advanced construction technologies and innovative solutions.',
    description: 'Our technology and innovation service helps projects leverage cutting-edge construction technologies, digital tools, and innovative methods to improve efficiency and project outcomes.',
    bannerImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'BIM implementation',
      'Digital collaboration tools',
      'Project management software',
      'Mobile field solutions',
      'Virtual/Augmented reality',
      'Drone technology',
      'IoT integration',
      'Data analytics'
    ],
    processSteps: [
      {
        title: 'Needs Assessment',
        description: 'We evaluate project requirements and identify suitable technology solutions.'
      },
      {
        title: 'Implementation',
        description: 'We deploy and integrate selected technologies into project workflows.'
      },
      {
        title: 'Training',
        description: 'We provide training and support for technology adoption.'
      },
      {
        title: 'Optimization',
        description: 'We monitor and optimize technology utilization throughout the project.'
      }
    ],
    faqs: [
      {
        question: 'What technologies do you implement?',
        answer: 'We work with various construction technologies including BIM, project management software, and field automation tools.'
      },
      {
        question: 'How do you ensure successful adoption?',
        answer: 'We provide comprehensive training and ongoing support to ensure effective technology implementation.'
      }
    ],
    relatedServices: ['project-execution', 'planning-scheduling', 'safety-compliance']
  },
  {
    id: 'safety-compliance',
    title: 'Safety & Compliance',
    icon: <CheckCircle size={40} />,
    shortDescription: 'Comprehensive safety management and regulatory compliance services.',
    description: 'Our safety and compliance service ensures adherence to all safety regulations, implements effective safety programs, and maintains required documentation for regulatory compliance.',
    bannerImage: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Safety program development',
      'Risk assessment',
      'Training coordination',
      'Inspection protocols',
      'Incident investigation',
      'Documentation management',
      'Regulatory reporting',
      'Emergency planning'
    ],
    processSteps: [
      {
        title: 'Program Development',
        description: 'We create comprehensive safety programs tailored to project needs.'
      },
      {
        title: 'Implementation',
        description: 'We implement safety measures and training programs.'
      },
      {
        title: 'Monitoring',
        description: 'We conduct regular inspections and safety audits.'
      },
      {
        title: 'Reporting',
        description: 'We maintain required documentation and submit regulatory reports.'
      }
    ],
    faqs: [
      {
        question: 'What safety standards do you follow?',
        answer: 'We adhere to OSHA regulations and industry best practices for construction safety.'
      },
      {
        question: 'How do you handle safety incidents?',
        answer: 'We have established procedures for incident investigation, reporting, and corrective action implementation.'
      }
    ],
    relatedServices: ['site-supervision', 'project-execution', 'subcontractor-coordination']
  },
  {
    id: 'financial-legal',
    title: 'Financial & Legal',
    icon: <DollarSign size={40} />,
    shortDescription: 'Construction financial management and legal compliance services.',
    description: 'Our financial and legal service provides comprehensive management of project finances, contract administration, and legal compliance to protect client interests and ensure project success.',
    bannerImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Budget management',
      'Cost control',
      'Contract administration',
      'Change order processing',
      'Payment applications',
      'Claims management',
      'Legal compliance',
      'Risk mitigation'
    ],
    processSteps: [
      {
        title: 'Financial Planning',
        description: 'We develop comprehensive financial management strategies.'
      },
      {
        title: 'Contract Review',
        description: 'We review and administer construction contracts.'
      },
      {
        title: 'Cost Control',
        description: 'We monitor and control project costs.'
      },
      {
        title: 'Documentation',
        description: 'We maintain required financial and legal documentation.'
      }
    ],
    faqs: [
      {
        question: 'How do you manage project finances?',
        answer: 'We use established systems for budget tracking, cost control, and financial reporting.'
      },
      {
        question: 'What contract types do you handle?',
        answer: 'We work with various contract types including lump sum, cost-plus, and GMP contracts.'
      }
    ],
    relatedServices: ['project-execution', 'planning-scheduling', 'subcontractor-coordination']
  }
];

export const allServices = [
  ...quantityTakeoffServices,
  ...costEstimationServices,
  ...specializedServices,
  ...softwareBasedServices,
  ...documentationServices,
  ...projectSupportServices,
  ...constructionManagementServices
];
