import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-first';
  constructor() { }
  public itens: Array<item> = new Array<item>();
  public listProdutos: Array<item> = new Array<item>();

  pedido:pedido = {numero:1, valor:0, entrega: false, itens: new Array<item>() };  
  pedidoConcluido = false;  
  model:cliente = {nome: " ", endereco: "", entrega: false};
   
   /* getTotal(): number {
    let total = 0;
    let valorImposto = 0;
    let valorEntrega = 0;

    total = this.somaProdutos();

    valorImposto = total * this.getImposto();

    if (this.entrega) {
        valorEntrega = total * this.getTaxaEntrega();
    }

    //O valor do imposto deve incidir sobre a taxa de entrega?
    return total + valorImposto + valorEntrega;
  } */


  somaProdutos(itens: Array<item>): number {
      let somaProdutos = 0;

        itens.forEach(item => {
          somaProdutos += item.preco*item.quantidade;
      });
      return somaProdutos;
  }

  

  onSubmit() { 
    console.log(this.model);
    //console.log(this.itens);
    this.listProdutos = this.itens.filter((item) => { return item.quantidade > 0; });
    
    this.pedido.valor = this.somaProdutos(this.listProdutos)*1.08;
    
    if(this.model.entrega){
      this.pedido.valor = this.pedido.valor*1.15;
    }
   
    this.pedido.valor = Number.parseFloat(this.pedido.valor.toFixed(2));

    
    if(this.pedido.valor > 0){
      this.pedidoConcluido = true;
    }
    
  }

  ngOnInit(): void {   

    let produtos = [
      {
        id: 1,
        categoria: "Hardware",
        descricao: "Teclado Gamer",
        preco: 300.00,
        quantidade:0
      }, 
      {
        id: 2,
        categoria: "Hardware",
        descricao: "Mouse Sem Fio",
        preco: 100.00,
        quantidade:0
      }, 
      {
        id: 3,
        categoria: "Software",
        descricao: "Super Defender",
        preco: 200.00,
        quantidade:0
      }, 
      {
        id: 4,
        categoria: "Hardware",
        descricao: "Lenovo max",
        preco: 2200.00,
        quantidade:0
      }, 
      {
        id: 5,
        categoria: "Hardware",
        descricao: "Predator H900",
        preco: 5900.00,
        quantidade:0
      }, 
      {
        id: 6,
        categoria: "Acessorio",
        descricao: "Edifier B300",
        preco: 245.50,
        quantidade:0
      }, 
      {
        id: 7,
        categoria: "Acessorio",
        descricao: "Fone max 2",
        preco: 75.30,
        quantidade:0
      }, 
      {
        id: 8,
        categoria: "Software",
        descricao: "Boost de desempenho",
        preco: 30.00,
        quantidade:0
      }, 
      {
        id: 9,
        categoria: "Roupa",
        descricao: "Camisa Hacktoberfest",
        preco: 35.00,
        quantidade:0
      }, 
      {
        id: 10,
        categoria: "Roupa",
        descricao: "Bone geek",
        preco: 30.00,
        quantidade:0
      }, 
      {
        id: 11,
        categoria: "Revistas",
        descricao: "Revista mundo logistica",
        preco: 10.00,
        quantidade:0
      }, 
      {
        id: 12,
        categoria: "Revistas",
        descricao: "Tecnologia educacional",
        preco: 11.95,
        quantidade:0
      }, 
      {
        id: 13,
        categoria: "Hardware",
        descricao: "Nvidia RTX 3090",
        preco: 5000.00,
        quantidade:0
      }, 
      {
        id: 14,
        categoria: "SSD",
        descricao: "SSD kingstone 500GB",
        preco: 350.00,
        quantidade:0
      }, 
      {
        id: 15,
        categoria: "Hardware",
        descricao: "Monitor AOC 29 Polegadas",
        preco: 900.00,
        quantidade:0
      }
    ];

    for (let produto of produtos){
      this.itens.push(produto);
    } 
    
  }
  
  
}

/* export class Cliente {
  constructor(    
    public nome: string,
    public endereco: string,
  ) {   
  }
}
 */
export interface item {
  descricao: string,
  categoria: string,
  preco: number,
  id: number,
  quantidade: number,
}

export interface cliente {
  nome: string,
  endereco: string,
  entrega: boolean,
}

export interface pedido {
  numero: number,
  valor: number,
  itens: Array<item>,
  entrega: boolean
}