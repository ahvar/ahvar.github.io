import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  padding-top: 100px; /* Increased padding to prevent overlap with the header */

  @media (max-width: 480px) {
    margin: 0 0 15px 0;
  }

  h2 {
    margin: 0 0 20px 0;
    color: #ffffff;
    font-size: clamp(var(--fz-lg), 5vw, var(--fz-xl));
    font-weight: 700;
  }

  h3 {
    margin-top: 5px;
    color: #a8a8a8;
    line-height: 1.1;
  }

  .no-background {
    background: none;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
  }
`;

const Hero = () => {
    const [isMounted, setIsMounted] = useState(false);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        const timeout = setTimeout(() => {
            setIsMounted(true);
            console.log('Component mounted, isMounted set to true');
        }, navDelay);

        return () => clearTimeout(timeout);
    }, [prefersReducedMotion, navDelay]);

    const one = <h1 className="main-heading"> </h1>;
    const two = <h2 className="big-heading"></h2>;
    const three = <h3 className="big-heading no-background">Arthur Vargas</h3>;
    const four = (
        <>
            <p>
                Software engineer building data pipelines and software tools.
            </p>
        </>
    );

    const items = [one, two, three, four];

    return (
        <StyledHeroSection>
            {prefersReducedMotion ? (
                <>
                    {items.map((item, i) => (
                        <div key={i} className="no-background">{item}</div>
                    ))}
                </>
            ) : (
                <TransitionGroup component={null}>
                    {isMounted &&
                        items.map((item, i) => (
                            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                            </CSSTransition>
                        ))}
                </TransitionGroup>
            )}
        </StyledHeroSection>
    );
};

export default Hero;
