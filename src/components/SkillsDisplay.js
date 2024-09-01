import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default function SkillsDisplay() {

    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            setTimeout(() => {
                HandleProgress();
            }, 200);
        }
    }, [inView])

    function HandleProgress() {
        const elements = [
            { selector: '.ProgressPercent1', width: '90%', backgroundColor: 'rgb(74, 202, 117)' },
            { selector: '.ProgressPercent2', width: '90%', backgroundColor: 'rgb(129, 34, 207)' },
            { selector: '.ProgressPercent3', width: '95%', backgroundColor: 'rgb(19, 68, 160)' },
            { selector: '.ProgressPercent4', width: '80%', backgroundColor: 'rgb(241, 88, 177)' },
            { selector: '.ProgressPercent5', width: '80%', backgroundColor: 'rgb(35, 139, 224)' },
        ];

        elements.forEach((element) => {
            const el = document.querySelector(element.selector);
            if (el) {
                el.style.width = element.width;
                el.style.backgroundColor = element.backgroundColor;
            }
        });
    }
    return (
        <div className='SkillsDisplay'>
            <div className='SkillsLeft'>
                <img className='ImSkills' src='16.jpg' />
            </div>
            <div className='SkillsNext' ref={ref}>
                <div>
                    <h2 className='SkillsShowHead'>
                        Why Choose Our Trainers
                    </h2>
                </div>
                <div className='SkillShowBar' >
                    <div className='skills-head'>
                        Efficiency Enhancement
                    </div>
                    <div className='ProgressBar'>
                        <div className='ProgressPercent1'>

                        </div>
                    </div>
                    <div className='SkillDisp'>
                        Streamlining processes for top-tier performance.
                    </div>
                </div>
                <div className='SkillShowBar'>
                    <div>
                        Client-Centric Focus
                    </div>
                    <div className='ProgressBar'>
                        <div className='ProgressPercent2'>

                        </div>
                    </div>
                    <div className='SkillDisp'>
                        Your satisfaction drives our passion.
                    </div>
                </div>
                <div className='SkillShowBar'>
                    <div>
                        Engaging & Interactive Lessons
                    </div>
                    <div className='ProgressBar'>
                        <div className='ProgressPercent3'>

                        </div>
                    </div>
                    <div className='SkillDisp'>
                        Courses that keep you actively involved and learning.
                    </div>
                </div>
                <div className='SkillShowBar'>
                    <div>
                        Exceeding Learning Expectations
                    </div>
                    <div className='ProgressBar'>
                        <div className='ProgressPercent4'>

                        </div>
                    </div>
                    <div className='SkillDisp'>
                        Going beyond standard education with advanced insights.
                    </div>
                </div>
                <div className='SkillShowBar'>
                    <div>
                        Personalized Course Content


                    </div>
                    <div className='ProgressBar'>
                        <div className='ProgressPercent5'>

                        </div>
                    </div>
                    <div className='SkillDisp'>
                        Customized designs crafted just for you.
                    </div>
                </div>
            </div>
        </div>
    )
}
