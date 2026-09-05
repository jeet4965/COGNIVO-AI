import React from 'react'
import { Link } from 'react-router'
import "../style/landing.scss"

const Landing = () => {
  return (
    <main className='landing'>
      <div className='landing__orb landing__orb--crimson'></div>
      <div className='landing__orb landing__orb--navy'></div>

      <nav className='nav'>
        <span className='nav__logo'>Cognivo</span>
        <div className='nav__links'>
          <Link to='/login' className='nav__link'>Login</Link>
          <Link to='/register' className='nav__cta'>Get started</Link>
        </div>
      </nav>

      <section className='hero'>
        <span className='hero__kicker'>AI-powered interview prep</span>
        <h1>
          Know exactly what stands between you<br />
          and your <span className='hero__accent'>next offer</span>.
        </h1>
        <p className='hero__lead'>
          Paste a job description, upload your resume, and Cognivo tells you
          what's missing, generates tailored interview questions, and builds
          a day-by-day plan to close the gap.
        </p>
        <div className='hero__actions'>
          <Link to='/register' className='btn btn--primary'>Get started free</Link>
          <Link to='/login' className='btn btn--ghost'>I already have an account</Link>
        </div>
      </section>

      <section className='steps'>
        <div className='steps__item'>
          <span className='steps__num'>01</span>
          <h3>Paste the job description</h3>
          <p>Drop in the role you're targeting so the analysis is specific, not generic.</p>
        </div>
        <div className='steps__item'>
          <span className='steps__num'>02</span>
          <h3>Upload your resume</h3>
          <p>Or describe yourself in a few lines — either works to build your profile.</p>
        </div>
        <div className='steps__item'>
          <span className='steps__num'>03</span>
          <h3>Get your interview report</h3>
          <p>Skill gaps, likely questions with model answers, and a prep plan — ready in seconds.</p>
        </div>
      </section>

      <footer className='landing__footer'>
        <span>Cognivo &middot; Built for job seekers who want an edge</span>
      </footer>
    </main>
  )
}

export default Landing