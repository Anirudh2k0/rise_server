import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  ssr: true,
  build: {
    minify: false,
  },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";

// import { createPageRender } from "vite-plugin-ssr";
// import render from "./src/entry-server";

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
//   },
//   build: {
//     outDir: "dist",
//     ssrManifest: true,
//     rollupOptions: {
//       input: {
//         main: path.resolve(__dirname, "index.html"),
//         fallback: path.resolve(__dirname, "fallback.html"),
//       },
//     },
//   },
//   server: {
//     middlewareMode: "ssr",
//     watch: {
//       usePolling: true,
//     },
//   },
//   optimizeDeps: {
//     include: ["@material-ui/core"],
//   },
//   ssr: {
//     noExternal: ["@material-ui/core"],
//     external: ["@material-ui/icons", "@material-ui/core/styles"],
//     plugin: async () => {
//       const { getPage } = await createPageRender({ render });
//       return {
//         async render({ url, manifest }) {
//           const pageContext = { url };
//           const { headTags, html } = await getPage(pageContext);
//           return { headTags, html };
//         },
//       };
//     },
//   },
// });
