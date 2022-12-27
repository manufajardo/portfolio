import { ReactElement, useEffect } from "react";
import { ContactPage, ContactPhone, Home, MenuBook, Navbar, Person } from "./sections";

export const App = (): ReactElement => {
    useEffect(()=>{
        const navbar = document.getElementById('navbar')
        const toggleMenu = () => {
            if(navbar?.classList){
                // Toggle da navbar
                navbar.classList.contains('hide') 
                    ? navbar.classList.replace('hide', 'show') 
                    : navbar.classList.replace('show', 'hide')
                
                // Adiciona a demora na transição de opacidade
                if(!navbar.classList.contains('navbar-transition')) {
                    navbar.classList.add('navbar-transition')
                }
            }

            if(closeNavButton?.style){
                // Esconde o botão de fechar a navbar
                navbar?.classList.contains('hide') 
                    ? closeNavButton.classList.replace('hide', 'show') 
                    : closeNavButton.classList.replace('show', 'hide')
            }
        }

        const toggleNavButton = document.querySelector('.menu-button')
        const closeNavButton = (document.querySelector('.close-menu-button') as HTMLButtonElement)
        const buttonContainer = document.querySelectorAll('.button-container')

        toggleNavButton?.addEventListener('click', toggleMenu)
        closeNavButton?.addEventListener('click', toggleMenu)
        buttonContainer?.forEach(button => {
            button.addEventListener('click', toggleMenu)
        })
    }, [])

    return (
        <>
            <Navbar/>
            <Home />
            <Person />
            <MenuBook />
            <ContactPage />
            <ContactPhone />
        </>
    )
}
