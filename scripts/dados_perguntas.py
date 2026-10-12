# -*- coding: utf-8 -*-
"""BASE MESTRE DE 1050 PERGUNTAS DE INTELIGÊNCIA GEOPOLÍTICA — VITALEGEO

Consolidação modular dos lotes temáticos:
- Lote 00: Perguntas 1 a 200 (Base Original CérebroGeo)
- Lote 01: Perguntas 201 a 300 (Chokepoints, Canais & Rotas Estratégicas)
- Lote 02: Perguntas 301 a 400 (Bandeiras, Capitais, Onde Fica, Extensão & População)
- Lote 03: Perguntas 401 a 500 (Hidrografia, Bacias Fluviais & Oceanografia)
- Lote 04: Perguntas 501 a 600 (Relevo, Geologia, Vulcões & Extremos Naturais)
- Lote 05: Perguntas 601 a 700 (Climatologia, Biomas & Biogeografia Fascinante)
- Lote 06: Perguntas 701 a 800 (Capitais do Mundo, Urbanismo & Cidades Globais)
- Lote 07: Perguntas 801 a 900 (Microestados, Ilhas Isoladas & Territórios Ultramarinos)
- Lote 08: Perguntas 901 a 1000 (Tratados Históricos, Geopolítica & Cartografia)
- Lote 09: Perguntas 1001 a 1050 (Geografia do Brasil & América Latina Aprofundada)
"""

import os
import sys

# Garante importação do pacote de perguntas
current_dir = os.path.dirname(os.path.abspath(__file__))
if current_dir not in sys.path:
    sys.path.insert(0, current_dir)

from perguntas.lote_00_base_200 import PERGUNTAS_LOTE_00
from perguntas.lote_01_chokepoints_rotas import PERGUNTAS_LOTE_01
from perguntas.lote_02_bandeiras_superlativos import PERGUNTAS_LOTE_02
from perguntas.lote_03_hidrografia_oceanos import PERGUNTAS_LOTE_03
from perguntas.lote_04_relevo_extremos import PERGUNTAS_LOTE_04
from perguntas.lote_05_clima_biogeografia import PERGUNTAS_LOTE_05
from perguntas.lote_06_capitais_cidades import PERGUNTAS_LOTE_06
from perguntas.lote_07_microestados_ilhas import PERGUNTAS_LOTE_07
from perguntas.lote_08_geopolitica_tratados import PERGUNTAS_LOTE_08
from perguntas.lote_09_brasil_americalatina import PERGUNTAS_LOTE_09

PERGUNTAS = (
    PERGUNTAS_LOTE_00 +
    PERGUNTAS_LOTE_01 +
    PERGUNTAS_LOTE_02 +
    PERGUNTAS_LOTE_03 +
    PERGUNTAS_LOTE_04 +
    PERGUNTAS_LOTE_05 +
    PERGUNTAS_LOTE_06 +
    PERGUNTAS_LOTE_07 +
    PERGUNTAS_LOTE_08 +
    PERGUNTAS_LOTE_09
)

if __name__ == "__main__":
    print(f"Total de perguntas carregadas: {len(PERGUNTAS)}")
    ids = [p["id"] for p in PERGUNTAS]
    assert len(ids) == len(set(ids)), "Erro: Existem IDs duplicados!"
    assert len(PERGUNTAS) >= 1000, "Erro: Total de perguntas menor que 1000!"
    print(f"Validação OK: IDs de {min(ids)} a {max(ids)} sem duplicatas.")
