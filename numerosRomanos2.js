
class Conversor{

  // dentro das classes estão os metodos

    constructor(){
        this.numerosRomanos = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000,        
        };
    }

    RomanoArabico(romano){
        let resultado = 0;

        for (let i = 0; i < romano.length; i++) {
            const valorAtual = this.numerosRomanos[romano[i]];
            const proxValor = this.numerosRomanos[romano[i + 1]];
      
            if (proxValor > valorAtual) {   // temos o caso como "IV" (4) ou "IX"
              resultado += proxValor - valorAtual;
              i++; 
            } else {
              resultado += valorAtual;  // senao, simplesmente adiciona o resultado da conversao
            }
          }
          return resultado;
    }

    ArabicoRomano(arabico) {
      let resultado = '';
      if (proxValor > valorAtual) {   
        resultado += proxValor - valorAtual;
        i++; 
      } else {
        resultado += valorAtual; 
      }
    
      return resultado;
    }
}


const converter = new Conversor();

const romano = 'MDXIV';
const numero = converter.RomanoArabico(romano);
console.log(numero);


