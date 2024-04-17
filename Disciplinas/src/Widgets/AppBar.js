

// import CLB from "../lib/clb";
// const CLB = require( "../lib/clb" );
const CLB = [
   _ = ( ...v ) => console.log( ...v )
   ,
   $ = v => document.querySelector( v )
   ,
   $$ = v => document.querySelectorAll( v )
   ,
   $a = ( e, a ) => e.getAttribute( a )
];


// export default function AppBar( props ) {
function AppBar( props ) {
   $$( "appbar" ).forEach( a => {
      return( a.innerHTML = `
         <style>
            appbar {
               display: flex;
               flex-direction: column;
               width: 100%;
               height: 72px;
               box-shadow: #0005 0 0 10px;
               position: sticky;
               top: 0;
               left: 0;
               z-index: 9;
            }

            appbar > home {
               display: flex;
               flex: 1;
            }
            
            appbar-options {
               display: flex;
               flex: .15;
               align-items: center;
               justify-content: center;
               font-size: 1.7rem;
               color: #999;
            } 
            appbar-options[right] {

            }
            
            drawer-btn {
               cursor: pointer;
            }

            appbar-logo {
               display: flex;
               flex: .7;
               align-items: center;
               justify-content: center;
            } 
            
            #estacio_logo {
               height: 95%;
            }

            #estacio-logo-name-color {
               fill: #fff;
            }
         </style>
         <home>
            <appbar-options left>
               <drawer-btn>
                  &#9776;
               </drawer-btn>
            </appbar-options>
            <appbar-logo>
               <svg id="estacio_logo" xmlns="http://www.w3.org/2000/svg"
                  width="100%" height="75" 
                  viewBox="0 0 100% 100%" 
                  viewBox="0 0 232 75" 
                  fill="none" 
               >
                  <path fill-rule="evenodd" fill="white" clip-rule="evenodd" d="M31.9672 35.1686L50.2251 16.9797C51.5148 15.6734 53.6308 15.6734 54.9204 16.9797L73.158 35.1686C74.4478 36.4549 74.4478 38.5451 73.158 39.8314L54.9204 58.0203C53.6308 59.3266 51.5148 59.3266 50.2251 58.0203L31.9672 39.8314C30.6776 38.5451 30.6776 36.4549 31.9672 35.1686Z" />
                  <path fill-rule="evenodd" fill="#00C0F3" clip-rule="evenodd" d="M52.5626 58.2414C51.9179 58.2414 51.2528 57.9802 50.7491 57.4978L32.5112 39.2888C32.0277 38.8065 31.7657 38.1432 31.7657 37.5001L39.625 37.9422L40.1288 46.4839L40.6124 38.0025L51.4139 38.6456L52.0185 48.7952L44.1995 49.2574L52.0588 49.7197L52.5626 58.2414Z" />
                  <path fill-rule="evenodd" fill="#16AEBD" clip-rule="evenodd" d="M63.8681 48.0315L63.7874 48.1119L53.1269 48.7349L53.7314 38.6456L64.4525 38.0226L63.8681 48.0315ZM73.3596 37.5001C73.3596 38.1432 73.1179 38.8065 72.6139 39.2888L66.0444 45.8609L65.581 37.9422L73.3596 37.5001ZM61.611 50.2623L54.3763 57.4978C53.8725 57.9802 53.2276 58.2414 52.5626 58.2414L53.0666 49.78L61.611 50.2623Z" />
                  <path fill-rule="evenodd" fill="#6DC8BF" clip-rule="evenodd" d="M52.5626 16.7586C53.2276 16.7586 53.8725 17.0199 54.3763 17.5025L72.6139 35.7113C73.1179 36.1936 73.3596 36.8569 73.3596 37.5001L65.5205 37.058L65.0167 28.5162L64.513 36.9976L53.7314 36.3545L53.1269 26.2049L60.9459 25.7427L53.0666 25.2804L52.5626 16.7586Z" />
                  <path fill-rule="evenodd" fill="#B1DED3" clip-rule="evenodd" d="M43.5143 24.7376L50.7491 17.5025C51.2528 17.0199 51.9179 16.7586 52.5626 16.7586L52.079 25.2201L43.5143 24.7376ZM41.2775 26.9687L41.338 26.8883L51.9983 26.2652L51.4139 36.3545L40.6729 36.9775L41.2775 26.9687ZM32.5112 35.7113L39.1011 29.1392L39.5645 37.058L31.7657 37.5001C31.7657 36.8569 32.0277 36.1936 32.5112 35.7113Z" />
                  <path id="estacio-logo-name-color" fill="white" d="M100.13 49.9046H93.6805C91.189 49.9046 89.2565 49.7187 87.9058 49.3241C86.5787 48.9526 85.4377 48.279 84.5064 47.3037C82.4572 45.1673 81.4326 42.1715 81.4326 38.3165C81.4326 34.0669 82.7366 30.8157 85.3679 28.6096C86.206 27.9128 87.091 27.4253 88.0222 27.1465C88.9537 26.868 90.1878 26.7287 91.7478 26.7287H100.13V30.8622H93.6805C92.004 30.8622 90.7698 30.9783 90.0014 31.2105C89.2098 31.4427 88.5579 31.8839 88.0455 32.5574C87.6963 33.0218 87.4635 33.4863 87.347 33.9276C87.2306 34.3688 87.1375 35.1583 87.0443 36.3195H100.13V40.4299H87.0443C87.2074 42.4037 87.7894 43.797 88.8139 44.5867C89.8153 45.3762 91.5149 45.771 93.89 45.771H100.13V49.9046ZM119.457 44.5867C119.457 45.6316 119.201 46.6071 118.665 47.5359C118.153 48.4648 117.501 49.1151 116.709 49.4634C116.034 49.7653 114.753 49.9046 112.89 49.9046H103.25V46.282H111.563C112.634 46.282 113.356 46.2588 113.729 46.2122C114.497 46.1193 114.893 45.6549 114.893 44.8189C114.893 44.0759 114.59 43.5881 113.985 43.3559C113.659 43.2398 113.007 43.1933 112.052 43.1933H109.235C107.279 43.1933 105.835 42.845 104.927 42.1484C103.646 41.1496 103.018 39.7331 103.018 37.8985C103.018 36.1337 103.67 34.7635 104.974 33.7881C105.672 33.2541 106.929 32.9754 108.746 32.9754H118.688V36.5981H110.422C109.514 36.5981 108.909 36.6446 108.629 36.7375C108.094 36.9465 107.838 37.4109 107.838 38.0843C107.838 38.8738 108.164 39.3616 108.816 39.5706C109.165 39.6865 109.84 39.7564 110.865 39.7564H113.589C115.452 39.7564 116.895 40.1511 117.92 40.9872C118.944 41.8232 119.457 43.0308 119.457 44.5867ZM133.148 49.9046H129.748C127.699 49.9046 126.256 49.4402 125.418 48.488C124.556 47.5359 124.137 45.8871 124.137 43.5416V36.5981H121.18V32.9754H124.137V26.7287H128.817V32.9754H133.148V36.5981H128.817V42.7289C128.817 44.192 128.98 45.144 129.283 45.6084C129.609 46.0498 130.261 46.282 131.285 46.282H133.148V49.9046ZM144.115 39.617V43.2166H141.903C140.739 43.2166 140.157 43.7508 140.157 44.7957C140.157 45.7942 140.995 46.282 142.672 46.282H144.115V49.9046H142.904C141.344 49.9046 140.39 49.9046 140.017 49.8814C138.876 49.7653 137.991 49.4634 137.363 48.9988C136.059 48.0468 135.407 46.6767 135.407 44.8652C135.407 43.7042 135.686 42.6823 136.268 41.7767C136.827 40.8942 137.572 40.2904 138.504 39.9886C139.295 39.7331 140.576 39.617 142.346 39.617H144.115ZM144.115 32.9754V36.5981H136.641V32.9754H144.115ZM144.115 27.704V31.0944H141.787L144.115 27.704ZM171.265 49.9046H164.885C163.185 49.9046 161.835 49.7419 160.834 49.3936C159.809 49.0453 158.924 48.4417 158.156 47.5824C156.689 45.9567 155.967 43.8435 155.967 41.2659C155.967 38.3397 156.829 36.1337 158.575 34.6474C159.879 33.5327 161.975 32.9754 164.885 32.9754H171.265V36.5981H165.7C163.954 36.5981 162.673 36.9697 161.905 37.7129C161.136 38.4558 160.741 39.6865 160.741 41.3818C160.741 43.1005 161.16 44.3545 162.021 45.1208C162.883 45.8871 164.28 46.282 166.212 46.282H171.265V49.9046ZM179.578 31.2337H174.898V26.7287H179.578V31.2337ZM179.578 49.9046H174.898V32.9754H179.578V49.9046ZM144.115 31.0944V27.704L144.791 26.7287H149.075L144.511 31.0944H144.115ZM144.115 49.9046V46.282H148.074V43.2166H144.115V39.617H148.074V39.3384C148.074 38.2934 147.818 37.5968 147.305 37.2019C146.793 36.8071 145.862 36.5981 144.511 36.5981H144.115V32.9754H144.511C146.327 32.9754 147.538 33.0451 148.144 33.1612C149.401 33.3934 150.425 33.9508 151.217 34.8564C152.242 36.0407 152.754 37.8753 152.754 40.3601V49.9046H144.115ZM192.012 36.3195C191.989 36.3195 191.965 36.3195 191.919 36.3195C189.171 36.3195 187.797 38.0148 187.797 41.4516C187.797 44.8422 189.218 46.5374 192.012 46.5605V50.1368C191.965 50.1368 191.919 50.1368 191.849 50.1368C189.101 50.1368 186.959 49.3705 185.376 47.8146C183.816 46.2588 183.024 44.1223 183.024 41.4052C183.024 38.7577 183.839 36.6446 185.446 35.0886C187.076 33.5327 189.241 32.7432 191.989 32.7432H192.012V36.3195ZM196.227 41.4516C196.227 38.0612 194.806 36.3659 192.012 36.3195V32.7432C194.83 32.7432 197.042 33.5327 198.625 35.0886C200.208 36.6446 201 38.8275 201 41.614C201 44.2615 200.185 46.3515 198.555 47.861C196.948 49.3704 194.783 50.1136 192.012 50.1368V46.5605C192.035 46.5605 192.035 46.5605 192.059 46.5605C194.83 46.5605 196.227 44.8652 196.227 41.4516Z" />
               </svg>
            </appbar-logo>
            <appbar-options right>
               <drawer-btn style="color: transparent;">
                  &#9776;
               </drawer-btn>
            </appbar-options>
         </home>         
      `);
   } );
}