import { Element } from "./getElement";

export function getSublevelDistribution(element: Element, charge: number) {
  let subnivel = {
    s: {
      um: 0,
      dois: 0,
      tres: 0,
      quatro: 0,
      cinco: 0,
      seis: 0,
      sete: 0,
    },
    p: {
      um: 0,
      dois: 0,
      tres: 0,
      quatro: 0,
      cinco: 0,
      seis: 0,
    },
    d: {
      um: 0,
      dois: 0,
      tres: 0,
      quatro: 0,
    },
    f: {
      um: 0,
      dois: 0,
    },
  };

  const num_eletrons = element.num_protons - charge;

  for (var i = 0; i < num_eletrons; i++) {
    if (subnivel.s.um < 2) {
      subnivel.s.um++;
    } else if (subnivel.s.dois < 2) {
      subnivel.s.dois++;
    } else if (subnivel.p.um < 6) {
      subnivel.p.um++;
    } else if (subnivel.s.tres < 2) {
      subnivel.s.tres++;
    } else if (subnivel.p.dois < 6) {
      subnivel.p.dois++;
    } else if (subnivel.s.quatro < 2) {
      subnivel.s.quatro++;
    } else if (subnivel.d.um < 10) {
      subnivel.d.um++;
    } else if (subnivel.p.tres < 6) {
      subnivel.p.tres++;
    } else if (subnivel.s.cinco < 2) {
      subnivel.s.cinco++;
    } else if (subnivel.d.dois < 10) {
      subnivel.d.dois++;
    } else if (subnivel.p.quatro < 6) {
      subnivel.p.quatro++;
    } else if (subnivel.s.seis < 2) {
      subnivel.s.seis++;
    } else if (subnivel.f.um < 14) {
      subnivel.f.um++;
    } else if (subnivel.d.tres < 10) {
      subnivel.d.tres++;
    } else if (subnivel.p.cinco < 6) {
      subnivel.p.cinco++;
    } else if (subnivel.s.sete < 2) {
      subnivel.s.sete++;
    } else if (subnivel.f.dois < 14) {
      subnivel.f.dois++;
    } else if (subnivel.d.quatro < 10) {
      subnivel.d.quatro++;
    } else if (subnivel.p.seis < 6) {
      subnivel.p.seis++;
    }
  }

  return subnivel;
}