export interface CampaignBacker {
  id: string;
  name: string;
  handle?: string;
  amount: number;
  currency: string;
  message?: string;
  avatarUrl?: string;
  timestamp: string;
  isAnonymous?: boolean;
}

export interface CampaignMilestone {
  title: string;
  amount: number;
  completed: boolean;
  description: string;
}

export interface CampaignDetail {
  id: string;
  title: string;
  tagline: string;
  category: "Small Business" | "Education" | "Community" | "Creative" | "Emergency";
  currency: "GHS" | "UGX" | "USD";
  targetAmount: number;
  raisedAmount: number;
  backerCount: number;
  daysRemaining: number;
  coverImage: string;
  organizer: {
    name: string;
    handle: string;
    phone: string;
    verifiedMoMo: boolean;
    avatarUrl: string;
    role: string;
    location: string;
  };
  story: string[];
  milestones: CampaignMilestone[];
  supporters: CampaignBacker[];
}

export const sampleCampaigns: Record<string, CampaignDetail> = {
  "sarah-bakery": {
    id: "sarah-bakery",
    title: "Help Sarah Launch Her Artisan Bakery & Training Hub",
    tagline: "Empowering 20 young apprentices with artisan baking skills in East Legon, Accra.",
    category: "Small Business",
    currency: "GHS",
    targetAmount: 15000,
    raisedAmount: 12500,
    backerCount: 127,
    daysRemaining: 11,
    coverImage: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    organizer: {
      name: "Sarah Nalwanga",
      handle: "@sarahbakes",
      phone: "+233 24 819 0312",
      verifiedMoMo: true,
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
      role: "Head Baker & Founder",
      location: "Accra, Ghana",
    },
    story: [
      "For the past four years, I have been baking artisan sourdough and traditional Ghanaian bread out of a tiny 4-square-meter home kitchen. Demand has completely outstripped my oven's capacity.",
      "With your support through Mova, we are securing a commercial industrial convection oven, proofing boxes, and ingredients to open a community training bakery. We will train 20 young women in our first cohort with culinary livelihoods.",
      "Every contribution goes directly through MTN Mobile Money rails with zero intermediaries, transparent blockchain-style settlement logs, and instant USSD push approval.",
    ],
    milestones: [
      {
        title: "Industrial Deck Oven",
        amount: 8000,
        completed: true,
        description: "Double-deck commercial bread oven secured and delivered.",
      },
      {
        title: "Storefront Lease & Proofing Stations",
        amount: 12000,
        completed: true,
        description: "Deposit paid for East Legon community baking shop.",
      },
      {
        title: "Apprentice Toolkits & Opening Flour Supply",
        amount: 15000,
        completed: false,
        description: "Uniforms, culinary sets, and first month ingredient stock for 20 trainees.",
      },
    ],
    supporters: [
      {
        id: "b-1",
        name: "Gabriel Okello",
        handle: "@gabriel",
        amount: 250,
        currency: "GHS",
        message: "Can't wait for the grand opening pastries! Keep blazing the trail, Sarah! 🥖✨",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
        timestamp: "12 mins ago",
      },
      {
        id: "b-2",
        name: "Abena Mensah",
        handle: "@abena_m",
        amount: 100,
        currency: "GHS",
        message: "Proud to support Ghanaian female entrepreneurship. MoMo payment was instant!",
        avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80",
        timestamp: "45 mins ago",
      },
      {
        id: "b-3",
        name: "Anonymous Backer",
        amount: 500,
        currency: "GHS",
        message: "Rooting for your apprentice training program.",
        timestamp: "2 hours ago",
        isAnonymous: true,
      },
      {
        id: "b-4",
        name: "Kofi Owusu",
        handle: "@kofi_tech",
        amount: 100,
        currency: "GHS",
        message: "Paid via MTN MoMo in 4 seconds. Great initiative.",
        avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
        timestamp: "5 hours ago",
      },
      {
        id: "b-5",
        name: "Ama Kitchen",
        handle: "@amakitchen",
        amount: 300,
        currency: "GHS",
        message: "From one food business to another, we're with you Sarah!",
        avatarUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=100&q=80",
        timestamp: "1 day ago",
      },
    ],
  },
  "htu-tech-fund": {
    id: "htu-tech-fund",
    title: "HTU Tech Innovation & Hardware Prototype Lab",
    tagline: "Funding IoT microcontrollers, 3D printers, and solar power packs for engineering students.",
    category: "Education",
    currency: "GHS",
    targetAmount: 25000,
    raisedAmount: 18400,
    backerCount: 204,
    daysRemaining: 18,
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    organizer: {
      name: "Dr. Emmanuel Mensah",
      handle: "@dr_mensah",
      phone: "+233 20 910 8821",
      verifiedMoMo: true,
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80",
      role: "Faculty Advisor, Robotics Club",
      location: "Ho, Volta Region",
    },
    story: [
      "Our university students build incredible automated irrigation tools and solar telemetry trackers, but lack access to basic rapid prototyping equipment.",
      "The HTU Tech Innovation Fund pools community contributions into direct university hardware labs, bypassing bureaucratic international donor pipelines.",
      "Track every cedis disbursed live through Mova's automated MoMo settlement ledger.",
    ],
    milestones: [
      {
        title: "2x Bambu Lab 3D Printers & Filament",
        amount: 10000,
        completed: true,
        description: "Precision printers ordered for rapid enclosure manufacturing.",
      },
      {
        title: "50x ESP32 & Sensor Development Kits",
        amount: 18000,
        completed: true,
        description: "Distributed to senior capstone engineering teams.",
      },
      {
        title: "Solar Backup Inverter & Soldering Stations",
        amount: 25000,
        completed: false,
        description: "Ensures 24/7 unhindered laboratory power.",
      },
    ],
    supporters: [
      {
        id: "b-htu-1",
        name: "Alumni Association 2018",
        amount: 1000,
        currency: "GHS",
        message: "Equipping the next generation of engineers!",
        timestamp: "3 hours ago",
      },
      {
        id: "b-htu-2",
        name: "Samuel Osei",
        handle: "@samuel_os",
        amount: 150,
        currency: "GHS",
        message: "Keep pushing Ghanaian tech frontiers.",
        timestamp: "6 hours ago",
      },
    ],
  },
  "kampala-borehole": {
    id: "kampala-borehole",
    title: "Clean Solar Water Well for Kisenyi Community",
    tagline: "Providing 1,200 families with clean, disease-free potable water via solar pump.",
    category: "Community",
    currency: "UGX",
    targetAmount: 18000000,
    raisedAmount: 14200000,
    backerCount: 312,
    daysRemaining: 7,
    coverImage: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80",
    organizer: {
      name: "Pastor David Mukasa",
      handle: "@david_community",
      phone: "+256 701 445 220",
      verifiedMoMo: true,
      avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80",
      role: "Community Elder & Water Board",
      location: "Kampala, Uganda",
    },
    story: [
      "Access to clean water is a fundamental right. Families in Kisenyi currently pay exorbitant rates for contaminated jerrycans.",
      "This collective Mova campaign drills a 90-meter borehole powered by a solar submersible pump, supplying free clean water for the entire township.",
    ],
    milestones: [
      {
        title: "Geophysical Survey & Drilling Rig",
        amount: 9000000,
        completed: true,
        description: "Water table located and well drilled successfully.",
      },
      {
        title: "Submersible Solar Pump & 10,000L Tank",
        amount: 15000000,
        completed: false,
        description: "Pump installation and elevated distribution tower.",
      },
    ],
    supporters: [
      {
        id: "b-ug-1",
        name: "Grace Kigozi",
        handle: "@gracek",
        amount: 50000,
        currency: "UGX",
        message: "Clean water saves lives. Bless this project!",
        timestamp: "1 hour ago",
      },
    ],
  },
};
