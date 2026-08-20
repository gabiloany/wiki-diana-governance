import React from 'react';
import styles from './styles.module.css';

/**
 * Renderiza uma tabela de mapeamento técnico Prontuário Eletrônico e-SUS APS ↔ Banco de Dados.
 *
 * @param {number} numero - Número sequencial do quadro (ex: 2 -> "Quadro 2")
 * @param {string} titulo - Descrição exibida ao lado do número (ex: "Antecedentes sobre Parto e Nascimento")
 * @param {Array}  linhas - Linhas de dados da tabela
 * @param {string} fonte  - Fonte dos dados, exibida abaixo da tabela (ex: "DIAna SAPS")
 */
export default function TabelaMapeamento({ numero, titulo, linhas, fonte }) {
  return (
    <div className={styles.tabelaContainer}>
      {(numero || titulo) && (
        <p className={styles.tituloTabela}>
          {numero && <strong>Quadro {numero}</strong>}
          {numero && titulo && ' - '}
          {titulo}
        </p>
      )}

      <table className={styles.tabela}>

        <colgroup>
          <col className={styles.colCampo} />
          <col className={styles.colObrigatorio} />
          <col className={styles.colFormatoPec} />
          <col className={styles.colTabela} />
          <col className={styles.colColuna} />
          <col className={styles.colFormatoBd} />
          <col className={styles.colObrigatorioBd} />
        </colgroup>

        <thead>

          <tr className={styles.headerGroup}>
            <th colSpan="3">
              Prontuário Eletrônico e-SUS APS
            </th>

            <th colSpan="4">
              Banco de Dados
            </th>
          </tr>

          <tr>
            <th>Campo</th>
            <th>Obrigatório</th>
            <th>Formato</th>
            <th>Tabela</th>
            <th>Coluna</th>
            <th>Formato</th>
            <th>Obrigatório</th>
          </tr>

        </thead>

        <tbody>

          {linhas.map((linha, index) => {

            if (linha.tipo === 'secao') {
              return (
                <tr key={index} className={styles.secao}>
                  <td colSpan="7">{linha.texto}</td>
                </tr>
              );
            }

            if (linha.tipo === 'subsecao') {
              return (
                <tr key={index} className={styles.subsecao}>
                  <td colSpan="7">{linha.texto}</td>
                </tr>
              );
            }

            return (
              <tr key={index}>
                <td>{linha.campo}</td>

                <td>{linha.obrigatorioPec}</td>

                <td>{linha.formatoPec}</td>

                <td>
                  <MultiLinha
                    valor={linha.tabela}
                    destaque
                  />
                </td>

                <td>
                  <MultiLinha
                    valor={linha.coluna}
                  />
                </td>

                <td>
                  <MultiLinha
                    valor={linha.formatoBd}
                  />
                </td>

                <td>{linha.obrigatorioBd}</td>
              </tr>
            );

          })}

        </tbody>

      </table>

      {fonte && (
        <p className={styles.fonte}>Fonte: {fonte}</p>
      )}

    </div>
  );
}

function MultiLinha({ valor, destaque = false }) {
  const itens = Array.isArray(valor) ? valor : [valor];

  const conteudo = itens.map((item, i) => (
    <React.Fragment key={i}>
      {i > 0 && <br />}
      {item}
    </React.Fragment>
  ));

  return destaque ? <strong>{conteudo}</strong> : conteudo;
}
