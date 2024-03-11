'use client';

import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import SectionHeading from './sectionHeading';

export default function About() {
    const { ref } = useSectionInView('About');
    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                After earning my degree as a{' '}
                <span className="font-medium">Mechanical Engineer</span>, I
                spent more than two years working in the industry. However, my
                interest in programming led me to enroll in a coding bootcamp
                and learned{' '}
                <span className="font-medium">front end web development</span>.{' '}
                <span className="italic">My favorite part of programming</span>{' '}
                is the problem-solving aspect. I{' '}
                <span className="underline">love</span> the feeling of finally
                figuring out a solution to a problem. My core stack is{' '}
                <span className="font-medium">React, and Next.js.</span>. I am
                also familiar with TypeScript. I am always looking to learn new
                technologies. I am currently looking for a{' '}
                <span className="font-medium">full-time position</span> as a
                software developer.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy
                playing games, and watching movies. I also enjoy{' '}
                <span className="font-medium">learning new things</span>. I am
                currently learning about{' '}
                <span className="font-medium">Competitive programming</span>.
            </p>
        </motion.section>
    );
}
