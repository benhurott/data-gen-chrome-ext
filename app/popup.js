var generatos = [];

angular.module('Gen', [])
    .controller('MainCtrl', function($scope, $timeout) {

        $scope.generators = generatos.sort(function(a, b) {return a.order - b.order;});

        $scope.gen = function(generator) {
            var val = generator.alg();
            generator.val = val;
            $scope.copyToClipboard(val);
        };
        
        $scope.message = {
            text: '',
            visible: false    
        };
        
        var _messageTimer = null;
        $scope.showMessage = function(text) {
              $scope.message = {
                  text: text,
                  visible: true  
              };
              
              $timeout.cancel(_messageTimer);
              
              $timeout(function () {
                  $scope.closeMessage();
              }, 3000);
        };
        
        $scope.closeMessage = function () {
            $scope.message.visible = false;
        };
        
        $scope.copyToClipboard = function (val) {
            if(val) {
                copyToClipboard(val);
                $scope.showMessage('Copiado para área de transferência.');
            }
        };
    });




function copyToClipboard(text) {
    var input = document.createElement('input');
    input.style.position = 'fixed';
    input.style.opacity = 0;
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    document.body.removeChild(input);
}


document.addEventListener('DOMContentLoaded', function() {
    angular.bootstrap(document, ['Gen']);
});