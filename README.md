# Modern React Portfolio

A beautiful, responsive portfolio website built with React, featuring smooth animations, modern design, and excellent user experience.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth page transitions and hover effects
- **SEO Friendly**: Optimized for search engines
- **Fast Loading**: Optimized performance and loading times
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Beautiful project gallery with filtering
- **Skills Display**: Interactive skills section with progress bars

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations
- **React Icons** - Beautiful icon library
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **EmailJS** - Contact form functionality

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Projects.js
│   │   ├── Projects.css
│   │   ├── Contact.js
│   │   └── Contact.css
│   ├── data/
│   │   ├── projects.js
│   │   └── skills.js
│   ├── styles/
│   │   ├── index.css
│   │   └── App.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📝 Customization

### Personal Information

1. **Update personal details** in the following files:
   - `src/components/Navbar.js` - Change "Your Name"
   - `src/components/Footer.js` - Update social links and name
   - `src/pages/Home.js` - Update hero section content
   - `src/pages/About.js` - Update about section
   - `src/pages/Contact.js` - Update contact information

2. **Update project data** in `src/data/projects.js`:
   ```javascript
   export const projects = [
     {
       id: 1,
       title: "Your Project Name",
       description: "Project description...",
       image: "/images/project1.jpg",
       technologies: ["React", "Node.js", "MongoDB"],
       github: "https://github.com/yourusername/project",
       live: "https://your-project.vercel.app",
       featured: true
     }
   ];
   ```

3. **Update skills** in `src/data/skills.js`:
   ```javascript
   export const skills = {
     frontend: [
       { name: "React", level: 90 },
       { name: "JavaScript", level: 85 }
     ],
     // ... more skills
   };
   ```

### Styling

- **Colors**: Update CSS variables in `src/styles/index.css`
- **Fonts**: Change font family in the CSS files
- **Layout**: Modify grid and flexbox layouts as needed

### Contact Form

To make the contact form functional:

1. **Sign up for EmailJS** at [emailjs.com](https://www.emailjs.com/)
2. **Configure EmailJS** in `src/pages/Contact.js`
3. **Update the form submission logic**

## 🎨 Design Features

- **Smooth Animations**: Powered by Framer Motion
- **Responsive Grid**: CSS Grid for flexible layouts
- **Modern Typography**: Clean, readable fonts
- **Color Scheme**: Professional blue theme (easily customizable)
- **Interactive Elements**: Hover effects and transitions
- **Loading States**: Smooth loading animations

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🚀 Deployment

### Netlify (Recommended)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `build` folder to Netlify
   - Or connect your GitHub repository

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### GitHub Pages

1. **Add homepage** to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio"
   }
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add scripts** to `package.json`:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Happy coding! 🎉** 