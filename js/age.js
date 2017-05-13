var app = {};

///AGE CHECK
// var age19 = 599184000000;
// var age18 = 567648000000;
//
function getAge(){
	//
	var todaysDate = new Date();
	var today = todaysDate.getTime();
	var dd = $('#day').val();
	var mm = $('#month').val();
	var yy = $('#year').val();
	//
	var stringedDate = yy + '-' + mm + '-' + dd + 'T13:19:11+0000'
	var usersDate = new Date(stringedDate);
	var resultDate = usersDate.getTime();
	//
	var checkDate = today - resultDate;
	//
	var validAge;
	var province = $('#province').val();
	console.log(province);
	//
	if(province == 'alberta' || province == 'manitoba' || province == 'quebec'){
		validAge = 568100000000;
		console.log(validAge);
	} else{
		validAge = 599600000000;
		console.log(validAge);
	}
	//
	if (checkDate > validAge ){
		console.log('you can come in');
    	window.location.href = "http://localhost:8888/084-Reinhart/Production";
	} else {
		console.log('youre too young to come in');
	}
}
function monthFunction(){
	$monthSelect = $('#month').val();
	$daySelect = $('#day');
	$daySelect.empty();
	//
	if($monthSelect == 04 || $monthSelect == 06 || $monthSelect == 09 || $monthSelect == 11 ){
		$daySelect.append(thirtyDays);
	} else if ($monthSelect == 02){
		$daySelect.append(twentyEightDays);
	} else{
		$daySelect.append(thirtyOneDays);
	}
}

$( '#ageGateway' ).submit(function( e ) {
	e.preventDefault();
		$provSelect = $('#province').val();
		$monthSelect = $('#month').val();
		$daySelect = $('#day').val();
		$yearSelect = $('#year').val();
	    if ($provSelect == 'default' || $monthSelect == 'default' || $daySelect == 'default' || $yearSelect == 'default') {
	        alert('all fields required');
	        return false;
	    } else {
	    	getAge();
	    }
});

var thirtyOneDays = '<option selected="selected">Day</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option>'; 
var thirtyDays = '<option selected="selected">Day</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option>'; 
var twentyEightDays = '<option selected="selected">Day</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option>'; 


$(function() {
	// app.getAge();
});