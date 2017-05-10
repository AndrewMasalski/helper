function g(id) {
	return document.getElementById(id);
}
function generateDecision() {
	let ans = [
		'Это сложный вопрос. Я хз..',
		'Трудно что-либо посоветовать.. Я вообще бесполезная хрень',
		'Мир как картофель..',
		'Да..',
		'Нет..',
		'Мы все умрем..',
		'Только не это..'
	];
	let question  = g('input').value;
	if (question) {
		let random = Math.random();
		if (0 < random <= 0.14) {
			g('out').innerHTML = ans[0];
			g('input').value = '';
		} else if (0.14 < random <= 0.3) {
			g('out').innerHTML = ans[1];
			g('input').value = '';
		}else if (0.3 < random <= 0.45){
			g('out').innerHTML = ans[2];
			g('input').value = '';
		}else if (0.45 < random <= 0.6){
			g('out').innerHTML = ans[3];
			g('input').value = '';
		}else if (0.6 < random <= 0.75){
			g('out').innerHTML = ans[4];
			g('input').value = '';
		}else if (0.75 < random <= 0.9){
			g('out').innerHTML = ans[5];
			g('input').value = '';
		}else {
			g('out').innerHTML = ans[6];
			g('input').value = '';
		}
	}else {
		g('out').innerHTML = 'Задай вопрос, чукча..'
	}


}