export class RenderPage {
    renderBaseBlock() {
        document.body.innerHTML = `
      <div class="wrapper">
      <header class="header">
         <div class="header__container">

         </div>
      </header>
      <main class="main">
         <div class="main__container">
         </div>
      </main>
      <footer class="footer">
         <div class="footer__container">
            <ul class="footer__list">
               <li class="footer__item">
                  <p>
                     <a class="footer__link" href="https://github.com/OstapchelaEst" target="_blank">My Git</a>
                     <span>2022</span>
                  </p>
               </li>
               <li class="footer__item">
                  <p>
                     <a href="https://rs.school/js/" target="_blank">
                        <img class="footer__logo" src="https://rs.school/images/rs_school_js.svg" alt="Logo RS school">
                     </a>
                  </p>
               </li>
            </ul>
         </div>
      </footer>

   </div>
      `;
    }
    renderInterface() {
        (<HTMLElement>document.querySelector('.main__container')).innerHTML = `
      <div class="race-interface">
               <div class="race-interface__inputs">
                  <div class="race-interface__body car-create">
                     <input type="text" placeholder="Name" class="car-create__name">
                     <input type="color" placeholder="Color" class="car-create__color">
                     <button class="car-create__button">create</button>
                  </div>

                  <div class="race-interface__body car-update">
                     <input type="text" placeholder="Name"  class="car-update__name">
                     <input type="color" placeholder="Color" class="car-update__color">
                     <button class="car-update__button">update</button>
                  </div>
               </div>
               <div class="race-interface__buttons buttons-interface">
                  <button class="buttons-interface__race">race</button>
                  <button class="buttons-interface__reset">reset</button>
                  <button class="buttons-interface__generate-cards">generate cards</button>
               </div>
               <button class="show-all">SHOW ALL CARS</button>
            </div>
      `;
    }
}

export const RENDER_PAGE = new RenderPage();
