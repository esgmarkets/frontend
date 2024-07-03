const menus = [
  {
    id: 1,
    name: "Home",
    path: "/#",
  },
  {
    id: 2,
    name: "Solutions",
    children: [
      { id: 1, name: "ESG Access", path: "/#esg-access" },
      { id: 2, name: "ESG Studio", path: "/#esg-studio" },
     
    ],
  },
  {
    id: 3,
    name: "Pricing",
    path: "/#pricing",
  },
];

export default menus;