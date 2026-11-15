
import { supabase } from "./supabase.js";

const authForm = document.getElementById("authForm");
const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const submitBtn = document.getElementById("submitBtn");
const authMessage = document.getElementById("authMessage");

let isRegistering = false;

// Switch to SIGN IN
loginTab.addEventListener("click", () => {
    isRegistering = false;

    loginTab.classList.add("active");
    registerTab.classList.remove("active");

    submitBtn.textContent = "SIGN IN";
    authMessage.textContent = "";
});

// Switch to CREATE ACCOUNT
registerTab.addEventListener("click", () => {
    isRegistering = true;

    registerTab.classList.add("active");
    loginTab.classList.remove("active");

    submitBtn.textContent = "CREATE ACCOUNT";
    authMessage.textContent = "";
});

// Handle form submission
authForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    submitBtn.disabled = true;
    submitBtn.textContent = "PLEASE WAIT...";
    authMessage.textContent = "";

    try {
        if (isRegistering) {

            const { data, error } = await supabase.auth.signUp({
                email,
                password
            });

            if (error) throw error;

            authMessage.textContent = data.session
                ? "Account created! Welcome to APEX."
                : "Account created! Check your email to confirm your account.";

        } else {

            const { error } = await supabase.auth.signInWithPassword({
                email,
                password
            });

            if (error) throw error;

            authMessage.textContent = "Login successful! Welcome back.";

            setTimeout(() => {
                window.location.href = "../index.html";
            }, 1200);
        }

    } catch (error) {
        authMessage.textContent = error.message;

    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = isRegistering
            ? "CREATE ACCOUNT"
            : "SIGN IN";
    }
});

