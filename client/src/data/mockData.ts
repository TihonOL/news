
import { News, User } from "@/types/news";

export const popularCategories = [
  "Политика", "Экология", "Наука", "Международные новости", "Здоровье", "Экономика", "Спорт", 
  "Технологии", "Искусство"
];

export const mockNews: News[] = [
  {
    id: "1",
    title: "New Climate Report Shows Unprecedented Global Warming Trends",
    summary: "Scientists warn that global temperatures may rise by 1.5°C by 2030, a decade earlier than previously predicted.",
    content: "A comprehensive new climate report from the IPCC has revealed that global warming is accelerating at an unprecedented rate. The report, compiled by over 200 scientists from 66 countries, indicates that the planet could reach the critical 1.5°C warming threshold as early as 2030, a full decade sooner than previous estimates suggested.\n\nThe consequences of this accelerated warming include more frequent extreme weather events, rising sea levels, and irreversible damage to ecosystems worldwide. The report calls for immediate and drastic reductions in carbon emissions to prevent the most catastrophic outcomes.",
    date: "2024-04-22T10:30:00Z",
    imageUrl: "https://picsum.photos/id/1015/400/300",
    tags: ["Environment", "Science", "Climate"],
    sources: [
      {
        name: "Science Daily",
        url: "https://www.sciencedaily.com",
        bias: "center"
      },
      {
        name: "Nature Journal",
        url: "https://www.nature.com",
        bias: "center"
      }
    ],
    bias: {
      left: 30,
      center: 60,
      right: 10
    }
  },
  {
    id: "2",
    title: "Tech Giant Announces Revolutionary AI Assistant",
    summary: "The new AI can understand and respond to complex human emotions, marking a significant breakthrough in artificial intelligence.",
    content: "Tech industry leader XYZ Corp has unveiled its latest artificial intelligence system, which they claim represents a quantum leap in human-computer interaction. The AI, named 'Empathia', has demonstrated an unprecedented ability to recognize and appropriately respond to subtle human emotional cues.\n\nDuring a live demonstration, Empathia engaged in natural conversations with testers, accurately identifying emotional states and adjusting its responses accordingly. The system reportedly uses a combination of advanced neural networks, computer vision, and linguistic analysis to achieve this breakthrough.",
    date: "2024-04-20T14:15:00Z",
    imageUrl: "https://picsum.photos/id/1002/400/300",
    tags: ["Technology", "AI", "Innovation"],
    sources: [
      {
        name: "TechCrunch",
        url: "https://www.techcrunch.com",
        bias: "center"
      },
      {
        name: "Wired",
        url: "https://www.wired.com",
        bias: "left"
      }
    ],
    bias: {
      left: 20,
      center: 70,
      right: 10
    }
  },
  {
    id: "3",
    title: "Global Stock Markets Rally Following Interest Rate Cut",
    summary: "Major indices worldwide saw significant gains after central banks announced coordinated rate reductions.",
    content: "Stock markets around the world surged today following the announcement of coordinated interest rate cuts by major central banks. The Federal Reserve, European Central Bank, and Bank of England simultaneously reduced their benchmark rates by 0.25 percentage points, citing the need to stimulate economic growth amid slowing global indicators.\n\nThe Dow Jones Industrial Average jumped 2.3%, while European markets saw even larger gains, with Germany's DAX up 3.1% and France's CAC 40 rising 2.8%. Asian markets, which closed before the announcement, are expected to rally when trading resumes.",
    date: "2024-04-18T16:45:00Z",
    imageUrl: "https://picsum.photos/id/1070/400/300",
    tags: ["Economy", "Business", "Markets"],
    sources: [
      {
        name: "Financial Times",
        url: "https://www.ft.com",
        bias: "center"
      },
      {
        name: "Wall Street Journal",
        url: "https://www.wsj.com",
        bias: "right"
      },
      {
        name: "Bloomberg",
        url: "https://www.bloomberg.com",
        bias: "center"
      }
    ],
    bias: {
      left: 10,
      center: 50,
      right: 40
    }
  },
  {
    id: "4",
    title: "Celebrity Power Couple Announces Divorce After 10 Years",
    summary: "Hollywood is shocked as the industry's most celebrated couple files for divorce citing irreconcilable differences.",
    content: "Hollywood's most famous power couple, actors John Smith and Jane Doe, have announced their divorce after 10 years of marriage. The couple, who met on the set of their blockbuster film 'Eternal Love' in 2013, released a joint statement citing irreconcilable differences but expressing their continued mutual respect and commitment to co-parenting their two children.\n\nIndustry insiders report that the couple had been living separately for several months, though they had maintained a united public front. The divorce filing has sparked widespread speculation about the division of their estimated $500 million combined fortune.",
    date: "2024-04-15T09:00:00Z",
    imageUrl: "https://picsum.photos/id/1003/400/300",
    tags: ["Entertainment", "Gossip", "Celebrities"],
    sources: [
      {
        name: "Entertainment Weekly",
        url: "https://www.ew.com",
        bias: "center"
      },
      {
        name: "TMZ",
        url: "https://www.tmz.com",
        bias: "right"
      }
    ],
    bias: {
      left: 15,
      center: 45,
      right: 40
    }
  },
  {
    id: "5",
    title: "Breakthrough in Renewable Energy: New Solar Panel Achieves Record Efficiency",
    summary: "Scientists have developed a solar panel that converts 39% of sunlight into electricity, shattering previous records.",
    content: "Researchers at the National Renewable Energy Laboratory have announced a breakthrough in solar technology, developing a new type of photovoltaic cell that achieves a record-breaking 39% efficiency rate. The previous record for commercially viable solar cells was around 26%.\n\nThe new technology uses a novel arrangement of materials in a multi-junction cell that captures a broader spectrum of sunlight. Scientists estimate that the innovation could reduce the cost of solar energy by up to 50% when mass-produced, potentially accelerating the global transition to renewable energy sources.",
    date: "2024-04-10T11:20:00Z",
    imageUrl: "https://picsum.photos/id/1001/400/300",
    tags: ["Science", "Environment", "Technology", "Energy"],
    sources: [
      {
        name: "Scientific American",
        url: "https://www.scientificamerican.com",
        bias: "left"
      },
      {
        name: "IEEE Spectrum",
        url: "https://spectrum.ieee.org",
        bias: "center"
      }
    ],
    bias: {
      left: 40,
      center: 50,
      right: 10
    }
  }
];

export const mockUser: User = {
  id: "user1",
  name: "Alex Johnson",
  email: "alex@example.com",
  avatar: "https://picsum.photos/id/1025/200/200",
  favorites: ["1", "3"],
  history: ["1", "2", "3", "4"],
  tags: {
    whitelist: ["Technology", "Science", "Environment"],
    blacklist: ["Gossip"]
  }
};
