var FROIZ = {};
FROIZ.FORMATOS ={} ;
FROIZ.FORMATOS.rellenar = function rellenar(MASCARA,DATO,ALINEACION){
    if ( !DATO  ){
      return MASCARA;
    }
	let L_MASC = MASCARA.length;
	let L_DATO = DATO.length;
	if ( L_MASC <= L_DATO ){
		return DATO;
	}
	switch ( ALINEACION ){
		case 'i':
		case 'I':
			return (DATO+MASCARA.substring(0,L_MASC-L_DATO));
		case 'd':
		case 'D':
			return (MASCARA.substring(0,L_MASC-L_DATO)+DATO);
		case 'c':
		case 'C':
			if ( L_MASC > L_DATO+1 ){
				return (MASCARA.substring(0,(L_MASC-L_DATO)/2)+DATO+(MASCARA.substring(0,(L_MASC-L_DATO)/2)));
			}else{
				return (MASCARA.substring(0,L_DATO)+DATO);
			}
		default :
			return ( DATO );
	}
}
