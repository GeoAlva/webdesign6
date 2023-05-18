import "./login.css"

export default function Login() {
    return (

        <div class="login">
            <div class="left-slogan">

                <h1 class="slogan">Ciao</h1>
                <br />
                <p class="text_fg">Inizia subito a costruire il tuo curriculum ideale e <br />
                    preparati a conseguire il lavoro che hai sempre <br /> sognato</p>


            </div>
            <div class="right-form">


                <form action="#" method="post" class="form">
                    <h2 class="benvenuto">Login</h2>


                    <div class="form-element">
                        <img src="images/Persona.png" alt="" class="icons" />
                        <input type="email" id="email" name="email" class="form-input" placeholder=" " required />
                        <label class="floating-label" for="email">Username / e-mail</label>
                    </div>

                    <div class="form-element">
                        <img src="images/Lucchetto.png" alt="" class="icons" />
                        <input type="password" id="pass" name="pass" class="form-input" placeholder=" " required />
                        <label class="floating-label" for="pass">Password</label>
                    </div>
                    <a href="#" class="forgot">Password dimenticata?</a>

                    <input type="submit" id="submit" name="submit" value="Accedi" class="btn" />
                    <p class="account"> Non hai un account?</p>
                    <a href="/signup">Registrati</a>
                    <br />
                </form>

                <div class="bg">
                </div>


            </div>
        </div >


    )
}