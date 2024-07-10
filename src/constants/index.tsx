export const navLinks = [
    { href: "/", key: "Home", text: "Home" },
    { href: "/studysets", studySetId: "preparation", key: "preparation", text: "preparation" },
  ];
  
  type Item = {
    name: string;
    slug: string;
    description?: string;
  };
  
  export const StudySets: { name: string; items: Item[] }[] = [
    {
      name: "Study Sets",
      items: [
        {
          name: "Preparation",
          slug: "studysets/preparation",
          description: "description",
        },
      ],
    },
  ];  