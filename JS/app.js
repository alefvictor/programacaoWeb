// Inicializar o módulo.
let nomeApp = 'EscolaWebApp'
let modulos = []
var app = angular.module(nomeApp, modulos);

// Estrutura básica para uma função no controller
let homeController = function($scope){
  $scope.nome = "";

  $scope.DesejarBoasVindas = function() {
    let nome = $scope.nome;
    $scope.mensagem = "Olá, " + nome;
  }
}

app.controller('HomeController', homeController);

// Aluno controller

let alunoController = function($scope){
  $scope.nome = "";
  $scope.matricula = "";
  $scope.cpf = "";
  $scope.nascimento = "";
  $scope.fk_id_endereco = 0;
  $scope.fk_id_curso = 0;

   $scope.cadastrar = function() {
    alunoApi.cadastrar($scope.aluno)
      .then(function(response) {})
      .catch(function(error) {});
  }
}

app.controller('AlunoController', alunoController);

// Aluno factory

var alunoFactory = function($http) {

  var baseUrl = "localhost:5000";
  var path = baseUrl + "/aluno";

  var _cadastrar = function(aluno) {
    return $http.post(path, aluno)
  };

  var _atualizar = function(aluno) {
    return $http.put(path, aluno)
  };

  var _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  var _listar = function() {
    return $http.get(_path)
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("alunoApi", alunoFactory);


// Campus controller

let campusController = function($scope){
  $scope.sigla = "";
  $scope.cidade = "";

   $scope.cadastrar = function() {
    alunoApi.cadastrar($scope.campus)
      .then(function(response) {})
      .catch(function(error) {});
  }
}

app.controller('CampusController', campusController);

// Campus Factory

var campusFactory = function($http) {

  var baseUrl = "localhost:5000";
  var path = baseUrl + "/campus";

  var _cadastrar = function(campus) {
    return $http.post(path, campus)
  };

  var _atualizar = function(campus) {
    return $http.put(path, campus)
  };

  var _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  var _listar = function() {
    return $http.get(_path)
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("campusApi", campusFactory);



// Curso controller

let cursoController = function($scope){
  $scope.nome = "";
  $scope.fk_id_curso = 0;

   $scope.cadastrar = function(){
    alunoApi.cadastrar($scope.curso)
      .then(function(response) {})
      .catch(function(error) {});
  }
}

// Curso factory
app.controller('CursoController', cursoController);

var cursoFactory = function($http) {

  var baseUrl = "localhost:5000";
  var path = baseUrl + "/curso";

  var _cadastrar = function(curso) {
    return $http.post(path, curso)
  };

  var _atualizar = function(curso) {
    return $http.put(path, curso)
  };

  var _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  var _listar = function() {
    return $http.get(_path)
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("cursoApi", cursoFactory);


// Disciplina controller

let disciplinaController = function($scope){
  $scope.nome = "";
  $scope.fk_id_professor = 0;

   $scope.cadastrar = function() {
    alunoApi.cadastrar($scope.disciplina)
      .then(function(response) {})
      .catch(function(error) {});
  }
}

app.controller('disciplinaController', disciplinaController);

// Disciplina Factory

var disciplinaFactory = function($http) {

  var baseUrl = "localhost:5000";
  var path = baseUrl + "/disciplina";

  var _cadastrar = function(disciplina) {
    return $http.post(path, disciplina)
  };

  var _atualizar = function(disciplina) {
    return $http.put(path, disciplina)
  };

  var _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  var _listar = function() {
    return $http.get(_path)
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("disciplinaApi", disciplinaFactory);


// Endereco controller

let enderecoController = function($scope){
  $scope.logradouro = "";
  $scope.complemento = "";
  $scope.bairro = "";
  $scope.cep = "";
  $scope.numero = "";

   $scope.cadastrar = function() {
    alunoApi.cadastrar($scope.endereco)
      .then(function(response) {})
      .catch(function(error) {});
  }

}

app.controller('enderecoController', enderecoController);

// Endereco factory

var enderecoFactory = function($http) {

  var baseUrl = "localhost:5000";
  var path = baseUrl + "/endereco";

  var _cadastrar = function(endereco) {
    return $http.post(path, endereco)
  };

  var _atualizar = function(endereco) {
    return $http.put(path, endereco)
  };

  var _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  var _listar = function() {
    return $http.get(_path)
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("enderecoApi", enderecoFactory);


// Escola controller

let escolaController = function($scope){
  $scope.nome = "";
  $scope.fk_id_endereco = 0;
  $scope.fk_id_campus = 0;

   $scope.cadastrar = function() {
    alunoApi.cadastrar($scope.escola)
      .then(function(response) {})
      .catch(function(error) {});
  }
}

app.controller('escolaController', escolaController);

// Escola factory

var escolaFactory = function($http) {

  var baseUrl = "localhost:5000";
  var path = baseUrl + "/escola";

  var _cadastrar = function(escola) {
    return $http.post(path, escola)
  };

  var _atualizar = function(escola) {
    return $http.put(path, escola)
  };

  var _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  var _listar = function() {
    return $http.get(_path)
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("escolaApi", escolaFactory);

// Professor controller

let professorController = function($scope){
  $scope.nome = "";
  $scope.fk_id_endereco = 0;

   $scope.cadastrar = function() {
    alunoApi.cadastrar($scope.professor)
      .then(function(response) {})
      .catch(function(error) {});
  }

}

app.controller('professorController', professorController);

// Professor factory

var professorFactory = function($http) {

  var baseUrl = "localhost:5000";
  var path = baseUrl + "/professor";

  var _cadastrar = function(professor) {
    return $http.post(path, professor)
  };

  var _atualizar = function(professor) {
    return $http.put(path, professor)
  };

  var _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  var _listar = function() {
    return $http.get(_path)
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("professorApi", professorFactory);

// Turma controller

let turmaController = function($scope){
  $scope.nome = "";
  $scope.fk_id_curso = 0;

   $scope.cadastrar = function() {
    alunoApi.cadastrar($scope.turma)
      .then(function(response) {})
      .catch(function(error) {});
  }

}

app.controller('turmaController', turmaController);

// Turma Factory

var turmaFactory = function($http) {

  var baseUrl = "localhost:5000";
  var path = baseUrl + "/turma";

  var _cadastrar = function(turma) {
    return $http.post(path, turma)
  };

  var _atualizar = function(turma) {
    return $http.put(path, turma)
  };

  var _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  var _listar = function() {
    return $http.get(_path)
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("turmaApi", turmaFactory);



// Turno controller

let turnoController = function($scope){
  $scope.nome = "";

 $scope.cadastrar = function() {
    alunoApi.cadastrar($scope.turno)
      .then(function(response) {})
      .catch(function(error) {});
  }
}

app controller('turnoController', turnoController);

// Turno factory

var turnoFactory = function($http) {

  var baseUrl = "localhost:5000";
  var path = baseUrl + "/turno";

  var _cadastrar = function(turno) {
    return $http.post(path, turno)
  };

  var _atualizar = function(turno) {
    return $http.put(path, turno)
  };

  var _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  var _listar = function() {
    return $http.get(_path)
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("turnoApi", turnoFactory);
