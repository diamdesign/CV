import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "/cv/", // Adjust this according to your deployment path
    build: {
        outDir: "dist",
    },
});
