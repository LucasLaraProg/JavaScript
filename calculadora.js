//number() converter valores para numeros
//prompt() registar valores do usuario
//alert()exibit memsagem para o usuario
//Template Strings para usar string junto com expressao  
function calculadora(){
    const operacao= Number( prompt('escolha uma operação:\n 1-Soma(+)\n 2-subtracao (-)\n 3- multiplicação (*)\n 4- divisão real (/)\n 5- divisao inteira(%)\n 6-potenciação (**)' ));
        if(!operacao || operacao>=7){
            alert('******Error******- Operação Invalida!!!!');
            calculadora();
        }else{
            
        let n1=Number (prompt('Insira o primeiro valor:'));
        let n2=Number( prompt('Insira o segundo valor:'));
        let result;
        if(!n1 || !n2){
            alert('******Error******- Parametro Invalido!');
            calculadora();
        }else{
        function soma(){
        result=n1+n2;
        alert(`${n1}+${n2}=${result}`)
        novaoperacao();
                }   
    function subtracao(){
    result=n1-n2;
    alert(`${n1}-${n2}=${result}`)
    novaoperacao();
            }
function multiplicacao(){
    result=n1*n2;
    alert(`${n1}*${n2}=${result}`)
    novaoperacao();
            }
function divisaoReal(){
    result=n1/n2;
    alert(`${n1}/${n2}=${result}`)
    novaoperacao();
            }
function divisaoInteira(){
    result=n1%n2;
    alert(`${n1}resto da divisao entre${n2}=${result}`)
    novaoperacao();
            }
function potenciacao(){
    result=n1**n2;
    alert(`${n1}elevado a${n2}=${result}`)
    novaoperacao();
            }
function novaoperacao(){
    let opcao= prompt('Deseja fazer outra operação?\n 1-Sim\n2-Não ');
    if(opcao==1){
        calculadora();
    }else if(opcao==2){
        alert('Até uma proxima!');
    }else{
        alert('Digite uma opcao valida');
        novaoperacao();
        }
                    }
            }
    /*if(operacao==1){
    soma();
    }else if(operacao==2){
    subtracao();
    }else if(operacao==3){
    multiplicacao();
    }else if(operacao==4){
    divisaoReal();
    }else if(operacao==5){
    divisaoInteira();
    }else if(operacao==6){
    potenciacao();
    
            }
            */
           switch(operacao){
               case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divisaoReal();
                    break;
                case 5:
                    divisaoInteira();
                    break;    
                case 6 :
                    potenciacao();
                    break;
           }
        }
}
calculadora();
