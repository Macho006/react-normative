
import React, { useActionState } from "react";

async function login(_, formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    await new Promise((i) => setTimeout(i, 2000));

    if (email === "test@example.com" && password === "1234") {
        return "Kirish muvaffaqiyatli!";
    } else {
        return "Xato";
    }
}

export default function UseActionState() {
    const [message, formAction, pending] = useActionState(login, "");

    return (
        <>
            <p className="text-center text-4xl ">UseActionState</p>
            <form action={formAction} className="w-[300px] mx-auto mt-16 flex flex-col gap-2 rounded-2xl p-6 shadow-[0_2px_6px_rgba(0,0,0,0.1)] ">
                <h2 className="text-center text-xl font-semibold">Login</h2>
                <input type="email" name="email" placeholder="Email" required className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />

                <input type="password" name="password" placeholder="Parol" required className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>

                <button type="submit" disabled={pending}
                    className={`p-2 rounded text-white ${pending
                            ? "bg-blue-400 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
                        }`}
                >
                    {pending ? "Yuklanmoqda..." : "Login"}
                </button>

                {message && (
                    <p
                        className={`text-center ${message.includes("muvaffaqiyatli") ? "text-green-600" : "text-red-600"
                            }`}
                    >
                        {message}
                    </p>
                )}
            </form>
        </>
    );

}

