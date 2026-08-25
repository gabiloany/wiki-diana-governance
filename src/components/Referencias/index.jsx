import React from 'react';
import Link from '@docusaurus/Link';
import { referencias } from '@site/docs/BP_00_boas-praticas/BP_09_arcabouco-digital/data/referencias.data';

export default function Ref({ id }) {
  const numero = referencias.findIndex((r) => r.id === id) + 1;

  if (numero === 0) {
    console.warn(`Ref: id "${id}" não encontrado em referencias.js`);
    return <sup style={{ color: 'red' }}>[?]</sup>;
  }

  return (
    <sup>
      <Link to={`/boas-praticas/arcabouco-digital/referencias#ref-${id}`}>[{numero}]</Link>
    </sup>
  );
}