import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

/**
 * Renderiza uma figura com legenda numerada ("Figura N - Título") e fonte,
 * seguindo a mesma estratégia usada em TabelaMapeamento (Quadro N - Título).
 *
 * @param {string} src       - Caminho da imagem
 * @param {string} alt       - Texto alternativo da imagem
 * @param {number} numero    - Número sequencial da figura (ex: 4 -> "Figura 4")
 * @param {string} descricao - Título/descrição exibido ao lado do número (ex: "Tela de Subjetivo no Prontuário Eletrônico e-SUS APS")
 * @param {string} fonte     - Fonte da imagem, exibida abaixo da legenda (ex: "Prontuário Eletrônico e-SUS APS - Versão 5.5.6")
 * @param {string} legenda   - (opcional, retrocompatibilidade) legenda livre, usada caso numero/descricao não sejam informados
 */
export default function Figura({ src, alt, numero, descricao, fonte, legenda }) {
  const temLegendaNumerada = numero || descricao;

  return (
    <figure className={styles.figure}>
      {temLegendaNumerada ? (
        <figcaption className={styles.caption}>
          {numero && <strong>Figura {numero}</strong>}
          {numero && descricao && ' - '}
          {descricao}
        </figcaption>
      ) : (
        legenda && (
          <figcaption className={styles.caption}>{legenda}</figcaption>
        )
      )}

      <img
        src={useBaseUrl(src)}
        alt={alt}
        className={styles.image}
      />

      {fonte && (
        <p className={styles.fonte}>Fonte: {fonte}</p>
      )}
    </figure>
  );
}
