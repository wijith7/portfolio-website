'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Resume = () => {
    const resumeRef = useRef();

    const handlePrint = () => {
        window.print();
    }

    const resumeData = {
        name: "Wijith Pathiranage",
        title: "Data Engineer | Software Engineer",
        contact: {
            phone: "+61 450 933 554",
            email: "wijith7@gmail.com",
            location: "Marino, South Australia, 5049",
            linkedin: "linkedin.com/in/wijith-pathiranage-5034ab106",
            portfolio: "www.wijith.com",
        },
        summary: "Full-stack developer with over 4 years of industry experience and a recently completed Master of Data Science from Flinders University. Proven ability to bridge software engineering and data analytics, with expertise in Java, Python, C++, React, Next.js, and Spring Boot. Skilled in developing scalable systems using Azure, Databricks, and Power BI. Passionate about leveraging technology to build robust data solutions.",
        skills: {
            languages: ["Java", "Python", "SQL", "JavaScript", "R", "C++", "Ballerina"],
            frameworks: ["Spring Boot", "React.js", "Next.js", "Node.js"],
            cloudData: ["Azure", "Databricks", "Power BI", "Microsoft Fabric", "Apache Kafka", "MySQL", "MongoDB"],
            devOps: ["CI/CD", "Git/GitHub", "Jenkins", "Docker", "Jira", "Agile/Scrum"]
        },
        experience: [
            {
                company: "Entura",
                role: "Graduate Data Engineer",
                period: "Present",
                location: "Australia",
                description: [
                    "Developing scalable data solutions and pipelines for hydro-power and energy monitoring systems.",
                    "Collaborating with cross-functional teams to integrate engineering data into actionable insights.",
                    "Utilizing Azure and modern data stack technologies to optimize data workflows."
                ]
            },
            {
                company: "Flinders University",
                role: "Casual Academic",
                period: "Past",
                location: "Adelaide, Australia",
                description: [
                    "Taught Neural Networks and Machine Learning subjects to undergraduate and postgraduate students.",
                    "Assisted in research projects and provided mentorship on complex data science topics."
                ]
            },
            {
                company: "WSO2",
                role: "Software Engineer",
                period: "2018 – 2020",
                location: "Sri Lanka",
                description: [
                    "Developed web applications using ReactJS and Ballerina to showcase API Manager capabilities.",
                    "Engineered the CASQUE Authenticator using Java to enhance system security protocols.",
                    " implemented 'Docs-as-Code' framework for Siddhi.io, reducing documentation errors by 30% and streamlining developer workflows.",
                    "Contributed to open-source stream processing engines and real-time analytics tools."
                ]
            }
        ],
        education: [
            {
                degree: "Master of Data Science (Research)",
                institution: "Flinders University",
                period: "2022 – 2024",
                details: "GPA: 6.18/7.0. Chancellor's Letter of Commendation. Golden Key International Honour Society. Research focused on Hospital Emergency Department functionality."
            },
            {
                degree: "Bachelor of Science (Special in Computer Science)",
                institution: "Eastern University / Jaffna University",
                period: "2012 – 2018",
                details: "GPA: 3.08/4.0. Specialization in Pure Mathematics, Applied Mathematics, and Computer Science."
            }
        ],
        certifications: [
            "Google Data Analytics Professional Certificate (2024)",
            "Microsoft Certified: Azure Fundamentals (Expected May 2025)",
            "Fundamentals of Digital Marketing - Google Digital Garage"
        ]
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 dark:bg-gray-900 print:bg-white print:p-0">
            {/* Download Button (Hidden in Print) */}
            <div className="max-w-4xl mx-auto mb-6 flex justify-end print:hidden px-4">
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 px-6 py-2.5 bg-darkHover text-white rounded-full hover:scale-105 transition-transform shadow-md"
                >
                    <span>Download PDF</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                </button>
            </div>

            {/* Resume Page (A4 Aspect Ratio) */}
            <div
                ref={resumeRef}
                className="max-w-[210mm] mx-auto bg-white p-[10mm] md:p-[15mm] shadow-2xl rounded-sm text-gray-800 print:shadow-none print:max-w-full print:p-0 print:m-0"
                style={{ minHeight: '297mm' }}
            >
                {/* Header */}
                <header className="border-b-2 border-slate-800 pb-6 mb-6 flex flex-col md:flex-row justify-between items-start gap-4">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-2 uppercase font-Ovo">{resumeData.name}</h1>
                        <h2 className="text-xl md:text-2xl text-purple-900 font-semibold tracking-wide">{resumeData.title}</h2>
                    </div>
                    <div className="text-sm md:text-base text-gray-600 flex flex-col items-start md:items-end gap-1 font-medium">
                        <p className="flex items-center gap-2">
                            <span>{resumeData.contact.location}</span>
                            <span className="text-purple-700">📍</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <a href={`mailto:${resumeData.contact.email}`} className="hover:text-purple-700">{resumeData.contact.email}</a>
                            <span className="text-purple-700">✉️</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <span>{resumeData.contact.phone}</span>
                            <span className="text-purple-700">📱</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <a href={`https://${resumeData.contact.linkedin}`} target="_blank" className="hover:text-purple-700 max-w-[200px] truncate">{resumeData.contact.linkedin}</a>
                            <span className="text-purple-700">💼</span>
                        </p>
                    </div>
                </header>

                {/* Summary */}
                <section className="mb-6">
                    <h3 className="text-xl font-bold text-slate-800 uppercase border-b border-gray-300 mb-3 pb-1">Professional Summary</h3>
                    <p className="text-gray-700 leading-relaxed text-justify">
                        {resumeData.summary}
                    </p>
                </section>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Left Column (Experience & Education) */}
                    <div className="col-span-2 space-y-6">

                        {/* Experience */}
                        <section>
                            <h3 className="text-xl font-bold text-slate-800 uppercase border-b border-gray-300 mb-4 pb-1">Experience</h3>
                            <div className="space-y-6">
                                {resumeData.experience.map((job, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h4 className="text-lg font-bold text-gray-800">{job.role}</h4>
                                            <span className="text-sm font-semibold text-purple-900 bg-purple-50 px-2 py-0.5 rounded">{job.period}</span>
                                        </div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-base font-semibold text-gray-700">{job.company}</span>
                                            <span className="text-sm text-gray-500 italic">{job.location}</span>
                                        </div>
                                        <ul className="list-disc list-outside ml-4 space-y-1 text-gray-700 text-sm leading-relaxed marker:text-purple-700">
                                            {job.description.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Education */}
                        <section>
                            <h3 className="text-xl font-bold text-slate-800 uppercase border-b border-gray-300 mb-4 pb-1">Education</h3>
                            <div className="space-y-4">
                                {resumeData.education.map((edu, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between items-baseline">
                                            <h4 className="text-base font-bold text-gray-800">{edu.degree}</h4>
                                            <span className="text-sm font-semibold text-gray-600">{edu.period}</span>
                                        </div>
                                        <div className="text-sm font-semibold text-purple-900 mb-1">{edu.institution}</div>
                                        <p className="text-sm text-gray-600">{edu.details}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* Right Column (Skills & Certifications) */}
                    <div className="space-y-6">

                        {/* Skills */}
                        <section>
                            <h3 className="text-xl font-bold text-slate-800 uppercase border-b border-gray-300 mb-4 pb-1">Technical Skills</h3>

                            <div className="mb-4">
                                <h4 className="text-sm font-bold text-purple-900 mb-2 uppercase">Languages</h4>
                                <div className="flex flex-wrap gap-2">
                                    {resumeData.skills.languages.map(skill => (
                                        <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">{skill}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-4">
                                <h4 className="text-sm font-bold text-purple-900 mb-2 uppercase">Cloud & Data</h4>
                                <div className="flex flex-wrap gap-2">
                                    {resumeData.skills.cloudData.map(skill => (
                                        <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">{skill}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-4">
                                <h4 className="text-sm font-bold text-purple-900 mb-2 uppercase">Frameworks</h4>
                                <div className="flex flex-wrap gap-2">
                                    {resumeData.skills.frameworks.map(skill => (
                                        <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">{skill}</span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold text-purple-900 mb-2 uppercase">DevOps & Tools</h4>
                                <div className="flex flex-wrap gap-2">
                                    {resumeData.skills.devOps.map(skill => (
                                        <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Certifications */}
                        <section>
                            <h3 className="text-xl font-bold text-slate-800 uppercase border-b border-gray-300 mb-4 pb-1">Certifications</h3>
                            <ul className="space-y-3">
                                {resumeData.certifications.map((cert, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                                        <span className="text-purple-700 mt-1">🏆</span>
                                        <span>{cert}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Awards Highlight */}
                        <section className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                            <h3 className="text-sm font-bold text-purple-900 uppercase mb-2">Key Achievement</h3>
                            <p className="text-xs text-gray-700 leading-relaxed">
                                <strong>Best Revenue App Award (2021)</strong> - Dialog Axiata. Recognized for leading the team that delivered the highest performing application, driving reduced churn and increased user engagement.
                            </p>
                        </section>

                    </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-200 text-center text-xs text-gray-400 print:mt-auto print:pt-4">
                    <p>Designed and built by Wijith Pathiranage | References available upon request</p>
                </div>
            </div>
        </div>
    )
}

export default Resume
