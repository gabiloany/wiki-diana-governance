import React, { useState } from 'react';
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
  const [grupoAtivo, setGrupoAtivo] = useState(null);

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
          {linhas.map((linha, index) =>
            renderLinha(linha, index, grupoAtivo, setGrupoAtivo)
          )}
        </tbody>

      </table>

      {fonte && (
        <p className={styles.fonte}>Fonte: {fonte}</p>
      )}

    </div>
  );
}

function renderLinha(linha, index, grupoAtivo, setGrupoAtivo) {
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

  // Normaliza o lado "Banco de Dados" para arrays de mesmo tamanho.
  // Quando o campo do PEC se desdobra em várias colunas do banco
  // (tabela/coluna/formatoBd como array), cada posição vira uma <tr>
  // própria; campo/obrigatorioPec/formatoPec ganham rowSpan real e
  // aparecem só na primeira <tr> do grupo.
  const tabelas = Array.isArray(linha.tabela) ? linha.tabela : [linha.tabela];
  const colunas = Array.isArray(linha.coluna) ? linha.coluna : [linha.coluna];
  const formatosBd = Array.isArray(linha.formatoBd) ? linha.formatoBd : [linha.formatoBd];

  const nLinhas = Math.max(tabelas.length, colunas.length, formatosBd.length);

  // obrigatorioBd pode ser string única (mesmo valor pra todas as sub-linhas)
  // ou array (um valor por sub-linha, como no Anexo de Arquivo).
  const obrigatoriosBd = Array.isArray(linha.obrigatorioBd)
    ? linha.obrigatorioBd
    : Array(nLinhas).fill(linha.obrigatorioBd);

  // Grupo "ativo" = mouse em qualquer sub-linha deste grupo.
  // Aplicado tanto nas <tr> quanto na célula mesclada (rowSpan),
  // já que ela só existe fisicamente na primeira <tr> do grupo.
  const ativo = grupoAtivo === index;
  const entrar = () => setGrupoAtivo(index);
  const sair = () => setGrupoAtivo(null);

  return Array.from({ length: nLinhas }).map((_, i) => (
    <tr
      key={`${index}-${i}`}
      className={ativo ? styles.linhaAtiva : undefined}
      onMouseEnter={entrar}
      onMouseLeave={sair}
    >
      {i === 0 && (
        <>
          <td
            rowSpan={nLinhas}
            className={`${styles.celulaMae} ${ativo ? styles.linhaAtiva : ''}`}
          >
            {linha.campo}
          </td>
          <td
            rowSpan={nLinhas}
            className={`${styles.celulaMae} ${ativo ? styles.linhaAtiva : ''}`}
          >
            {linha.obrigatorioPec}
          </td>
          <td
            rowSpan={nLinhas}
            className={`${styles.celulaMae} ${ativo ? styles.linhaAtiva : ''}`}
          >
            {linha.formatoPec}
          </td>
        </>
      )}
      <td>{tabelas[i]}</td>
      <td>{colunas[i]}</td>
      <td>{formatosBd[i]}</td>
      <td>{obrigatoriosBd[i]}</td>
    </tr>
  ));
}