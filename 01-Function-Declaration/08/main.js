function login(username, password) {
    if (username === "admin" && password === "P@ssw0rd") {
        return "success";
    } else {
        return "fail";
    }
}

console.log(login("admin", "Pssw0rd"));