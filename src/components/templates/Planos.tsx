import React from 'react';
import PlanoCard from './PlanoCard';

export default function Planos() {
  return (
    <div className="flex justify-center flex-wrap gap-4 pt-5">
      <PlanoCard
        titulo="Plano Gratuito"
        preco="R$ 0,00 / mês"
        beneficios={[
          "1 mês",
          "1 motorista",
          "Cadastro de responsáveis limitados : 1 por aluno",
          "até 30 alunos",
          "sem exportação de lista detalhada de informações"
        ]}
      />
      <PlanoCard
        titulo="Essencial"
        preco="R$ 19,00 / mês"
        beneficios={[
          "2 motorista",
          "até 60 alunos",
          "Alerta de falta de alunos",
          "Alerta de vencimento de pagamento no sistema e app",
          "Cadastro de responsáveis limitados : 2 por aluno",
          "exportação de lista detalhada de informações"
        ]}
      />
      <PlanoCard
        titulo="Plano Profissional"
        preco="R$ 39,90 / mês"
        beneficios={[
          "Cadastro de até 100 ou mais alunos",
          "Cadastro de motorista ilimitado",
          "Cadastro de responsáveis ilimitados",
          "Alerta de falta de alunos",
          "Alerta de vencimento de pagamento no sistema e app",
          "cobrança via WhatsApp",
          "exportação de lista detalhada de informações",
          "Gráfico e Relatórios para acompanhar"
        ]}
      />
    </div>
  );
}
