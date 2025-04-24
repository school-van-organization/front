import React from 'react';
import { Link } from 'react-router-dom';
import Planos from '../templates/Planos'

export default function PlanosPagamento() {
  return (
    <div className="flex justify-evenly flex-wrap gap-4">
        <Planos/>
    </div>
  );
}
