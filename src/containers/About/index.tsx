import cn from 'classnames';
import * as React from 'react';
import { withRouteData } from 'react-static';

import { ActionBar, IActionBar } from 'src/components/ActionBar';
import { Hero, IHero } from 'src/components/Hero';

import { Businesses, IBusinesses } from 'src/sections/Businesses';
import { Collage, ICollage } from 'src/sections/Collage';
import { IPressSection, PressSection } from 'src/sections/PressSection';

export interface IMember {
  image: string;
  name: string;
  role: string;
  link: string;
  isLast: boolean;
}

export interface IAbout {
  color: string;
  hero: IHero;
  team: IMember[];
  actionBar: IActionBar;
  businesses: IBusinesses;
  pressSection: IPressSection;
  collage: ICollage;
}

const Member = ({ image, name, role, link, isLast }) => {
  return (
    <div className={cn('mb-48 -mt-24 px-10 sm:px-0 sm:w-48', { 'sm:mb-24': isLast })}>
      <a
        href={link ? link.href : undefined}
        className={cn('block text-center shadow bg-white py-10 sm:py-4 px-4 sm:px-0 h-64 w-64 sm:w-full rounded-lg', {
          'cursor-pointer': link,
        })}
        target="_blank"
      >
        <div
          className="-mt-20 mx-auto rounded-full bg-cover shadow-sm border-grey border h-32 w-32 mb-10"
          style={{
            backgroundImage: image ? `url(${image})` : 'none',
          }}
        />

        <div className="font-bold uppercase text-green">{name}</div>

        {role && <div className="pt-2 text-black">{role}</div>}

        {link && <div className="pt-2">{link.title}</div>}
      </a>
    </div>
  );
};

export const About: React.FunctionComponent<IAbout> = ({
  color,
  hero,
  businesses,
  team,
  actionBar,
  pressSection,
  collage,
}) => {
  return (
    <React.Fragment>
      <Hero key="hero" bgColor={color} {...hero} containerClassName="pb-24" />

      {team.length ? (
        <div className="bg-grey-lightest relative z-5">
          <div className="container flex flex-wrap justify-center md:justify-around text-center md:px-0">
            {team.map((member, index) => (
              <Member key={index} isLast={index === team.length - 1} {...member} />
            ))}
          </div>

          {actionBar && actionBar.enabled ? (
            <div className="md:pb-24 pb-40 -mt-10">
              <ActionBar className="bg-white" {...actionBar} />
            </div>
          ) : null}
        </div>
      ) : null}

      <PressSection id="press" {...pressSection} />

      <Businesses id="businesses" {...businesses} />

      <Collage id="investors" {...collage} />
    </React.Fragment>
  );
};

export default withRouteData(About);
