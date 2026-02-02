import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
            gold: {
                50: '#fffdf0',
                100: '#fff9d6',
                200: '#fff0ad',
                300: '#ffe175',
                400: '#ffd03d',
                500: '#ffd700', // Primary Gold
                600: '#e6b800',
                700: '#bf8f00',
                800: '#997000',
                900: '#7d5c00',
                950: '#4a3500',
            }
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
        fontFamily: {
            display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        },
        animation: {
            spotlight: "spotlight 2s ease .75s 1 forwards",
            shimmer: "shimmer 2s linear infinite",
        },
        keyframes: {
            shimmer: {
                from: {
                    transform: "translateX(-100%)",
                },
                to: {
                    transform: "translateX(100%)",
                },
            },
            spotlight: {
                "0%": {
                    opacity: "0",
                    transform: "translate(-72%, -62%) scale(0.5)",
                },
                "100%": {
                    opacity: "1",
                    transform: "translate(-50%,-40%) scale(1)",
                },
            },
        },
    }
},
  plugins: [require("tailwindcss-animate")],
};
export default config;
