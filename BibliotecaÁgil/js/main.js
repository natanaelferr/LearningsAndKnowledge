
//var db = openDatabase('mydb', '1.0', 'my first database', 2 * 1024 * 1024);
/*
var sqlite = require('sqlite-sync');
 
//Connecting
if(sqlite.connect('database/books.db')){
    alert("banco de dados não conectado");
}
*/
var count = 0;
var amountBooks = 3;
var array = [   
    ["1","Como fazer sentido e bater o martelo","Alexandro Aolchique - 2017","Disponivel","Emprestado para"],
    ["2","Código Limpo","Tio Bob - 2011","Disponivel","Emprestado para"],
    ["3","Basquete 101","Hortência Marcari - 2010","Disponivel","Emprestado para"]
    ];

function insereLivro(){
    amountBooks = amountBooks + 1;
    item1 = amountBooks.toString();
    item2 = 
    item3 = 
    item4 = 
    item5 = 
    array.push([item1,item2,item3,item4,item5]);
    amountBooks = amountBooks + 1;
}

function mostraCadastro(){
    document.getElementsByClassName("element1").style.display = "none";
    document.getElementsByClassName("element2").style.display = "block";
}

function updateValues(){
    $("#bookTitle").html(array[count][1]);
    $("#autorYear").html(array[count][2]);
    $("#serialNumber").html(array[count][0]);
    $("#status").html(array[count][3]);
    $("#who").html(array[count][4]);
}


function increVal(){
    if(count < (array.length - 1)){
        count = count +1;
        updateValues()
    }
}

function decreVal(){
    if(count > 0){
        count = count - 1;
        updateValues()
    }
}

function retirar(){
    
}


/*
var produtos = [
    { codigo: '01',
      nome: 'Pastilha freio uno',
      descricao: 'Serve até ano 2000'
    },
    { codigo: '02',
      nome: 'Pastilha freio gol',
      descricao: 'Server para 1ª 2ª e 3ª geração'
    }];
  
 var _gerarCsv = function(){
      
     var csv = 'codigo, nome, descricao\n';
  
     produtos.forEach(function(row) {
             csv += row.codigo;
             csv += ','+ row.nome;
             csv += ','+ row.descricao;
             csv += '\n';
     });
   
     var hiddenElement = document.createElement('a');
     hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
     hiddenElement.target = '_blank';
     hiddenElement.download = 'produtos.csv';
     hiddenElement.click();
 };
  
//bookTitle
//autorYear
//serialNumber
//status
//who


    

//var sqlite = require('sqlite-sync');
 
//Connecting
//sqlite.connect('database/books.db');
//var res = sqlite.run("CREATE TABLE COMPANYS(ID  INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL);");



/*
sqlite.insert("COMPANYS",{NAME:"TESTE"}, function(res){

});

sqlite.run("BEGIN; DELETE FROM COMPANYS WHERE ID = 6; ROLLBACK;");

sqlite.run('SELECT * FROM COMPANYS', function(res){
	if(res.error)
		throw (res.error)
	console.log(res)
});

// poormans testing

var testVal1 = "It ain't there";
var testVal2 = "It's there";
sqlite.insert("COMPANYS", {NAME: testVal1});

var test = false;
sqlite.run("SELECT * FROM COMPANYS WHERE NAME = ?", [testVal1], function (res) {
	if (res.length > 0)
		test = true;
});
if (!test) console.log('Test1 fail:',testVal1);

var updated = sqlite.update('COMPANYS', {NAME: testVal2}, {NAME: testVal1});
if (updated != 0)
	console.log('Test2 fail:',updated + ' updated rows != 1');

var deleted = sqlite.delete("COMPANYS", {NAME: testVal2});
if (deleted != 0)
	console.log('Test3 fail:',deleted + ' deleted rows != 1');

test = false;
sqlite.run("SELECT * FROM COMPANYS WHERE SUBSTR(NAME,0,2) = 'It'", function (res) {
	if (res.length == 0)
		test = true;
});
if (!test) console.log('Test4 fail:',testVal2);


sqlite.close();
}
*/


