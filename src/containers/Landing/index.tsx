import * as React from 'react';
import { withRouteData } from 'react-static';

import NoSSR from 'react-no-ssr';
import { Hero, IHero } from 'src/components/Hero';
import { IHeroButton } from 'src/components/Hero/HeroButton';
import { HubSpotForm, IHubSpotForm } from 'src/components/HubSpotForm';
// import { MonacoComponent } from 'src/components/Monaco';
import { IRelatedPage, RelatedPages } from 'src/components/RelatedPages';
import { Section } from 'src/components/Section';
import { SpectralComponent } from 'src/components/Spectral';
import { Collage, ICollage } from 'src/sections/Collage';
import { FeatureSection, IFeatureSection } from 'src/sections/FeatureSection';
import { IImageCallout, ImageCallout } from 'src/sections/ImageCallout';
import { slugify } from 'src/utils/text';

export interface ILanding {
  color: string;
  hero: IHero;
  imageCallout: IImageCallout;
  collage: ICollage;
  featureSection: IFeatureSection;
  hubspot: IHubSpotForm & { title?: string; description?: string };
  relatedPages?: IRelatedPage[];
  hasSandbox?: boolean;
}

export const Landing: React.FunctionComponent<ILanding> = ({
  color,
  hero,
  imageCallout,
  collage,
  featureSection,
  hubspot,
  relatedPages,
  hasSandbox,
}) => {
  let buttons: IHeroButton[] = [];
  if (featureSection && featureSection.features && featureSection.features.length) {
    buttons = featureSection.features.map(feature => ({
      title: feature.shortName,
      icon: 'check-circle',
      href: `#${slugify(feature.title)}`,
    }));
  }

  return (
    <React.Fragment>
      <Hero bgColor={color} buttons={buttons} {...hero} />

      <Collage className="md:px-0 py-6 md:py-6" noPadding {...collage} />

      {hasSandbox && (
        <NoSSR>
          <div className="container flex flex-wrap">
            <div className="w-1/2 sm:w-full pr-12 mt-12">
              {/*<MonacoComponent />*/}
            </div>
            <div className="w-1/2 sm:w-full pl-12 mt-12">
              <SpectralComponent />
            </div>
          </div>
        </NoSSR>
      )}

      <ImageCallout {...imageCallout} />

      <FeatureSection color={color} {...featureSection} />

      {hubspot && (
        <Section key="hubspot" id="demo">
          <div className="container flex items-center justify-center">
            <div className="w-full">
              {hubspot.title && <h2 className="text-3xl text-center">{hubspot.title}</h2>}

              {hubspot.description && (
                <div className="flex justify-center flex-wrap items-center pb-12 md:pb-12">
                  <div
                    className="font-default opacity-75 text-xl max-w-lg mt-4 md:mt-6 mx-auto text-center"
                    dangerouslySetInnerHTML={{ __html: hubspot.description }}
                  />
                </div>
              )}

              <HubSpotForm className="p-16 md:p-4" portalId={hubspot.portalId} formId={hubspot.formId} />
            </div>
          </div>
        </Section>
      )}

      {relatedPages && relatedPages.length ? <RelatedPages pages={relatedPages} /> : null}
    </React.Fragment>
  );
};

export default withRouteData(Landing);
