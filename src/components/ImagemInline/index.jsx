// src/components/ImagemInline/index.js
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

/**
 * Renderiza uma imagem pequena inline, para ser usada no meio de um
 * parágrafo (ex: ícone de um botão citado no texto).
 *
 * @param {string} src - Caminho da imagem
 * @param {string} alt - Texto alternativo da imagem
 */
export default function ImagemInline({ src, alt }) {
  return (
    <img
      src={useBaseUrl(src)}
      alt={alt}
      className={`${styles.inline} inline-img`}
    />
  );
}