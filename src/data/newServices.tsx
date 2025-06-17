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
  Activity,
  Ruler,
  Shield,
  Droplet,
  Mountain,
  Truck,
  Construction,
  Shovel,
  Map,
  Satellite,
  Factory,
  School,
  Landmark,
  Anchor,
  Layers,
  Store,
  Workflow,
  ClipboardCheck,
  Package2,
  Trello
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
  industries?: Array<{
    title: string;
    description: string;
  }>;
  serviceDetails?: {
    drywallServices?: {
      title: string;
      description: string;
      materials: string[];
      applications: string[];
    };
    insulationServices?: {
      title: string;
      description: string;
      materials: string[];
      applications: string[];
    };
    roofingServices?: {
      title: string;
      description: string;
      materials: string[];
      applications: string[];
    };
    waterproofingServices?: {
      title: string;
      description: string;
      materials: string[];
      applications: string[];
    };
  };
  sampleReport?: {
    available: boolean;
    description: string;
    previewLink?: string;
  };
  callToAction?: {
    primary: string;
    secondary: string;
    description: string;
  };
}

export const quantityTakeoffServices: Service[] = [
  {
    id: 'sitework-earthworks',
    title: 'Sitework & Earthworks Takeoffs',
    icon: <Mountain size={40} />,
    shortDescription: 'Comprehensive sitework and earthworks estimating services with GPS-based takeoffs and region-specific pricing.',
    description: `At Paradise Estimating, we offer comprehensive sitework and earthworks estimating services to help ensure your construction project gets off to a solid start. Our team uses cutting-edge estimating technology to provide precise, cost-effective takeoffs for site grading, excavation, and foundation phases of your build. With our accurate, professional estimates, you can avoid costly delays and unforeseen issues.

    Our sitework takeoff services cover everything from initial site preparation to final grading, ensuring you have accurate quantities for clearing, grubbing, demolition, and erosion control. We understand the importance of precise calculations in this critical phase of construction.

    For earthworks, we utilize advanced GPS and drone survey data to provide exact cut/fill calculations, helping you optimize your excavation strategy and reduce unnecessary costs. Our comprehensive approach includes detailed analysis of soil conditions and equipment requirements.`,
    bannerImage: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'GPS-Based Takeoffs: Precise earthwork calculations to reduce waste',
      'Region-Specific Pricing: Soil analysis for local conditions (clay, sand, bedrock)',
      'Equipment Cost Forecasting: Detailed equipment analysis for each stage',
      'Trimble Earthworks Integration: State-of-the-art technology integration',
      'Drone Survey Processing: Fast, accurate aerial data processing',
      'GIS Mapping: Advanced terrain analysis for accurate planning'
    ],
    processSteps: [
      {
        title: 'Plan Submission',
        description: 'Upload your project plans through our secure online platform.'
      },
      {
        title: 'Site Analysis',
        description: 'Our team analyzes site conditions, terrain, and local factors.'
      },
      {
        title: 'Quantity Calculation',
        description: 'Precise calculations using GPS and drone data for accuracy.'
      },
      {
        title: 'Report Delivery',
        description: 'Receive comprehensive reports with detailed breakdowns.'
      }
    ],
    industries: [
      {
        title: 'Civil Contractors',
        description: 'Infrastructure and site development projects.'
      },
      {
        title: 'Commercial Developers',
        description: 'Large-scale commercial and industrial developments.'
      },
      {
        title: 'Residential Builders',
        description: 'Housing developments and custom home sites.'
      },
      {
        title: 'Earthwork Specialists',
        description: 'Specialized excavation and grading contractors.'
      }
    ],
    faqs: [
      {
        question: "How accurate are your earthwork calculations?",
        answer: "Our GPS-based takeoffs provide 98% accuracy for cut/fill calculations, helping you avoid costly over-excavation."
      },
      {
        question: "Do you account for different soil types?",
        answer: "Yes, we analyze local soil conditions (clay, sand, bedrock) and factor them into our estimates for more accurate pricing."
      },
      {
        question: "Can you handle complex terrain?",
        answer: "Absolutely. Our advanced GIS mapping and drone survey processing allow us to handle even the most challenging terrain conditions."
      },
      {
        question: "What's included in the final report?",
        answer: "Our reports include detailed cut/fill volumes, material quantities, equipment recommendations, and cost breakdowns."
      }
    ],
    relatedServices: ['quantity-takeoff', 'concrete-takeoff', 'masonry-takeoff'],
    serviceDetails: {
      drywallServices: {
        title: 'Sitework Services',
        description: 'Our comprehensive sitework estimating services cover all aspects of site preparation and development.',
        materials: [
          'Clearing & Grubbing: Accurate estimates for vegetation removal and site clearing',
          'Site Demolition: Detailed quantities for structure removal and site preparation',
          'Erosion Control: Complete material takeoffs for erosion prevention measures',
          'Temporary Utilities: Estimates for temporary power, water, and site facilities',
          'Site Drainage: Comprehensive quantities for drainage systems and materials',
          'Paving & Surfacing: Detailed takeoffs for all paving materials and surfaces'
        ],
        applications: [
          'Commercial Development: Precise estimates for large-scale commercial sites',
          'Residential Development: Detailed takeoffs for housing developments',
          'Industrial Sites: Comprehensive quantities for industrial facility preparation'
        ]
      },
      insulationServices: {
        title: 'Earthworks Services',
        description: 'Our earthworks estimating services provide precise calculations for all excavation and grading needs.',
        materials: [
          'Cut/Fill Calculations: Exact volume calculations for optimal site balance',
          'Mass Excavation: Detailed quantities for large-scale earth moving',
          'Trenching & Backfill: Precise estimates for utility trenches and backfill',
          'Soil Stabilization: Material quantities for ground improvement',
          'Rock Removal: Accurate volumes for rock excavation and removal',
          'Compaction Testing: Estimates for required testing and verification'
        ],
        applications: [
          'Site Grading: Precise calculations for achieving final grade',
          'Foundation Preparation: Detailed quantities for building foundations',
          'Infrastructure Development: Comprehensive takeoffs for roads and utilities'
        ]
      }
    },
    sampleReport: {
      available: true,
      description: 'View a sample of our detailed sitework and earthworks takeoff reports, including cut/fill calculations, material quantities, and equipment recommendations.',
      previewLink: '[Link to sample or embedded preview]'
    },
    callToAction: {
      primary: 'Get Your Estimate',
      secondary: 'View Sample Report',
      description: 'Stop guessing ground conditions – get engineered estimates backed by cutting-edge technology.'
    }
  },
  {
    id: 'drywall-insulation',
    title: 'Drywall & Insulation Takeoffs',
    icon: <FileText size={40} />,
    shortDescription: 'Minimize waste and boost bid accuracy with professional estimating services for contractors, builders, and suppliers.',
    description: `Our drywall and insulation estimating services are designed to streamline your project planning, save you time, and enhance your bid accuracy. With years of experience serving residential, commercial, and industrial projects, we provide you with precise takeoffs that minimize material waste and ensure you have exactly what you need for the job.

    Our drywall takeoff services are designed to provide you with accurate, detailed material estimates for every aspect of your drywall installation. Whether you are working on new construction, a renovation, or a multi-family housing project, we ensure you have the materials needed for a successful build.

    Accurate insulation estimates are essential for achieving energy efficiency and cost-effectiveness in any building. Whether you are working on a residential or commercial project, our insulation takeoff services ensure that you only order the amount of material needed to meet performance specifications, reducing waste and cost.`,
    bannerImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Fast Turnaround: Most projects are completed within 24–48 hours',
      'Cost-Saving Accuracy: Our precise estimates help avoid over-ordering and shortages',
      'Software Compatibility: Our reports are fully compatible with popular estimating software like Planswift, Bluebeam, and AutoCAD',
      'Detailed Reports: Receive comprehensive reports, including square footage, material counts, and labor estimates',
      'Industry Experience: We serve a wide range of industries, including residential, commercial, and industrial projects'
    ],
    processSteps: [
      {
        title: 'Upload Your Plans',
        description: 'Submit your project plans in formats like PDF, DWG, or Revit.'
      },
      {
        title: 'Analysis & Measurement',
        description: 'Our experts carefully analyze your plans, measuring square footage, linear feet, and materials.'
      },
      {
        title: 'Receive Your Report',
        description: 'We provide a detailed takeoff report in your preferred format, whether it is Excel, CSV, or another format.'
      }
    ],
    industries: [
      {
        title: 'Residential Contractors',
        description: 'Custom homes, renovations, and multi-family housing projects.'
      },
      {
        title: 'Commercial Builders',
        description: 'Office buildings, retail spaces, and other commercial developments.'
      },
      {
        title: 'Insulation Subcontractors',
        description: 'Reliable estimates for all insulation types.'
      },
      {
        title: 'Drywall Suppliers',
        description: 'Precise takeoffs to support large material orders and bulk supply.'
      }
    ],
    faqs: [
      {
        question: "What's included in a drywall takeoff report?",
        answer: "Our drywall takeoff reports include material quantities (e.g., gypsum board, framing materials, joint compound), detailed square footage, and labor estimates for each task."
      },
      {
        question: "How do you calculate insulation material requirements?",
        answer: "We calculate insulation needs based on the layout of your project, the required R-values for different areas, and the insulation type selected (e.g., fiberglass, spray foam)."
      },
      {
        question: "Can you work with my estimating software?",
        answer: "Yes, we provide takeoff reports in formats compatible with leading estimating software like Planswift, Bluebeam, AutoCAD, and more."
      },
      {
        question: "Do you offer rush pricing?",
        answer: "Yes, we offer expedited services for projects with tight deadlines. Contact us for more information on our rush pricing options."
      }
    ],
    relatedServices: ['quantity-takeoff', 'concrete-takeoff', 'masonry-takeoff'],
    serviceDetails: {
      drywallServices: {
        title: 'Drywall Takeoff Services',
        description: 'Our drywall takeoff services are designed to provide you with accurate, detailed material estimates for every aspect of your drywall installation. Whether you are working on new construction, a renovation, or a multi-family housing project, we ensure you have the materials needed for a successful build.',
        materials: [
          'Gypsum Board: Estimates for various types of drywall, including standard, fire-rated, moisture-resistant, and specialty boards',
          'Framing Materials: Metal studs, drywall screws, joint compound, tape, and finishing materials are all covered in our estimates',
          'Ceiling Systems: Accurate takeoffs for lay-in and suspended ceiling systems for both commercial and residential projects'
        ],
        applications: [
          'New Construction: Reliable material calculations for new build projects',
          'Renovations & Remodels: Quick estimates for any renovation or remodel, including tenant improvements',
          'Multi-Family Housing: Efficient estimates for large-scale residential projects like apartments and condominiums'
        ]
      },
      insulationServices: {
        title: 'Insulation Takeoff Services',
        description: 'Accurate insulation estimates are essential for achieving energy efficiency and cost-effectiveness in any building. Whether you are working on a residential or commercial project, our insulation takeoff services ensure that you only order the amount of material needed to meet performance specifications, reducing waste and cost.',
        materials: [
          'Fiberglass Batts: Available in R-13 to R-38, suitable for both residential and commercial applications',
          'Spray Foam: Open and closed-cell foam for superior thermal performance and air sealing',
          'Rigid Foam Boards: XPS, EPS, and polyiso boards for exterior walls, foundations, and other applications',
          'Mineral Wool & Acoustic Insulation: For soundproofing and thermal insulation needs in both commercial and residential spaces'
        ],
        applications: [
          'Exterior Walls, Attics, Basements: Efficient insulation for temperature control and energy savings',
          'Soundproofing & Thermal Barriers: Ideal for areas where noise reduction or enhanced thermal insulation is required'
        ]
      }
    },
    sampleReport: {
      available: true,
      description: 'We provide detailed, accurate takeoff reports that include all material quantities, square footage breakdowns, and labor estimates. You can see exactly how we deliver these estimates by checking a sample report, which shows a portion of the data in a clear, easy-to-understand format.',
      previewLink: '[Link to sample or embedded preview]'
    },
    callToAction: {
      primary: 'Request a Quote Now',
      secondary: 'Get Started Today',
      description: 'Take the next step in simplifying your estimating process. Get precise drywall and insulation takeoffs tailored to your project needs.'
    }
  },
  {
    id: 'quantity-takeoff',
    title: 'Comprehensive Quantity Takeoff',
    icon: <Calculator size={40} />,
    shortDescription: 'Precise and reliable quantity takeoff services for contractors, developers, architects, and homeowners.',
    description: 'At Paradise Estimating, we offer precise and reliable quantity takeoff services for contractors, developers, architects, and homeowners. Our skilled estimators leverage cutting-edge software and industry expertise to provide quick and accurate material takeoffs and labor estimates. With a focus on speed and precision, we ensure that you have the accurate data you need to make informed decisions and meet tight deadlines.',
    bannerImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Comprehensive material quantity calculations',
      'Detailed breakdown by construction phase',
      'Waste factor calculations',
      'Unit cost analysis',
      'Digital takeoff technology utilization',
      'Procurement schedule recommendations',
      'Budget optimization strategies',
      'Material alternatives comparison'
    ],
    processSteps: [
      {
        title: 'Plan Analysis',
        description: 'We carefully review construction documents to understand project scope and requirements.'
      },
      {
        title: 'Digital Takeoff',
        description: 'Using advanced software, we calculate precise material quantities needed for each element.'
      },
      {
        title: 'Quality Check',
        description: 'We verify calculations and cross-reference with specifications to ensure accuracy.'
      },
      {
        title: 'Final Report',
        description: 'We deliver a comprehensive material list organized by phase, area, or material type.'
      }
    ],
    faqs: [
      {
        question: 'What types of projects do you handle?',
        answer: 'We handle all types of construction projects, from residential to commercial, industrial, and infrastructure.'
      },
      {
        question: 'How accurate are your takeoffs?',
        answer: 'Our digital takeoffs are highly accurate, with multiple quality checks to ensure precision.'
      }
    ],
    relatedServices: ['concrete-takeoff', 'masonry-takeoff', 'structural-steel']
  },
  {
    id: 'concrete-takeoff',
    title: 'Concrete Takeoff Services',
    icon: <Building2 size={40} />,
    shortDescription: 'Accurate concrete estimating services for residential & commercial projects.',
    description: 'Our concrete takeoff service provides detailed quantity calculations for all concrete elements in your project. We specialize in providing contractors, builders, and developers with reliable, precise concrete estimates. Using advanced software and leveraging the expertise of our experienced team, we eliminate errors and reduce the risk of cost overruns.',
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
        question: 'How accurate are your concrete estimating services?',
        answer: 'Our digital concrete takeoffs eliminate manual errors and ensure your estimates are 100% accurate.'
      },
      {
        question: 'Do you include labor costs in your concrete estimates?',
        answer: 'Yes, our concrete bid estimation includes comprehensive labor costs for an all-inclusive bid.'
      },
      {
        question: 'Can you handle urgent concrete estimating requests?',
        answer: 'Yes, we offer rush concrete estimate services to help you meet critical timelines.'
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
    icon: <Ruler size={40} />,
    shortDescription: 'Precise takeoff services for carpentry, millwork, and custom cabinetry projects.',
    description: 'At Paradise Estimating, we understand the importance of delivering precision millwork and cabinetry takeoffs that keep your projects on schedule and within budget. Our expert team provides fast, reliable, and accurate takeoff services for contractors and builders across the United States.',
    bannerImage: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Custom millwork takeoffs & architectural woodwork quantities',
      'Cabinetry estimating for kitchens, casework, and storage',
      'Trim, molding & paneling takeoffs',
      'Door & window casing, baseboards, and wainscoting',
      'Shop drawing support for fabricators',
      'Material lists and labor counts',
      'Cost integration and analysis',
      'CSI Division 6 compliance'
    ],
    processSteps: [
      {
        title: 'Plan Analysis',
        description: 'We analyze your plans and specifications to understand project requirements.'
      },
      {
        title: 'Detailed Takeoff',
        description: 'We perform comprehensive takeoffs for all millwork and cabinetry elements.'
      },
      {
        title: 'Cost Integration',
        description: 'We integrate material quantities with current pricing for accurate estimates.'
      },
      {
        title: 'Final Report',
        description: 'We deliver detailed reports with material lists, labor counts, and cost analysis.'
      }
    ],
    faqs: [
      {
        question: 'How much does a millwork takeoff cost?',
        answer: 'Our prices are transparent, with customizable pricing models based on your project\'s scope. Contact us for a personalized quote.'
      },
      {
        question: 'What types of plans can you work with?',
        answer: 'We work with PDF, DWG, and CAD files to create accurate and efficient takeoffs.'
      },
      {
        question: 'What\'s your typical turnaround time?',
        answer: 'We provide most takeoffs within 24-48 hours, ensuring quick turnaround times for your projects.'
      }
    ],
    relatedServices: ['quantity-takeoff', 'cost-estimation', 'shop-drawings']
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
    id: 'flooring-takeoffs',
    title: 'Flooring Takeoffs',
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
    id: 'doors-windows-glazing',
    title: 'Doors, Windows & Glazing Takeoffs',
    icon: <Home size={40} />,
    shortDescription: 'Professional doors, windows, and glazing takeoff services for accurate construction estimates.',
    description: 'Bid anxiety is real, and it can cost you more than just time—it can eat away at your bottom line. With Paradise Estimating, you can be confident that your window, door, and glazing estimates are accurate from the start.',
    bannerImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Precise Digital Blueprint Analysis',
      'Material Intelligence Database Integration',
      'Triple-Check QA System',
      'Contractor-Ready Reports',
      'BIM Integration for Clash Detection',
      'Material Volatility Monitoring'
    ],
    processSteps: [
      {
        title: 'Digital Blueprint Analysis',
        description: 'We begin with a deep dive into your project\'s digital blueprints, isolating layers for frames and glass.'
      },
      {
        title: 'Material Intelligence Integration',
        description: 'Our proprietary database optimizes material use and tracks price volatility.'
      },
      {
        title: 'Quality Assurance',
        description: 'Every estimate undergoes our rigorous triple-check process.'
      },
      {
        title: 'Final Report Delivery',
        description: 'Receive comprehensive, contractor-ready reports with precise quantities.'
      }
    ],
    faqs: [
      {
        question: 'How do you handle last-minute plan revisions?',
        answer: 'We understand that plans often change, and we\'re ready to adapt. Our team is skilled at incorporating last-minute revisions quickly and accurately.'
      },
      {
        question: 'Can you quantify hardware for security doors?',
        answer: 'Absolutely! We can provide detailed takeoffs for all types of hardware, including those for high-security doors.'
      },
      {
        question: 'What makes glazing estimates different from standard windows?',
        answer: 'Glazing systems are more complex than standard windows, with considerations for thermal performance, custom shapes, and special framing.'
      }
    ],
    relatedServices: ['quantity-takeoff', 'concrete-takeoff', 'masonry-takeoff']
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
    title: 'Detailed Estimates',
    icon: <ClipboardCheck size={40} />,
    shortDescription: 'Comprehensive cost breakdowns with detailed quantities and unit pricing.',
    description: 'Our detailed estimation service provides comprehensive cost analysis based on complete project documentation, helping you understand exact project costs.',
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Comprehensive cost analysis',
      'Detailed quantity takeoffs',
      'Current market pricing',
      'Labor and equipment costs',
      'Overhead calculations',
      'Detailed CSI breakdowns',
      'Risk assessment',
      'Value engineering options'
    ],
    processSteps: [
      {
        title: 'Document Review',
        description: 'We analyze all project documents and specifications.'
      },
      {
        title: 'Quantity Takeoff',
        description: 'We perform detailed quantity calculations for all elements.'
      },
      {
        title: 'Cost Development',
        description: 'We apply current market rates and develop comprehensive costs.'
      },
      {
        title: 'Final Report',
        description: 'We deliver detailed estimates with full documentation.'
      }
    ],
    faqs: [
      {
        question: 'How accurate are detailed estimates?',
        answer: 'Detailed estimates typically achieve accuracy within 5-10% of final costs.'
      },
      {
        question: 'What documents do you need?',
        answer: 'We need complete construction documents, specifications, and any relevant addenda.'
      }
    ],
    relatedServices: ['preliminary-estimates', 'bid-estimates']
  },
  {
    id: 'bid-estimates',
    title: 'Bid Estimates',
    icon: <DollarSign size={40} />,
    shortDescription: 'Competitive bid preparation with detailed analysis of costs and markups.',
    description: 'Our bid estimation service helps contractors prepare competitive and accurate bids for construction projects, including detailed analysis of direct costs, overhead, and profit considerations.',
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Competitive pricing strategy',
      'Detailed cost analysis',
      'Markup optimization',
      'Risk assessment',
      'Subcontractor pricing',
      'Overhead allocation',
      'Profit analysis',
      'Bid strategy development'
    ],
    processSteps: [
      {
        title: 'Bid Document Review',
        description: 'We analyze bid documents and requirements thoroughly.'
      },
      {
        title: 'Cost Development',
        description: 'We develop detailed direct costs and gather subcontractor quotes.'
      },
      {
        title: 'Markup Analysis',
        description: 'We analyze appropriate markups and profit margins.'
      },
      {
        title: 'Bid Preparation',
        description: 'We prepare the final bid package with all required documentation.'
      }
    ],
    faqs: [
      {
        question: 'How do you ensure competitive pricing?',
        answer: 'We analyze market conditions and historical bid data to optimize pricing strategy.'
      },
      {
        question: 'Do you handle bid form preparation?',
        answer: 'Yes, we prepare all required bid forms and documentation.'
      }
    ],
    relatedServices: ['detailed-estimates', 'conceptual-estimates']
  },
  {
    id: 'conceptual-estimates',
    title: 'Conceptual Estimates',
    icon: <Layers size={40} />,
    shortDescription: 'Early project phase estimates based on conceptual designs and historical data.',
    description: 'Our conceptual estimating service provides early-stage cost projections based on preliminary designs, historical data, and industry benchmarks to help guide project planning decisions.',
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Historical data analysis',
      'Benchmark comparisons',
      'Cost modeling',
      'Parameter-based estimating',
      'Design alternatives',
      'Project feasibility',
      'Budget scenarios',
      'Risk assessment'
    ],
    processSteps: [
      {
        title: 'Concept Review',
        description: 'We analyze conceptual designs and project requirements.'
      },
      {
        title: 'Data Analysis',
        description: 'We analyze historical data and industry benchmarks.'
      },
      {
        title: 'Cost Modeling',
        description: 'We develop parametric cost models and scenarios.'
      },
      {
        title: 'Recommendations',
        description: 'We provide cost guidance and recommendations.'
      }
    ],
    faqs: [
      {
        question: 'What level of design is needed?',
        answer: 'We can work with very preliminary designs, sketches, or even just project parameters.'
      },
      {
        question: 'How do you handle design changes?',
        answer: 'We can quickly update estimates as the design concept evolves.'
      }
    ],
    relatedServices: ['preliminary-estimates', 'detailed-estimates']
  },
  {
    id: 'dedicated-estimator',
    title: 'dedicated-estimator',
    icon: <Wrench size={40} />,
    shortDescription: 'Detailed breakdown of labor costs, equipment requirements, and productivity rates.',
    description: 'Our labor and equipment analysis service provides detailed assessment of workforce requirements, equipment needs, and productivity rates to optimize project resource allocation.',
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Labor cost analysis',
      'Equipment selection',
      'Productivity rates',
      'Resource scheduling',
      'Crew composition',
      'Equipment utilization',
      'Cost optimization',
      'Performance tracking'
    ],
    processSteps: [
      {
        title: 'Resource Assessment',
        description: 'We analyze labor and equipment requirements.'
      },
      {
        title: 'Rate Development',
        description: 'We develop labor rates and equipment costs.'
      },
      {
        title: 'Productivity Analysis',
        description: 'We analyze productivity rates and factors.'
      },
      {
        title: 'Resource Planning',
        description: 'We create resource allocation plans.'
      }
    ],
    faqs: [
      {
        question: 'How do you determine crew sizes?',
        answer: 'We analyze task requirements, schedule constraints, and productivity factors.'
      },
      {
        question: 'Can you optimize equipment selection?',
        answer: 'Yes, we analyze equipment options to find the most cost-effective solution.'
      }
    ],
    relatedServices: ['detailed-estimates', 'bid-estimates']
  }
];

export const specializedServices: Service[] = [
  {
    id: 'renovation-estimating',
    title: 'Renovation Cost Estimating',
    icon: <Hammer size={40} />,
    shortDescription: 'Expert renovation cost estimating services for residential and commercial remodeling projects.',
    description: `Paradise Estimating delivers expert renovation estimating services for both residential and commercial projects. Whether you're remodeling a kitchen or retrofitting a retail space, our cost estimates help you plan with confidence and win profitable jobs. Our renovation cost estimating experts provide highly accurate, detailed estimates for residential renovations, commercial remodels, and adaptive reuse projects—so you never overpay or underbid.`,
    bannerImage: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Kitchen & Bathroom Renovation Estimates',
      'Full-Home Remodels and Additions',
      'Historic Home Restoration Consulting',
      'Commercial Retrofit Budgeting',
      'Tenant Improvement Estimating',
      'Value Engineering Options'
    ],
    processSteps: [
      {
        title: 'Digital Takeoff',
        description: 'We perform detailed building renovation takeoffs using advanced software and your plans.'
      },
      {
        title: 'Line-Item Costing',
        description: 'Every material, labor hour, and subcontractor cost is accounted for in your restoration project estimate.'
      },
      {
        title: 'Code Compliance Review',
        description: 'We ensure all estimates account for current building codes and regulations.'
      },
      {
        title: 'Value Engineering',
        description: 'We help optimize scope to meet your budget without sacrificing quality.'
      }
    ],
    industries: [
      {
        title: 'Homeowners & Investors',
        description: 'Residential renovation and remodeling projects.'
      },
      {
        title: 'Commercial Property Owners',
        description: 'Office, retail, and commercial space renovations.'
      },
      {
        title: 'Contractors',
        description: 'Renovation contractors and general contractors.'
      },
      {
        title: 'Property Managers',
        description: 'Multi-unit renovation and improvement projects.'
      }
    ],
    faqs: [
      {
        question: "Do you offer estimates for historic building renovations?",
        answer: "Yes, our historic building renovation estimates include material sourcing, preservation requirements, and code compliance for older structures."
      },
      {
        question: "What's covered in your TI estimating?",
        answer: "Our tenant improvement estimating services include partitions, lighting, HVAC, electrical (MEP), flooring, paint, restrooms, and ADA upgrades."
      },
      {
        question: "Do you provide estimates without full plans?",
        answer: "Yes, we can work from sketches, scopes, or even site photos. Detailed plans are ideal, but not required."
      },
      {
        question: "Can I request just a kitchen or bathroom estimate?",
        answer: "Yes, many clients request targeted estimates for kitchens, baths, or specific renovation scopes."
      }
    ],
    relatedServices: ['cost-estimation', 'value-engineering', 'quantity-takeoff'],
    sampleReport: {
      available: true,
      description: 'View a sample renovation cost estimate report to see our detailed approach.',
    },
    callToAction: {
      primary: 'Get Your Custom Estimate',
      secondary: 'Learn More',
      description: 'Ready for stress-free renovation planning? Let us take the guesswork out of renovation costs.'
    }
  },
  {
    id: 'csi-trades-estimating',
    title: 'CSI Trades Estimating',
    icon: <Settings size={40} />,
    shortDescription: 'Comprehensive estimating services following CSI MasterFormat standards.',
    description: 'Our CSI Trades Estimating service provides detailed cost estimates organized according to the Construction Specifications Institute (CSI) MasterFormat, ensuring standardized and comprehensive project documentation.',
    bannerImage: 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'CSI MasterFormat compliance',
      'Division-based cost breakdown',
      'Standardized specifications',
      'Trade-specific estimates',
      'Material and labor analysis',
      'Equipment and tools costing',
      'Overhead and profit calculations',
      'Bid package preparation'
    ],
    processSteps: [
      {
        title: 'Project Analysis',
        description: 'We analyze project requirements and specifications.'
      },
      {
        title: 'CSI Division Breakdown',
        description: 'We organize estimates according to CSI MasterFormat divisions.'
      },
      {
        title: 'Trade-Specific Estimating',
        description: 'We prepare detailed estimates for each trade division.'
      },
      {
        title: 'Documentation',
        description: 'We compile comprehensive CSI-formatted estimates.'
      }
    ],
    faqs: [
      {
        question: 'What is CSI MasterFormat?',
        answer: 'CSI MasterFormat is a standardized system for organizing construction specifications and cost estimates into divisions and sections.'
      },
      {
        question: 'How does CSI formatting benefit my project?',
        answer: 'CSI formatting ensures consistency, improves communication, and facilitates better project organization and cost control.'
      }
    ],
    relatedServices: ['detailed-estimates', 'bid-estimates']
  },
  {
    id: 'value-engineering',
    title: 'Value Engineering',
    icon: <Settings size={40} />,
    shortDescription: 'Cost optimization through value engineering analysis.',
    description: 'Our Value Engineering service helps optimize project costs while maintaining quality and functionality through systematic analysis and alternative solutions.',
    bannerImage: 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Cost-benefit analysis',
      'Alternative solutions',
      'Life cycle costing',
      'Material optimization',
      'Construction method analysis',
      'Energy efficiency options',
      'Maintenance considerations',
      'Sustainability improvements'
    ],
    processSteps: [
      {
        title: 'Function Analysis',
        description: 'We analyze project functions and requirements.'
      },
      {
        title: 'Alternative Development',
        description: 'We develop alternative solutions and approaches.'
      }
    ],
    faqs: [
      {
        question: 'What is value engineering?',
        answer: 'Value engineering is a systematic approach to improving project value by analyzing functions and costs to identify optimal solutions.'
      },
      {
        question: 'When should value engineering be performed?',
        answer: 'Value engineering is most effective when performed early in the design phase but can provide benefits at any project stage.'
      }
    ],
    relatedServices: ['detailed-estimates', 'preliminary-estimates']
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
    icon: <Package2 size={40} />,
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
    id: 'bid-package-preparation',
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
      // {
      //   title: 'Scope Definition
      //   description: 'We clearly define the scope of work and requirements.'
      // },
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
    id: 'turnkey-design-build',
    title: 'Turnkey / Design-Build / EPCM',
    icon: <Workflow size={40} />,
    shortDescription: 'End-to-end estimating for turnkey, design-build, and EPCM projects.',
    description: 'Paradise Estimating provides full lifecycle estimating for Turnkey, Design-Build, and EPCM (Engineering, Procurement, and Construction Management) projects. From concept to completion, our expert team delivers accurate, detailed estimates to ensure financial control, optimize costs, and mitigate risks throughout the entire project.',
    bannerImage: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'End-to-end construction contracts',
      'Integrated design-build solutions',
      'EPCM projects involving complex, multi-disciplinary coordination',
      'All-Stage Estimating (Concept → CD → Handover)',
      'Lump Sum Pricing Support with Risk Provisions',
      'Cost Breakdown Structure (CBS) Development',
      'Integrated Design & Cost Review',
      'Subcontractor Scope Splits & Package Budgets',
      'Cash Flow & Milestone-Based Payment Valuations'
    ],
    processSteps: [
      {
        title: 'Project Analysis',
        description: 'We analyze project requirements, scope, and objectives to develop a comprehensive understanding.'
      },
      {
        title: 'Risk Assessment',
        description: 'We identify potential risks and develop appropriate contingency plans and provisions.'
      },
      {
        title: 'Cost Development',
        description: 'We create detailed cost estimates with comprehensive breakdowns and package budgets.'
      },
      {
        title: 'Value Engineering',
        description: 'We work with design teams to optimize costs while maintaining project objectives.'
      }
    ],
    faqs: [
      {
        question: 'What types of projects do you handle?',
        answer: 'We handle all types of turnkey, design-build, and EPCM projects across various sectors including commercial, industrial, and institutional construction.'
      },
      {
        question: 'How do you manage project risks?',
        answer: 'We emphasize proactive risk assessment and contingency planning, identifying potential risks early and incorporating appropriate provisions in our estimates.'
      },
      {
        question: 'Can you support the entire project lifecycle?',
        answer: 'Yes, we provide full lifecycle support from early design stages to final project delivery, ensuring comprehensive cost management throughout.'
      }
    ],
    relatedServices: ['cost-estimation', 'quantity-takeoff', 'preliminary-estimates'],
    callToAction: {
      primary: 'Get Started Today',
      secondary: 'Learn More',
      description: 'Contact us to discuss how our turnkey, design-build, and EPCM estimating services can provide clarity, control, and efficiency for your project.'
    }
  },
  {
    id: 'retail-construction',
    title: 'Retail / Merchandise Projects',
    icon: <Store className="h-8 w-8 text-navy" />,
    shortDescription: 'Expert estimating services for retail rollouts and merchandise projects.',
    description: 'At Paradise Estimating, we specialize in delivering accurate, fast, and comprehensive estimating services for retail and merchandise construction projects. Whether you\'re opening flagship stores, franchising, or updating existing locations, our expert team ensures your projects are cost-effective, completed on schedule, and in full compliance with your brand\'s standards.',
    bannerImage: 'https://images.unsplash.com/photo-1604754742629-3e0474f7d578?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Fast-track estimating for rollouts & refreshes',
      'Joinery, fixtures & signage quantification',
      'Vendor comparison & rate analysis',
      'Fit-out BOQ aligned to branding standards',
      'Unit pricing for replicated store formats',
      'Cost summary by location for regional rollouts'
    ],
    processSteps: [
      {
        title: 'Project Assessment',
        description: 'We analyze your retail project requirements, branding standards, and timeline constraints.'
      },
      {
        title: 'Cost Analysis',
        description: 'We develop detailed cost estimates considering all project elements and regional factors.'
      },
      {
        title: 'Value Engineering',
        description: 'We identify cost optimization opportunities while maintaining brand standards.'
      },
      {
        title: 'Documentation',
        description: 'We prepare comprehensive BOQs and cost reports aligned with your requirements.'
      }
    ],
    faqs: [
      {
        question: 'What types of retail projects do you handle?',
        answer: 'We handle all types of retail projects including flagship stores, franchise rollouts, restaurants, and concept stores.'
      },
      {
        question: 'How do you ensure consistency across multiple locations?',
        answer: 'We use standardized templates and unit pricing models while accounting for regional variations to maintain consistency.'
      },
      {
        question: 'Can you work with our brand standards?',
        answer: 'Yes, we ensure all estimates align with your specific branding and design guidelines while maintaining cost efficiency.'
      }
    ],
    relatedServices: ['commercial-construction', 'quantity-takeoff', 'cost-estimation']
  },
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

export const industriesWeServe: Service[] = [
  {
    id: 'government',
    title: 'Public / Government Projects',
    icon: <Landmark size={40} />,
    shortDescription: 'Comprehensive estimating services for government buildings, public facilities, and infrastructure projects.',
    description: 'Expert cost estimation services for public sector and government construction projects, ensuring compliance with all regulatory requirements and public procurement standards.',
    bannerImage: 'https://images.unsplash.com/photo-1523365154888-8a758819b722?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Government Buildings',
      'Public Infrastructure',
      'Educational Facilities',
      'Healthcare Facilities',
      'Municipal Buildings',
      'Public Safety Facilities'
    ],
    processSteps: [
      {
        title: 'Requirements Analysis',
        description: 'We analyze project requirements and public sector specifications.'
      },
      {
        title: 'Compliance Review',
        description: 'We ensure compliance with government regulations and standards.'
      },
      {
        title: 'Cost Development',
        description: 'We develop detailed cost estimates following public procurement guidelines.'
      },
      {
        title: 'Documentation',
        description: 'We provide comprehensive documentation meeting government requirements.'
      }
    ],
    faqs: [
      {
        question: 'Do you handle government procurement requirements?',
        answer: 'Yes, we have extensive experience with public sector procurement processes and requirements.'
      },
      {
        question: 'Can you work with public funding regulations?',
        answer: 'Yes, we ensure compliance with all public funding and reporting requirements.'
      }
    ],
    relatedServices: ['quantity-takeoff', 'cost-estimation', 'preliminary-estimates']
  },
  {
    id: 'residential-construction',
    title: 'Residential Projects',
    icon: <Home size={40} />,
    shortDescription: 'Detailed cost estimation for residential construction projects of all sizes.',
    description: 'Comprehensive estimating services for residential construction, from single-family homes to multi-unit developments.',
    bannerImage: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Single-Family Homes',
      'Multi-Family Developments',
      'Apartment Complexes',
      'Custom Home Building',
      'Residential Renovations',
      'Housing Communities'
    ],
    processSteps: [
      {
        title: 'Project Analysis',
        description: 'We analyze residential project requirements and specifications.'
      },
      {
        title: 'Detailed Estimation',
        description: 'We provide comprehensive cost estimates for all components.'
      },
      {
        title: 'Value Engineering',
        description: 'We identify cost-saving opportunities without compromising quality.'
      },
      {
        title: 'Final Review',
        description: 'We review and finalize estimates with stakeholders.'
      }
    ],
    faqs: [
      {
        question: 'What types of residential projects do you handle?',
        answer: 'We handle all types of residential projects from single-family homes to large multi-family developments.'
      },
      {
        question: 'Do you provide estimates for custom homes?',
        answer: 'Yes, we provide detailed estimates for custom home projects with unique specifications.'
      }
    ],
    relatedServices: ['quantity-takeoff', 'cost-estimation', 'preliminary-estimates']
  },
  {
    id: 'commercial-construction',
    title: 'Commercial / Office Projects',
    icon: <Building2 size={40} />,
    shortDescription: 'Expert cost estimation for commercial and office building projects.',
    description: `At Paradise Estimating, we understand that accurate commercial construction estimates are the foundation of profitable projects. Our team of certified estimators combines decades of industry experience with cutting-edge technology to deliver precise, comprehensive estimates that help you win more bids and maximize profitability.

    Our commercial estimating specialists meticulously analyze every aspect of your project, from foundation to finish. We utilize advanced takeoff software and industry-leading databases to ensure every material, labor hour, and equipment cost is accounted for with precision.`,
    bannerImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Unmatched Accuracy & Detail: Meticulous analysis of all project components',
      'Industry Expertise: Over 15 years of combined commercial construction experience',
      'Technology-Driven Solutions: Latest estimating software and digital tools',
      'Competitive Turnaround Times: Quick delivery without compromising quality',
      'Comprehensive Coverage: From shell & core to tenant improvements',
      'Value Engineering: Cost optimization without compromising quality'
    ],
    processSteps: [
      {
        title: 'Project Analysis',
        description: 'Thorough review of plans, specifications, and requirements'
      },
      {
        title: 'Detailed Takeoff',
        description: 'Precise quantity calculations using advanced software'
      },
      {
        title: 'Cost Analysis',
        description: 'Comprehensive pricing with current market rates'
      },
      {
        title: 'Quality Review',
        description: 'Multi-point verification for accuracy'
      }
    ],
    industries: [
      {
        title: 'Office Buildings',
        description: 'Corporate headquarters, business parks, and professional offices'
      },
      {
        title: 'Retail Centers',
        description: 'Shopping malls, strip centers, and standalone retail'
      },
      {
        title: 'Mixed-Use Developments',
        description: 'Combined retail, office, and residential projects'
      },
      {
        title: 'Medical Facilities',
        description: 'Hospitals, clinics, and medical office buildings'
      }
    ],
    faqs: [
      {
        question: "What types of commercial projects do you handle?",
        answer: "We handle all types of commercial projects including office buildings, retail centers, medical facilities, and mixed-use developments."
      },
      {
        question: "How accurate are your commercial estimates?",
        answer: "Our estimates are typically within 2-3% of final costs, thanks to our detailed process and extensive database of current pricing."
      },
      {
        question: "What's included in your commercial estimates?",
        answer: "Our estimates include material quantities, labor costs, equipment costs, overhead calculations, and detailed breakdowns by CSI division."
      },
      {
        question: "How long does a commercial estimate take?",
        answer: "Most commercial estimates are completed within 5-7 business days, depending on project size and complexity."
      }
    ],
    relatedServices: ['quantity-takeoff', 'cost-estimation', 'preliminary-estimates'],
    sampleReport: {
      available: true,
      description: 'View a sample of our detailed commercial construction estimate reports.',
      previewLink: '[Link to sample report]'
    },
    callToAction: {
      primary: 'Request an Estimate',
      secondary: 'View Sample Report',
      description: 'Get accurate commercial construction estimates from certified professionals.'
    }
  },
  {
    id: 'retail-construction',
    title: 'Retail / Merchandise Projects',
    icon: <Store size={40} />,
    shortDescription: 'Specialized estimation for retail and merchandising construction projects.',
    description: 'Comprehensive cost estimation services for retail construction projects, from individual stores to shopping centers.',
    bannerImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Retail Stores',
      'Shopping Centers',
      'Department Stores',
      'Specialty Retail',
      'Restaurant Spaces',
      'Mall Developments'
    ],
    processSteps: [
      {
        title: 'Requirements Review',
        description: 'We analyze retail-specific requirements and brand standards.'
      },
      {
        title: 'Design Integration',
        description: 'We incorporate retail design and merchandising elements.'
      },
      {
        title: 'Cost Development',
        description: 'We develop detailed cost estimates for all components.'
      },
      {
        title: 'Documentation',
        description: 'We provide comprehensive documentation.'
      }
    ],
    faqs: [
      {
        question: 'Can you work with retail brand standards?',
        answer: 'Yes, we ensure compliance with specific retail brand requirements and standards.'
      },
      {
        question: 'Do you handle mall tenant improvements?',
        answer: 'Yes, we provide detailed estimates for mall tenant improvements and retail renovations.'
      }
    ],
    relatedServices: ['quantity-takeoff', 'cost-estimation', 'preliminary-estimates']
  },

  {
    id: 'turnkey-design-build',
    title: 'Turnkey / Design-Build / EPCM Projects',
    icon: <Workflow size={40} />,
    shortDescription: 'Expert estimation for turnkey and design-build construction projects.',
    description: 'Comprehensive cost estimation services for turnkey, design-build, and EPCM (Engineering, Procurement, Construction Management) projects.',
    bannerImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Turnkey Projects',
      'Design-Build Projects',
      'EPCM Projects',
      'Integrated Project Delivery',
      'Fast-Track Construction',
      'Project Management'
    ],
    processSteps: [
      {
        title: 'Project Planning',
        description: 'We analyze project requirements and develop integrated solutions.'
      },
      {
        title: 'Design Development',
        description: 'We work with design teams to optimize costs during development.'
      },
      {
        title: 'Cost Development',
        description: 'We develop comprehensive cost estimates for all project phases.'
      },
      {
        title: 'Documentation',
        description: 'We provide detailed documentation for all project components.'
      }
    ],
    faqs: [
      {
        question: 'Do you handle complete turnkey projects?',
        answer: 'Yes, we provide comprehensive estimates for complete turnkey project delivery.'
      },
      {
        question: 'Can you work with design-build teams?',
        answer: 'Yes, we collaborate with design-build teams to provide integrated cost solutions.'
      }
    ],
    relatedServices: ['quantity-takeoff', 'cost-estimation', 'preliminary-estimates']
  },
  {
    id: 'industrial-construction',
    title: 'Industrial & Warehousing Construction',
    icon: <Factory size={40} />,
    shortDescription: 'Comprehensive estimating services for industrial and warehousing projects, from manufacturing plants to distribution centers.',
    description: `At Paradise Estimating, we bring decades of experience in industrial and warehousing construction estimating. From manufacturing plants to distribution centers, our team ensures your project is meticulously costed, optimizing every aspect of the build, from structural systems to specialized equipment integration.

    Our industrial construction estimating services cover all aspects of your project, ensuring accurate cost predictions and efficient project execution. We understand the unique challenges of industrial construction and provide tailored solutions for each project type.`,
    bannerImage: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Manufacturing Plants & Production Facilities',
      'Distribution Centers & Logistics Hubs',
      'Cold Storage & Automated Warehouses',
      'Specialized Equipment Integration',
      'MEP Systems Integration',
      'Site Services & External Works'
    ],
    processSteps: [
      {
        title: 'Project Analysis',
        description: 'Detailed review of project requirements and specifications.'
      },
      {
        title: 'Cost Modeling',
        description: 'Development of tailored cost models for your specific project type.'
      },
      {
        title: 'Quantity Takeoff',
        description: 'Precise calculations for all materials and systems.'
      },
      {
        title: 'Final Estimation',
        description: 'Comprehensive cost estimation with detailed breakdowns.'
      }
    ],
    industries: [
      {
        title: 'Manufacturing',
        description: 'Production facilities and industrial plants.'
      },
      {
        title: 'Logistics',
        description: 'Distribution centers and warehousing facilities.'
      },
      {
        title: 'Cold Storage',
        description: 'Temperature-controlled storage facilities.'
      },
      {
        title: 'Automated Facilities',
        description: 'Modern automated warehousing systems.'
      }
    ],
    faqs: [
      {
        question: "How do you handle specialized equipment integration?",
        answer: "We work closely with equipment suppliers and manufacturers to ensure accurate cost estimation for installation and integration of specialized industrial equipment."
      },
      {
        question: "Do you provide estimates for MEP systems?",
        answer: "Yes, we provide comprehensive estimates for all mechanical, electrical, and plumbing systems specific to industrial facilities."
      },
      {
        question: "Can you handle large-scale industrial projects?",
        answer: "Absolutely. We have extensive experience with large-scale industrial projects and provide detailed estimates for projects of any size."
      },
      {
        question: "What's included in your industrial construction estimates?",
        answer: "Our estimates include structural systems, equipment integration, MEP systems, site work, and all other aspects specific to industrial construction."
      }
    ],
    relatedServices: ['structural-steel', 'mep-systems', 'sitework-earthworks'],
    callToAction: {
      primary: 'Get Your Industrial Project Estimated',
      secondary: 'Learn More About Our Process',
      description: 'Let us assist in your next industrial or warehousing project by delivering precise, tailored estimating services.'
    }
  }
];

export const allServices = [
  ...quantityTakeoffServices,
  ...costEstimationServices,
  ...specializedServices,
  ...softwareBasedServices,
  ...documentationServices,
  ...projectSupportServices,
  ...constructionManagementServices,
  ...industriesWeServe
];
