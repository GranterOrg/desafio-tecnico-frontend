import { defineConfig, presetWebFonts } from "unocss";
import { presetAttributify } from "@unocss/preset-attributify";
import { presetIcons } from "@unocss/preset-icons";
import { presetMini } from "@unocss/preset-mini";
import { presetTypography } from "@unocss/preset-typography";

const mdiCollection = import("@iconify-json/mdi/icons.json");
const iconCollections = () => {
  return {
    mdi: () => mdiCollection.then((i) => i.default),
  };
};

// Design tokens
const tokens = {
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '15px',
    lg: '20px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '20px',
  },
  lineHeight: {
    xs: '16px',
    sm: '20px',
    base: '24px',
    lg: '28px',
  },
} as const;

export default defineConfig({
  presets: [
    presetAttributify(),
    presetMini({ attributifyPseudo: true }),
    presetIcons({
      collections: iconCollections(),
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'google', 
      fonts: {
        sans: 'Poppins',    
        poppins: [
          {
            name: 'Poppins',
            weights: ['400', '600'],
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
      },
    })
  ],
  theme: {
    fontSize: {
      '14': [tokens.fontSize.sm, tokens.lineHeight.sm],
    },
    colors: {
      // Brand colors
      'primary': "#409EFF",        
      'primary-dark': '#006EE0',
      
      // Base colors   
      'white': '#FFFFFF',
      
      // Gray scale
      'gray-50': '#F8FAFC',        
      'gray-100': '#FAFAF9',       
      'gray-200': '#E2E8F0',       
      'gray-300': '#CBD5E1',       
      'gray-400': '#8C8C8C',       
      'gray-500': '#64748B',       
      'gray-600': '#334155',       
      'gray-900': '#020617',
      
      // Feedback colors       
      // 'success': "#DBECFF",        
      // 'warning': '#EAAA08',        
      // 'error': '#FB7185',
      
      // Feedback backgrounds          
      // 'success-bg': '#FEF7C3',     
      // 'warning-bg': '#FEF7C3',     
      // 'error-bg': '#FFE4E6',
      
      // Status colors       
      'pending': '#FFE4E6',       
      'waiting': '#FEF7C3',        
      'finished': '#DBECFF',       
      'canceled': '#FFE4E6',       
      'assume': '#FDEAD7',
    }
  },
  safelist: [
    'badge-pending',
    'badge-waiting',
    'badge-finished',
    'badge-canceled',
    'i-mdi-account-clock',
    'i-mdi-clock',
    'i-mdi-check',
    'i-mdi-cancel',
    'text-error',
    'text-warning',
    'text-success',
  ],
  shortcuts: [
    // Badge variants
    [/^badge-(pending|waiting|finished|canceled)$/, ([, status]) => `badge-base bg-${status}`],
    {
      // Base components
      'badge-base': `rounded-${tokens.borderRadius.md} px-1px py-${tokens.spacing.xs} flex items-center justify-center gap-${tokens.spacing.xs} w-86px h-24px text-gray-500 text-xs`,
      
      // Button variants
      'btn-base': `py-${tokens.spacing.sm} px-${tokens.spacing.md} font-600 text-${tokens.fontSize.sm} leading-${tokens.lineHeight.sm} rounded-${tokens.borderRadius.md} text-gray-900 focus:outline-none cursor-pointer`,
      'btn-assume': 'btn-base bg-assume border-none',
      'btn-view': 'btn-base bg-transparent border-1 border-solid border-gray-300',

      // Typography
      'section-header': `text-${tokens.fontSize.lg} leading-${tokens.lineHeight.lg} font-semibold text-gray-600`,
      'section-description': `text-gray-500 mt-2 text-${tokens.fontSize.sm} leading-${tokens.lineHeight.sm}`,
      
      // Layout components
      'card-base': `w-full max-w-1200px h-auto flex items-center w-full gap-6 px-6 py-4 min-h-124px border-1 border-gray-300 bg-gray-100 rounded-${tokens.borderRadius.md} overflow-hidden`,
      'tasks-container': `bg-white rounded-${tokens.borderRadius.sm} rounded-r-${tokens.borderRadius.sm} border border-solid border-gray-200 p-6`,
      
      // Tab components
      'tabs': 'flex w-238px border-solid border-1 border-b-0 border-gray-200 rounded-t-sm',
      'tab-base': `w-full px-4 py-2 text-${tokens.fontSize.sm} font-600 text-gray-500 bg-white border-0 flex justify-center items-center cursor-pointer`,
      'tab-active': 'tab-base text-primary border-b-2 border-b-solid border-b-primary',
      'tab-inactive': 'tab-base text-gray-500 border-b-2 border-b-solid border-b-transparent',

      // Form components
      'search-input': `w-full pl-10 pr-3 p-2 border-1 border-solid border-gray-300 rounded-${tokens.borderRadius.md} text-${tokens.fontSize.sm} focus:outline-none focus:border-primary appearance-none text-gray-500 placeholder:text-gray-300`,
    }
  ],
  rules: []
});
