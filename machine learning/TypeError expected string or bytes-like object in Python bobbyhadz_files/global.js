"use strict";const menuButton=document.getElementById("menu-button"),mobileMenu=document.getElementById("mobile-menu");function openMenu(){menuButton.style.fontWeight=null,menuButton.style.fontSize="16px",mobileMenu.classList.remove("hidden"),mobileMenu.classList.add("block"),menuButton.innerHTML="✖"}function closeMenu(){mobileMenu.classList.remove("block"),mobileMenu.classList.add("hidden"),menuButton.style.fontWeight="bold",menuButton.style.fontSize="20px",menuButton.innerHTML="☰"}function handleClickOutsideMenu(e){document.getElementById("navbar").contains(e.target)||closeMenu()}function initMobileNavbar(){document.addEventListener("click",handleClickOutsideMenu,!0);const e=document.querySelectorAll('[data-id="check-link-active"]');if(window&&window.location&&window.location.pathname)for(const t of e){t.href.slice(t.href.lastIndexOf("/"))===window.location.pathname&&t.classList.add("bg-gray-100")}}menuButton.addEventListener("click",function(){mobileMenu.classList.contains("hidden")?openMenu():closeMenu()}),initMobileNavbar();const newsletterInput=document.getElementById("newsletter-email");function handleNewsletterEmailChange(e){newsletterInput.value=e.target.value}newsletterInput&&newsletterInput.addEventListener("change",handleNewsletterEmailChange);const newsletterSubmitBtn=document.getElementById("newsletter-submit-btn");async function handleNewsletterSubmit(e){e.preventDefault();const t=newsletterInput.value;if("string"==typeof t&&""!==t.trim()&&function(e){if(!e)return!1;return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}(t)){newsletterSubmitBtn.textContent="SUBSCRIBE...",newsletterSubmitBtn.disabled=!0;try{await async function({email:e}){const t=await fetch("https://scvl0h25ak.execute-api.eu-central-1.amazonaws.com/newsletter",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})});if(!t.ok){const e=await t.json();throw new Error(e.errors[0].message)}}({email:t}),newsletterSubmitBtn.textContent="SUCCESS!",newsletterInput.value=""}catch(e){newsletterSubmitBtn.textContent="ERROR"}finally{newsletterSubmitBtn.disabled=!1}}}newsletterSubmitBtn&&newsletterSubmitBtn.addEventListener("click",handleNewsletterSubmit);