export type Element = {
  massa: number
  num_atomico: number
  num_protons: number
  num_neutrons: number
  abr: string
  nome: string
  familia: string
  periodo: number
}

export function getElement(elementAbreviation: string) {
  let element: Element = {
    nome: "",
    abr: "",
    massa: 0,
    num_atomico: 0,
    num_protons: 0,
    num_neutrons: 0,
    familia: "",
    periodo: 0,
  }

  switch (elementAbreviation.toUpperCase()) {
    case "H":
        element.num_atomico = 1
        element.massa = 1.008
        element.num_protons = 1
        element.num_neutrons = 0
        element.abr = "H"
        element.nome = "Hidrogênio"
        element.familia = "1a"
        element.periodo = 1
        break
    case "HE":
        element.num_atomico = 2
        element.massa = 4.003
        element.num_protons = 2
        element.num_neutrons = Math.floor(element.massa - element.num_protons)
        element.abr = "He"
        element.nome = "Hélio"
        element.familia = "2a"
        element.periodo = 1
        break
    case "LI":
        element.num_atomico = 3
        element.massa = 6.941
        element.num_protons = 3
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Li"
        element.nome = "Lítio"
        element.familia = "1a - Metais Alcalinos"
        element.periodo = 2
        break
    case "BE":
        element.num_atomico = 4
        element.massa = 9.012
        element.num_protons = 4
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Be"
        element.nome = "Berílio"
        element.familia = "2A - Metais Alcalinos Terrosos"
        element.periodo = 2
        break
    case "B":
        element.num_atomico = 5
        element.massa = 10.811
        element.num_protons = 5
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "B"
        element.nome = "Boro"
        element.familia = "3A - Família do Boro"
        element.periodo = 2
        break
    case "C":
        element.num_atomico = 6
        element.massa = 12.011
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "C"
        element.nome = "Carbono"
        element.familia = "4A - Família do Carbono"
        element.periodo = 2
        break
    case "N":
        element.num_atomico = 7
        element.massa = 14.007
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "N"
        element.nome = "Nitrogênio"
        element.familia = "2A - Metais Alcalinos Terrosos"
        element.periodo = 2
        break
    case "O":
        element.num_atomico = 8
        element.massa = 15.999
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "O"
        element.nome = "Oxigênio"
        break
    case "F":
        element.num_atomico = 9
        element.massa = 18.998
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "F"
        element.nome = "Flúor"
        break
    case "NE":
        element.num_atomico = 10
        element.massa = 20.18
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Ne"
        element.nome = "Neônio"
        break
    case "NA":
        element.num_atomico = 11
        element.massa = 22.99
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Na"
        element.nome = "Sódio"
        break
    case "MG":
        element.num_atomico = 12
        element.massa = 24.305
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Mg"
        element.nome = "Magnésio"
        break
    case "AL":
        element.num_atomico = 13
        element.massa = 26.982
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.num_protons = element.num_atomico
        element.abr = "Al"
        element.nome = "Alumínio"
        break
    case "SI":
        element.num_atomico = 14
        element.massa = 28.085
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Si"
        element.nome = "Silício"
        break
    case "P":
        element.num_atomico = 15
        element.massa = 30.974
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "P"
        element.nome = "Fósforo"
        break
    case "S":
        element.num_atomico = 16
        element.massa = 32.06
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "S"
        element.nome = "Enxofre"
        break
    case "CL":
        element.num_atomico = 17
        element.massa = 35.45
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Cl"
        element.nome = "Cloro"
        break
    case "AR":
        element.num_atomico = 18
        element.massa = 39.948
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Ar"
        element.nome = "Argônio"
        break
    case "K":
        element.num_atomico = 19
        element.massa = 39.098
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "K"
        element.nome = "Potássio"
        break
    case "CA":
        element.num_atomico = 20
        element.massa = 40.078
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Ca"
        element.nome = "Cálcio"
        break
    case "SC":
        element.num_atomico = 21
        element.massa = 44.956
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Sc"
        element.nome = "Escândio"
        break
    case "TI":
        element.num_atomico = 22
        element.massa = 47.867
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Ti"
        element.nome = "Titânio"
        break
    case "V":
        element.num_atomico = 23
        element.massa = 50.942
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "V"
        element.nome = "Vanádio"
        break
    case "CR":
        element.num_atomico = 24
        element.massa = 51.996
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Cr"
        element.nome = "Cromo"
        break
    case "MN":
        element.num_atomico = 25
        element.massa = 54.938
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Mn"
        element.nome = "Manganês"
        break
    case "FE":
        element.num_atomico = 26
        element.massa = 55.845
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Fe"
        element.nome = "Ferro"
        break
    case "CO":
        element.num_atomico = 27
        element.massa = 58.933
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Co"
        element.nome = "Cobalto"
        break
    case "NI":
        element.num_atomico = 28
        element.massa = 58.693
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Ni"
        element.nome = "Níquel"
        break
    case "CU":
        element.num_atomico = 29
        element.massa = 63.546
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Cu"
        element.nome = "Cobre"
        break
    case "ZN":
        element.num_atomico = 30
        element.massa = 65.38
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Zn"
        element.nome = "Zinco"
        break
    case "GA":
        element.num_atomico = 31
        element.massa = 69.723
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Ga"
        element.nome = "Gálio"
        break
    case "GE":
        element.num_atomico = 32
        element.massa = 72.63
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Ge"
        element.nome = "Germânio"
        break
    case "AS":
        element.num_atomico = 33
        element.massa = 74.922
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "As"
        element.nome = "Arsênio"
        break
    case "SE":
        element.num_atomico = 34
        element.massa = 78.971
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Se"
        element.nome = "Selênio"
        break
    case "BR":
        element.num_atomico = 35
        element.massa = 79.904
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Br"
        element.nome = "Bromo"
        break
    case "KR":
        element.num_atomico = 36
        element.massa = 83.798
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Kr"
        element.nome = "Crípton"
        break
    case "RB":
        element.num_atomico = 37
        element.massa = 85.468
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Rb"
        element.nome = "Rubídio"
        break
    case "SR":
        element.num_atomico = 38
        element.massa = 87.62
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Sr"
        element.nome = "Estrôncio"
        break
    case "Y":
        element.num_atomico = 39
        element.massa = 88.906
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Y"
        element.nome = "Ítrio"
        break
    case "ZR":
        element.num_atomico = 40
        element.massa = 91.224
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Zr"
        element.nome = "Zircônio"
        break
    case "NB":
        element.num_atomico = 41
        element.massa = 92.906
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Nb"
        element.nome = "Nióbio"
        break
    case "MO":
        element.num_atomico = 42
        element.massa = 95.95
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Mo"
        element.nome = "Molibdênio"
        break
    case "TC":
        element.num_atomico = 43
        element.massa = 98.907
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Tc"
        element.nome = "Tecnécio"
        break
    case "RU":
        element.num_atomico = 44
        element.massa = 101.07
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Ru"
        element.nome = "Rutênio"
        break
    case "RH":
        element.num_atomico = 45
        element.massa = 102.91
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Rh"
        element.nome = "Ródio"
        break
    case "PD":
        element.num_atomico = 46
        element.massa = 106.42
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Pd"
        element.nome = "Paládio"
        break
    case "AG":
        element.num_atomico = 47
        element.massa = 107.87
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Ag"
        element.nome = "Prata"
        break
    case "CD":
        element.num_atomico = 48
        element.massa = 112.41
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Cd"
        element.nome = "Cádmio"
        break
    case "IN":
        element.num_atomico = 49
        element.massa = 114.82
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "In"
        element.nome = "Índio"
        break
    case "SN":
        element.num_atomico = 50
        element.massa = 118.71
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Sn"
        element.nome = "Estanho"
        break
    case "SB":
        element.num_atomico = 51
        element.massa = 121.76
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Sb"
        element.nome = "Antimônio"
        break
    case "TE":
        element.num_atomico = 52
        element.massa = 127.60
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Te"
        element.nome = "Telúrio"
        break
    case "I":
        element.num_atomico = 53
        element.massa = 126.90
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "I"
        element.nome = "Iodo"
        break
    case "XE":
        element.num_atomico = 54
        element.massa = 131.30
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Xe"
        element.nome = "Xenônio"
        break
    case "CS":
        element.num_atomico = 55
        element.massa = 132.91
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Cs"
        element.nome = "Césio"
        break
    case "BA":
        element.num_atomico = 56
        element.massa = 137.33
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Ba"
        element.nome = "Bário"
        break
    case "LA":
        element.num_atomico = 57
        element.massa = 138.91
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "La"
        element.nome = "Lantânio"
        break
    case "CE":
        element.num_atomico = 58
        element.massa = 140.12
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Ce"
        element.nome = "Cério"
        break
    case "PR":
        element.num_atomico = 59
        element.massa = 140.91
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Pr"
        element.nome = "Praseodímio"
        break
    case "ND":
        element.num_atomico = 60
        element.massa = 144.24
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Nd"
        element.nome = "Neodímio"
        break
    case "PM":
        element.num_atomico = 61
        element.massa = 145
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Pm"
        element.nome = "Promécio"
        break
    case "SM":
        element.num_atomico = 62
        element.massa = 150.36
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Sm"
        element.nome = "Samário"
        break
    case "EU":
        element.num_atomico = 63
        element.massa = 151.96
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Eu"
        element.nome = "Európio"
        break
    case "GD":
        element.num_atomico = 64
        element.massa = 157.25
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Gd"
        element.nome = "Gadolínio"
        break
    case "TB":
        element.num_atomico = 65
        element.massa = 158.93
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Tb"
        element.nome = "Térbio"
        break
    case "DY":
        element.num_atomico = 66
        element.massa = 162.50
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Dy"
        element.nome = "Disprósio"
        break
    case "HO":
        element.num_atomico = 67
        element.massa = 164.93
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Ho"
        element.nome = "Hólmio"
        break
    case "ER":
        element.num_atomico = 68
        element.massa = 167.26
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Er"
        element.nome = "Érbio"
        break
    case "TM":
        element.num_atomico = 69
        element.massa = 168.93
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Tm"
        element.nome = "Túlio"
        break
    case "YB":
        element.num_atomico = 70
        element.massa = 173.04
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Yb"
        element.nome = "Itérbio"
        break
    case "LU":
        element.num_atomico = 71
        element.massa = 174.96
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Lu"
        element.nome = "Lutécio"
        break
    case "HF":
        element.num_atomico = 72
        element.massa = 178.49
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Hf"
        element.nome = "Háfnio"
        break
    case "TA":
        element.num_atomico = 73
        element.massa = 180.95
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Ta"
        element.nome = "Tantálo"
        break
    case "W":
        element.num_atomico = 74
        element.massa = 183.85
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "W"
        element.nome = "Tungstênio"
        break
    case "RE":
        element.num_atomico = 75
        element.massa = 186.21
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Re"
        element.nome = "Rênio"
        break
    case "OS":
        element.num_atomico = 76
        element.massa = 190.23
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Os"
        element.nome = "Ósmio"
        break
    case "IR":
        element.num_atomico = 77
        element.massa = 192.22
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Ir"
        element.nome = "Irídio"
        break
    case "PT":
        element.num_atomico = 78
        element.massa = 195.09
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Pt"
        element.nome = "Platina"
        break
    case "AU":
        element.num_atomico = 79
        element.massa = 196.97
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Au"
        element.nome = "Ouro"
        break
    case "HG":
        element.num_atomico = 80
        element.massa = 200.59
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Hg"
        element.nome = "Mercúrio"
        break
    case "TL":
        element.num_atomico = 81
        element.massa = 204.37
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Tl"
        element.nome = "Tálio"
        break
    case "PB":
        element.num_atomico = 82
        element.massa = 207.2
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Pb"
        element.nome = "Chumbo"
        break
    case "BI":
        element.num_atomico = 83
        element.massa = 208.98
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Bi"
        element.nome = "Bismuto"
        break
    case "PO":
        element.num_atomico = 84
        element.massa = 209
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Po"
        element.nome = "Polônio"
        break
    case "AT":
        element.num_atomico = 85
        element.massa = 210
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "At"
        element.nome = "Astato"
        break
    case "RN":
        element.num_atomico = 86
        element.massa = 222
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Rn"
        element.nome = "Radônio"
        break
    case "FR":
        element.num_atomico = 87
        element.massa = 223
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Fr"
        element.nome = "Frâncio"
        break
    case "RA":
        element.num_atomico = 88
        element.massa = 226
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Ra"
        element.nome = "Rádio"
        break
    case "AC":
        element.num_atomico = 89
        element.massa = 227
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Ac"
        element.nome = "Actínio"
        break
    case "TH":
        element.num_atomico = 90
        element.massa = 232
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Th"
        element.nome = "Tório"
        break
    case "PA":
        element.num_atomico = 91
        element.massa = 231
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Pa"
        element.nome = "Protactónio"
        break
    case "U":
        element.num_atomico = 92
        element.massa = 238
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "U"
        element.nome = "Urânio"
        break
    case "NP":
        element.num_atomico = 93
        element.massa = 237
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Np"
        element.nome = "Netúnio"
        break
    case "PU":
        element.num_atomico = 94
        element.massa = 244
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Pu"
        element.nome = "Plutônio"
        break
    case "AM":
        element.num_atomico = 95
        element.massa = 243
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Am"
        element.nome = "Amerício"
        break
    case "CM":
        element.num_atomico = 96
        element.massa = 247
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Cm"
        element.nome = "Cúrio"
        break
    case "BK":
        element.num_atomico = 97
        element.massa = 247
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Bk"
        element.nome = "Berquélio"
        break
    case "CF":
        element.num_atomico = 98
        element.massa = 251
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Cf"
        element.nome = "Califórnio"
        break
    case "ES":
        element.num_atomico = 99
        element.massa = 252
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Es"
        element.nome = "Einstênio"
        break
    case "EM":
        element.num_atomico = 100
        element.massa = 257
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Em"
        element.nome = "Férmio"
        break
    case "MD":
        element.num_atomico = 101
        element.massa = 258
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Md"
        element.nome = "Mendelévio"
        break
    case "NO":
        element.num_atomico = 102
        element.massa = 259
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "No"
        element.nome = "Nobélio"
        break
    case "LR":
        element.num_atomico = 103
        element.massa = 266
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Lr"
        element.nome = "Laurêncio"
        break
    case "RF":
        element.num_atomico = 104
        element.massa = 267
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Rf"
        element.nome = "Rutherfórdio"
        break
    case "DB":
        element.num_atomico = 105
        element.massa = 268
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Db"
        element.nome = "Dúbnio"
        break
    case "SG":
        element.num_atomico = 106
        element.massa = 269
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Sg"
        element.nome = "Seabórguio"
        break
    case "BH":
        element.num_atomico = 107
        element.massa = 270
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Bh"
        element.nome = "Bóhrio"
        break
    case "HS":
        element.num_atomico = 108
        element.massa = 277
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Hs"
        element.nome = "Hássio"
        break
    case "MT":
        element.num_atomico = 109
        element.massa = 266
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Mt"
        element.nome = "Meitnério"
        break
    case "DS":
        element.num_atomico = 110
        element.massa = 281
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Ds"
        element.nome = "Darmstádio"
        break
    case "RG":
        element.num_atomico = 111
        element.massa = 282
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Rg"
        element.nome = "Roentgênio"
        break
    case "CN":
        element.num_atomico = 112
        element.massa = 286
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Cn"
        element.nome = "Copernício"
        break
    case "NH":
        element.num_atomico = 113
        element.massa = 286
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Nh"
        element.nome = "Nihônio"
        break
    case "FL":
        element.num_atomico = 114
        element.massa = 289
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Fl"
        element.nome = "Fleróvio"
        break
    case "MC":
        element.num_atomico = 115
        element.massa = 290
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Mc"
        element.nome = "Moscóvio"
        break
    case "LV":
        element.num_atomico = 116
        element.massa = 293
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Lv"
        element.nome = "Livermório"
        break
    case "TS":
        element.num_atomico = 117
        element.massa = 294
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Ts"
        element.nome = "Tenessino"
        break
    case "OG":
        element.num_atomico = 118
        element.massa = 294
        element.num_protons = element.num_atomico
        element.num_neutrons = Math.round(element.massa - element.num_protons)
        element.abr = "Og"
        element.nome = "Oganessônio"
        break
    default:
        element.num_atomico = 0
  }

  return element
}