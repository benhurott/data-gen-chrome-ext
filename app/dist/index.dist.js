angular.module('Gen', [])
    .controller('MainCtrl', function($scope, $timeout) {

        $scope.generators = [cpfGen, guidGen];


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
var cpfGen = {
    title: 'CPF',
    alg: function(){
        function randomiza(n) {
            var ranNum = Math.round(Math.random() * n);
            return ranNum;
        }

        function mod(dividendo, divisor) {
            return Math.round(dividendo - (Math.floor(dividendo / divisor) * divisor));
        }

        comPontos = true;
        var cpf = '';

        var n = 9;
        var n1 = randomiza(n);
        var n2 = randomiza(n);
        var n3 = randomiza(n);
        var n4 = randomiza(n);
        var n5 = randomiza(n);
        var n6 = randomiza(n);
        var n7 = randomiza(n);
        var n8 = randomiza(n);
        var n9 = randomiza(n);
        var d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
        d1 = 11 - (mod(d1, 11));

        if (d1 >= 10) d1 = 0;

        var d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
        d2 = 11 - (mod(d2, 11));

        if (d2 >= 10) d2 = 0;

        retorno = '';

        if (comPontos) cpf = '' + n1 + n2 + n3 + '.' + n4 + n5 + n6 + '.' + n7 + n8 + n9 + '-' + d1 + d2;
        else cpf = '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + d1 + d2;

        return cpf;
    }
};
var guidGen = {
    title: 'Guid',
    alg: function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }
};