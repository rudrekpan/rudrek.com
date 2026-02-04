# rudrek.com Setup Instructions

## Prerequisites

1. **Install Node.js** (v18 or later recommended)
   - Visit https://nodejs.org/ or use a version manager like nvm
   - On macOS with Homebrew: `brew install node`

## Installation

1. Navigate to the project directory:
   ```bash
   cd rudrek.com
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:3000 in your browser

## Customization

### Images
Replace placeholder images in `/public/images/`:
- `avatar.jpg` - Your profile photo (recommended: 400x400px)
- `about-hero.jpg` - Large photo for the About page
- `photo-1.jpg` through `photo-4.jpg` - Gallery photos
- Create `/public/images/projects/` and `/public/images/updates/` for content images

### Content

1. **Personal Info**: Update names, links, and descriptions in:
   - `app/page.tsx` - Home page content
   - `app/about/page.tsx` - About page details
   - `components/Footer.tsx` - Social links
   - `components/Navbar.tsx` - Navigation

2. **Projects**: Edit sample projects in `app/projects/page.tsx` and `app/projects/[slug]/page.tsx`

3. **Blog Posts**: Edit sample posts in `app/updates/page.tsx` and `app/updates/[slug]/page.tsx`

4. **Contact**:
   - Update email and social links in `app/contact/page.tsx`
   - Set up Formspree (or similar) and replace `YOUR_FORM_ID` in `components/ContactForm.tsx`

5. **Resume**: Add your resume as `/public/resume.pdf`

### Styling
- Colors: Edit `tailwind.config.ts` (primary and accent colors)
- Global styles: Edit `app/globals.css`

## Deployment to Vercel

1. Push your code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Deploy (no configuration needed)
5. Connect your custom domain (rudrek.com) in Vercel settings

## Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
rudrek.com/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── projects/          # Projects listing & detail pages
│   ├── updates/           # Blog/updates listing & detail pages
│   └── contact/           # Contact page
├── components/            # Reusable React components
├── content/               # MDX content files (optional)
├── lib/                   # Utility functions
├── public/                # Static assets
│   └── images/           # Images
└── ...config files
```
