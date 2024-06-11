import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';
import { List } from './AboutSectionOne';
import { useTranslations } from 'next-intl';

const AboutSectionThree = () => {
  const t = useTranslations('About');

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <SectionTitle title={t('five.title')} paragraph={t('five.description')} mb="44px" />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <SectionTitle title={t('six.title')} paragraph={t('six.description')} mb="44px" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
