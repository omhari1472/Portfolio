# Portfolio Frontend

Modern, dynamic developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎨 Vibrant dark theme with gradient accents
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🚀 Optimized performance (< 3s FCP)
- 📧 Contact form with Web3Forms integration
- 🎯 Static generation for fast loading
- 🔍 SEO optimized

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Linting/Formatting**: Biome
- **Contact Form**: Web3Forms

## 📦 Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local and add your Web3Forms access key
```

## 🔑 Web3Forms Setup

1. Go to [Web3Forms](https://web3forms.com/)
2. Sign up for a free account
3. Create a new form
4. Copy your access key
5. Add it to your `.env.local` file:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
6. Update `components/sections/Contact.tsx` line 168 with your access key

## 🚀 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

## 📁 Project Structure

```
portfolio-frontend/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── layout/              # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/            # Page sections
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       ├── Skills.tsx
│       ├── Education.tsx
│       ├── Hackathons.tsx
│       └── Contact.tsx
├── src/
│   ├── data/                # Static data
│   │   ├── projects.ts
│   │   └── constants.ts
│   └── types/               # TypeScript types
│       └── index.ts
├── lib/
│   ├── utils.ts             # Utility functions
│   └── animations.ts        # Framer Motion animations
└── public/                  # Static assets
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/constants.ts`:

```typescript
export const PERSONAL_INFO = {
  name: 'Your Name',
  title: 'Your Title',
  location: 'Your Location',
  email: 'your@email.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://www.linkedin.com/in/yourusername/',
  bio: 'Your bio',
};
```

### Add/Update Projects

Edit `src/data/projects.ts`:

```typescript
export const projects = [
  {
    id: 'project-id',
    title: 'Project Title',
    description: 'Project description',
    impact: 'Impact statement',
    tags: ['Tech', 'Stack'],
    gradient: 'from-color-500 to-color-500',
    featured: true,
  },
  // ... more projects
];
```

### Modify Colors

Edit `tailwind.config.ts` to customize the color scheme.

### Update Content

All content is in the component files under `components/sections/`. Edit them directly to update:
- Professional experience
- Skills
- Education
- Hackathons and achievements

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variable:
   - `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
5. Deploy!

### Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Add environment variable:
   - `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
7. Deploy!

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:
- Cloudflare Pages
- AWS Amplify
- Azure Static Web Apps
- Self-hosted with Node.js

## 📝 License

MIT

## 👤 Author

**Hari Om**

- GitHub: [@omhari1472](https://github.com/omhari1472)
- LinkedIn: [om-hari](https://www.linkedin.com/in/om-hari/)
- Email: omhari1472@gmail.com

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Framer Motion for smooth animations
- Web3Forms for the contact form service
- Tailwind CSS for the utility-first CSS framework
