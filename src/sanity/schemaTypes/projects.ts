export default {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Short Description",
      type: "text",
    },
    { name: "liveDemo", title: "Live Demo Link", type: "url" },
    {
      name: "github",
      title: "GitHub Link",
      type: "url",
    },
    {
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
