import React from 'react'
import ProjectDetails from './ProjectDetails'
import { useState } from 'react'
import TranspoGAPOCaseStudy from '../sections/TranspoGAPOCaseStudy'
import FlowBuddyCaseStudy from '../sections/FlowBuddyCaseStudy'

const caseStudySections = {
    transpogapo: TranspoGAPOCaseStudy,
    flowbuddy: FlowBuddyCaseStudy,
}

const Project = ({title, description, subDescription, href, caseStudy, image, tags, setPreview}) => {
    const [isHidden, setIsHidden] = useState(false)
    const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false)
    const CaseStudySection = caseStudySections[caseStudy]
    const showPreviewOnHover = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches
  return (
    <>
    <div className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0" onMouseEnter={()=> { if (showPreviewOnHover()) setPreview(image) }} onMouseLeave={()=> setPreview(null)}>
        <div>
            <p className="text-2xl">{title}</p>
            <div className="flex gap-5 mt-2 text-sand">
                {tags.map((tag) => (
                    <span key={tag.id}>{tag.name}</span>
                ))}
            </div>
        </div>
        <div className="flex w-full items-center justify-end gap-6 sm:w-auto sm:flex-1">
            {CaseStudySection && (
                <button
                    type="button"
                    onClick={() => setIsCaseStudyOpen((open) => !open)}
                    aria-expanded={isCaseStudyOpen}
                    aria-controls={isCaseStudyOpen ? `${caseStudy}-case-study` : undefined}
                    className="inline-flex items-center gap-2 text-neutral-400 transition-colors hover:text-white"
                >
                    {isCaseStudyOpen ? 'Hide Case Study' : 'Case Study'}
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        fill="none"
                        className={`h-4 w-4 transition-transform ${isCaseStudyOpen ? 'rotate-180' : ''}`}
                    >
                        <path d="m5.5 7.5 4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            )}
            <button type="button" onClick={()=>{ setPreview(null); setIsHidden(true) }} className={`inline-flex items-center gap-1 cursor-pointer hover-animation ${CaseStudySection ? '' : 'ml-auto'}`}>
                Read More
                <img src="assets/arrow-right.svg" alt="" className="w-5" />
            </button>
        </div>
    </div>
    <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
    {CaseStudySection && isCaseStudyOpen && <CaseStudySection />}
    {isHidden && (<ProjectDetails title={title} description={description} subDescription={subDescription} image={image} tags={tags} href={href} closeModal={()=>setIsHidden(false)} />)}
    </>
  )
}

export default Project
