import {
  LayoutGrid,
  ClipboardList,
  Users,
  ShoppingCart,
  CreditCard,
  Bug,
  User,
  ShieldQuestion,
  Folder,
  FolderCheck,
  History
} from "lucide-react";

export const mainPageNavbar = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "#about_section",
  },
  {
    name: "Testimonials",
    path: "#testimonials_section",
  },
  {
    name: "Contact Us",
    path: "#contact_form",
  },
];

export const LoggedNavLinks = [
  {
    name: "New",
    // path: "/",
  },
  {
    name: "Products",
    // path: "#about_section",
  },
  {
    // name: "Rooms",
    // path: "#testimonials_section",
  },
  {
    // name: "Inspirations",
    // path: "#contact_form",
  },
];

export const swiperGallery = [
  {
    img: "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Home",
  },
  {
    img: "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Bedroom",
  },
  {
    img: "https://images.pexels.com/photos/1358900/pexels-photo-1358900.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Kitchen",
  },
  {
    img: "https://images.pexels.com/photos/3288104/pexels-photo-3288104.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Bathroom",
  },
  {
    img: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Office",
  },
  {
    img: "https://images.pexels.com/photos/9494898/pexels-photo-9494898.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Living room",
  },
  {
    img: "https://images.pexels.com/photos/6587821/pexels-photo-6587821.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Closet",
  },
  {
    img: "https://images.pexels.com/photos/4369571/pexels-photo-4369571.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Garden",
  },
];

export const frequentlyAskedQuestions = [
  {
    id: 1,
    question: "Can I request custom furniture or modifications?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui repudiandae saepe enim beatae eos veniam nesciunt atque rerum esse nostrum.",
    id: 1,
  },
  {
    id: 2,
    question: "Do you offer international shipping?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui repudiandae saepe enim beatae eos veniam nesciunt atque rerum esse nostrum.",
    id: 2,
  },
  {
    id: 3,
    question: "What is return policy?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui repudiandae saepe enim beatae eos veniam nesciunt atque rerum esse nostrum.",
    id: 3,
  },
];

export const promoCodes = [
  "cicki2",
  "negri200",
  "promocode",
  "maikataNaPeshoEKurva2005",
];

export const dashboardLinks = [
  {
    name: "Dashboard",
    icon: <LayoutGrid />,
    path: "/admin",
  },
  {
    name: "Orders",
    icon: <ClipboardList />,
    path: "/orders",
  },
  {
    name: "Products",
    icon: <ShoppingCart />,
    path: "/products",
  },
  {
    name: "Billing",
    icon: <CreditCard />,
    path: "/billings",
  },
  {
    name: "Customers",
    icon: <Users />,
    path: "/customer",
  },
];

export const accountDashboardLinks = [
  {
    name: "User",
    icon: <User />,
    path: "",
  },
  {
    name: "Help",
    icon: <ShieldQuestion />,
    path: "",
  },
  {
    name: "Report",
    icon: <Bug />,
    path: "",
  },
];

export const chartCardsData = [
  {
    name: "Total Income",
    total: "$129,230",
    pData: [2400, 1398, 800, 3908, 7800, 3100, 500],
    xLabels: [
      "Page A",
      "Page B",
      "Page C",
      "Page D",
      "Page E",
      "Page F",
      "Page G",
      "Page G",
      "Page G",
      "Page G",
    ],
    stroke: '#22c55e',
    icon: <Folder/>
  },
  {
    name: "Total Sales",
    total: "2,456",
    pData : [2400, 1398, 9800, 3908, 4800, 3100, 4300],
    xLabels: [
      "Page A",
      "Page B",
      "Page C",
      "Page D",
      "Page E",
      "Page F",
      "Page G",
      "Page G",
      "Page G",
      "Page G",
    ],
    stroke: '#22c55e',
    icon: <History />
  },
  {
    name: "Total Expenses",
    total: "$5,791",
    pData : [100400, 1398, 9800, 3908, 4800, 3100, 4300],
    xLabels: [
      "Page A",
      "Page B",
      "Page C",
      "Page D",
      "Page E",
      "Page F",
      "Page G",
      "Page G",
      "Page G",
      "Page G",
    ],
    stroke: '#dc2626',
    icon: <FolderCheck />
  },
];
