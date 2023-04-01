import { ChemicalElementContextData } from "./context/ChemicalElementProvider";

export function getSubnivelString(subnivel:  ChemicalElementContextData["sublevelDistribution"]) {
	let subnivelString = ""

  if (!subnivel?.s?.um) {
    return ""
  }
 
	if (subnivel.s.um != 0) {
		subnivelString += "<span>1s<sup>" + subnivel.s.um + "</sup></span>";
	}
	if (subnivel.s.dois != 0) {
		subnivelString += " <span>2s<sup>" + subnivel.s.dois + "</sup></span>";
	}
	if (subnivel.p.um != 0) {
		subnivelString += " <span>2p<sup>" + subnivel.p.um + "</sup></span>";
	}
	if (subnivel.s.tres != 0) {
		subnivelString += " <span>3s<sup>" + subnivel.s.tres + "</sup></span>";
	}
	if (subnivel.p.dois != 0) {
		subnivelString += " <span>3p<sup>" + subnivel.p.dois + "</sup></span>";
	}
	if (subnivel.s.quatro != 0) {
		subnivelString += " <span>4s<sup>" + subnivel.s.quatro + "</sup></span>";
	}
	if (subnivel.d.um != 0) {
		subnivelString += " <span>3d<sup>" + subnivel.d.um + "</sup></span>";
	}
	if (subnivel.p.tres != 0) {
		subnivelString += " <span>4p<sup>" + subnivel.p.tres + "</sup></span>";
	}
	if (subnivel.s.cinco != 0) {
		subnivelString += " <span>5s<sup>" + subnivel.s.cinco + "</sup></span>";
	}
	if (subnivel.d.dois != 0) {
		subnivelString += " <span>4d<sup>" + subnivel.d.dois + "</sup></span>";
	}
	if (subnivel.p.quatro != 0) {
		subnivelString += " <span>5p<sup>" + subnivel.p.quatro + "</sup></span>";
	}
	if (subnivel.s.seis != 0) {
		subnivelString += " <span>6s<sup>" + subnivel.s.seis + "</sup></span>";
	}
	if (subnivel.f.um != 0) {
		subnivelString += " <span>4f<sup>" + subnivel.f.um + "</sup></span>";
	}
	if (subnivel.d.tres != 0) {
		subnivelString += " <span>5d<sup>" + subnivel.d.tres + "</sup></span>";
	}
	if (subnivel.p.cinco != 0) {
		subnivelString += " <span>6p<sup>" + subnivel.p.cinco + "</sup></span>";
	}
	if (subnivel.s.sete != 0) {
		subnivelString += " <span>7s<sup>" + subnivel.s.sete + "</sup></span>";
	}
	if (subnivel.f.dois != 0) {
		subnivelString += " <span>5f<sup>" + subnivel.f.dois + "</sup></span>";
	}
	if (subnivel.d.quatro != 0) {
		subnivelString += " <span>6d<sup>" + subnivel.d.quatro + "</sup></span>";
	}
	if (subnivel.p.seis != 0) {
		subnivelString += " <span>7p<sup>" + subnivel.p.seis + "</sup></span>";
	}

  console.log(subnivelString)

  return subnivelString
}