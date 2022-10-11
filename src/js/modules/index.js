

const nav = document.querySelector('#nav');
/*各セクションのid名を記載*/
const appNames = ['todo', 'typing', 'slide-puzzle', 'memory-card', 'life'];

appNames.forEach(appName => {
    const menu = document.createElement('a');
    //console.log(menu); を出力してmenuの中身を調べることができる
    menu.classList.add('nav-menu');
    menu.textContent = appName.toUpperCase();
    /*クリックしたセクションがアクティブになって表示され、それ以外のセクションは非表示になる */
    menu.addEventListener('click', () => {
        cover.classList.remove('active');
        const appEls = document.querySelectorAll('.app');

        appEls.forEach(appEl => {
            appEl.classList.remove('active');
        });

        const appEl =document.getElementById(appName);
        appEl.classList.add('active');
        const navMenus = document.querySelectorAll('.nav-menu');
         /*今あるアクティブクラスを削除してから、対象のセクションだけアクティブ化する*/
        navMenus.forEach(navMenu => {
            navMenu.classList.remove('active');
        });
        menu.classList.add('active');
    });
    nav.appendChild(menu);
});


