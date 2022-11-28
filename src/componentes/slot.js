
 



 function background(){
    
    var inpt = document.querySelector('#inpt');

    let url = inpt.value;
    console.log(url)
    var backg = String(url);
    console.log(backg)
    
    class sloty extends HTMLElement{


    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});

        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){

        const slot = document.createElement('div');
        slot.setAttribute('class','slot');
        slot.setAttribute('id','slot');


        const nameCurso = document.createElement('h3');

        nameCurso.setAttribute('class','name-curso');
        nameCurso.textContent = (this.getAttribute('Nome--Curso') || 'Insira um Nome.');

        slot.appendChild(nameCurso);


        const moreinfo = document.createElement('div');
        moreinfo.setAttribute('class','moreinfo')

        slot.appendChild(moreinfo);

        const miniconthover = document.createElement('div');
        miniconthover.setAttribute('class','miniconthover');

       moreinfo.appendChild(miniconthover);


        const NameCurso = document.createElement('h2');
        NameCurso.setAttribute('class','NameCurso');
        NameCurso.textContent = (this.getAttribute('Nome--Curso') || 'Insira um Nome.');

        miniconthover.appendChild(NameCurso);

        const cargah = document.createElement('div');
        cargah.setAttribute('class','cargah');
        miniconthover.appendChild(cargah)

        const iconTime = document.createElement('img')
        iconTime.setAttribute('class','iconTime');
        iconTime.src = this.getAttribute('link-Atribute');
        cargah.appendChild(iconTime);


        const time = document.createElement('span');
        time.setAttribute('class','time');
        time.textContent = this.getAttribute('cargaHoraria') + ' Horas.';
        cargah.appendChild(time);

        const precos = document.createElement('div');
        precos.setAttribute('class','precos');
        miniconthover.appendChild(precos);


        const quanParcela = document.createElement('span');
        quanParcela.setAttribute('class','quanParcela');
        quanParcela.textContent = this.getAttribute('QuantidadeParcela') +'x'
        precos.appendChild(quanParcela);

        const valorP = document.createElement('h3');
        valorP.setAttribute('class','valorP');
        valorP.textContent = 'R$ ' + this.getAttribute('valorParcela');
        precos.appendChild(valorP);


        const outroValor = document.createElement('p');
        outroValor.setAttribute('class','outroValor');
        outroValor.textContent = 'ou R$ ' + this.getAttribute('valorTotal') + ' à vista.';
        miniconthover.appendChild(outroValor);


        return slot;

    }



    styles(){

        const style = document.createElement('style');

        style.textContent = `

        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body{
            display: flex;
            justify-content: center;
            height: 100vh;
            width: 100vw;
            background: rgb(37, 37, 37);
            overflow-x: hidden;
         
         
        }
        
        .slot{
            margin-top: 25px ;
            width: 300px;
            height: 493.04px;
           border-radius: 10px;
            transition: .5s;
            background-size: auto;
            display: flex;
            justify-content: center;
            margin-right: 40px;
         
            box-shadow: 0px 0px 15px 4px black,inset 0px -55px 5px 0px rgba(53,59,87,1), inset 0px -148px 102px -31px rgba(53,59,87,1);
         
            
        
        }
        .name-curso{
            color: white;
            font-size: 20px;
            margin-top: 450px;
        }
        
        
        .slot:hover .moreinfo{
            display: block;
        }
        
        .moreinfo{
            display: none;
            position: absolute;
            height: 50%;
            width: 100%;
            background-color: white;
            display: none;
            transition: 1s;
            top: 50%;
        }
        
        .miniconthover{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: 1s;
        }
        
        
        .NameCurso{
            margin-top: 5px;
            width: 276.78px;
        height: 78.22px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500px;
        font-size: 32px;
        line-height: 39px;
        text-align: center;
        
        /* Azul escuro */
        
        color: #353B57;
        
        
        }
        .cargah{
            margin-top: 10px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 70%;
           
        
        
        }
        
        .iconTime{
        position: relative;
        width: 29.08px;
        height: 29.08px;
         
        }
        
        
        .time{
            font-family: 'Inter';
        font-style: normal;
        font-weight: 500px;
        font-size: 20px;
        line-height: 29px;
        text-align: center;
        width: 97.28px;
        height: 29.08px;
        
        /* azul acizentado */
        
        color: #4C5270;
        }
        
        
        .precos{
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-top: 5px;
             
        }
        
        
        .valorP{
            font-family: 'Inter';
        font-style: normal;
        font-weight: 500px;
        font-size: 48px;
        line-height: 58px;
        text-align: center;
        
        /* rosa */
        
        color: #D73186;
        }
        
        .quanParcela{
            font-family: 'Inter';
        font-style: normal;
        font-weight: 500px;
        font-size: 24px;
        line-height: 29px;
        text-align: center;
        margin-top: 15px;
        margin-right: 5px;
        
        /* azul acizentado */
        
        color: #4C5270;
        }
        
        .outroValor{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500px;
            font-size: 18px;
            line-height: 25px;
        text-align: center;
        
        /* azul acizentado */
        
        color: #4C5270;
            text-align: center;
        }
        
        .slot:hover .name-curso{
            display: none;
        }
        
         
        
        .slot:hover {
            /* width: 1290px;
            height: 545px; */
             
           background-size: cover;
           
           animation: shadowColor 3s infinite ;
           
            cursor: pointer;
            transform: scale(1.03);
            transition: 1s;
        }
        
        
        
        
        @keyframes shadowColor {
            
            0%{	box-shadow: 
                0px -3px 15px 4px #353B57;
                }
        
            25%{	box-shadow: 0px 3px 15px 4px #36EEE0;
                }
        
            50%{	box-shadow: 
                    0px -3px 15px 4px #353B57;
                    }
        
        
             75%{	box-shadow: 
                        -3px 0px 15px 4px #D73186; 
                     
                        }
        
        
        
            100%{	box-shadow:
                            3px 0px 15px 4px #353B57;
                }
        
                }
        
        
        
            .slot{
                background: url(${backg}) no-repeat;
                background-size:cover;
            }`

        return style;
    }







}

customElements.define('slot-custom',sloty);}
