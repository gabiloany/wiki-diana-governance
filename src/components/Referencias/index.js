// src/components/Ref/index.js
import React from 'react';
import Link from '@docusaurus/Link';
import { referencias } from '@site/src/data/referencias';

export default function Ref({ id }) {
  const numero = referencias.findIndex((r) => r.id === id) + 1;

  if (numero === 0) {
    // ajuda a pegar erro de digitação no id em tempo de build
    console.warn(`Ref: id "${id}" não encontrado em referencias.js`);
    return <sup style={{ color: 'red' }}>[?]</sup>;
  }

  return (
    <sup>
      <Link to={`/boas-praticas/referencias#ref-${id}`}>[{numero}]</Link>
    </sup>
  );
}