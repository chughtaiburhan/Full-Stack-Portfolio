"use client"

import Image from "next/image"
import { motion } from "framer-motion" 
import { useRef, useState } from "react"

// 1. Define new arrays for each section
const completedProjects = [
  {
    id: 1,
    title: "ClinixPro",
    description: "A comprehensive hospital management system with patient records, appointment scheduling, medical inventory management, and advanced analytics dashboard.",
    image: "/hospi.png",
    year: 2025, 
    live: "https://clinix-pro-iota.vercel.app/",
    featured: true
  },
  {
    id: 2,
    title: "Talent-Connect",
    description: "A modern talent management platform connecting skilled professionals with opportunities, featuring advanced matching algorithms and seamless user experience.",
    image: "/tale.png",
    year: 2025, 
    live: "https://talent-connect-app.vercel.app/",
    featured: true
  },
  {
    id: 3,
    title: "Geenzura",
    description: "Advanced inventory management system with real-time tracking, analytics dashboard, seamless integrations, and comprehensive reporting tools.",
    image: "/genzura.png",
    year: 2025, 
    live: "https://genzura-tau.vercel.app/",
    featured: true
  },
  {
    id: 4,
    title: "Aguuka",
    description: "Aguuka is a fullstack MERN app with AI integration for smarter content creation and task automation.",
    image: "/aguka.jpg",
    year: 2023, 
    live: "https://aguka-one.vercel.app/"
  },
  {
    id: 5,
    title: "Stoka",
    description: "Stoka is an online inventory management system designed to help businesses track stock, sales, and analytics in real time. Features include product management, reporting, and seamless integrations.",
    image: "/blog/stoka-inventory.jpg",
    year: 2025, 
    live: "https://stoka-green.vercel.app/"
  },
  {
    id: 6,
    title: "EduPlatform",
    description: "A cutting-edge frontend for an online learning platform with modern UI/UX and responsive design.",
    image: "/edu.jpg",
    year: 2023, 
    live: "https://eduplatform-iota.vercel.app/"
  }
];

const caseStudies = [
  {
    id: 1,
    title: "Agura Ticketing App",
    description: "Problem: Event organizers and attendees struggled with manual ticketing and real-time seat management. Solution: A seamless mobile app for booking and managing event tickets, with real-time availability, secure QR access, and analytics. For mockups or collaboration, contact: Iamshemaleandre@gmail.com.",
    image: "/agura.png"
  },
  {
    id: 2,
    title: "Hinga AI",
    description: "Problem: Farmers faced crop loss due to late pest/disease detection. Solution: Hinga AI uses computer vision and ML to help farmers identify and manage crop issues early. For solution details or mockups, contact: Iamshemaleandre@gmail.com.",
    image: "/hinga.jpg"
  }
];

const others = [
  {
    id: 1,
    title: "HingaAI",
    description: "Agro_senseai helps farmers manage pests and diseases of crops.", 
  },
  {
    id: 2,
    title: "Genzura",
    description: "Online inventory management system.", 
  },
  {
    id: 3,
    title: "T-HealthSync",
    description: "Tracks patient behavior and health status, predicts diseases using AI.", 
  }
];

const futureUse = [
  {
    id: 1,
    title: "AI-Powered Analytics Platform",
    description: "Advanced analytics platform with machine learning capabilities for business intelligence and predictive modeling."
  },
  {
    id: 2,
    title: "Blockchain Supply Chain Solution",
    description: "Transparent and secure supply chain management system using blockchain technology for traceability and authenticity."
  },
  {
    id: 3,
    title: "IoT Smart Home Hub",
    description: "Centralized smart home management system with IoT device integration and AI-powered automation."
  }
];

export default function ProjectsClientPage() {
  const [activeTab, setActiveTab] = useState("completed")
  const completedRef = useRef<HTMLDivElement>(null)
  const caseStudiesRef = useRef<HTMLDivElement>(null)
  const othersRef = useRef<HTMLDivElement>(null)
  const futureRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
          My Projects
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Explore my portfolio of impactful projects that showcase my skills in full-stack development, 
          AI integration, and modern web technologies.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button
          onClick={() => scrollToSection(completedRef)}
          className="px-6 py-3 text-lg font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Featured Projects
        </button> 
      </div>

      {/* Featured Projects */}
      <section ref={completedRef} id="completed-projects" className="section-padding"> 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {completedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-48 rounded-lg"
                  loading={index === 0 ? undefined : "lazy"}
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                  <span className="text-lg text-slate-500 dark:text-slate-400 font-medium">{project.year}</span>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">{project.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-3"> 
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-base font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Site
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>  
      {/* Future Use */}
      <section ref={futureRef} id="future-use" className="section-padding bg-slate-50 dark:bg-slate-900/30">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Future Projects</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Exciting projects I'm planning to work on in the future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {futureUse.map((project, index) => (
            <motion.div
              key={project.id}
              className="card p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">{project.title}</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{project.description}</p>
              <span className="inline-block px-4 py-2 text-base font-semibold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-lg">
                Coming Soon
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
