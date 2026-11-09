import React from 'react';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import { referencias } from '@site/docs/BP_00_boas-praticas/BP_09_arcabouco-digital/data/referencias.data';

export default function Ref({ id }) {
  const location = useLocation();
  const numero = referencias.findIndex((r) => r.id === id) + 1;

  if (numero === 0) {
    console.warn(`Ref: id "${id}" não encontrado em referencias.data.js`);
    return <sup style={{ color: 'red' }}>[?]</sup>;
  }

  const salvarOrigem = () => {
    try {
      sessionStorage.setItem(
        'refOrigem',
        JSON.stringify({
          path: location.pathname + location.search,
          scrollY: window.scrollY,
        })
      );
    } catch (e) {
      /* sessionStorage indisponível: o botão simplesmente não aparece */
    }
  };

  return (
    <sup>
      <Link
        to={`/BP_00_boas-praticas/BP_09_arcabouco-digital/referencias#ref-${id}`}
        onClick={salvarOrigem}
      >
        [{numero}]
      </Link>
    </sup>
  );
}