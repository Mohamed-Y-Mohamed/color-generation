# 🎨 Smart Color Theme Generator

A powerful, AI-driven color theme generator that creates beautiful, accessible website color schemes with both light and dark modes. Perfect for designers, developers, and anyone looking to create professional color palettes quickly.

![Smart Color Theme Generator](https://img.shields.io/badge/Status-Active-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white)
![Groq AI](https://img.shields.io/badge/Groq_AI-FF6B6B?logo=artificial-intelligence&logoColor=white)

## ✨ Features

### 🎯 **Core Functionality**
- **AI-Powered Theme Generation** - Generate themes using Groq AI with natural language descriptions
- **Manual Color Selection** - Pick your own colors with intuitive color pickers
- **Dual Mode Support** - Automatic light and dark mode variants for every theme
- **WCAG Compliance** - All generated themes meet accessibility standards (AA compliance)
- **Live Preview** - Real-time preview of themes on sample UI components

### 🛠️ **Advanced Features**
- **Component Style Generator** - Export CSS for buttons, inputs, alerts, and more
- **Multiple Export Formats** - JSON export for themes and CSS variables
- **Theme Management** - Save, organize, and manage your color schemes
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Dark/Light Toggle** - Built-in theme switching for the app itself

### 🎨 **Generation Methods**
1. **Color Picker** - Start with your brand colors and let AI create complementary palettes
2. **Text Description** - Describe your vision in plain English (e.g., "warm sunset colors for a coffee shop")

## 🚀 Tech Stack

### **Frontend**
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Shadcn/ui** components
- **React Query** for state management
- **Lucide React** for icons

### **Backend**
- **Node.js** with Express
- **TypeScript** throughout
- **Groq AI** (llama-3.1-8b-instant model)
- **Vite** for development

### **AI & Color Science**
- **Groq AI** for intelligent theme generation
- **Color theory algorithms** for complementary color selection
- **WCAG compliance** calculations for accessibility
- **HSL color space** manipulation for perfect color harmony

## 📦 Installation

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- Groq AI API key (free at [groq.com](https://groq.com))

### **Quick Start**

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/smart-color-theme-generator.git
cd smart-color-theme-generator
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` and add your Groq API key:
```env
GROQ_API_KEY=gsk_your_groq_api_key_here
PORT=5000
NODE_ENV=development
```

4. **Start the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to `http://localhost:5000`

## 🎯 Usage

### **Generate Themes with Colors**
1. Click the **"Pick Colors"** tab
2. Choose your primary, secondary, and accent colors using the color pickers
3. Click **"Generate Themes"** 
4. Browse through 3 AI-generated theme variations

### **Generate Themes with Description**
1. Click the **"Describe Theme"** tab
2. Write a description of your desired theme:
   - "Clean, professional theme for a tech startup"
   - "Warm, cozy colors for a coffee shop website"
   - "Bold, vibrant palette for a creative agency"
3. Click **"Generate from Description"**
4. Review the AI-generated themes

### **Export and Use Your Themes**
- **CSS Variables**: Copy-paste ready CSS custom properties
- **Component Styles**: Pre-built CSS for buttons, inputs, alerts
- **JSON Export**: Download themes as JSON for programmatic use
- **Live Preview**: See how themes look on real UI components

## 🎨 Example Themes

The generator creates themes with names like:
- "Ocean Breeze Professional" 
- "Sunset Creative Studio"
- "Forest Minimal Design"
- "Midnight Developer Theme"

Each theme includes:
- ✅ Light and dark mode variants
- ✅ WCAG AA compliant color combinations
- ✅ Primary, secondary, and accent colors
- ✅ Background, text, border, and shadow colors

## 🔧 Development

### **Project Structure**
```
smart-color-theme-generator/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utilities and helpers
│   │   └── pages/          # Route components
├── server/                 # Node.js backend
│   ├── services/           # Business logic
│   │   └── groq.ts         # AI integration
│   ├── routes.ts           # API endpoints
│   └── index.ts            # Server entry point
├── shared/                 # Shared TypeScript types
└── package.json
```

### **Available Scripts**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run type-check   # Run TypeScript checks
npm run lint         # Run ESLint
```

### **API Endpoints**
- `GET /api/themes` - Get all saved themes
- `POST /api/themes/from-colors` - Generate themes from colors
- `POST /api/themes/from-description` - Generate themes from description

## 🤖 AI Integration

This project uses **Groq AI** with the `llama-3.1-8b-instant` model for:

### **Why Groq?**
- ⚡ **Ultra-fast inference** (10x faster than traditional APIs)
- 💰 **Generous free tier** with high request limits
- 🎯 **Optimized for JSON** structured outputs
- 🧠 **Excellent color theory** understanding

### **Color Theory AI Prompts**
The AI is trained to understand:
- Complementary color relationships
- Color temperature and mood
- Brand personality through colors
- Accessibility requirements (WCAG)
- Modern design trends

## 🎨 Color Science

### **WCAG Compliance**
All generated themes automatically ensure:
- **4.5:1 contrast ratio** for normal text
- **3:1 contrast ratio** for large text
- **Proper color combinations** for UI elements

### **Color Harmony**
The generator uses established color theory:
- **Complementary colors** (opposite on color wheel)
- **Triadic relationships** (three evenly spaced colors)
- **Analogous schemes** (adjacent colors)
- **Split-complementary** combinations

## 🌟 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### **Contribution Areas**
- 🎨 New color algorithms
- 🤖 AI prompt improvements
- 🎯 UI/UX enhancements
- 📚 Documentation
- 🐛 Bug fixes
- ⚡ Performance optimizations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Groq AI** for providing fast, reliable AI inference
- **Shadcn/ui** for beautiful, accessible components
- **Tailwind CSS** for utility-first styling
- **Color theory experts** who inspired the algorithms
- **Open source community** for making this possible

## 📞 Support

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/yourusername/smart-color-theme-generator/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/yourusername/smart-color-theme-generator/discussions)
- 📧 **Email**: your-email@example.com

---

**Made with ❤️ for designers and developers who love beautiful colors**

⭐ **If this project helped you, please consider giving it a star!**
