import Head from 'next/head';
import Container from '../components/container';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { indexQuery, benefitQuery } from '../lib/queries';
import { usePreviewSubscription } from '../lib/sanity';
import { getClient, overlayDrafts } from '../lib/sanity.server';

export default function Index({ allPosts: initialAllBenefits, preview }) {
  const { data: allBenefits } = usePreviewSubscription(benefitQuery, {
    initialData: initialAllBenefits,
    enabled: preview,
  });
  const benefits = allBenefits || [];
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>David at Figma</title>
        </Head>
        <Container>
          <Intro />
          {benefits.map((benefit) => (
            <div>{benefit.description}</div>
          ))}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allBenefits = overlayDrafts(await getClient(preview).fetch(benefitQuery));
  return {
    props: { allBenefits, preview },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
