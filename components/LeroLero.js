import React, {Component}  from 'react'
import {View, Text , Button} from 'react-native'

  const blockZero = [
      'Manchando a imagem da empresa ',
      'O problema da Loja fechada ',
      'O push nao chega ',
      'O sms esta com problema ',
      'A landingPage ',
      'o novo site do uaufi ',
  ]
  const blockOne = [ 
    "caros colegas",
    "por outro lado,",
    "não podemos esquecer que",
    "a prática mostra que",
    "nunca é demais insistir que",
    "a experiência mostra que",
    "é fundamental ressaltar que",
    "o incentivo ao avanço tecnológico, assim como",
    "assim mesmo,"
  ];
  
  const blockTwo =[ 
    " a execução deste projeto",
    " a complexidade dos estudos efetuados",
    " a atual estrutura de organização",
    " o novo modelo estrutural aqui preconizado",
    " o desenvolvimento de formas distintas de atuação",
    " a constante divulgação das informações",
    " a consolidação das estruturas",
    " a análise dos diversos resultados",
    " o início do programa de formação de atitudes",
    " a expansão de nossa atividade"
  ];
  
  const blockTree = [
    " nos obriga à análise",
    " cumpre um papel essencial na formulação",
    " auxilia a preparação e a estruturação",
    " contribui para a correta determinação",
    " assume importantes posições na definição",
    " facilita a definição",
    " prejudica a percepção da importância",
    " oferece uma boa oportunidade de verificação",
    " acarreta um processo de reformulação",
    " exige precisão e definição" 
  ] ;
  
  const blockFor = [
    " das nossas opções de desenvolvimento futuro ",
    " das nossas metas financeiras e administrativas ",
    " das atitudes e das atribuições da diretoria ",
    " das novas proposições ",
    " das opções básicas para o sucesso do programa ",
    " do nosso sistema de formação de quadros ",
    " das condições apropriadas para os negócios ",
    " dos índices pretendidos ",
    " das formas de ação ",
    " dos conceitos de participação geral "
  ];
  
  const blockFive = [
    'escalavel ',
    'o torna disruptivo ',
    'dos motores de busca',
    'gerando um unicornio',
    'agregando ao inbound marketing',
    'facilitanto a maquina de venda',
    'acelerando os ciclos de interacao',
    'por isso que preciso das informacoes na landingpage',
    'e esse layout do Customer Development nao tem UX ',
    'distribuindo o Growth Hacking por sms'
  ];
  





export default class LeroLero extends Component<Props> {
    state = {
        responseBlaBla: ' :) '
    }

    blablaStartup = () => {
        var b1 = Math.floor((Math.random() * 9) + 0)
        var b2 = Math.floor((Math.random() * 9) + 0)
        var b3 = Math.floor((Math.random() * 9) + 0)
        var b4 = Math.floor((Math.random() * 9) + 0)
        var b5 = Math.floor((Math.random() * 9) + 0)
        var b0 = Math.floor((Math.random() * 5) + 0)
        // return ;
        this.setState({ responseBlaBla: blockZero[b0]+blockOne[b1]+blockTwo[b2]+blockTree[b3]+blockFor[b4]+blockFive[b5]})
        // return "asdasd "+" asdasd"
    }

    render() {
        return(
            <View>
                <Button  onPress={this.blablaStartup} title="Pesquisar"  />
                <Text style={{fontSize: 20}}>{this.state.responseBlaBla}</Text>
            </View>
        )
    }
}
// onPress={this.blablaStartup} 
// {this.state.responseBlaBla}