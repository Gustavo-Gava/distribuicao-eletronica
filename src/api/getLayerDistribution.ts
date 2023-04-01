import { ChemicalElementContextData } from "@/context/ChemicalElementProvider";

export function getLayerDistribution(sublevel: ChemicalElementContextData["sublevelDistribution"]) {
  let camadas = {
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
  };


  camadas.k = sublevel.s.um;
  camadas.l = sublevel.s.dois + sublevel.p.um;
  camadas.m = sublevel.s.tres + sublevel.p.dois + sublevel.d.um;
  camadas.n = sublevel.s.quatro + sublevel.p.tres + sublevel.d.dois + sublevel.f.um;
  camadas.o = sublevel.s.cinco + sublevel.p.quatro + sublevel.d.tres + sublevel.f.dois;
  camadas.p = sublevel.s.seis + sublevel.p.cinco + sublevel.d.quatro;
  camadas.q = sublevel.s.sete + sublevel.p.seis;

  return camadas;
}