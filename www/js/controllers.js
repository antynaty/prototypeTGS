angular.module('app.controllers', [])
  
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('bienvenidoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('estadosFinancierosCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {
    
    $scope.create = function(){ 
        $state.go('sideMenuBar.configuraciN', $scope.field)
    } 
    $scope.menu = function(){ 
        alert("working");
        $state.go('sideMenuBar', $scope.field)
    }

    $scope.comparativoFin = function(){
        $scope.showComparativo=true;
        $scope.hideComparativo=false;
        $scope.showVisualizacion=false;
        $scope.hideVisualizacion=true;
    }
    $scope.visualizacionFin = function(){
        $scope.showComparativo=false;
        $scope.hideComparativo=true;
        $scope.showVisualizacion=true;
        $scope.hideVisualizacion=false;
    }
    
    $scope.meses=[
        { 
            mes: 'Enero'
        },
        { 
            mes: 'Febrero'
        },
        { 
            mes: 'Marzo'
        },
        { 
            mes: 'Abril'
        },
        { 
            mes: 'Mayo'
        },
        { 
            mes: 'Junio'
        },
        { 
            mes: 'Julio'
        },
        { 
            mes: 'Agosto'
        },
        { 
            mes: 'Septiembre'
        },
        { 
            mes: 'Octubre'
        },
        { 
            mes: 'Noviembre'
        },
        { 
            mes: 'Diciembre'
        }
    ],
     $scope.anos=[
        { 
            ano: '2018'
        },
        { 
            ano: '2017'
        },
        { 
            ano: '2016'
        } 
    ]
    
}])
   
.controller('eSTADOSCOPIACtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {
    
    $scope.create = function(){
        // alert("working");
        $state.go('sideMenuBar.configuraciN', $scope.field)
    }
    $scope.menu = function(){
        alert("working");
        $state.go('sideMenuBar.', $scope.field)
    }

    $scope.comparativoFin = function(){
        $scope.showComparativo=true;
        $scope.hideComparativo=false;
        $scope.showVisualizacion=false;
        $scope.hideVisualizacion=true;
    }
    $scope.visualizacionFin = function(){
        $scope.showComparativo=false;
        $scope.hideComparativo=true;
        $scope.showVisualizacion=true;
        $scope.hideVisualizacion=false;
    }
    
    $scope.meses=[
        { 
            mes: 'Enero'
        },
        { 
            mes: 'Febrero'
        },
        { 
            mes: 'Marzo'
        },
        { 
            mes: 'Abril'
        },
        { 
            mes: 'Mayo'
        },
        { 
            mes: 'Junio'
        },
        { 
            mes: 'Julio'
        },
        { 
            mes: 'Agosto'
        },
        { 
            mes: 'Septiembre'
        },
        { 
            mes: 'Octubre'
        },
        { 
            mes: 'Noviembre'
        },
        { 
            mes: 'Diciembre'
        }
    ],
     $scope.anos=[
        { 
            ano: '2018'
        },
        { 
            ano: '2017'
        },
        { 
            ano: '2016'
        } 
    ]
    
}])
   
.controller('estadosRestuladosCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {
    
    $scope.create = function(){
        // alert("working");
        $state.go('sideMenuBar.configuraciN', $scope.field)
    }
    $scope.comparativoRes = function(){
        $scope.showComparativo=true;
        $scope.hideComparativo=false;
        $scope.showVisualizacion=false;
        $scope.hideVisualizacion=true;
    }
    $scope.visualizacionRes = function(){
        $scope.showComparativo=false;
        $scope.hideComparativo=true;
        $scope.showVisualizacion=true;
        $scope.hideVisualizacion=false;
    }
     $scope.meses=[
        { 
            mes: 'Enero'
        },
        { 
            mes: 'Febrero'
        },
        { 
            mes: 'Marzo'
        },
        { 
            mes: 'Abril'
        },
        { 
            mes: 'Mayo'
        },
        { 
            mes: 'Junio'
        },
        { 
            mes: 'Julio'
        },
        { 
            mes: 'Agosto'
        },
        { 
            mes: 'Septiembre'
        },
        { 
            mes: 'Octubre'
        },
        { 
            mes: 'Noviembre'
        },
        { 
            mes: 'Diciembre'
        }
    ],
     $scope.anos=[
        { 
            ano: '2018'
        },
        { 
            ano: '2017'
        },
        { 
            ano: '2016'
        } 
    ]
}])
   
.controller('estadoDeFlujosEfectivoCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {
    $scope.create = function(){
        // alert("working");
        $state.go('sideMenuBar.configuraciN', $scope.field)
    }
    $scope.comparativoFlujo = function(){
        $scope.showComparativo=true;
        $scope.hideComparativo=false;
        $scope.showVisualizacion=false;
        $scope.hideVisualizacion=true;
    }
    $scope.visualizacionFlujo = function(){
        $scope.showComparativo=false;
        $scope.hideComparativo=true;
        $scope.showVisualizacion=true;
        $scope.hideVisualizacion=false;
    }
     $scope.meses=[
        { 
            mes: 'Enero'
        },
        { 
            mes: 'Febrero'
        },
        { 
            mes: 'Marzo'
        },
        { 
            mes: 'Abril'
        },
        { 
            mes: 'Mayo'
        },
        { 
            mes: 'Junio'
        },
        { 
            mes: 'Julio'
        },
        { 
            mes: 'Agosto'
        },
        { 
            mes: 'Septiembre'
        },
        { 
            mes: 'Octubre'
        },
        { 
            mes: 'Noviembre'
        },
        { 
            mes: 'Diciembre'
        }
    ],
     $scope.anos=[
        { 
            ano: '2018'
        },
        { 
            ano: '2017'
        },
        { 
            ano: '2016'
        } 
    ]
}])
   
.controller('balance8ColumnasCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.create = function(){
        // alert("working");
        $state.go('sideMenuBar.configuraciN', $scope.field)
    }
    $scope.comparativoFlujo = function(){
        $scope.showComparativo=true;
        $scope.hideComparativo=false;
        $scope.showVisualizacion=false;
        $scope.hideVisualizacion=true;
    }
    $scope.visualizacionFlujo = function(){
        $scope.showComparativo=false;
        $scope.hideComparativo=true;
        $scope.showVisualizacion=true;
        $scope.hideVisualizacion=false;
    }
     $scope.meses=[
        { 
            mes: 'Enero'
        },
        { 
            mes: 'Febrero'
        },
        { 
            mes: 'Marzo'
        },
        { 
            mes: 'Abril'
        },
        { 
            mes: 'Mayo'
        },
        { 
            mes: 'Junio'
        },
        { 
            mes: 'Julio'
        },
        { 
            mes: 'Agosto'
        },
        { 
            mes: 'Septiembre'
        },
        { 
            mes: 'Octubre'
        },
        { 
            mes: 'Noviembre'
        },
        { 
            mes: 'Diciembre'
        }
    ],
     $scope.anos=[
        { 
            ano: '2018'
        },
        { 
            ano: '2017'
        },
        { 
            ano: '2016'
        } 
    ]
}])
   
.controller('documentaciNCtrl', ['$scope', '$stateParams', 'DocTGS', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, DocTGS) {
    
    DocTGS.all(); //get a toda la info de la API
    
    $scope.docEstructura = function(){
      $scope.showEstructura=true;
      $scope.hideVisualizador=true;
      $scope.hideEstructura=false;
      $scope.showVisualizador=false;
    };
    $scope.docVisualizador = function(){
      $scope.hideEstructura=true;
      $scope.showVisualizador=true;
      $scope.hideVisualizador=false;
      $scope.showEstructura=false;
    };

    $scope.toggle = function (scope) {
        scope.toggle();
    };

    $scope.toggleGroup = function(group) {
        group.show = !group.show;
    };
    $scope.isGroupShown = function(group) {
    return group.show;
    };
    $scope.toggleCategoria = function(categoria) {
        categoria.show = !categoria.show;
    };
    $scope.isCategoriaShown = function(categoria) {
        return categoria.show;
        };
    $scope.groups=  [
        {
			"nombre": "Contabildiad" , 
			"categorias": [
				{
				  "nombre": "balances",
					"subcategorias": [ 
						{
							"nombre": "balance 8 columnas"
						},
						{
							"nombre": "balance clasificado"
						}
					]
				},
				{
				  "nombre": "libro auxiliares",
					"subcategorias": [
						{
							"nombre": "libro de ventas"
						},
						{
							"nombre": "libro de retenciones"
						},
						{
							"nombre": "libro de compras"
						}
					]
				},
			]
		}, 
		{
			"nombre": "Impuestos" , 
			"categorias": [
				{
				  "nombre": "Operacion renta",
					"subcategorias": [ 
						{
							"nombre": "RLI"
						},
						{
							"nombre": "CPT"
						} 
					]

				},
				{
				  "nombre": "Declaración y solicitudes",
					"subcategorias": [ 
						{
							"nombre": "F-2117"
						},
						{
							"nombre": "F-3229"
						},
						{
							"nombre": "F-4416"
						}
					]
				},
			]
		}, 
		{
			"nombre": "Renta y Diferidos" , 
			"categorias": [
				{
				  "nombre": "Activo Fijo",
				},
				{
				  "nombre": "Proviciones",
				},
			]
		},  
		{
			"nombre": "Otros sin clasificar" , 
		}, 
		{
			"nombre": "Legales" , 
			"categorias": [
				{
				  "nombre": "Corporativo",
					"subcategorias": [ 
						{
							"nombre": "Poderes"
						},
						{
							"nombre": "Actas de Directorio"
						},
						{
							"nombre": "Contratos en General"
						}
					]
				},
				{
				  "nombre": "Laboral",
					"subcategorias": [
						{
							"nombre": "Reglamento de Higiene"
						},
						{
							"nombre": "Contrato Directivo de Trabajo"
						},
						{
							"nombre": "Reglamento interno"
						}
					]
				},
			]
		}, 
	]
}])
   
.controller('informaciNCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

    $scope.infoPersonal = function(){
        $scope.showInfoPersonales=true;
        $scope.hideInfoEmpresa=true;
        $scope.hideInfoSoporte=true;
        $scope.showInfoEmpresa=false;
        $scope.showInfoSoporte=false;
    }
    $scope.infoEmpresa = function(){
        $scope.hideInfoPersonales=true;
        $scope.showInfoEmpresa=true;
        $scope.hideInfoSoporte=true;
        $scope.showInfoSoporte=false;
        $scope.showInfoPersonales=false;
    }
    $scope.infoSoporte = function(){
        $scope.hideInfoPersonales=true;
        $scope.hideInfoEmpresa=true;
        $scope.showInfoSoporte=true; 
        $scope.showInfoPersonales=false;
        $scope.showInfoEmpresa=false;
    }
}])
   
.controller('sideMenuBarCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

 
    $scope.notImplemented = function(){
        alert("Proximamente disponible"); 
    }
}])
   
.controller('configuraciNCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    
    $scope.alert = function(){
        alert("Saliendo de TGS DRIVE");
    }
    $scope.notImplemented = function(){
        alert("Proximamente disponible");
    }   
    
}])
   
.controller('tabsControllerCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 