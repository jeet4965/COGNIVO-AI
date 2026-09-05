import React, { useState, useRef } from 'react'
import "../style/home.scss"
import { useInterview } from '../hooks/useInterview.js'
import { useNavigate } from 'react-router'

const Home = () => {

    const { loading, generateReport, reports } = useInterview()
    const [jobDescription, setjobDescription] = useState("")
    const [selfDescription, setselfDescription] = useState("")
    const resumeInputRef = useRef()
    const containerRef = useRef()

    const navigate = useNavigate()

    const handleGeneratorReport = async () => {
        const resumeFile = resumeInputRef.current.files[0]
        const data = await generateReport({ jobDescription, selfDescription, resumeFile })
        navigate(`/interview/${data._id}`)
    }

    const handleMouseMove = (e) => {
        const el = containerRef.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        el.style.setProperty('--x', `${e.clientX - rect.left}px`)
        el.style.setProperty('--y', `${e.clientY - rect.top}px`)
    }

    if (loading) {
        return (
            <main className="loading-screen">
                <div className="loader">
                    <div className="loader__ring"></div>
                    <div className="loader__ring loader__ring--delay"></div>
                    <div className="loader__core"></div>
                </div>
                <p className="loader__label">
                    Loading<span className="loader__dots"><span>.</span><span>.</span><span>.</span></span>
                </p>
            </main>
        )
    }

    return (
        <main className='home' ref={containerRef} onMouseMove={handleMouseMove}>
            <section className='hero'>
                <span className='hero__kicker'>Cognivo</span>
                <h1>
                    Know exactly what stands between you<br />
                    and your next offer.
                </h1>
                <p className='hero__lead'>
                    Paste the job description, upload your resume, and tell us a little
                    about yourself. Cognivo compares the three, flags what's missing,
                    and builds a day-by-day plan to close the gap before your interview.
                </p>
            </section>

            <section className='intake'>
                <div className='intake__panel intake__panel--jd'>
                    <label htmlFor='jobDescription'>Job description</label>
                    <textarea
                        onChange={(e) => { setjobDescription(e.target.value) }}
                        name='jobDescription'
                        id='jobDescription'
                        placeholder='Paste the full job description here — the more detail, the sharper the analysis.'
                    ></textarea>
                </div>

                <div className='intake__panel intake__panel--profile'>
                    <div className='input-group'>
                        <span className='input-group__title'>Your resume</span>
                        <label className='file-label' htmlFor='resume'>
                            <span className='file-label__title'>Upload resume</span>
                            <span className='file-label__hint'>PDF only</span>
                        </label>
                        <input ref={resumeInputRef} hidden type='file' name='resume' id='resume' accept='.pdf' />
                    </div>

                    <div className='input-group'>
                        <label htmlFor='selfDescription'>Self description</label>
                        <textarea
                            onChange={(e) => { setselfDescription(e.target.value) }}
                            name='selfDescription'
                            id='selfDescription'
                            placeholder="In your own words — background, strengths, what you're aiming for next."
                        ></textarea>
                    </div>

                    <button
                        onClick={handleGeneratorReport}
                        disabled={loading}
                        className='generate-btn'>
                        {loading ? 'Generating…' : 'Generate interview report'}
                    </button>
                </div>
            </section>

            {reports && reports.length > 0 && (
                <section className='recent-reports'>
                    <h2>My Recent Interview Plans</h2>
                    <ul className='reports-list'>
                        {reports.map(report => (
                            <li
                                key={report._id}
                                className='report-item'
                                onClick={() => navigate(`/interview/${report._id}`)}
                            >
                                <h3>{report.title || 'Untitled Position'}</h3>
                                <p className='report-item__meta'>
                                    {report.matchScore != null ? `${report.matchScore}% match` : ''}
                                </p>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </main>
    )
}

export default Home