import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "custom",
  nodeVersion: "18",
  devCommand: "",

  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "homepage",
          type: "page",
          label: "Home Page",
          filePath: "homepage.json",
          fields: [
            { name: "siteTitle", type: "string", label: "Site Title" },
            { name: "companyName", type: "string", label: "Company Name" },
            { name: "tagline", type: "string", label: "Tagline" },
            { name: "servicesTitle", type: "string", label: "Services Title" },
            { name: "servicesList", type: "list", label: "Services List", items: { type: "string" } },
            { name: "verkadaPartnerNote", type: "string", label: "Verkada Partner Note" },
            { name: "experienceTitle", type: "string", label: "Experience Title" },
            { name: "experienceDetails", type: "string", label: "Experience Details" },
            { name: "awardsNote", type: "string", label: "Awards Note" },
            { name: "expertiseNote", type: "string", label: "Expertise Note" },
            { name: "contactNote", type: "string", label: "Contact Note" },
            { name: "moreDetailsLink", type: "string", label: "More Details Link" }
          ]
        }
      ]
    })
  ],

  pages: [
    {
      urlPath: "/",
      contentFile: "content/homepage.json",
      modelName: "homepage"
    }
  ]
});
