<img width="1943" height="1093" alt="image" src="https://github.com/user-attachments/assets/cc2ff955-17c2-48c7-81c8-479a0f061850" />

# DevPortfolio Template

name: "Bhavya Sathi",

title: "Aspiring Software Engineer & AI Enthusiast",

description: "Portfolio website showcasing my projects, leadership, and passion for AI, software engineering, and technology.",

accentColor: "#f0f1f5",

> **📬 Connect & Share!**  
> For questions and updates, feel free to reach out to bhavya11289@gmail.com

## Preview

To view a live preview of the site, [click here]([https://bhavyasathi.github.io/devportfolio/](http://localhost:4321/)).

- **Personal Information**: Bhavya Sathi
- **Accent Color**: Primary color theme (changing this will change the accent color site wide)
- **Social Links**: bhavya11289@gmail.com, https://www.linkedin.com/in/bhavya-sathi-6190aa35a/, [GitHub](https://github.com/bhavya11289-ai)
- **About Section**: High school senior interested in Data Science and Artificial Intelligence
- **Skills**: List of technical skills
- **Projects**: Project showcase with descriptions and links
- **Experience**: Work history with bullet points
- **Education**: Educational background and achievements

If skills, projects, experience, or education are removed from the config, those sections will be hidden entirely.


#### Basic Information
```typescript
name: "Bhavya Sathi",
title: "Your Job Title",
description: "I am a driven and goal-oriented student with a strong commitment to academic achievement, leadership, and personal growth. I enjoy applying technology and innovation to solve real-world problems while continuously building new skills through research, software development, and collaborative projects.",
accentColor: "##0b08bf", // Hex color for theme
```

#### Social Links (all optional)
```typescript
social: {
  email: "bhavya11289@gmail.com",
  linkedin: "[https://linkedin.com/in/yourprofile](https://www.linkedin.com/in/bhavya-sathi-6190aa35a/)",
  github: "[https://github.com/bhavya11289-ai](https://github.com/bhavya11289-ai)",
}
```

#### About Section
```typescript
aboutMe: " I am a driven and goal-oriented student with a strong commitment to academic achievement, leadership, and personal growth. I enjoy applying technology and innovation to solve real-world problems while continuously building new skills through research, software development, and collaborative projects."
```

#### Skills
```typescript
skills: ["Microsoft Excel Office Specalist, Microsoft Excel Specialist Expert, Business of Retail Certified Specialist, Adobe Certified Prefessional in Visual Design]
```

#### Projects
```typescript
projects: [
  {
    name: "Project Name",
    description: "Brief description of what the project does and its impact",
    link: "https://github.com/yourusername/project",
    skills: ["React", "Node.js", "AWS"], // Technologies used
  }
]
```

#### Experience
```typescript
experience: [
  {
    company: "Company Name",
    title: "Your Job Title",
    dateRange: "Jan 2022 - Present",
    bullets: [
      "Led development of microservices architecture serving 1M+ users",
      "Reduced API response times by 40% through optimization",
      "Mentored team of 5 junior developers",
    ],
  }
]
```

#### Education
```typescript
education: [
  {
    school: "Cuthbertson High School",
    dateRange: "2022 - 2027",
    achievements: [
      "GPA: 4.43 W"
    ]
  }
]
```

## Project Structure

```
devportfolio/
├── public/
│   └── favicon.svg          # Site favicon
├── src/
│   ├── components/          # Astro components
│   │   ├── About.astro      # About section
│   │   ├── Education.astro  # Education section
│   │   ├── Experience.astro # Work experience section
│   │   ├── Footer.astro     # Site footer
│   │   ├── Header.astro     # Navigation header
│   │   ├── Hero.astro       # Hero/intro section
│   │   └── Projects.astro   # Projects showcase
│   ├── pages/
│   │   └── index.astro      # Main page layout
│   ├── styles/
│   │   └── global.css       # Global styles
│   └── config.ts            # Site configuration
├── astro.config.mjs         # Astro configuration
├── package.json             # Project dependencies
├── tailwind.config.js       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```


## License

This project is fully and completely MIT. See LICENSE.md.

## Questions?

Feel free to reach out on [(LinkedIn]([https://x.com/rfitzio](https://www.linkedin.com/in/bhavya-sathi-6190aa35a/)) if you have any questions.
