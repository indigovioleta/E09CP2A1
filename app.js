
var dailyIndicators = 0;

$.ajax({
	url: 'http://www.mindicador.cl/api',
	method: 'GET'
}).then(function(data){
	dailyIndicators = data;
	$('#peso').text('CLP $ '+$('#peso-input').val());
 	$('#dolar').text('US $ '+ dailyIndicators.dolar.valor.toFixed(2));
 	$('#euro').text('€ '+dailyIndicators.euro.valor.toFixed(2));
 	$('#uf').text('$ '+dailyIndicators.uf.valor.toFixed(2));
 	$('#utm').text('$ '+dailyIndicators.utm.valor.toFixed(2));
});

$('#btn-peso').on('click', function(){
	/*$('#dolar-input').val($('#peso-input').val() / dailyIndicators.dolar.valor.toFixed(2));*/
	$('#peso').text('CLP $ '+$('#peso-input').val());
	$('#dolar').text('US $ '+$('#peso-input').val()/dailyIndicators.dolar.valor.toFixed(2));
 	$('#euro').text('€ '+$('#peso-input').val()/dailyIndicators.euro.valor.toFixed(2));
 	$('#table-uf').hide();
 	$('#table-utm').hide();
});

$('#btn-dolar').on('click', function(){
	/*$('#peso-input').val($('#dolar-input').val() * dailyIndicators.dolar.valor.toFixed(2));*/
	$('#peso').text('CLP $ '+$('#dolar-input').val()*dailyIndicators.dolar.valor.toFixed(2));
	$('#dolar').text('US $ '+$('#dolar-input').val());
 	/*$('#euro').text('€ '+$('#dolar-input').val()*dailyIndicators.euro.valor.toFixed(2));*/
 	$('#table-euro').hide();
 	$('#table-uf').hide();
 	$('#table-utm').hide();
});
