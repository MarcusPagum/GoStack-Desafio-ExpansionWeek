import React from 'react';

import { Header, Intro, SectionRight, SectionLeft } from './styles';

import caminhoImg from '../../assets/caminho.png';
import criatividadeImg from '../../assets/criatividade.png';
import empoderamentoImg from '../../assets/empoderar.png';
import identidadeImg from '../../assets/identidade.png';
import sucessoImg from '../../assets/sucesso.png';

const LandingPage: React.FC = () => {
  return (
    <>
      <Header>
        <h1>
          auto<span>CONHECIMENTO</span>
        </h1>
      </Header>
      <Intro>
        <p>
          Autoconhecimento é a consciência da sua própria personalidade e
          individualidades.
        </p>
        <p>
          É conhecer seus pensamentos, suas emoções, seus comportamentos e suas
          crenças.
        </p>
        <hr />
      </Intro>
      <SectionRight>
        <img src={caminhoImg} alt="Caminhada" />
        <div>
          <h3>Autoconhecimento é sermos responsáveis pela nossa caminhada!</h3>
          <p>
            Quanto mais consciente uma pessoa é sobre si mesma, maior a
            probabilidade de conseguir tirar algum aprendizado do contexto o
            qual está inserido. Não é exagero dizer que a maioria das pessoas
            vivem no modo piloto-automático e só param para uma reflexão quando
            algo dá errado. Em situações de stress nosso comportamento mais
            óbvio é entrar na defensiva, criar desculpas e apontar culpados.
            Esse comportamente se dá principalmente por não querer admitir nossa
            parcela de autorresponsabilidade na falha. A autorresponsabilidade
            nos proporciona a oportunidade de ter uma atitude poderosa para
            alcançar bons resultados.
          </p>
        </div>
      </SectionRight>
      <SectionLeft>
        <img src={identidadeImg} alt="Autocinhecimento" />
        <div>
          <h3>Autoconhecimento é sermos nós mesmos!</h3>
          <p>
            Por anos, nosso subconsciente foi moldado por nossas famílias, pelos
            ambientes de trabalho, pela televisão, pelas escolas, por todo o
            cenário que estamos envolvido. Dizemos ou fazemos inúmeras vezes
            coisas que não sabemos exatamente o porquê. Ter autoconhecimento é
            saber destinguir quais ideias realmente são nossas e quais são
            influências externas. Prestar um concurso público, ser diretor de
            uma multinacional ou comprar o carro do ano, realmente é tudo que
            queremos?
          </p>
        </div>
      </SectionLeft>
      <SectionRight>
        <img src={criatividadeImg} alt="Responsável" />
        <div>
          <h3>Autoconhecimento é sermos criativos!</h3>
          <p>
            Normalmente temos perspctivas bastante claras e limitadas sobre
            diversos assuntos. E estamos confortáveis com isso. Entretanto,
            perspectivas limitadas nos impedem de ter novas experiências e novos
            pontos de vista. Ser criativo é pensar fora da caixa, é deixar nossa
            marca no novo, é colaborar com uma maneira nova de pensar e fazer do
            mundo um lugar no qual queremos viver.
          </p>
        </div>
      </SectionRight>
      <SectionLeft>
        <img src={sucessoImg} alt="Responsável" />
        <div>
          <h3>Autoconhecimento é sermos bem sucedidos!</h3>
          <p>
            Todos temos pontos fortes e limitações, mas independente de quais
            são, estar conscientes deles nos permite aproveitar mais
            possibilidades frente ao processo de florescimento pessoal.
            Identificar nossos pontos fortes e fortalece-los nos permite um
            maior grau de sucesso em nossas escolhas, assim como, nos abre um
            leque de possibilidades para desenvolver de maneira positiva nossas
            limitações.
          </p>
        </div>
      </SectionLeft>
      <SectionRight>
        <img src={empoderamentoImg} alt="Responsável" />
        <div>
          <h3>Autoconhecimento é nos empoderar!</h3>
          <p>
            Em geral, nossa opnião sobre nós mesmos é derivada da opnião que
            outras pessoas tem a nosso respeito. Se somos muito criticados
            tendemos a desenvolver baixa-autoestima e um senso de rejeição. Caso
            contrário, se formos demasiadamente elogiados, a tendência é que
            nossa auto-estima seja elevada. Quando nos conhecemos, nos tornamos
            menos sensíveis às opniões alheias e consequentemente melhoramos
            nossa autoestima, pois sabemos quem somos, o que queremos e no que
            acreditamos. Essa é a oportunidade que temos para nos tornarmos
            empoderados e desenvolvermos a autonomia necessária para sermos o
            protagonista da nossa própria história.
          </p>
        </div>
      </SectionRight>
    </>
  );
};

export default LandingPage;
