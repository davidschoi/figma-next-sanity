import React from 'react';
import myConfiguredSanityClient from './sanityClient';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source) {
  return builder.image(source);
}

export default function SanityImage(src, width) {
  return <img src={urlFor(src.image).width(width).url()} />;
}
