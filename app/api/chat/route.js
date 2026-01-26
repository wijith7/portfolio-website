import { openai } from '@ai-sdk/openai';
import { generateText, tool } from 'ai';
import { z } from 'zod';
import { workData, serviceData, infoList, certificationsData, recoData } from '@/assets/assets';
import { NextResponse } from 'next/server';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req) {
    const { messages } = await req.json();
    console.log("------- API RECEIVED REQUEST -------");
    console.log("Last Message:", messages[messages.length - 1]);

    // 1. Prepare Content for the "Brain"
    // We serialize the portfolio data into a readable format for the LLM.
    const portfolioContext = JSON.stringify({
        profile: {
            name: "Wijith Pathiranage",
            roles: ["Software Engineer", "Data Analyst", "Data Engineer"],
            bio: "Software Engineer and Data Analyst based in Australia with expertise in Data Engineering, Full Stack Development, and Data Science.",
            education: "Masters in Data Science (Flinders University), BSc in Computer Science & Math.",
            resume_link: "/resume"
        },
        skills: infoList,
        projects: workData.map(p => ({ title: p.title, desc: p.description, tech: p.tags, link: p.link })),
        achievements: serviceData,
        certifications: certificationsData.map(c => c.title),
        recommendations: recoData.map(r => ({ name: r.name, feedback: r.feedback })),
        contact_instruction: "For contact, ask the user to use the form on the website or connect on LinkedIn/Medium via the links."
    }, null, 2);

    try {
        const result = await generateText({
            model: openai('gpt-4o-mini'),
            system: `You are an intelligent Portfolio Agent for Wijith Pathiranage.
    
    Your Goal: Answer visitors' questions about Wijith's skills, projects, and experience.
    Your Tone: Professional, friendly, succinct, and slightly enthusiastic.
    
    Data Source:
    ${portfolioContext}
    
    Instructions:
    - If asked about "Skills", list key languages (Java, Python, React, etc.).
    - If asked about "Projects", summarize 1-2 relevant ones and offer to show more.
    - If asked about "Resume" or "CV", say: "You can view or download the resume here: [View Resume](/resume) or from the button above." AND use command [[SCROLL: top]].
    - If the user asks to "Contact" or "Hire", direct them to the Contact section.
    
    **NAVIGATION COMMANDS:**
    - If the user wants to see a section (e.g. "Show me projects" or "Go to contact"), you MUST include a special command in your response.
    - Format: [[SCROLL: section_name]]
    - Valid Sections: top, about, services, work, contact
    - Example: "Sure! I'll take you to the projects section. [[SCROLL: work]]"
    
    Crucial:
    - Never make up facts. Only use the provided JSON data.
    - If unsure, say "I don't have that info right now, but you can contact Wijith directly!"
    `,
            messages,
            maxSteps: 3,
        });

        // Return simple JSON response
        return NextResponse.json({ role: 'assistant', content: result.text });
    } catch (e) {
        console.error("API Error:", e);
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
