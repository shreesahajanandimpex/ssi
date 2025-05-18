import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "custom", // "custom" since you aren't using a framework like Next.js
  nodeVersion: "18", // Match Netlify runtime, adjust if different

  // Your local dev command (if any). Leave empty if you are using static files.
  devCommand: "",

  contentSources: [
    new GitContentSource({
      rootPath: __dirname,        // Root path of your repo
      contentDirs: ["."],         // Points to root, adjust if you have a content folder
      models: [
        {
          name: "homepage",
          type: "page",
          label: "Home Page",
          filePath: "index.html",  // Static HTML file to edit
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
            { name: "moreDetailsLink", type: "string", label: "More Details Link" },
          ],
        },
      ],
    }),
  ],
});
