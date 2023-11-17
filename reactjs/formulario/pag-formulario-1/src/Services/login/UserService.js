import axios from 'axios';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
// import Login from '../Pages/Login';



export default class UserServices {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_API_LOGIN
    })
  }
  async login(dados) {


    const { data } = await this.axios.post('/auth', dados);
    if (data) {

      localStorage.setItem("token", data.token.token)

      return true
    }

    return
  }

  async cadastrar(dados) {
    return this.axios.post('/register', dados)
  }

  usuarioAutenticado() {
    return localStorage.getItem("token") !== undefined ? true : false
    // return typeof localStorage.getItem("token")
  }

  //Desafio ---> implemente um botão que chama essa função dentro da página Home
  async logout() {
    localStorage.removeItem("token")
   
  }

 handleLogout = async () => {
    await userService.logout();
    // window.location.href = '/';
    const userService = new UserServices();
  
 }











//   function checkToken(req, res, next) {
//     const authHeader = req.headers["authorization"];
//     const token = authHeader && authHeader.split(" ")[1];

//     if (!token) return res.status(401).json({ msg: "Acesso negado!" });

//     try {
//         const secret = process.env.SECRET;

//         jwt.verify(token, secret);

//         next();
//     } catch (err) {
//         res.status(400).json({ msg: "O Token é inválido!" });
//     }
// }
}