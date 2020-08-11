function jb_finished()
{
    if(main_ret == 179 || main_ret == 0){
		setCookie("JB","DONE",30);
		setTimeout(function(){document.getElementById("progress").innerHTML="Félicitation Jailbreak réussis!"; }, 500);
    } else{
        	setTimeout(function(){document.getElementById("progress").innerHTML="Echec du Jailbreak! Pas de Panic, redémarrer votre PS4 et réessayer!!"; }, 500);
    }
}

function payload_finished()
{
	setCookie("JB","DONE",30);
	setTimeout(function(){document.getElementById("progress").innerHTML="Chargement reussi!!"; }, 3000);
	setTimeout(function(){document.getElementById("progress").innerHTML="Tout est OK Misaotra anao Jailbreak-Mada"; }, 7000);
}

function SC(x)
{
    return '<script src="'+x+'.js"></scr'+'ipt>';
}

function JB(x)
{
    return SC('jb/'+x);
}

function PAYLOAD(x)
{
    return SC('payloads/'+x);
}

function load_JB()
{	var jbDone=getCookie("JB");
	if (jbDone == "" || jbDone == "START"){
		setCookie("JB","START",30);
		exploit();	
	}else{
		setTimeout(function(){document.getElementById("progress").innerHTML="Félicitation Jailbreak réussis!"; }, 500);
	}
}

function exploit(){
	if(document.getElementById('table') == null){
		document.write('<style>'+
						'.button {'+
						'  background-color: #6a0000;'+
						'  border-radius: 5px;'+
						'  color: white;'+
						'  padding: .5em;'+
						'  text-decoration: none;'+
						'  height:100%;'+
						'  display:inline-table;'+
						'}'+
						'.button:focus,'+
						'.button:hover {'+
						'  background-color: #007bff;'+
						'  color: White;'+
						'}'+
						'</style>');
		document.write('<body background="imagedefond.png">')
		document.write('<marquee style="font-size:20px;color:white;margin-top:40px;">Tongasoa, Bienvenue sur Jailbreak Madagascar, le jailbreak Stable du moment!! Stable à 95%, j essayerai de mettre à jour continuellement l exploit pour de meilleurs stabilités, Nouveauté : HEN 2.1.3</marquee>'+
						'<h1 id="progress" style="margin-top:30px;text-align:center;color:#5574a3;font-size:20px;font-family:cursive">Chargement du Jailbreak! Miandrasa kely azafady</h1>'+
						'<div id="progress"></div>'+
			       		'<div>'+
						'<div><table style="padding-left:30px;float: left;">'+
						'<tr>'+
						'<td colspan="2" align="center"><h1 style="color:#5574a3;">Concept by</h1></td>'+
						'</tr>'+
						'<tr style="font-size:20px;color: #FFF;"><td>Anif.H</td>'+
						'<td> </td></tr><tr style="font-size:20px;Color: #FFF;"><td>RFayyazHduty 450</td>'+
						'<td> </td></tr>'+
						'<tr>'+
						'<td style="color:#5574a3;letter-spacing: 0em;line-height: 2;font-size: 32px;">  </h1></td>'+
						'</tr>'+
						'<tr style="font-size:20px;color: #FF7F00;"><td> </td>'+
						'<td> </td></tr>'+
						'</table>'+
						'<table align="center" style="width:600px;margin-top:30px;padding-right:130px;">'+
						'<tr>'+
						'<td colspan="2" style="font-size: 13px;font-style: italic;color: #FFFF00;" align="center"><h1>PS4 Jailbreak 6.72 by Jailbreak MADA</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'hen\'); return false" style="width:43%">Nouveau HEN</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'mirahen\'); return false" style="width:43%">Ancien MIRA</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'miraunofficial\'); return false" style="width:43%">MIRA Non officiel</a></td>'+
						'</tr>'+
						'<tr><td><br/></td></tr>'+
						'<tr>'+
						'<td colspan="2" align="center"><h1 style="color: #b2cbb7;">Les Payloads Disponible</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'disableupdates\'); return false" style="width:43%">Désactiver MAJ</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'enableupdates\'); return false" style="width:43%">Activer MAJ</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'dumper\'); return false" style="width:43%">Dumpeur de jeux</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'ftp\'); return false" style="width:43%">FTP</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'</tr>'+
						'</table></div>');
	}else{
		document.write('<script>document.getElementById("progress").innerHTML="Running Jailbreak Exploit!!";</scr'+'ipt>');
	}
	setTimeout(function(){document.write(JB('jb'));}, 500);
}

function load_netcat()
{
	if(document.getElementById('table') == null){
		document.write('<style>'+
						'.button {'+
						'  background-color: #003263;'+
						'  border-radius: 5px;'+
						'  color: white;'+
						'  padding: .5em;'+
						'  text-decoration: none;'+
						'  height:100%;'+
						'  display:inline-table;'+
						'}'+
						'.button:focus,'+
						'.button:hover {'+
						'  background-color: #007bff;'+
						'  color: White;'+
						'}'+
						'</style>');
		document.write('<h1 id="progress" style="margin-top:30px;text-align:center;">Loading! Please Wait!!</h1><hr>'+
			       		'<div>'+
						'<table id="table" align="center" style="width:600px;margin-top:30px;">'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'hen\'); return false" style="width:43%">Nouveau HEN</a>'+
						'<a href="#" class="button" onclick="load_payload(\'mirahen\'); return false" style="width:43%">Ancien MIRA</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'miraunofficial\'); return false" style="width:43%">MIRA Non officiel</a></td>'+
						'</tr>'+
						'<tr><td><br/></td></tr>'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>Payloads</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'app2usb\'); return false" style="width:43%">App2USB</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_netcat(); return false" style="width:43%">Bin Loader</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'disableupdates\'); return false" style="width:43%">Disable Updates</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'enableupdates\'); return false" style="width:43%">Enable Updates</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'dumper\'); return false" style="width:43%">Dumper</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'kerneldumper\'); return false" style="width:43%">Kernel Dumper</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'restore\'); return false" style="width:43%">Restore</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'fanthreshold\'); return false" style="width:43%;border-radius: 5px 0px 0px 5px;">Set Fan Threshold</a>'+
						'<select id="temp" style="height:42px;border-radius: 0px 5px 5px 0px;position: absolute;" class="button">'+
						'<option value="40">40°C</option><option value="41">41°C</option><option value="42">42°C</option><option value="43">43°C</option><option value="44">44°C</option><option value="45">45°C</option><option value="46">46°C</option><option value="47">47°C</option><option value="48">48°C</option><option value="49">49°C</option><option value="50">50°C</option><option value="51">51°C</option><option value="52">52°C</option><option value="53">53°C</option><option value="54">54°C</option><option value="55">55°C</option><option value="56">56°C</option><option value="57">57°C</option><option value="58">58°C</option><option value="59">59°C</option><option value="60">60°C</option><option value="61">61°C</option><option value="62">62°C</option><option value="63">63°C</option><option value="64">64°C</option><option value="65">65°C</option><option value="66">66°C</option><option value="67">67°C</option><option value="68">68°C</option><option value="69">69°C</option><option value="70" selected>70°C</option><option value="71">71°C</option><option value="72">72°C</option><option value="73">73°C</option><option value="74">74°C</option><option value="75">75°C</option><option value="76">76°C</option><option value="77">77°C</option><option value="78">78°C</option><option value="79">79°C</option>'+
						'</select></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'ftp\'); return false" style="width:43%">FTP</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'backup\'); return false" style="width:43%">BackUp</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'todex\'); return false" style="width:43%">To-DEX</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'webrte\'); return false" style="width:43%">WebRTE</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'linuxloader\'); return false" style="width:90%">Linux Loader</a></td>'+
						'</tr>'+
						'</table></div>');
	}else{
		document.write('<script>document.getElementById("progress").innerHTML="Loading! Please Wait!!";</scr'+'ipt>');
	}
	setCookie("JB","START",30);
	setTimeout(function(){document.write(PAYLOAD('mira')+PAYLOAD('c-code')+'<script>setCookie("JB","DONE",30);document.getElementById("progress").innerHTML="Awaiting Payload!! Send Payload To Port 9021";</scr'+'ipt>');}, 500);
}

function load_payload(payload)
{	
	if(payload=="fanthreshold")
		var fanTemp=document.getElementById('temp').value;
	if(document.getElementById('table') == null){
		document.write('<style>'+
						'.button {'+
						'  background-color: #6a0000;'+
						'  border-radius: 5px;'+
						'  color: white;'+
						'  padding: .5em;'+
						'  text-decoration: none;'+
						'  height:100%;'+
						'  display:inline-table;'+
						'}'+
						'.button:focus,'+
						'.button:hover {'+
						'  background-color: #007bff;'+
						'  color: White;'+
						'}'+
						'</style>');
		document.write('<body background="imagedefond.png">')
		document.write('<marquee style="font-size:20px;color:white;margin-top:40px;">Tongasoa, Bienvenue sur Jailbreak Madagascar, le jailbreak Stable du moment!! Stable à 95%, j essayerai de mettre à jour continuellement l exploit pour de meilleurs stabilités, Nouveauté : HEN 2.1.3</marquee>'+
						'<h1 id="progress" style="margin-top:30px;text-align:center;color:#5574a3;font-size:20px;font-family:cursive">Chargement! Miandrasa kely azafady :bowtie: 😅🤞</h1>'+
						'<div id="progress"></div>'+
			       		'<div>'+
						'<div><table style="padding-left:30px;float: left;">'+
						'<tr>'+
						'<td colspan="2" align="center"><h1 style="color:#5574a3;">Concept by</h1></td>'+
						'</tr>'+
						'<tr style="font-size:20px;color: #FFF;"><td>Anif.H</td>'+
						'<td> </td></tr><tr style="font-size:20px;Color: #FFF;"><td>RFayyazHduty 450</td>'+
						'<td> </td></tr>'+
						'<tr>'+
						'<td style="color:#5574a3;letter-spacing: 0em;line-height: 2;font-size: 32px;">  </h1></td>'+
						'</tr>'+
						'<tr style="font-size:20px;color: #FF7F00;"><td> </td>'+
						'<td> </td></tr>'+
						'</table>'+
						'<table align="center" style="width:600px;margin-top:30px;padding-right:130px;">'+
						'<tr>'+
						'<td colspan="2" style="font-size: 13px;font-style: italic;color: #FFFF00;" align="center"><h1>PS4 Jailbreak 6.72 by Jailbreak MADA</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'hen\'); return false" style="width:43%">Nouveau HEN</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'mirahen\'); return false" style="width:43%">Ancien MIRA</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'miraunofficial\'); return false" style="width:43%">MIRA Non officiel</a></td>'+
						'</tr>'+
						'<tr><td><br/></td></tr>'+
						'<tr>'+
						'<td colspan="2" align="center"><h1 style="color: #b2cbb7;">Les Payloads Disponible</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'disableupdates\'); return false" style="width:43%">Désactiver MAJ</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'enableupdates\'); return false" style="width:43%">Activer MAJ</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'dumper\'); return false" style="width:43%">Dumpeur de jeux</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'ftp\'); return false" style="width:43%">FTP</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'</tr>'+
						'</table></div>');
		if(payload=="fanthreshold")
			document.getElementById('temp').value=fanTemp;
	}else{
		document.write('<script>document.getElementById("progress").innerHTML="Loading! Please Wait!!";</scr'+'ipt>');
	}
	setCookie("JB","START",30);
	setTimeout(function(){document.write(PAYLOAD('mira')+PAYLOAD(payload)+PAYLOAD('c-code')+'<script>payload_finished();</scr'+'ipt>');}, 500);
}

function getCookie(name) {
  var name = name + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(name, value, mins) {
  var d = new Date();
  d.setTime(d.getTime() + (mins*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
