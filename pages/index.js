import Head from 'next/head';
import Layout from '../components/layout';
import Hero from '../components/hero';
import { benefitQuery, valueQuery } from '../lib/queries';
import { usePreviewSubscription } from '../lib/sanity';
import { getClient, overlayDrafts } from '../lib/sanity.server';
import Benefits from '../components/benefits';
import Values from '../components/values';

export default function Index({ allBenefits: initialAllBenefits, allValues: initialAllValues, preview }) {
  const { data: allBenefits } = usePreviewSubscription(benefitQuery, {
    initialData: initialAllBenefits,
    enabled: preview,
  });
  const { data: allValues } = usePreviewSubscription(valueQuery, {
    initialData: initialAllValues,
    enabled: preview,
  });
  const benefits = allBenefits || [];
  const values = allValues || [];
  return (
    <Layout preview={preview}>
      <Head>
        <title>David at Figma</title>
      </Head>
      <Hero />
      <Values values={values} />
      <Benefits benefits={benefits} />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allBenefits = overlayDrafts(await getClient(preview).fetch(benefitQuery));
  const allValues = overlayDrafts(await getClient(preview).fetch(valueQuery));
  return {
    props: { allBenefits, allValues, preview },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
