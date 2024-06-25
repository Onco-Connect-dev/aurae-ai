/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, #FF8048 100%)",
        "custom-svg":'url(\'data:image/svg+xml;utf8,<svg width="426" height="365" viewBox="0 0 426 365" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M147.742 5.85206C192.285 -10.8485 407.284 9.63069 423.224 52.1435C438.745 93.5405 359.87 381.868 240.3 363.573C233.915 362.596 227.215 362.966 220.756 362.928C165.485 362.603 16.9186 249.344 1.98037 209.502C-13.9592 166.989 103.2 22.5526 147.742 5.85206Z" fill="#FBE3D7" fill-opacity="0.5"/></svg>\')',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
      },
    },
  },
  plugins: [],
};
