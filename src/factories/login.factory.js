import ApiService from '../services/api'

const LoginFactory = {
    login() {
        var teste = ApiService.getUsuario().then((data)=> {
            // eslint-disable-next-line no-debugger
            debugger;
            console.log(data);
            return 'Max';
        });
        
        console.log(teste);

        return teste;
    }
}

export default LoginFactory;