﻿using Entities.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.InterfaceServicos
{
    public interface ICategoriaServico
    {
        Task AdicionarCategoria(Categoria categoria);
        Task AtualizarCategoria(Categoria categoria);
    }
}
