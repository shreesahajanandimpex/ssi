import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "custom",
  nodeVersion: "18",
  devCommand: "npm run dev",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["."],
      models: [],
    }),
  ],
});
