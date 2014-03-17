
	// alarm-clock.js
	// @IdeasNeverCease
	// ========================================================
	// http://neswork.com/javascript/alarm-clock version 0.4
	// Gavriel Fleischer

	eval(function (p, a, c, k, e, d) {

		e = function (c) {
			return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
		};

		while (c--) {
			if (k[c]) {
				p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
			}
		}

		return p;

	}('2 1c(K){8 L;1D(a K){1C"15":L=\'"\'+K+\'"\';1B;1E:L=K}9 L}8 6=2(b){1.F="1F:1H:1A";1.H=0;1.G=0;1.D=[];1.u=[];1.I=c;1.n=c;1.s=c;1.m=c;3(\'e\'==a 6.19){6.19=0;6.1a=[]}3(0==1.H){1.H=++6.19;6.1a[1.H]=1}3(\'e\'!=a b){6.5.P.X(1,b)}};6.5.P=2(b){8 13=["12","f","z","m"];8 Y=1s;8 7={};S(8 i 1i 13){8 p=13[i];3(\'e\'!=a b[p]){7[p]=b[p];Y=1x}}3(Y){7.w=7.12;1y 7.12;1.1m(7)}1.1h(b.s);3(\'e\'!=a b.F){1.F=b.F}3(\'e\'!=a b.h){1.Q(b.h)}3(\'e\'!=a b.n){1.N(b.n)}k{1.N(1w)}};6.5.1g=2(){8 g="";S(8 p 1i 1){3(\'2\'!=a 1[p]){g+=(""!=g?", ":"")+p+":"+1c(1[p])}}9 g};6.5.1S=2(){9 1.H};6.5.10=2(){9"6"};6.5.1J=2(){9"[1j "+1.10()+"{"+1.1g()+"}]"};6.5.1n=2(){8 18=1.W();8 q=E J();8 i;S(i=0;i<1.u.V;i++){8 7=1.u[i];3(c!==7.f&&7.f<=q){3("2"==a 7.w){8 y=(\'e\'!=a 7.m?7.m:1.m);7.w(18,y)}k 3("15"==a 7.w){1e("("+7.w+")")}3(7.z){7.f.1V(7.f.1t()+7.z)}k{7.f=c}1.u[i]=7}}S(i=0;i<1.D.V;i++){8 h=1.D[i];3("2"==a h){h(18,1.m)}k 3("15"==a h){1e("("+h+")")}}};6.5.1Q=2(){9 1.s};6.5.1h=2(j){8 q=E J();3(c===j){8 o=q.1f();j=1L(O.1b(O.1d(o)/T)*U+O.1d(o)%T);1K(j.V<4){j="0"+j}1.s=(0<o?"-":"+")+j;1.G=0}k{1.s=j;1.G=1N*(O.1b(j/U)*T+j%U+q.1f())}9 1};6.5.A=2(f,v){8 g;3(\'2\'==a A){g=A(f,v)}k{g=f.1R()}9 g};6.5.W=2(v){8 g;8 q=E J();3(\'e\'==a v){v=1.F}3(1.G){g=1.A(E J(q.1t()+1.G),v.1v("o",1.s).1v("Z","\'1O\'"+1.s))}k{g=6.5.A(q,v)}9 g};6.5.1M=2(i){9 1.u[i]};6.5.1m=2(M,f,z,y){3(\'1j\'==a M){1.u.14(M)}k{8 7={};7.w=M;7.f=f;7.z=z;7.m=y;1.u.14(7)}9 1};6.5.N=2(C){1.17();1.n=C;3(c!==1.n){8 R=1;1.I=1q.1o(2(){R.1n()},1.n)}9 1};6.5.1o=2(h,C,y){1.m=y;1.Q(h);3(\'e\'!=a C){1.n=C;1.N(1.n)}9 1};6.5.17=2(){3(c!==1.I){1q.17(1.I);1.I=c}9 1};6.5.1P=2(i){9 1.D[i]};6.5.Q=2(h){1.D.14(h);9 1};8 d=2(b){1.r=c;1.l=c;6.X(1,b);3(\'e\'!=a b){d.5.P.X(1,b)}};d.5=E 6();d.5.1U=d;d.5.P=2(b){3(!11.1T&&!11.1k){9 1s}1.1u(b["r"]);1.1p(b["l"]);3(c!==1.l){8 R=1;1.1r();1.Q(2(t){R.16(t)})}};d.5.10=2(){9"d"};d.5.1G=2(){9 1.r};d.5.1u=2(B){3(\'e\'!==a B){1.r=B;3(c!==B){1.l=11.1k(B)}k{1.l=c}}};d.5.1z=2(){9 1.l};d.5.1p=2(x){3(\'e\'!==a x){1.l=x;3(c!==x&&\'e\'!=a x.r){1.r=x.r}k{1.r=c}}};d.5.16=2(1l){3(c!==1.l){1.l.1I=1l}9 1};d.5.1r=2(){9 1.16(1.W())};', 62, 120, '|this|function|if||prototype|Alarm|alarm|var|return|typeof|args|null|Clock|undefined|date|str|tickCallback||_tz|else|el|message|interval||key|now|id|tz||alarms|_format|callback|_el|msg|recurrent|dateFormat|_id|_interval|tickCallbacks|new|format|offset|objectId|interval_id|Date|val|out|alarmCallback_or_alarmObject|changeInterval|Math|init|addTickCallback|self|for|60|100|length|toTimeStr|call|alarmSet||className|document|alarmCallback|alarmKeys|push|string|show|clearInterval|time|counter|objects|floor|printVal|abs|eval|getTimezoneOffset|toStr|setTZ|in|object|getElementById|timeStr|addAlarm|tick|setInterval|setEl|window|showTime|false|getTime|setId|replace|1000|true|delete|getEl|ss|break|case|switch|default|HH|getId|MM|innerHTML|toString|while|String|getAlarm|60000|GMT|getTickCallback|getTZ|toTimeString|getObjectId|all|constructor|setTime'.split('|')));
