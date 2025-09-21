"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import PdfPreviewer from "@/components/ui/PdfPreviewer.client"

const workExperience = [
  {
    id: 1,
    title: "Fullstack Developer",
    company: "Echo Solutions Ltd",
    period: "2025 - July - Present",
    description: "Working as a fullstack developer building web applications and digital solutions.",
    responsibilities: [
      "Full-stack development using modern technologies",
      "Collaborating with cross-functional teams",
      "Implementing best practices and coding standards",
      "Contributing to product architecture and design decisions",
    ],
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Souloftware",
    period: "2025 - April - Present",
    description: "Working on cutting-edge software solutions and contributing to innovative projects in a dynamic tech environment.",
    responsibilities: [
      "Frontend development using modern technologies",
      "Collaborating with cross-functional teams",
      "Implementing best practices and coding standards",
      "Contributing to product architecture and design decisions",
    ],
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Design Oxyll",
    period: "2024 - 2025 - March",
    description: "Developing a seamless mobile solution for booking and managing event tickets with real-time availability and secure access.",
    responsibilities: [ 
      "Integration and testing",
      "Mentoring junior web developers and providing technical guidance",
    ],
  },
]

const education = [
  {
    degree: "JavaScript & TypeScript Certification",
    institution: "Coursera",
    period: "2023",
    description:
      "Earned a professional certification in JavaScript and TypeScript from Coursera, building a solid foundation in modern front-end development practices and frameworks."
  },
  {
    degree: "TypeScript Certification",
    institution: "Cisco Networking Academy",
    period: "2023",
    description:
      "Trained in advanced TypeScript concepts at Cisco Networking Academy, with practical experience in writing scalable, maintainable front-end code."
  },
  {
    degree: "Intermediate",
    institution: "Government Degree Boys College 5-L",
    period: "—",
    description:
      "Completed intermediate education with a focus on analytical thinking and problem-solving skills."
  }
];

const certificates = [
  {
    file: "/Coursera Typescript Certificate.pdf",
    label: "JavaScript & TypeScript Certification",
    description: "Completed a professional course on JavaScript and TypeScript from Coursera, focusing on advanced front-end development and logical problem-solving."
  },
  {
    file: "/Cisco_Networking_Academy_Certificate.pdf",
    label: "TypeScript Certification",
    description: "Earned a TypeScript certification from Cisco Networking Academy, gaining practical experience in building structured and scalable front-end applications."
  },
 {
  file: "/Certificate from Uniathena.pdf",
  label: "The Future of Logistics: Smarter, Greener, Faster",
  description: "Participated in the webinar 'The Future of Logistics: Smarter, Greener, Faster' organized by UniAthena on July 18, 2025."
}
]
export default function ExperiencePageClient() {
  return (
    <div className="pt-10"> 

      {/* Work Experience */}
      <section className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Work Experience</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            My professional journey in software development and technology.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {workExperience.map((job, index) => (
            <div
              key={job.company + job.period}
              className="mb-16 relative pl-10 border-l-4 border-emerald-200 dark:border-emerald-800 last:mb-0 hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors duration-300"
            >
              <div className="absolute w-5 h-5 bg-emerald-600 dark:bg-emerald-400 rounded-full -left-[10px] top-0"></div>
              <span className="text-lg font-medium text-slate-500 dark:text-slate-400">{job.period}</span>
              <h3 className="text-3xl font-bold mt-2 text-slate-900 dark:text-white">{job.title}</h3>
              <h4 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-4">{job.company}</h4>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{job.description}</p>
              <div className="mt-6">
                <h5 className="text-lg font-semibold mb-3 text-slate-800 dark:text-slate-200">Key Responsibilities:</h5>
                <ul className="list-disc pl-6 space-y-2 text-lg text-slate-600 dark:text-slate-400">
                  {job.responsibilities.map((responsibility, i) => (
                    <li key={i} className="leading-relaxed">{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/30">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Education</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            My academic background and educational achievements.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={edu.institution + edu.period}
              className="mb-12 relative pl-10 border-l-4 border-emerald-200 dark:border-emerald-800 last:mb-0 hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors duration-300"
            >
              <div className="absolute w-5 h-5 bg-emerald-600 dark:bg-emerald-400 rounded-full -left-[10px] top-0"></div>
              <span className="text-lg font-medium text-slate-500 dark:text-slate-400">{edu.period}</span>
              <h3 className="text-3xl font-bold mt-2 text-slate-900 dark:text-white">{edu.degree}</h3>
              <h4 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-4">{edu.institution}</h4>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Certifications</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Professional certifications that validate my technical skills and expertise.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <Carousel>
            <CarouselContent>
              {certificates.map((cert, index) => (
                <CarouselItem key={cert.file} className="flex justify-center">
                  <Dialog>
                    <div className="card p-8 flex flex-col items-center w-full max-w-md hover:scale-105 transition-all duration-300">
                      <div className="text-4xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">{index + 1}</div>
                      <h3 className="text-xl font-semibold mb-3 text-center text-slate-900 dark:text-white">{cert.label}</h3>
                      <div className="text-slate-600 dark:text-slate-400 text-lg mb-6 text-center min-h-[60px] leading-relaxed">{cert.description}</div>
                      <div className="flex gap-3 w-full">
                        <DialogTrigger asChild>
                          <Button variant="destructive" className="w-1/2 text-lg py-3">Preview</Button>
                        </DialogTrigger>
                        <a href={`/certificates/${encodeURIComponent(cert.file)}`} download target="_blank" rel="noopener noreferrer" className="w-1/2">
                          <Button variant="secondary" className="w-full text-lg py-3">Download</Button>
                        </a>
                      </div>
                      <DialogContent className="max-w-4xl w-full h-[80vh] flex flex-col">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{cert.label}</DialogTitle>
                        </DialogHeader>
                        <PdfPreviewer url={`/certificates/${encodeURIComponent(cert.file)}`} className="flex-1 w-full rounded-lg border" />
                      </DialogContent>
                    </div>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </div>
  )
}
