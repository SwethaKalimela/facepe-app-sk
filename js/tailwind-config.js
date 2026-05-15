/** FacePe theme — loaded after https://cdn.tailwindcss.com (Play CDN). */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0f1117",
          900: "#212325",
          850: "#2d3148",
          800: "#2a2d36",
          700: "#5e6472",
          body: "#1e1e1e",
        },
        brand: {
          600: "#5f15ee",
        },
        surface: {
          page: "#fefeff",
          0: "#ffffff",
        },
        lilac: {
          25: "#f5f0ff",
          50: "#f9f6ff",
          100: "#f0ebff",
          200: "#e0d5ff",
          300: "#d9c8fa",
        },
        border: {
          subtle: "#e2e4eb",
          hairline: "#efefef",
          neutral: "#d9d9d9",
        },
        footer: {
          bg: "#0f1117",
          label: "#c4aaff",
          muted: "rgba(255, 255, 255, 0.55)",
          link: "rgba(255, 255, 255, 0.7)",
          legal: "rgba(255, 255, 255, 0.4)",
          "legal-link": "rgba(255, 255, 255, 0.5)",
          "icon-well": "rgba(255, 255, 255, 0.06)",
          "icon-ring": "rgba(255, 255, 255, 0.1)",
        },
        accordion: {
          "toggle-idle": "#f1f2f6",
        },
      },
      spacing: {
        gutter: "100px",
        "section-y": "60px",
        "section-y-footer": "74px",
        "nav-h": "100px",
        "faq-split": "193px",
        "footer-columns": "170px",
        15: "15px",
        33: "33px",
        "btn-ghost-x": "15px",
      },
      height: {
        "btn-ghost": "46px",
      },
      maxWidth: {
        page: "1440px",
        content: "1240px",
      },
      borderRadius: {
        card: "28px",
        tile: "16px",
        pill: "9999px",
        "pill-soft": "999px",
        "pill-secondary": "42px",
      },
      boxShadow: {
        card: "0 4px 10px 4px rgba(0, 0, 0, 0.04)",
        chip: "0 2px 2px rgba(0, 0, 0, 0.1)",
        primary:
          "0 10px 7.5px rgba(0, 0, 0, 0.1), 0 4px 3px rgba(0, 0, 0, 0.1)",
        "faq-dot": "0 0 0 3px rgba(91, 33, 255, 0.15)",
        "steps-panel":
          "0 1px 2px rgba(15, 17, 23, 0.04), 0 1px 3px rgba(15, 17, 23, 0.06)",
      },
      fontFamily: {
        sans: ["Satoshi", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          '"TT Firs Neue"',
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
        logo: ["Aeonik", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-home": [
          "64px",
          { lineHeight: "1.3", letterSpacing: "-0.14875rem", fontWeight: "700" },
        ],
        "display-verify": [
          "68px",
          { lineHeight: "1.3", letterSpacing: "-0.14875rem", fontWeight: "700" },
        ],
        "heading-2": [
          "44px",
          { lineHeight: "50px", letterSpacing: "-0.0825rem", fontWeight: "700" },
        ],
        "heading-faq": [
          "44px",
          { lineHeight: "44px", letterSpacing: "-0.075rem", fontWeight: "700" },
        ],
        "heading-3": [
          "18px",
          { lineHeight: "27px", letterSpacing: "-0.01rem", fontWeight: "700" },
        ],
        eyebrow: [
          "12px",
          { lineHeight: "16px", letterSpacing: "0.0825rem", fontWeight: "500" },
        ],
        "eyebrow-mono": [
          "11px",
          { lineHeight: "16.5px", letterSpacing: "0.1em", fontWeight: "700" },
        ],
        "faq-badge": [
          "11px",
          { lineHeight: "16.5px", letterSpacing: "0.1em", fontWeight: "500" },
        ],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-faq": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "nav-link": ["14px", { lineHeight: "normal", fontWeight: "500" }],
        "logo-wordmark": [
          "22.921px",
          { lineHeight: "normal", fontWeight: "500" },
        ],
        "footer-wordmark": [
          "19.8px",
          { lineHeight: "19.84px", letterSpacing: "-0.397px", fontWeight: "900" },
        ],
        "footer-link": ["14px", { lineHeight: "21px", fontWeight: "400" }],
        "footer-legal": [
          "12px",
          { lineHeight: "18px", letterSpacing: "0.055em", fontWeight: "400" },
        ],
      },
      letterSpacing: {
        "eyebrow-wide": "1.32px",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(90deg, #9c6cfe 0%, #5000ea 98%)",
        "gradient-primary-vertical":
          "linear-gradient(180deg, #9c6cfe 0%, #5000ea 98%)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        fast: "150ms",
        md: "300ms",
        slow: "480ms",
      },
    },
  },
};
